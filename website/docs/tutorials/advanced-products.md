---
sidebar_position: 5
title: Advanced Product Definitions (Categories, Frontmatter)
description: Explore advanced product definition techniques in Prodcat, including using categories and custom front matter for enhanced organization and Docusaurus integration.
keywords: [Prodcat, advanced products, categories, front matter, Docusaurus, SEO, customization]
---

# Advanced Product Definitions (Categories, Frontmatter)

Beyond basic `name`, `id`, `title`, and `description`, Prodcat's `products.js` allows for more advanced definitions using `category` and `frontMatter` properties. These enhance organization and Docusaurus integration.

## Categories

The `category` property allows you to group related products. While Prodcat itself doesn't use this for dynamic routing, it's invaluable for organizing your product data and can be used within custom templates to create category-based listings.

```javascript
// products.js
module.exports = [
  {
    name: 'Product A',
    id: 'product-a',
    title: 'Product A - Powerful Analytics',
    description: 'A comprehensive tool for data analysis and visualization.',
    category: 'Analytics', // Categorize your product
    frontMatter: { /* ... */ },
  },
  {
    name: 'Product B',
    id: 'product-b',
    title: 'Product B - Secure Cloud Storage',
    description: 'Store and share your files securely in the cloud.',
    category: 'Cloud Services', // Another category
    frontMatter: { /* ... */ },
  },
];
```

In your Handlebars templates, you could then iterate over products and group them by `category`.

## Front Matter Customization

The `frontMatter` object within a product definition is directly translated into the Docusaurus front matter for the generated Markdown file. This is powerful for:

*   **SEO**: Setting a specific `description` meta tag for search engines.
*   **Sidebar Labels**: Customizing how the product appears in the Docusaurus sidebar with `sidebar_label`.
*   **Custom Fields**: Adding any other Docusaurus-specific or custom fields that your templates or Docusaurus plugins might use (e.g., `tags`, `keywords`, `hide_table_of_contents`).

```javascript
// products.js
module.exports = [
  {
    name: 'Prodcat Example',
    id: 'prodcat-example',
    title: 'An Example Product for Prodcat',
    description: 'Demonstrates advanced configuration.',
    category: 'Developer Tools',
    frontMatter: {
      sidebar_label: 'Example Product', // Custom label in sidebar
      description: 'Prodcat example product documentation for SEO.', // SEO description
      tags: ['tutorial', 'example', 'prodcat'], // Docusaurus tags
      customField: 'someValue', // Your own custom field
    },
  },
];
```

This flexibility allows you to fine-tune each product's presentation and metadata within your Docusaurus site.
