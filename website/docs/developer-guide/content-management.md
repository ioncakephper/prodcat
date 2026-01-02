---
sidebar_position: 2
title: Content Management for Prodcat
sidebar_label: "Content Management"
description: "Learn how to manage content in your Prodcat-generated website. This guide covers adding and editing software products in `products.js`, managing categories, handling images and assets, and creating custom documentation pages using Markdown and MDX."
keywords: ["Prodcat", "content management", "products.js", "categories", "Markdown", "MDX", "Docusaurus"]
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

You can organize software products into categories by adding a `category` property to your software product objects in `products.js`. Note that there is currently no explicit schema validation for this property; any string value will be accepted.

### Associating software products with categories

To associate a software product with a category, simply add the category name as a string value to the `category` property of the software product object. This property is primarily for documentation purposes within templates and is not currently used for dynamic routing or filtering functionality by Prodcat itself.

## Custom Pages

### Creating custom documentation pages

You can create custom documentation pages by adding Markdown files to the `docs` directory of your Docusaurus project.

### Using Markdown and MDX

Docusaurus supports both Markdown and MDX, which allows you to use React components in your Markdown files. This gives you a great deal of flexibility when creating your documentation pages.