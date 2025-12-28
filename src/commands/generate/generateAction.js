import { promises as fs } from 'fs';
import path from 'path';
import Handlebars from 'handlebars';
import { addNavbarItem } from '../../utils/navbarManager.js';
import { loadModule } from '../../utils/moduleLoader.js'; // Import loadModule

const INDEX_FILE_NAME = 'index.md';

const TEMPLATES = {
  LANDING_PAGE: 'landing-page',
  PRODUCTS_DIRECTORY: 'products-directory',
};

const DEFAULTS = {
  DOC_ENTRY: 'overview',
};

// #region File System Abstraction for Testability

/**
 * @typedef {object} FileSystem
 * @property {(path: string, options?: { recursive: boolean }) => Promise<void>} mkdir
 * @property {(path: string, data: string, options?: string) => Promise<void>} writeFile
 * @property {(path: string, options?: string) => Promise<string>} readFile
 * @property {(path: string) => Promise<boolean>} exists
 */

/** @type {FileSystem} */
const defaultFileSystem = {
  mkdir: (dirPath, options) => fs.mkdir(dirPath, options),
  writeFile: (filePath, data, encoding) =>
    fs.writeFile(filePath, data, encoding),
  readFile: (filePath, encoding) => fs.readFile(filePath, encoding),
  exists: async (filePath) => {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  },
};

// #endregion

// #region Pure/Helper Functions

/**
 * Converts a string into a URL-friendly slug.
 * @param {string} text - The input string to slugify.
 * @returns {string} The slugified string.
 */
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+|-+$/g, ''); // Trim - from start and end
}

/**
 * Normalizes a product object with default values, applying docEntry from sidebar if specified.
 * @param {object} product - The raw product object.
 * @param {object} dependencies - Injected dependencies.
 * @param {object} dependencies.config - The configuration object.
 * @param {(modulePath: string) => Promise<any>} dependencies.loadModule - Function to load modules dynamically.
 * @returns {object} The normalized product object.
 */
export async function normalizeProduct(product, { config, loadModule }) {
  const normalizedProduct = {
    id: slugify(product.name),
    docEntry: DEFAULTS.DOC_ENTRY, // Will be set later if not explicitly provided
    ...product,
  };

  // if (normalizedProduct.sidebarName && !normalizedProduct.docEntry) {
  //   try {
  //     const sidebarsModule = await loadModule(config.sidebarsPath);
  //     const sidebars = sidebarsModule.default || sidebarsModule;

  //     const targetSidebar = sidebars[normalizedProduct.sidebarName];

  //     if (targetSidebar) {
  //       // Function to recursively find the first docId in a sidebar item
  //       const findFirstDocId = (items) => {
  //         for (const item of items) {
  //           if (typeof item === 'string') {
  //             return item;
  //           }
  //           if (item.type === 'category' && item.items) {
  //             const docId = findFirstDocId(item.items);
  //             if (docId) return docId;
  //           }
  //           // For 'link' type or other types, we might ignore them or handle differently
  //         }
  //         return null;
  //       };

  //       const firstDocId = findFirstDocId(targetSidebar);
  //       if (firstDocId) {
  //         normalizedProduct.docEntry = firstDocId;
  //       }
  //     }
  //   } catch (error) {
  //     // Log the error but continue with default docEntry
  //     console.error(
  //       `Error loading or parsing sidebars from ${config.sidebarsPath}:`,
  //       error.message,
  //     );
  //   }
  // }

  // If docEntry is still not set (either no sidebarName or sidebarName didn't yield a docEntry),
  // apply the default.
  // normalizedProduct.docEntry = normalizedProduct.docEntry || DEFAULTS.DOC_ENTRY;

  return normalizedProduct;
}

/**
 * Renders a Handlebars template.
 * @param {string} templateString - The Handlebars template as a string.
 * @param {object} data - The data object for the template.
 * @returns {string} The rendered content.
 */
export function renderTemplate(templateString, data) {
  const template = Handlebars.compile(templateString);
  return template(data);
}

/**
 * Retrieves the resolved path for a given template name from the configuration.
 * @param {string} templateName - The name of the template.
 * @param {object} config - The configuration object.
 * @returns {string} The resolved path to the template file.
 * @throws {Error} If the template is not found.
 */
function getTemplatePath(templateName, config) {
  const templateConfig = config.templates[templateName];
  if (!templateConfig) {
    throw new Error(`Template '${templateName}' not found in configuration.`);
  }
  return path.resolve(process.cwd(), templateConfig);
}

// #endregion

// #region Core Logic Functions (with Dependencies)

/**
 * Ensures that a directory exists, creating it if necessary.
 * @param {string} dirPath - The path to the directory.
 * @param {object} dependencies - Injected dependencies.
 * @param {FileSystem} dependencies.fs - File system methods.
 * @param {object} dependencies.logger - Logger instance.
 * @throws {Error} If directory creation fails.
 */
async function ensureDirectoryExists(dirPath, { fs, logger }) {
  try {
    await fs.access(dirPath); // Check if directory exists and is accessible
  } catch (error) {
    if (error.code === 'ENOENT') {
      // Directory does not exist, so create it
      try {
        await fs.mkdir(dirPath, { recursive: true });
      } catch (mkdirError) {
        logger.error(
          `Failed to create directory '${dirPath}':`,
          mkdirError.message,
        );
        throw new Error('Directory creation failed.');
      }
    } else {
      // Some other access error
      logger.error(`Failed to access directory '${dirPath}':`, error.message);
      throw new Error('Directory access failed.');
    }
  }
}

/**
 * A generic function to generate a page from a template.
 * @param {object} params - Parameters for page generation.
 * @param {(data: object) => string} params.compiledTemplate - The pre-compiled Handlebars template function.
 * @param {string} params.outputPath - The output path for the generated page.
 * @param {object} params.data - The data object for the template.
 * @param {object} dependencies - Injected dependencies.
 * @param {FileSystem} dependencies.fs - File system methods.
 * @param {object} dependencies.logger - Logger instance.
 */
async function generatePage(
  { compiledTemplate, outputPath, data },
  dependencies,
) {
  const { logger, fs } = dependencies;
  logger.debug(`Generating page for output: ${outputPath}`);

  await ensureDirectoryExists(path.dirname(outputPath), dependencies);

  const pageContent = compiledTemplate(data);

  await fs.writeFile(outputPath, pageContent, 'utf8');
  logger.info(
    `Successfully generated: ${path.relative(process.cwd(), outputPath)}`,
  );
}

// #endregion

// #region Main Action

/**
 * Main action handler for the 'generate' command.
 */
export async function generateAction(
  options,
  { logger, config, loadProducts, fs = defaultFileSystem, loadModule },
) {
  try {
    logger.debug('Command options received by generateAction:', options);
    logger.debug('Loaded config:', config);

    const rawProducts = await loadProducts(options.input);
    const products = await Promise.all(
      rawProducts.map((product) =>
        normalizeProduct(product, { config, loadModule }),
      ),
    );
    products.sort((a, b) => a.name.localeCompare(b.name));
    logger.debug('Normalized products:', products);

    // Pre-compile templates to avoid redundant I/O and compilation within loops
    const landingPageTemplatePath = getTemplatePath(
      TEMPLATES.LANDING_PAGE,
      config,
    );
    const landingPageTemplateContent = await fs.readFile(
      landingPageTemplatePath,
      'utf8',
    );
    const compiledLandingPageTemplate = Handlebars.compile(
      landingPageTemplateContent,
    );

    const productsDirectoryTemplatePath = getTemplatePath(
      TEMPLATES.PRODUCTS_DIRECTORY,
      config,
    );
    const productsDirectoryTemplateContent = await fs.readFile(
      productsDirectoryTemplatePath,
      'utf8',
    );
    const compiledProductsDirectoryTemplate = Handlebars.compile(
      productsDirectoryTemplateContent,
    );

    // Generate all individual product pages in parallel
    const landingPagePromises = products.map((product) =>
      generatePage(
        {
          compiledTemplate: compiledLandingPageTemplate,
          outputPath: path.resolve(
            config.productsOutputPath,
            product.id,
            INDEX_FILE_NAME,
          ),
          data: { product },
        },
        { logger, fs },
      ),
    );

    await Promise.all(landingPagePromises);
    logger.info(`Generated ${products.length} product landing pages.`);

    // Generate the main products directory page
    await generatePage(
      {
        compiledTemplate: compiledProductsDirectoryTemplate,
        outputPath: path.resolve(config.productsOutputPath, INDEX_FILE_NAME),
        data: { products },
      },
      { logger, fs },
    );

    // After generation, optionally update the navbar
    if (options.updateNavbar) {
      const relativePath = path.relative(
        path.resolve(process.cwd(), config.docsRoot),
        path.resolve(process.cwd(), config.productsOutputPath),
      );
      // Docusaurus docs often live under /docs/ route. This assumes the default.
      const docsRoutePrefix = '/docs/';
      const toPath = `${docsRoutePrefix}${relativePath.replace(/\\/g, '/')}`;

      const newItem = {
        to: toPath,
        label: options.navbarLabel,
        // The 'position' property will be added by the navbar manager
      };

      await addNavbarItem({
        fs,
        docusaurusConfigPath: config.docusaurusConfigPath,
        logger,
        newItem,
        positionSpecifier: options.navbarPosition,
      });
    }
  } catch (error) {
    logger.error(`Failed to generate documentation: ${error.message}`);
    if (!logger.isVerbose()) {
      logger.error(
        'Run with -v or --verbose for more detailed error information.',
      );
    }
    // In a real CLI, you might exit the process to signal failure
    // process.exit(1);
  }
}
// #endregion
