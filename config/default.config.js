/** @typedef {import('../src/types/prodcat.d.ts').ProdcatConfig} ProdcatConfig */

/**
 * @type {ProdcatConfig}
 */
const defaultConfig = {
  // New, clearer names for settings.
  docsRoot: 'website/docs',
  productsFilePath: 'products.js',
  productsOutputPath: 'website/docs/products',
  landingPagePathPattern: '{{{ productsOutputPath }}}/{{{ product.id }}}',

  // Optional settings, often not needed if defaults are used.
  docusaurusConfigPath: 'website/docusaurus.config.js',
  sidebarsPath: 'website/sidebars.js',

  // Default values for navbar link
  defaultNavbarLabel: 'Products',
  defaultNavbarPosition: 'left',

  // Template paths are now self-contained. `templatesPath` is removed.
  templates: {
    'products-directory': 'templates/products-directory.md.hbs',
    'landing-page': 'templates/landing-page.md.hbs',
  },
};

export default defaultConfig;
