---
sidebar_position: 4
title: Generating Your Documentation Website
description: Learn how to generate your Prodcat documentation website using the 'prodcat generate' command and preview it locally.
keywords: [Prodcat, generate, documentation, Docusaurus, build, preview]
---

# Generating Your Documentation Website

Once you have defined your products in `products.js` and configured Prodcat in `prodcat.config.js`, the next step is to generate your documentation website.

## The `prodcat generate` Command

The core command for building your documentation is `prodcat generate`. This command reads your configuration and product data, then uses your templates to create the necessary Markdown files for Docusaurus.

```bash
prodcat generate
```

## How it Works

1.  **Reads `prodcat.config.js`**: Prodcat first loads your configuration settings.
2.  **Reads `products.js`**: It then fetches your product definitions.
3.  **Generates Markdown Files**: For each product defined, Prodcat creates a dedicated Markdown file in your `productsOutputPath` (e.g., `website/docs/products/my-product.md`) using the `productPage` template. It also creates a main directory page (e.g., `website/docs/products/index.md`) using the `products-directory` template.
4.  **Updates Docusaurus Navigation**: Prodcat intelligently updates your `docusaurus.config.js` and `sidebars.js` files to include the newly generated product pages in your website's navigation.

## Optional Flags

*   `--config <path>`: Specify a custom path to your `prodcat.config.js` file.
*   `--output <path>`: Override the `productsOutputPath` defined in your config.
*   `--navbar-label <label>`: Override the `defaultNavbarLabel` for the product directory link.
*   `--navbar-position <position>`: Override the `defaultNavbarPosition`.

## What to do next?

After running `prodcat generate`, navigate into your Docusaurus `website` directory and run `npm start` to preview your site locally:

```bash
cd website
npm start
```

Your browser will open to your new, updated documentation website!
