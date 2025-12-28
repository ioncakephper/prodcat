// src/utils/navbarManager.js
import recast from 'recast';
import * as babelParser from '@babel/parser'; // Import using ES Module syntax

// Custom error to stop recast traversal cleanly
class StopTraversal extends Error {
  constructor() {
    super();
    this.name = 'StopTraversal';
    // Ensure the stack trace is captured correctly
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, StopTraversal);
    }
  }
}

/**
 * Parses the position specifier to determine insertion strategy.
 * @param {string} specifier - The position specifier (e.g., 'left:start', 'before:Blog').
 * @returns {{targetSide: 'left'|'right'|null, strategy: 'start'|'end'|'before'|'after', relativeTo: string|null}}
 */
function parsePositionSpecifier(specifier) {
  if (specifier.startsWith('before:')) {
    return {
      targetSide: null,
      strategy: 'before',
      relativeTo: specifier.substring('before:'.length),
    };
  }
  if (specifier.startsWith('after:')) {
    return {
      targetSide: null,
      strategy: 'after',
      relativeTo: specifier.substring('after:'.length),
    };
  }
  if (specifier.includes(':')) {
    const [side, strategy] = specifier.split(':');
    return { targetSide: side, strategy, relativeTo: null };
  }
  return { targetSide: specifier, strategy: 'end', relativeTo: null };
}

/**
 * Finds a specific property within an AST object expression.
 * Handles both Identifier and StringLiteral keys.
 * @param {object} objectExpression - The AST node for the object.
 * @param {string} propertyName - The name of the property to find.
 * @returns {object|null} The property node or null if not found.
 */
const findObjectProperty = (objectExpression, propertyName) => {
  if (!objectExpression || objectExpression.type !== 'ObjectExpression') {
    return null;
  }
  return objectExpression.properties.find((p) => {
    // Check for Identifier (e.g., label:) or StringLiteral (e.g., "label":)
    const keyName =
      p.key.type === 'Identifier'
        ? p.key.name
        : p.key.type === 'StringLiteral'
          ? p.key.value
          : null;
    return keyName === propertyName;
  });
};

/**
 * Modifies the AST to add a new navbar item.
 * @param {object} ast - The Abstract Syntax Tree of the config file.
 * @param {object} newItem - The navbar item object to add.
 * @param {string} positionSpecifier - The positioning instruction.
 * @param {object} logger - The logger instance.
 * @returns {boolean} True if the item was added, false otherwise.
 */
function injectNavbarItem(ast, newItem, positionSpecifier, logger) {
  let { targetSide, strategy, relativeTo } =
    parsePositionSpecifier(positionSpecifier);
  let itemAdded = false;

  try {
    recast.visit(ast, {
      visitVariableDeclarator(path) {
        if (
          path.node.id.name === 'config' &&
          path.node.init.type === 'ObjectExpression'
        ) {
          const mainConfigObject = path.node.init;

          const themeConfigProperty = findObjectProperty(
            mainConfigObject,
            'themeConfig',
          );

          if (themeConfigProperty) {
            // Handle JSDoc type assertion wrapper (TypeCastExpression)
            const themeConfigAstValue =
              themeConfigProperty.value.type === 'TypeCastExpression'
                ? themeConfigProperty.value.expression
                : themeConfigProperty.value;

            const navbarProperty = findObjectProperty(
              themeConfigAstValue,
              'navbar',
            );

            if (
              navbarProperty &&
              navbarProperty.value.type === 'ObjectExpression'
            ) {
              const navbarObject = navbarProperty.value;
              const itemsProperty = findObjectProperty(navbarObject, 'items');

              if (
                itemsProperty &&
                itemsProperty.value.type === 'ArrayExpression'
              ) {
                let itemsArray = itemsProperty.value.elements;

                // Filter out any existing items that have the same label as the new item
                const filteredNodes = itemsArray.filter((node) => {
                  const labelProp = findObjectProperty(node, 'label');
                  const nodeLabel = labelProp
                    ? labelProp.value.value
                    : undefined;
                  const newItemLabel = newItem.label;

                  return !(
                    nodeLabel &&
                    newItemLabel &&
                    nodeLabel === newItemLabel
                  );
                });

                if (filteredNodes.length < itemsArray.length) {
                  logger.info(
                    `Removed ${itemsArray.length - filteredNodes.length} duplicate navbar item(s) with label "${newItem.label}".`,
                  );
                }

                itemsArray = filteredNodes; // Update itemsArray with filtered nodes

                let insertionIndex = -1;
                let finalPosition = targetSide || 'left';

                if (strategy === 'before' || strategy === 'after') {
                  const targetIndex = itemsArray.findIndex((el) => {
                    const labelProp = findObjectProperty(el, 'label');
                    return (
                      labelProp &&
                      labelProp.value.value.toLowerCase() ===
                        relativeTo.toLowerCase()
                    );
                  });

                  if (targetIndex === -1) {
                    logger.warn(
                      `Could not find navbar item with label "${relativeTo}". Defaulting to end of '${finalPosition}' section.`,
                    );
                    strategy = 'end'; // Fallback
                  } else {
                    const positionProp = findObjectProperty(
                      itemsArray[targetIndex],
                      'position',
                    );
                    if (positionProp) finalPosition = positionProp.value.value;
                    insertionIndex =
                      strategy === 'after' ? targetIndex + 1 : targetIndex;
                  }
                }

                if (strategy === 'start') {
                  const firstIndex = itemsArray.findIndex((el) => {
                    const posProp = findObjectProperty(el, 'position');
                    return posProp && posProp.value.value === finalPosition;
                  });
                  insertionIndex =
                    firstIndex === -1 ? itemsArray.length : firstIndex;
                } else if (strategy === 'end') {
                  const lastIndex = itemsArray
                    .map((el) => {
                      const posProp = findObjectProperty(el, 'position');
                      return posProp ? posProp.value.value : 'left'; // Default to left if no position
                    })
                    .lastIndexOf(finalPosition);
                  insertionIndex =
                    lastIndex === -1 ? itemsArray.length : lastIndex + 1;
                }

                newItem.position = finalPosition;
                const newItemNode = recast.parse(`(${JSON.stringify(newItem)})`)
                  .program.body[0].expression;

                // Insert the new item into the prepared list
                itemsArray.splice(insertionIndex, 0, newItemNode);

                // Assign the modified array of elements back to the AST node
                itemsProperty.value.elements = itemsArray;

                logger.info(
                  `Successfully added "${newItem.label}" to the navbar.`,
                );
                itemAdded = true;
                throw new StopTraversal(); // Exit after successful modification
              }
            }
          }
        }
        return this.traverse(path); // Continue traversing
      },
    });
  } catch (e) {
    if (e.name !== 'StopTraversal') {
      throw e; // Re-throw other errors
    }
  }
  return itemAdded;
}

/**
 * Safely adds a new item to the Docusaurus navbar configuration.
 */
export async function addNavbarItem({
  fs,
  docusaurusConfigPath,
  logger,
  newItem,
  positionSpecifier,
}) {
  logger.info(`Attempting to update navbar in: ${docusaurusConfigPath}`);
  try {
    const code = await fs.readFile(docusaurusConfigPath, 'utf8');
    const ast = recast.parse(code, { parser: babelParser }); // Use imported babelParser

    const success = injectNavbarItem(ast, newItem, positionSpecifier, logger);

    if (success) {
      const outputCode = recast.print(ast, {
        tabWidth: 2,
        quote: 'single',
      }).code;
      await fs.writeFile(docusaurusConfigPath, outputCode, 'utf8');
      logger.info('Successfully saved updated docusaurus.config.js');
    } else {
      logger.error(
        'Could not find `themeConfig.navbar.items` array in the docusaurus.config.js file. No update performed.' +
          ' Please ensure your Docusaurus configuration is correctly set up with a `navbar.items` array, or refer to the Docusaurus navbar documentation for guidance.',
      );
    }
  } catch (error) {
    logger.error('Failed to update docusaurus.config.js.');
    logger.error(`Details: ${error.message}`);
    // Do not re-throw the error to prevent the entire generate command from failing.
    // This is a non-critical part of the process.
  }
}
