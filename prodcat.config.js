/** @typedef {import('./src/types/prodcat.d.ts').ProdcatConfig} ProdcatConfig */

/**
 * @type {ProdcatConfig}
 */
const config = {
  // Root directory for Docusaurus docs.
  docsRoot: 'website/docs',

  // Path to the JS file containing product data.
  productsFilePath: 'products.js',

  // Directory where generated product pages will be saved.
  productsOutputPath: 'website/docs/products',

  // A pattern for generating product page paths.
  landingPagePathPattern: '{{{ productsOutputPath }}}/{{{ product.id }}}',

  // Default values for navbar link
  defaultNavbarLabel: 'Products',
  defaultNavbarPosition: 'left',

  // Template paths are now self-contained. `templatesPath` is removed.
  templates: {
    'products-directory': 'templates/products-directory.md.hbs',
    'landing-page': 'templates/landing-page.md.hbs',
  },
};

export default config;
