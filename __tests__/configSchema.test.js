import { ZodError } from 'zod';
import {
  configSchema,
  partialConfigSchema,
} from '../src/utils/configSchema.js';

describe('configSchema', () => {
  describe('templatesSchema (internal to configSchema)', () => {
    // This is implicitly tested by configSchema, but we can craft a direct test if needed.
    // For now, testing configSchema's integration with templatesSchema is sufficient.
  });

  describe('configSchema (full validation with defaults)', () => {
    // Happy Path Tests
    it('should validate a minimal valid configuration and apply defaults', () => {
      const minimalValidConfig = {
        docsRoot: 'docs',
        productsFilePath: 'products.js',
        productsOutputPath: 'docs/products',
        landingPagePathPattern: '{{{ directoryPath }}}/{{{ product.id }}}',
        templates: {
          'products-directory': 'templates/products-directory.md.hbs',
          'landing-page': 'templates/landing-page.md.hbs',
        },
      };

      const result = configSchema.parse(minimalValidConfig);
      expect(result).toEqual({
        ...minimalValidConfig,
        defaultNavbarLabel: 'Products',
        defaultNavbarPosition: 'left',
        docusaurusConfigPath: 'website/docusaurus.config.js',
        sidebarsPath: 'website/sidebars.js',
      });
    });

    it('should validate a configuration with all optional fields provided, overriding defaults', () => {
      const fullValidConfig = {
        docsRoot: 'my-docs',
        productsFilePath: 'data/products.js',
        productsOutputPath: 'my-docs/products',
        landingPagePathPattern: 'custom/pattern',
        templates: {
          'products-directory': 'custom-templates/dir.hbs',
          'landing-page': 'custom-templates/land.hbs',
        },
        defaultNavbarLabel: 'Custom Label',
        defaultNavbarPosition: 'right',
        docusaurusConfigPath: 'custom/docusaurus.config.js',
        sidebarsPath: 'custom/sidebars.js',
      };

      const result = configSchema.parse(fullValidConfig);
      expect(result).toEqual(fullValidConfig);
    });

    // Error Cases
    it('should throw ZodError for missing required fields', () => {
      const invalidConfig = {
        productsFilePath: 'products.js',
        productsOutputPath: 'docs/products',
        landingPagePathPattern: 'pattern',
        templates: {
          'products-directory': 'templates/products-directory.md.hbs',
          'landing-page': 'templates/landing-page.md.hbs',
        },
        // docsRoot is missing
      };

      expect(() => configSchema.parse(invalidConfig)).toThrow(ZodError);
      expect(() => configSchema.parse(invalidConfig)).toThrow(/docsRoot/);
    });

    it('should throw ZodError for empty string in required fields', () => {
      const invalidConfig = {
        docsRoot: '', // Empty string
        productsFilePath: 'products.js',
        productsOutputPath: 'docs/products',
        landingPagePathPattern: 'pattern',
        templates: {
          'products-directory': 'templates/products-directory.md.hbs',
          'landing-page': 'templates/landing-page.md.hbs',
        },
      };

      expect(() => configSchema.parse(invalidConfig)).toThrow(ZodError);
      expect(() => configSchema.parse(invalidConfig)).toThrow(
        /`docsRoot` is required and cannot be empty./,
      );
    });

    it('should throw ZodError for invalid type of field', () => {
      const invalidConfig = {
        docsRoot: 123, // Invalid type
        productsFilePath: 'products.js',
        productsOutputPath: 'docs/products',
        landingPagePathPattern: 'pattern',
        templates: {
          'products-directory': 'templates/products-directory.md.hbs',
          'landing-page': 'templates/landing-page.md.hbs',
        },
      };

      expect(() => configSchema.parse(invalidConfig)).toThrow(ZodError);
      expect(() => configSchema.parse(invalidConfig)).toThrow(
        /Invalid input: expected string, received number/,
      );
    });

    it('should throw ZodError for unknown fields due to .strict()', () => {
      const invalidConfig = {
        docsRoot: 'docs',
        productsFilePath: 'products.js',
        productsOutputPath: 'docs/products',
        landingPagePathPattern: 'pattern',
        templates: {
          'products-directory': 'templates/products-directory.md.hbs',
          'landing-page': 'templates/landing-page.md.hbs',
        },
        unknownField: 'value', // Unknown field
      };

      expect(() => configSchema.parse(invalidConfig)).toThrow(ZodError);
      expect(() => configSchema.parse(invalidConfig)).toThrow(
        /Unrecognized key/,
      );
    });

    it('should throw ZodError for invalid templates object', () => {
      const invalidConfig = {
        docsRoot: 'docs',
        productsFilePath: 'products.js',
        productsOutputPath: 'docs/products',
        landingPagePathPattern: 'pattern',
        templates: {
          'products-directory': 'templates/products-directory.md.hbs',
          // 'landing-page' is missing
        },
      };

      expect(() => configSchema.parse(invalidConfig)).toThrow(ZodError);
      expect(() => configSchema.parse(invalidConfig)).toThrow(/landing-page/);
    });
  });

  describe('partialConfigSchema (for partial validation)', () => {
    // Happy Path Tests
    it('should validate a config with only some required fields', () => {
      const partialValidConfig = {
        docsRoot: 'docs',
        productsFilePath: 'products.js',
      };
      expect(() => partialConfigSchema.parse(partialValidConfig)).not.toThrow();
      expect(partialConfigSchema.parse(partialValidConfig)).toEqual(
        partialValidConfig,
      );
    });

    it('should validate a config with only optional fields', () => {
      const optionalFieldsConfig = {
        defaultNavbarLabel: 'Test Label',
        sidebarsPath: 'test/path',
      };
      expect(() =>
        partialConfigSchema.parse(optionalFieldsConfig),
      ).not.toThrow();
      expect(partialConfigSchema.parse(optionalFieldsConfig)).toEqual(
        optionalFieldsConfig,
      );
    });

    it('should validate an empty object', () => {
      expect(() => partialConfigSchema.parse({})).not.toThrow();
      expect(partialConfigSchema.parse({})).toEqual({});
    });

    it('should validate a fully valid object (same as full schema but without defaults applied by transform)', () => {
      const fullValidConfig = {
        docsRoot: 'my-docs',
        productsFilePath: 'data/products.js',
        productsOutputPath: 'my-docs/products',
        landingPagePathPattern: 'custom/pattern',
        templates: {
          'products-directory': 'custom-templates/dir.hbs',
          'landing-page': 'custom-templates/land.hbs',
        },
        defaultNavbarLabel: 'Custom Label',
        defaultNavbarPosition: 'right',
        docusaurusConfigPath: 'custom/docusaurus.config.js',
        sidebarsPath: 'custom/sidebars.js',
      };
      expect(() => partialConfigSchema.parse(fullValidConfig)).not.toThrow();
      expect(partialConfigSchema.parse(fullValidConfig)).toEqual(
        fullValidConfig,
      );
    });

    // Error Cases
    it('should throw ZodError for invalid type of provided field', () => {
      const invalidPartialConfig = {
        docsRoot: ['docs'], // Invalid type
      };
      expect(() => partialConfigSchema.parse(invalidPartialConfig)).toThrow(
        ZodError,
      );
      expect(() => partialConfigSchema.parse(invalidPartialConfig)).toThrow(
        /Invalid input: expected string, received array/,
      );
    });

    it('should throw ZodError for unknown extra fields due to .strict()', () => {
      const invalidPartialConfig = {
        docsRoot: 'docs',
        extraField: 'unexpected', // Unknown field
      };
      expect(() => partialConfigSchema.parse(invalidPartialConfig)).toThrow(
        ZodError,
      );
      expect(() => partialConfigSchema.parse(invalidPartialConfig)).toThrow(
        /Unrecognized key/,
      );
    });
  });
});
