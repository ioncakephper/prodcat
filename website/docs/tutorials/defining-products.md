---
sidebar_position: 2
title: Defining Your Products (products.js)
description: Learn how to define your software products using the 'products.js' file in Prodcat, including key properties like name, id, title, and description.
keywords: [Prodcat, products, products.js, product definition, software, documentation]
---

# Defining Your Products (`products.js`)

The `products.js` file is crucial for Prodcat, as it defines all the software products you want to document.

## Structure of `products.js`

This file exports an array of product objects. Each object represents a single product.

```javascript
// products.js
module.exports = [
  {
    name: 'My First Product',
    id: 'my-first-product',
    title: 'Overview of My First Product',
    description: 'This is a brief description of my very first software product.',
    frontMatter: {
      sidebar_label: 'First Product',
      // Any other Docusaurus front matter can go here
    },
    // You can add custom properties here that can be used in your templates
    version: '1.0.0',
    releaseDate: '2025-01-01',
  },
  // Add more product objects here
];
```

## Key Properties

*   **`name`**: (Required) The display name of your product.
*   **`id`**: (Required) A unique identifier for the product, used in URLs and file paths. If not provided, Prodcat will generate one from the `name`.
*   **`title`**: (Required) A title for the product's landing page.
*   **`description`**: (Required) A short description for the product.
*   **`frontMatter`**: (Optional) An object for Docusaurus-specific front matter (e.g., `sidebar_label`, `description` for SEO).

## Example

Let's say you have two products, "Prodcat CLI" and "Prodcat UI". Your `products.js` might look like this:

```javascript
// products.js
module.exports = [
  {
    name: 'Prodcat CLI',
    id: 'prodcat-cli',
    title: 'Prodcat Command Line Interface',
    description: 'The command-line tool for generating documentation.',
    frontMatter: {
      sidebar_label: 'CLI',
    },
  },
  {
    name: 'Prodcat UI',
    id: 'prodcat-ui',
    title: 'Prodcat User Interface',
    description: 'A web-based interface for managing Prodcat projects.',
    frontMatter: {
      sidebar_label: 'UI',
    },
  },
];
```

After saving your `products.js` file, run `prodcat generate` to see your changes!
