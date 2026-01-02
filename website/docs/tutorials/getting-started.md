---
sidebar_position: 1
title: Getting Started with Prodcat
description: A step-by-step guide to installing Prodcat, initializing your project, defining products, and generating your first documentation website.
keywords: [Prodcat, getting started, installation, initialize, products, generate, Docusaurus]
---

# Getting Started with Prodcat

Welcome to Prodcat! This tutorial will guide you through the initial steps of setting up your product documentation website.

## 1. Installation

First, install Prodcat globally using npm:

```bash
npm install -g prodcat
```

## 2. Initialize Your Project

Navigate to your desired project directory and initialize Prodcat:

```bash
mkdir my-product-docs
cd my-product-docs
prodcat init
```

This command sets up a basic Docusaurus project and creates a default `prodcat.config.js` file.

## 3. Define Your Products

Create a `products.js` file in your project root and define your products. (More details in the next tutorial!)

## 4. Generate and Serve

Finally, generate your documentation and start the Docusaurus development server:

```bash
prodcat generate
cd website
npm start
```

You should now see your Prodcat-generated documentation website in your browser!
