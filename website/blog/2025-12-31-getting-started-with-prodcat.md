---
title: "Getting Started with Prodcat: A Beginner's Guide"
authors: ioncakephper
tags: [prodcat, getting-started, documentation]
---

Welcome to the Prodcat blog! In this article, we'll walk you through the basics of getting started with Prodcat. Whether you're a small business owner, a developer, or just someone who wants to create a beautiful product documentation website, Prodcat is the tool for you.

<!--truncate-->

## What is Prodcat?

Prodcat is a powerful tool that allows you to generate a professional product documentation website from a simple list of products. With Prodcat, you can create a beautiful, feature-rich website in minutes, without any prior experience in web development.

## Step 1: Installation

The first step is to install Prodcat. You can do this by running the following command in your terminal:

```bash
npm install -g prodcat
```

This will install Prodcat globally on your system, so you can use it from anywhere.

## Step 2: Initialization

Once you have Prodcat installed, you can create a new project by running the `prodcat init` command. This will create a new directory with the basic project structure.

```bash
prodcat init my-product-site
```

This will create a new directory called `my-product-site` with all the necessary files to get started.

## Step 3: Add Your Products

The next step is to add your products to the `products.js` file. This file is located in the root of your project directory, and it's where you'll define all of your products. Here's an example of what a product object looks like:

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

## Step 4: Generate Your Website

Once you've added your products, you can generate your website by running the `prodcat generate` command.

```bash
prodcat generate
```

This will generate a static HTML website in the `website/build` directory.

## Step 5: View Your Website

That's it! You can now view your website by opening the `website/build/index.html` file in your browser. Or, you can run `npm start` in the `website` directory to start a local development server.

We hope this guide has been helpful. If you have any questions, feel free to reach out to us on [GitHub](https://github.com/your-repo/prodcat).
