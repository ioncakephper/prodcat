---
sidebar_position: 3
title: Customizing Your Prodcat Website
sidebar_label: "Customization"
description: "Learn how to customize your Prodcat website. This guide covers theming, including modifying the look and feel with CSS and swizzling Docusaurus components, as well as creating and modifying Handlebars templates for your product pages."
keywords: ["Prodcat", "customization", "theming", "CSS", "Docusaurus", "swizzling", "Handlebars", "templates"]
---

# Customization

This section explains how to customize your Prodcat website.

## Theming

### Modifying the look and feel

You can modify the look and feel of your Prodcat website by customizing the Docusaurus theme. Docusaurus provides a flexible theming system that allows you to change the colors, fonts, and other visual aspects of your website.

### CSS and styling guidelines

You can add your own custom CSS to your Docusaurus project by creating a `custom.css` file in the `src/css` directory. Docusaurus also supports CSS-in-JS and other styling solutions.

### Customizing Docusaurus components

Docusaurus is built with React, which means you can customize its components by "swizzling" them. Swizzling allows you to replace a default component with your own custom implementation.

## Templates

### Understanding Handlebars templates

Prodcat uses Handlebars templates to generate the Markdown files for your software product pages. Handlebars is a simple templating language that allows you to embed dynamic content in your Markdown files.

### Creating and modifying templates

You can create your own custom templates or modify the existing ones to change the layout and content of your software product pages. The default templates are located in the `templates` directory of your Prodcat project.

- **`landing-page.md.hbs`**: The template for the software products landing page.
- **`products-directory.md.hbs`**: The template for the individual software product pages.