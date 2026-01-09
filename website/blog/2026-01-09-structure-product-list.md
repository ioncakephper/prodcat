---
title: How to Structure Your Product List for Maximum Flexibility
authors: ioncakephper
tags: [tutorial, schema, best-practices]
---

Your `products.js` file is the heart of your Prodcat site. Here’s how to structure it for clarity, scalability, and customization.

<!--truncate-->

Prodcat reads your product list and generates documentation automatically — but the way you structure that list matters. A well-designed schema makes your site easier to navigate, customize, and extend.

Here’s a recommended structure:

```js
export default [
  {
    id: "widget-pro",
    name: "Widget Pro",
    description: "High-performance widget for professional use.",
    category: "Widgets",
    price: 199,
    features: ["Fast", "Reliable", "Lightweight"],
    variants: [
      { name: "Standard", sku: "WP-STD" },
      { name: "Deluxe", sku: "WP-DLX" }
    ],
  },
];
```
