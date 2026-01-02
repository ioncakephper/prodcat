---
sidebar_position: 3
title: Installing Prodcat
sidebar_label: "Installation"
description: "Learn how to install Prodcat, a powerful documentation tool. This guide covers prerequisites like Node.js and Docusaurus, and provides instructions for installation using both npx and npm."
keywords: ["Prodcat", "installation", "Node.js", "Docusaurus", "npm", "npx", "setup", "CLI"]
---

# Installation

This guide will walk you through the process of installing Prodcat.

## Prerequisites

Before you can install Prodcat, you need to have the following software installed on your system:

- **Node.js:** Prodcat requires a recent version of Node.js. We recommend using the latest LTS version. You can check your Node.js version by running `node -v` in your terminal.
- **Docusaurus Project:** Prodcat is designed to work with a Docusaurus project. If you don't have one set up, please follow the [Docusaurus installation guide](https://docusaurus.io/docs/installation).

## Installation Methods

There are two ways to install Prodcat:

### Using `npx` (recommended)

The recommended way to use Prodcat is with `npx`, which allows you to run the CLI without installing it globally.

```bash
npx prodcat init my-prodcat-site
```

### Global installation with `npm`

You can also install Prodcat globally using `npm`.

```bash
npm install -g prodcat
```

This will make the `prodcat` command available in your terminal.
