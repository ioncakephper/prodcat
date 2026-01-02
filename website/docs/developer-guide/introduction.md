---
sidebar_position: 1
title: Developer Guide Introduction
sidebar_label: "Introduction"
description: "Welcome to the Prodcat Developer Guide. Learn about Prodcat's system architecture, technology stack (Node.js, Docusaurus, Handlebars), and how to set up your development environment to customize, extend, and contribute to Prodcat."
keywords: ["Prodcat", "developer guide", "Node.js", "Docusaurus", "Handlebars", "CLI", "system architecture", "development setup"]
---

# Introduction

Welcome to the Prodcat Developer Guide. This guide is for developers who want to customize, extend, and contribute to Prodcat.

## Overview

### Prodcat for developers

Prodcat is built with developers in mind. It's a Node.js-based command-line tool that leverages Docusaurus and Handlebars to generate stunning software product documentation websites. This guide will help you understand the project's architecture, how to set up your development environment, and how to get started with customizing and extending Prodcat.

### System architecture overview

Prodcat's architecture is straightforward. It takes a `products.js` file as input, which contains an array of software product objects. It then uses Handlebars templates to generate Markdown files for each software product. These Markdown files are then placed in the Docusaurus `docs` directory, and Docusaurus takes care of building the final HTML website.

<!-- TODO: Incorporate an architectural diagram here illustrating the data flow from products.js through Handlebars templates to Docusaurus and the final website. -->

### Technology stack

Prodcat is built on the following technologies:

- **Node.js:** The runtime environment for the Prodcat CLI.
- **Docusaurus:** The static site generator used to build the documentation website.
- **Handlebars:** The templating engine used to generate Markdown files.
- **Commander.js:** The framework for building the command-line interface.
- **Joi:** The schema validation library used for validating the configuration.

## Getting Started

### Setting up the development environment

To set up your development environment, you'll need to clone the Prodcat repository from GitHub and install the dependencies.

```bash
git clone https://github.com/ioncakephper/prodcat.git
cd prodcat
npm install
```

### Running the project locally

To run the Prodcat CLI locally, you can use the `npm link` command to create a symbolic link to the `prodcat` command.

```bash
npm link
```

Now you can run the `prodcat` command in your terminal.

### Project structure and key files

Here are some of the key files and directories in the Prodcat project:

- **`bin/cli.js`**: The entry point for the Prodcat CLI.
- **`src/index.js`**: The main application logic.
- **`src/commands`**: The directory containing the CLI commands.
- **`src/utils`**: The directory containing utility functions.
- **`templates`**: The directory containing the Handlebars templates.
- **`prodcat.config.js`**: The main configuration file.
- **`products.js`**: The file containing the software product data.