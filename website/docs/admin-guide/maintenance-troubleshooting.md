---
sidebar_position: 3
---

# Maintenance & Troubleshooting

This guide provides information on how to maintain and troubleshoot your Prodcat installation.

## Upgrading Prodcat

### Versioning and release notes

Prodcat follows semantic versioning. You can find the release notes for each version on the [GitHub releases page](https://github.com/your-repo/prodcat/releases).

### Step-by-step upgrade process

1.  **Check for new releases:** Regularly check the GitHub releases page for new versions of Prodcat.
2.  **Backup your project:** Before upgrading, it's always a good idea to create a backup of your project.
3.  **Update the package:** Run `npm install prodcat@latest` to update to the latest version.
4.  **Check for breaking changes:** Review the release notes for any breaking changes and update your project accordingly.

## Backup & Restore

### Backup procedures for content and configuration

To back up your Prodcat project, you should back up the following files and directories:

- `prodcat.config.js`
- `products.js`
- `website/docusaurus.config.js`
- `website/sidebars.js`
- `website/docs`
- `website/src`

### Restoring from a backup

To restore from a backup, simply copy the backed-up files and directories back into your project.

## Troubleshooting

### Common issues and solutions

- **`command not found: prodcat`**: This error occurs when the `prodcat` command is not in your system's `PATH`. If you installed Prodcat globally, make sure that your `npm` global `bin` directory is in your `PATH`. If you are running it locally, make sure you are in the project's root directory.
- **`Error: Cannot find module '...'`**: This error occurs when a required module is not installed. Run `npm install` to install all the dependencies.

### Logging and diagnostics

Prodcat uses the `debug` library for logging. To enable debug logging, set the `DEBUG` environment variable to `prodcat`.

```bash
DEBUG=prodcat prodcat generate
```

### Getting support

If you need help, you can:

- **Check the FAQ:** The FAQ section may have the answer to your question.
- **Ask on GitHub:** Post your question on the [GitHub Issues](https://github.com/your-repo/prodcat/issues) page.
- **Contact Support:** For urgent issues, please contact our support team.