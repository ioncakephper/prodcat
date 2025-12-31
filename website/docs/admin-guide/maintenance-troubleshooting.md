---
sidebar_position: 3
---

# Maintenance & Troubleshooting

This guide provides information on how to maintain and troubleshoot your Prodcat installation.

## Upgrading Prodcat

### Versioning and release notes

Prodcat follows semantic versioning. You can find the release notes for each version on the [GitHub Releases](https://github.com/your-repo/prodcat/releases) page.

### Step-by-step upgrade process

To upgrade to a new version of Prodcat, run the following command:

```bash
npm install -g prodcat@latest
```

After upgrading, be sure to check the release notes for any breaking changes that may affect your project.

## Backup & Restore

### Backup procedures for content and configuration

To back up your Prodcat project, you should create a backup of the following files and directories:

-   `products.js`: Your product data.
-   `prodcat.config.js`: Your Prodcat configuration.
-   `website/docusaurus.config.js`: Your Docusaurus configuration.
-   `website/src`: Your custom CSS and React components.
-   `website/docs`: Your custom documentation pages.
-   `templates`: Your custom Handlebars templates.

### Restoring from a backup

To restore your project from a backup, simply replace the files and directories in your project with the ones from your backup.

## Troubleshooting

### Common issues and solutions

-   **Command not found:** If you get a "command not found" error when running `prodcat`, make sure that you have installed Prodcat globally and that the npm global bin directory is in your system's PATH.
-   **Build errors:** If you get an error when running `prodcat generate`, check the error message for clues about what went wrong. The most common cause of build errors is a syntax error in your `products.js` or `prodcat.config.js` file.

### Logging and diagnostics

Prodcat uses the `debug` library for logging. To enable debug logging, set the `DEBUG` environment variable to `prodcat:*`.

```bash
DEBUG=prodcat:* prodcat generate
```

### Getting support

If you're still having trouble, you can get support by:

-   **Checking the FAQ:** The FAQ section may have the answer to your question.
-   **Asking on GitHub:** Post your question on the [GitHub Issues](https://github.com/your-repo/prodcat/issues) page.
-   **Contacting Support:** For urgent issues, please contact our support team.
