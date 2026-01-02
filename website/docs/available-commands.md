---
sidebar_position: 4
title: Available Prodcat Commands
sidebar_label: "Available Commands"
description: "Explore the available commands for the Prodcat CLI. This guide details the `prodcat init` and `prodcat generate` commands, including their options, usage, and the files they create."
keywords: ["Prodcat", "CLI", "commands", "init", "generate", "Docusaurus", "documentation"]
---

# Available Commands

Prodcat provides two main commands to help you manage your software product documentation website.

## `prodcat init`

The `prodcat init` command initializes a new Prodcat project.

### What it does

When you run `prodcat init`, it creates a `prodcat.config.js` file in your project's root directory. This file contains the default configuration for your Prodcat website.

### Command options

- **`--force`**: Overwrites an existing `prodcat.config.js` file.
- **`--yes`** or **`-y`**: Skips the confirmation prompt and proceeds with the initialization.

### Files created

- **`prodcat.config.js`**: The main configuration file for your Prodcat project.

## `prodcat generate`

The `prodcat generate` command generates the software product documentation website.

### How to use it

To generate your website, simply run the `prodcat generate` command in your project's root directory.

```bash
prodcat generate
```

### Command options

- **`--input`**: Specifies the path to your `products.js` file. Defaults to `./products.js`.
- **`--update-navbar`**: Automatically updates the Docusaurus navbar to include a link to the software products page.
- **`--navbar-label`**: The label for the navbar link (e.g., "Our Products").
- **`--navbar-position`**: The position of the navbar link (`left` or `right`).

### Output produced

The `prodcat generate` command creates a directory structure for your software products within the Docusaurus `docs` directory, along with a landing page for your software products.
