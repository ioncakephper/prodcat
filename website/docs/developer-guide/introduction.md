---
sidebar_position: 1
---

# Introduction

This guide is for developers who want to extend, customize, or contribute to Prodcat.

## Overview

### Prodcat for developers

Prodcat is built with developers in mind. It's a Node.js application that uses Docusaurus to generate static websites. The codebase is written in JavaScript and is designed to be modular and extensible.

### System architecture overview

Prodcat's architecture is straightforward. The core of the application is a CLI that provides commands for initializing a project, generating a website, and more. The CLI reads a `products.js` file and uses Handlebars templates to generate Markdown files for Docusaurus. Docusaurus then takes these Markdown files and generates a static HTML website.

### Technology stack

- **Node.js:** The runtime environment for the Prodcat CLI.
- **Docusaurus:** The static site generator used to create the website.
- **Handlebars:** The templating engine used to generate Markdown files.
- **Jest:** The testing framework used for unit and integration tests.
- **ESLint and Prettier:** For code linting and formatting.

## Getting Started

### Setting up the development environment

1.  **Clone the repository:** `git clone https://github.com/your-repo/prodcat.git`
2.  **Install dependencies:** `npm install`
3.  **Link the package:** `npm link` to make the `prodcat` command available globally.

### Running the project locally

Once you've set up the development environment, you can run the project locally.

-   `prodcat init my-test-site`: Initialize a new test project.
-   `cd my-test-site`: Navigate into the new project directory.
-   `prodcat generate`: Generate the website.
-   `cd website`: Navigate into the website directory.
-   `npm start`: Start the Docusaurus development server.

### Project structure and key files

-   `bin/cli.js`: The main entry point for the CLI.
-   `src/commands`: Contains the logic for the different CLI commands.
-   `src/utils`: Contains utility functions used throughout the application.
-   `templates`: Contains the Handlebars templates used to generate the Markdown files.
-g   `products.js`: The file where you define your products.
-   `prodcat.config.js`: The main configuration file for Prodcat.
-   `website`: The directory that contains the generated Docusaurus website.
