---
sidebar_position: 2
title: Administrator Configuration Guide
sidebar_label: "Configuration"
description: "Administrator's guide to configuring Prodcat. Learn how to configure `prodcat.config.js`, `docusaurus.config.js` (including navbar, footer, and search integration with Algolia), manage environment variables, and follow security best practices."
keywords: ["Prodcat", "configuration", "docusaurus.config.js", "Algolia", "environment variables", "security", "admin guide"]
---

# Configuration

This guide explains how to configure your Prodcat installation and Docusaurus website.

## `prodcat.config.js`

The `prodcat.config.js` file is the main configuration file for Prodcat.

### Detailed explanation of all configuration options

Please refer to the [User Guide's Configuration section](../configuration) for a detailed explanation of all the options available in `prodcat.config.js`.

### Example configurations

Please refer to the [User Guide's Configuration section](../configuration) for example configurations.

## `docusaurus.config.js`

The `docusaurus.config.js` file is the main configuration file for your Docusaurus website.

### Configuring the Docusaurus instance

In this file, you can configure the site's title, tagline, URL, and other metadata. You can also configure plugins, themes, and presets.

### Navbar and footer configuration

You can customize the navbar and footer of your website by editing the `navbar` and `footer` objects in `docusaurus.config.js`.

### Search integration (e.g., Algolia)

Docusaurus has built-in support for Algolia DocSearch. To enable it, you need to apply to the DocSearch program and then add your Algolia API keys to `docusaurus.config.js`.

## Environment Variables

### Managing environment-specific settings

You can use environment variables to manage different settings for your development and production environments. For example, you can use a different `baseUrl` for development and production.

### Security best practices

- **Do not commit sensitive information:** Never commit API keys, passwords, or other sensitive information to your version control system. Use environment variables or a secrets management system to store this information.
- **Keep your dependencies up to date:** Regularly update your dependencies to ensure that you have the latest security patches.
- **Follow Docusaurus security best practices:** Refer to the [Docusaurus documentation](https://docusaurus.io/docs/security) for more information on securing your website.