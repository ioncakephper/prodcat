---
sidebar_position: 5
title: Configuring Prodcat
sidebar_label: "Configuration"
description: "Learn how to configure Prodcat for your project. This guide explains the `prodcat.config.js` and `products.js` files, detailing all the available options for customizing your documentation website and defining your software products."
keywords: ["Prodcat", "configuration", "prodcat.config.js", "products.js", "Docusaurus", "documentation", "setup"]
---

# Configuration

Prodcat is configured using two main files: `prodcat.config.js` and `products.js`.

## `prodcat.config.js`

The `prodcat.config.js` file is the central place for configuring your Prodcat project. It allows you to customize various aspects of your documentation website.

### Detailed explanation of all configuration options

| Option Name             | Type                  | Default Value                          | Description                                                                                                                                                                                            | Example Use Case                                             |
| :---------------------- | :-------------------- | :------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------- |
| `products`              | `array<object>`       | `[]`                                   | An array of software product objects. Each object in this array defines a software product, including its name, ID, and descriptive content.                                                              | `products: [{ name: "App", id: "app" }]`                      |
| `website.docsRoot`      | `string`              | `'docs'`                               | The root directory where your Docusaurus documentation markdown files are located. This is typically `website/docs` in a standard Docusaurus setup.                                                    | `website: { docsRoot: 'my-docs' }`                           |
| `website.productsFilePath` | `string`              | `'products.js'`                        | The path to the JavaScript file that exports your array of software product objects.                                                                                                                   | `website: { productsFilePath: 'data/myProducts.js' }`        |
| `website.productsOutputPath` | `string`              | `'docs/products'`                      | The output directory within your Docusaurus `docsRoot` where the generated software product documentation markdown files will be placed.                                                               | `website: { productsOutputPath: 'generated/products' }`      |
| `website.landingPagePathPattern` | `string`              | `'docs/products/index.md'`             | The path pattern for the main landing page that lists all your software products.                                                                                                                      | `website: { landingPagePathPattern: 'pages/all-products.md' }` |
| `templates.landingPage` | `string`              | `'templates/landing-page.md.hbs'`      | The path to the Handlebars template file used to generate the main software products landing page.                                                                                                     | `templates: { landingPage: 'my-templates/overview.hbs' }`    |
| `templates.productPage` | `string`              | `'templates/products-directory.md.hbs'` | The path to the Handlebars template file used to generate individual software product pages.                                                                                                           | `templates: { productPage: 'my-templates/product.hbs' }`     |
| `defaultNavbarLabel`    | `string`              | `'Products'`                           | The default label to use for the navbar item that links to the software products page if `--navbar-label` is not specified during `prodcat generate`.                                                    | `defaultNavbarLabel: 'Our Software'`                         |
| `defaultNavbarPosition` | `string`              | `'left'`                               | The default position (`'left'` or `'right'`) for the navbar item that links to the software products page if `--navbar-position` is not specified during `prodcat generate`.                           | `defaultNavbarPosition: 'right'`                             |
| `docusaurusConfigPath`  | `string`              | `'website/docusaurus.config.js'`       | The path to your Docusaurus configuration file (`docusaurus.config.js` or `docusaurus.config.ts`).                                                                                                    | `docusaurusConfigPath: 'site/docusaurus.config.ts'`          |
| `sidebarsPath`          | `string`              | `'website/sidebars.js'`                | The path to your Docusaurus sidebars configuration file (`sidebars.js` or `sidebars.ts`).                                                                                                            | `sidebarsPath: 'site/sidebars.ts'`                           |

### Example configurations

Here are some examples of `prodcat.config.js` files demonstrating different use cases:

#### Basic Configuration

```javascript
// prodcat.config.js
module.exports = {
  website: {
    docsRoot: './docs', // Docusaurus docs directory
    productsOutputPath: 'products', // Output path within docsRoot for product pages
  },
  templates: {
    landingPage: 'templates/landing-page.md.hbs',
    productPage: 'templates/product-page.md.hbs',
  },
  defaultNavbarLabel: 'My Products',
  defaultNavbarPosition: 'right',
};
```

#### Advanced Configuration with Custom Paths and Multiple Products

```javascript
// prodcat.config.js
module.exports = {
  // Specify a different file for products data
  productsFilePath: 'data/myCompanyProducts.js',

  website: {
    docsRoot: 'my-docusaurus-site/docs', // Custom Docusaurus docs path
    productsOutputPath: 'generated/products', // Custom output path
    landingPagePathPattern: 'custom-pages/products-overview.md', // Custom landing page path
  },
  templates: {
    landingPage: 'custom-templates/product-listing.hbs',
    productPage: 'custom-templates/single-product-view.hbs',
  },
  defaultNavbarLabel: 'Our Solutions',
  defaultNavbarPosition: 'left',
  // You can also define global products here if not using productsFilePath
  products: [
    {
      name: 'Prodcat CLI',
      id: 'prodcat-cli',
      title: 'Prodcat Command Line Interface',
      description: 'Tool for generating documentation.',
      frontMatter: { sidebar_label: 'CLI' },
    },
  ],
};
```
<!-- TODO: Add a screenshot of a more complex prodcat.config.js file example, perhaps showing multiple product entries or custom template paths. -->

## `products.js`

The `products.js` file is where you define the software products that will be included in your documentation website.

### The role of the `products.js` file

This file exports an array of software product objects. Each object represents a single software product and contains all the information needed to generate its documentation page.

### Properties of a software product object

A software product object has the following properties:

| Property Name | Type       | Required | Default   | Description                                                                                                                                                                                                                                                          |
| :------------ | :--------- | :------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`        | `string`   | Yes      | -         | The name of the software product. This is typically displayed prominently on the product's documentation page.                                                                                                                                                         |
| `id`          | `string`   | Yes      | Slugified `name` | A unique identifier for the software product. This ID is used to generate URL slugs and file paths for the product's documentation. If not explicitly provided, it will be automatically generated by slugifying the `name`.                                    |
| `title`       | `string`   | Yes      | -         | A short, descriptive title for the software product, often used as the main heading for its documentation page.                                                                                                                                                          |
| `description` | `string`   | Yes      | -         | A detailed description of the software product's features, purpose, and benefits.                                                                                                                                                                                      |
| `frontMatter` | `object`   | No       | `{}`      | An object containing properties that will be added to the front matter of the generated Markdown file for the product. This is crucial for Docusaurus-specific settings and SEO. Includes `description` (for SEO), `summary` (for lists), and `sidebar_label`. |
| `category`    | `string`   | No       | -         | A string value representing the category to which the software product belongs. This property is primarily for documentation purposes within templates (e.g., for grouping products) and is not currently used by Prodcat itself for dynamic routing or filtering functionality beyond what is rendered in the markdown. There is no explicit schema validation for this property; any string value will be accepted. |
| `docEntry`    | `string`   | No       | `'overview'` | The default entry point or sub-path within the product's documentation directory. This is used if the product has multiple documentation files (e.g., `overview.md`, `features.md`). Currently, Prodcat generates a single `index.md` per product, so this is mostly for future expansion or custom templates. |

### Example of a software product object

Here are examples of `products.js` files demonstrating different software product configurations:

#### Basic Product Definition

```javascript
// products.js
module.exports = [
  {
    name: 'My Awesome Product',
    id: 'my-awesome-product',
    title: 'My Awesome Product',
    description: 'This is a detailed description of my awesome software product.',
    category: 'Productivity Tools', // Optional category
    frontMatter: {
      description: 'A short description for SEO for My Awesome Product.',
      summary: 'A summary of the software product.',
      sidebar_label: 'Awesome Product',
    },
  },
];
```

#### Multiple Products with Diverse Configurations

```javascript
// products.js
module.exports = [
  {
    name: 'Product A',
    id: 'product-a',
    title: 'Product A - Powerful Analytics',
    description: 'A comprehensive tool for data analysis and visualization.',
    category: 'Analytics',
    frontMatter: {
      description: 'Analyze your data with Product A.',
      summary: 'Data analysis and visualization tool.',
      sidebar_label: 'Analytics Tool',
    },
  },
  {
    name: 'Product B',
    id: 'product-b',
    title: 'Product B - Secure Cloud Storage',
    description: 'Store and share your files securely in the cloud.',
    category: 'Cloud Services',
    frontMatter: {
      description: 'Secure cloud storage for your valuable data.',
      summary: 'Cloud storage solution.',
      sidebar_label: 'Cloud Storage',
      // Custom front matter fields can also be added and used in templates
      price: '$9.99/month',
    },
  },
  {
    name: 'Product C',
    // id will be automatically generated as 'product-c'
    title: 'Product C - Project Management',
    description: 'Manage your projects efficiently with Product C.',
    category: 'Project Management',
    frontMatter: {
      description: 'Efficient project management software.',
      summary: 'Project management made easy.',
    },
  },
];
```
<!-- TODO: Add a screenshot of a products.js file with several products demonstrating different configurations, categories, and front matter options. -->
