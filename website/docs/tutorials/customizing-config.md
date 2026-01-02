---
sidebar_position: 3
title: Customizing Prodcat Configuration (prodcat.config.js)
description: Learn how to customize your Prodcat project using the prodcat.config.js file, including key options for docsRoot, productsFilePath, and templates.
keywords: [Prodcat, configuration, prodcat.config.js, customize, docsRoot, productsFilePath, templates]
---

# Customizing Prodcat Configuration (`prodcat.config.js`)

The `prodcat.config.js` file allows you to customize how Prodcat generates your documentation website.

## Basic Structure

Prodcat configuration is a JavaScript object exported from `prodcat.config.js`.

```javascript
// prodcat.config.js
module.exports = {
  docsRoot: 'website/docs',
  productsFilePath: 'products.js',
  productsOutputPath: 'website/docs/products',
  defaultNavbarLabel: 'Products',
  defaultNavbarPosition: 'left',
  templates: {
    'products-directory': 'templates/products-directory.md.hbs',
    'landing-page': 'templates/landing-page.md.hbs',
  },
};
```

## Key Configuration Options

*   **`docsRoot`**: (string) The root directory where your Docusaurus documentation markdown files are located. Default: `website/docs`.
*   **`productsFilePath`**: (string) The path to your `products.js` file. Default: `products.js`.
*   **`productsOutputPath`**: (string) The output directory within your Docusaurus `docsRoot` for generated product pages. Default: `website/docs/products`.
*   **`defaultNavbarLabel`**: (string) The label for the products link in the Docusaurus navbar. Default: `Products`.
*   **`defaultNavbarPosition`**: (string) Position (`'left'` or `'right'`) for the navbar link. Default: `left`.
*   **`templates`**: (object) Paths to Handlebars templates used for generating pages.

## Example: Customizing Paths

To store your Docusaurus docs in a custom location and output product pages to a different folder:

```javascript
// prodcat.config.js
module.exports = {
  docsRoot: 'my-custom-docusaurus-site/documentation',
  productsOutputPath: 'my-custom-docusaurus-site/documentation/product-pages',
  // ... other configurations
};
```

Remember to run `prodcat generate` after any changes to `prodcat.config.js`!
