import { z } from 'zod';

// Define the schema for the templates object
const templatesSchema = z
  .object({
    'products-directory': z
      .string()
      .min(1, 'Product directory template path cannot be empty.'),
    'landing-page': z
      .string()
      .min(1, 'Landing page template path cannot be empty.'),
  })
  .strict('Templates object contains an unsupported key.');

// Define the base main configuration schema without transformation
const baseConfigSchema = z
  .object({
    docsRoot: z.string().min(1, '`docsRoot` is required and cannot be empty.'),
    productsFilePath: z
      .string()
      .min(1, '`productsFilePath` is required and cannot be empty.'),
    productsOutputPath: z
      .string()
      .min(1, '`productsOutputPath` is required and cannot be empty.'),
    landingPagePathPattern: z
      .string()
      .min(1, '`landingPagePathPattern` is required and cannot be empty.'),
    templates: templatesSchema,
    defaultNavbarLabel: z.string().optional(),
    defaultNavbarPosition: z.string().optional(),
    docusaurusConfigPath: z.string().optional(),
    sidebarsPath: z.string().optional(),
  })
  .strict('Configuration contains an unsupported key.');

// Export the full config schema with transformation
export const configSchema = baseConfigSchema.transform((config) => {
  // Apply default values if not provided
  return {
    defaultNavbarLabel: 'Products',
    defaultNavbarPosition: 'left',
    docusaurusConfigPath: 'website/docusaurus.config.js',
    sidebarsPath: 'website/sidebars.js',
    ...config,
  };
});

// For partial validation, e.g., when initializing a new config
export const partialConfigSchema = baseConfigSchema.partial();
