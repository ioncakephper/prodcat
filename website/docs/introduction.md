---
sidebar_position: 1
title: Introduction to Prodcat
sidebar_label: "Introduction"
description: Learn about Prodcat, a powerful tool for automatically generating and managing beautiful, feature-rich software product documentation websites. Discover its key features, target audience, and how to get started.
keywords: [Prodcat, documentation, software products, Docusaurus, website generator, technical writing, product management]
---

# Introduction

Welcome to the Prodcat User Guide! This guide is designed to help you understand and use Prodcat effectively.

## Overview

### What is Prodcat?

Prodcat is a powerful tool for generating and managing software product documentation websites. It allows you to take a simple list of software products and generate a beautiful, feature-rich Docusaurus website. Prodcat **automatically creates a software product directory page and dedicated software product landing pages for each of your software products.** This helps companies that use Docusaurus-powered sites to quickly and accurately allow visitors access to their software product catalog. Furthermore, Prodcat **updates the navigation bar with a link to the software product directory page,** helping content creators and technical writers to seamlessly integrate the directory into the site navigation. Prodcat is perfect for businesses and individuals who want to create professional-looking software product catalogs and documentation with minimal effort.

### Key features and benefits

- **Automatic Site Generation:** Prodcat automates the creation of a Docusaurus website, saving you time and effort.
- **Software Product Management:** Easily manage your software products through a simple `products.js` file.
- **Customizable:** Prodcat is highly customizable, allowing you to tailor the look and feel of your website to match your brand.
- **Search Engine Optimized:** The generated website is SEO-friendly, helping your software products get discovered by search engines.
- **Markdown Support:** Write your documentation in Markdown, a simple and intuitive markup language.

### Target audience

This documentation is intended for anyone who uses Prodcat, including:

- **Technical Writers:** Individuals responsible for writing and managing software product documentation.
- **Developers:** Those who want to customize and extend the functionality of Prodcat.
- **Product Managers:** Users who are responsible for the overall product strategy and documentation.

## Getting Started

### Quick start guide

Follow these steps to quickly set up and view your first Prodcat-generated website:

```bash
# 1. Install Prodcat globally
npm install -g prodcat

# 2. Create a new directory for your project and navigate into it
mkdir my-prodcat-project
cd my-prodcat-project

# 3. Initialize Prodcat in your new project
# This creates a basic Docusaurus project and a prodcat.config.js file
prodcat init

# 4. Create a products.js file with your first software product
#    (Open the file products.js and add the following content)
echo 'module.exports = [
  {
    name: "My First Product",
    id: "my-first-product",
    title: "My First Product Page",
    description: "This is a brief description of my very first software product.",
    frontMatter: {
      sidebar_label: "First Product",
    },
  },
];' > products.js

# 5. Generate your Prodcat website
prodcat generate

# 6. Navigate to the generated Docusaurus website directory
cd website

# 7. Start the Docusaurus development server
npm start
```

Your browser should automatically open to `http://localhost:3000` (or a similar address) displaying your new Prodcat documentation website. Look for "First Product" in the sidebar!

### Navigating the documentation

This documentation is divided into three main sections:

- **User Guide:** For those who are new to Prodcat and want to learn the basics.
- **Developer Guide:** For developers who want to customize and extend Prodcat.
- **Administrator Guide:** For users who need to install, deploy, and manage Prodcat.

### Where to find help

If you need help, you can:

- **Check our FAQ:** Find answers to common questions in our [Frequently Asked Questions (FAQ)](./faq).
- **Ask on GitHub:** Post your question on the [GitHub Issues](https://github.com/ioncakephper/prodcat/issues) page.
- **Contact Support:** For urgent issues, please refer to our [Support page](./support).
