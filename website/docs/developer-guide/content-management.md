---
sidebar_position: 2
---

# Content Management

This section explains how to manage the content of your Prodcat website.

## Software Products

### Adding new software products

To add a new software product, you need to add a new software product object to the `products` array in your `products.js` file.

### Editing existing software products

To edit an existing software product, you simply need to modify the corresponding object in your `products.js` file.

### Software product file structure (`products.js`)

The `products.js` file is the single source of truth for your software product data. It's an array of JavaScript objects, where each object represents a software product.

### Managing software product images and assets

You can add images and other assets to your software product pages by placing them in the `static` directory of your Docusaurus project. You can then reference them in your Markdown files.

## Categories

### Creating and managing categories

You can create and manage categories by adding a `category` property to your software product objects in `products.js`.

### Associating software products with categories

To associate a software product with a category, simply add the category name to the `category` property of the software product object.

## Custom Pages

### Creating custom documentation pages

You can create custom documentation pages by adding Markdown files to the `docs` directory of your Docusaurus project.

### Using Markdown and MDX

Docusaurus supports both Markdown and MDX, which allows you to use React components in your Markdown files. This gives you a great deal of flexibility when creating your documentation pages.