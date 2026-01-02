---
sidebar_position: 5
---

# Configuration

Prodcat is configured using two main files: `prodcat.config.js` and `products.js`.

## `prodcat.config.js`

The `prodcat.config.js` file is the central place for configuring your Prodcat project. It allows you to customize various aspects of your documentation website.

### Detailed explanation of all configuration options

The `prodcat.config.js` file contains the following options:

- **`products`**: An array of software product objects.
- **`website`**: Configuration for the Docusaurus website.
  - **`docsDir`**: The directory where your Docusaurus documentation files are located.
  - **`productsDir`**: The directory where your software product documentation will be generated.
- **`templates`**: Configuration for the Handlebars templates used to generate the documentation.
  - **`landingPage`**: The template for the software products landing page.
  - **`productPage`**: The template for individual software product pages.

### Example configurations

Here is an example of a `prodcat.config.js` file:

```javascript
module.exports = {
  website: {
    docsDir: './docs',
    productsDir: 'products',
  },
  templates: {
    landingPage: 'templates/landing-page.md.hbs',
    productPage: 'templates/product-page.md.hbs',
  },
};
```

## `products.js`

The `products.js` file is where you define the software products that will be included in your documentation website.

### The role of the `products.js` file

This file exports an array of software product objects. Each object represents a single software product and contains all the information needed to generate its documentation page.

### Properties of a software product object

A software product object has the following properties:

- **`name`**: The name of the software product.
- **`id`**: A unique identifier for the software product.
- **`title`**: A short, descriptive title for the software product.
- **`description`**: A detailed description of the software product.
- **`frontMatter`**: An object containing `description` and `summary` properties for the front matter of the generated page.

### Example of a software product object

Here is an example of a software product object:

```javascript
{
  name: 'My Awesome Product',
  id: 'my-awesome-product',
  title: 'My Awesome Product',
description: 'This is a detailed description of my awesome software product.',
  frontMatter: {
    description: 'A short description for SEO.',
    summary: 'A summary of the software product.',
  },
}
```
