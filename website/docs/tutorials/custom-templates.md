---
sidebar_position: 6
title: Using Custom Templates
description: Learn how to use and create custom Handlebars templates to customize the look and feel of your Prodcat documentation.
keywords: [Prodcat, custom templates, Handlebars, Docusaurus, customization]
---

# Using Custom Templates

Prodcat leverages Handlebars templates to generate your product documentation pages. This allows for extensive customization of the look and feel of your generated content.

## Understanding Template Paths

In your `prodcat.config.js`, the `templates` object specifies which Handlebars files Prodcat should use:

```javascript
// prodcat.config.js
module.exports = {
  // ...
  templates: {
    'products-directory': 'templates/products-directory.md.hbs', // Template for the main directory page
    'landing-page': 'templates/landing-page.md.hbs', // Template for individual product landing pages
  },
  // ...
};
```

You can change these paths to point to your own custom `.hbs` files. For example, if you create a `my-templates` directory:

```javascript
// prodcat.config.js
module.exports = {
  // ...
  templates: {
    'products-directory': 'my-templates/custom-directory.hbs',
    'landing-page': 'my-templates/custom-product.hbs',
  },
  // ...
};
```

## Creating Custom Templates

Handlebars templates use `{{...}}` syntax to insert data. Prodcat provides a `product` object (for `landing-page` templates) and an `allProducts` array (for `products-directory` templates) to the template context.

### Example: Custom Product Landing Page Template (`custom-product.hbs`)

Let's say you want a product page to display a large product image and a "Buy Now" button.

```handlebars
---
id: {{product.id}}
title: {{product.title}}
sidebar_label: {{product.frontMatter.sidebar_label}}
---

# {{product.name}}

<img src="/img/products/{{product.id}}.png" alt="{{product.name}} logo" />

{{product.description}}

## Features

{{#each product.features}}
* {{this}}
{{/each}}

<a href="{{product.buyLink}}" target="_blank" className="button button--primary">Buy Now</a>

```

In your `products.js`, you would then add `features` and `buyLink` properties:

```javascript
// products.js
module.exports = [
  {
    name: 'Awesome Gadget',
    id: 'awesome-gadget',
    title: 'Awesome Gadget - Your New Best Friend',
    description: 'A revolutionary device that simplifies your life.',
    features: ['Long Battery Life', 'Intuitive Interface', 'Portable Design'],
    buyLink: 'https://example.com/buy/awesome-gadget',
    frontMatter: { sidebar_label: 'Gadget' },
  },
];
```

By customizing templates, you have full control over the generated content and can integrate any product-specific data you define.
