---
sidebar_position: 2
---

# Content Management

This section explains how to manage content in Prodcat, including products, categories, and custom pages.

## Products

### Adding new products

To add a new product, you need to add a new object to the `products` array in the `products.js` file. Each product object should have a unique ID and contain the necessary information, such as name, description, and price.

### Editing existing products

To edit an existing product, simply modify the corresponding object in the `products.js` file. The changes will be reflected the next time you generate the website.

### Product file structure (`products.js`)

The `products.js` file is the single source of truth for your product data. It exports a JavaScript array of product objects. Here's an example of a product object:

```javascript
{
  id: 'prod1',
  name: 'Sample Product',
  description: 'This is a sample product.',
  price: '$99.99',
  features: ['Feature 1', 'Feature 2'],
  specifications: [
    { key: 'Weight', value: '1kg' },
    { key: 'Dimensions', value: '10x10x10 cm' }
  ],
  images: ['/img/prod1.jpg']
}
```

### Managing product images and assets

Product images should be placed in the `website/static/img` directory. You can then reference them in your `products.js` file using the relative path from the `static` directory (e.g., `/img/prod1.jpg`).

## Categories

### Creating and managing categories

Categories are automatically generated based on the `category` field in your product objects. If you assign a product to a category that doesn't exist yet, Prodcat will create it for you.

### Associating products with categories

To associate a product with a category, add a `category` property to the product object in `products.js`.

```javascript
{
  id: 'prod1',
  name: 'Sample Product',
  category: 'Electronics',
  // ...
}
```

## Custom Pages

### Creating custom documentation pages

You can create custom documentation pages using Markdown or MDX. Simply create a new `.md` or `.mdx` file in the `website/docs` directory. You can organize them in subdirectories as you see fit.

### Using Markdown and MDX

Prodcat uses Docusaurus, which has excellent support for Markdown and MDX. You can use all the standard Markdown syntax, as well as the advanced features of MDX, such as importing and using React components in your documentation. Refer to the Docusaurus documentation for more details on [Markdown and MDX features](https://docusaurus.io/docs/markdown-features).
