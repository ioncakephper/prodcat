---
title: How to Structure Your Product List for Maximum Flexibility
authors: ioncakephper
tags: [tutorial, schema, best-practices]
---

Your `products.js` file is the heart of your Prodcat site. A well-structured product list is essential for creating a documentation site that is clear, scalable, and easy to customize. This guide will walk you through best practices for structuring your `products.js` file to unlock the full potential of Prodcat.

<!--truncate-->

## Why a Well-Structured `products.js` Matters

Prodcat reads your product list and generates documentation automatically. The way you structure this list directly impacts the quality and usability of your generated site. A well-designed schema makes your site:

-   **Easier to Navigate:** Clear categorization and consistent data allow Prodcat to build intuitive navigation menus and directory pages.
-   **More Customizable:** A structured approach makes it simpler to apply custom templates and styling, ensuring your documentation aligns with your brand.
-   **Scalable:** As your product line grows, a consistent structure prevents your documentation from becoming a tangled mess.
-   **Easier to Maintain:** When all product information is logically organized, updates and additions become straightforward and less error-prone.

## Core Product Fields Explained

Let's break down the recommended structure for a single product entry. Each field serves a specific purpose in generating your documentation.

```javascript
export default [
  {
    id: "widget-pro",
    name: "Widget Pro",
    description: "A high-performance widget designed for professional use cases, offering unparalleled speed and reliability.",
    category: "Widgets",
    price: 199.99,
    features: [
      "Blazing-fast performance",
      "Enterprise-grade reliability",
      "Lightweight and efficient design"
    ],
    variants: [
      { name: "Standard", sku: "WP-STD" },
      { name: "Deluxe", sku: "WP-DLX" }
    ],
  },
];
```

-   **`id` (String, Required):** A unique identifier for the product. This is used to generate file names and URLs, so it should be a URL-friendly string (e.g., `widget-pro`, `advanced-gadget-v2`).
-   **`name` (String, Required):** The official name of the product. This will be used as the main heading on the product page.
-   **`description` (String, Required):** A detailed description of the product. This is your opportunity to provide a comprehensive overview. You can use Markdown here for formatting.
-   **`category` (String):** The primary category the product belongs to. Prodcat uses this to group products and create category-specific pages.

## Leveraging Categories for Better Navigation

The `category` field is fundamental to organizing your site. By assigning categories consistently, you enable users to easily browse related products. For example, a `products.js` file with multiple products might look like this:

```javascript
export default [
  { id: "widget-pro", name: "Widget Pro", category: "Widgets", ... },
  { id: "widget-basic", name: "Widget Basic", category: "Widgets", ... },
  { id: "gadget-plus", name: "Gadget Plus", category: "Gadgets", ... },
];
```

Prodcat will automatically generate a "Widgets" page listing both "Widget Pro" and "Widget Basic," and a separate "Gadgets" page for "Gadget Plus."

## Using Features to Highlight Key Selling Points

The `features` array is perfect for showcasing the key benefits of your product. Each string in the array will be rendered as a list item, making it easy for customers to scan.

```javascript
features: [
  "Feature A: Solves a common problem",
  "Feature B: Improves efficiency",
  "Feature C: Integrates with other tools"
],
```

Use this section to be concise and impactful.

## Managing Product Variants Effectively

For products that come in different versions (e.g., sizes, colors, or feature tiers), the `variants` array is indispensable. Each object in the array represents a unique variant.

```javascript
variants: [
  { name: "Standard", sku: "WP-STD", price: 199.99 },
  { name: "Deluxe", sku: "WP-DLX", price: 299.99, features: ["Additional premium feature"] }
],
```

You can even include a `price` or additional `features` within a variant object to override the main product's properties. This provides a high degree of flexibility.

By following these structuring guidelines, you can ensure that your `products.js` file is a robust foundation for a high-quality, maintainable, and scalable product documentation site.
