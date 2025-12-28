// import { z } from 'zod';
import fs from 'fs/promises'; // Import fs.promises
import { configSchema as prodcatConfigSchema } from '../prodcat.config.js';
import { configSchema as defaultConfigSchema } from '../config/default.config.js';

function generateSchemaDocumentation(schemaName, schema) {
  let doc = `## ${schemaName}\n\n`;
  doc += '| Property | Type | Description | Required | Default |\n';
  doc += '| :------- | :--- | :---------- | :------- | :------ |\n';

  function processZodObject(obj, prefix = '') {
    for (const key in obj.shape) {
      const field = obj.shape[key];
      const isOptional = field.isOptional();
      const hasDefault = field._def.defaultValue !== undefined; // Check if default value exists
      const description = field.description || 'N/A';

      let typeName = field._def.typeName;
      let displayType = typeName;
      let defaultValue = 'N/A';

      if (typeName === 'ZodString') displayType = 'string';
      if (typeName === 'ZodBoolean') displayType = 'boolean';
      if (typeName === 'ZodNumber') displayType = 'number';
      if (typeName === 'ZodArray') {
        const elementType = field._def.type._def.typeName;
        displayType = `array<${elementType.replace('Zod', '').toLowerCase()}>`;
      }
      if (typeName === 'ZodObject') {
        displayType = 'object';
      }

      if (hasDefault) {
        defaultValue = JSON.stringify(field._def.defaultValue);
      } else if (isOptional) {
        // If optional but no explicit default, it's still "N/A"
        defaultValue = 'N/A';
      }

      doc += `| flexible${prefix}${key}Flexible | flexible${displayType}Flexible | ${description} | ${isOptional ? 'No' : 'Yes'} | ${defaultValue} |\n`;

      if (typeName === 'ZodObject') {
        processZodObject(field, `${prefix}${key}.`);
      } else if (
        typeName === 'ZodArray' &&
        field._def.type._def.typeName === 'ZodObject'
      ) {
        processZodObject(field._def.type, `${prefix}${key}[].`);
      }
    }
  }

  processZodObject(schema);
  return doc;
}

async function main() {
  let documentation = '# Configuration Schemas\n\n';

  documentation += generateSchemaDocumentation(
    'Prodcat Configuration Schema',
    prodcatConfigSchema,
  );
  documentation += '\n';
  documentation += generateSchemaDocumentation(
    'Default Configuration Schema',
    defaultConfigSchema,
  );

  await fs.mkdir('docs', { recursive: true });
  await fs.writeFile('docs/schemas.md', documentation, 'utf8');

  console.log('Schema documentation generated successfully in docs/schemas.md');
}

main().catch(console.error);
