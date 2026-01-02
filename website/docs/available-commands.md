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

The `prodcat init` command initializes a new Prodcat project by creating a `prodcat.config.js` file in your project's root directory.

### Syntax

```bash
prodcat init [options]
```

### Options

| Option      | Type      | Description                                                    |
| :---------- | :-------- | :------------------------------------------------------------- |
| `--force`   | `boolean` | Overwrites an existing `prodcat.config.js` file if it exists.  |
| `--yes`, `-y` | `boolean` | Skips the confirmation prompt and proceeds with initialization. |

### Examples

#### Initialize a new project with default settings

```bash
prodcat init
```

#### Initialize and force overwrite an existing configuration

```bash
prodcat init --force
```

#### Initialize without prompt (non-interactive)

```bash
prodcat init -y
```

## `prodcat generate`

The `prodcat generate` command processes your `products.js` file and Handlebars templates to create the software product documentation website within your Docusaurus project.

### Syntax

```bash
prodcat generate [options]
```

<!-- TODO: Incorporate a flowchart here illustrating the steps involved in the `prodcat generate` command, from input (products.js, templates) to output (generated Markdown files in Docusaurus docs directory). -->

### Options

| Option             | Type     | Default       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| :----------------- | :------- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--input`          | `string` | `./products.js` | Specifies the path to your `products.js` file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `--update-navbar`  | `boolean`| `false`       | When set to `true`, Prodcat will automatically modify your Docusaurus configuration (`docusaurus.config.js`) to include a link to the generated software products directory page in the main navigation bar. This simplifies integration for content creators and technical writers, ensuring the catalog is easily discoverable. If this option is omitted or set to `false`, you will need to manually add the navigation link to your `docusaurus.config.js` file.                                                                                                                                                                                                     |
| `--navbar-label`   | `string` | `'Products'`  | Specifies the text label that will be displayed for the navigation bar link. This option is only effective when `--update-navbar` is set to `true`. Use this to customize how the link appears in your Docusaurus site's header (e.g., "Our Products", "Software Catalog", "Solutions").                                                                                                                                                                                                                                                                                                                                                                                       |
| `--navbar-position`| `string` | `'left'`      | Determines the position of the navigation bar link within the Docusaurus site's header. This option is only effective when `--update-navbar` is set to `true`. Valid values are `'left'` or `'right'`. This allows you to control the placement of the product catalog link relative to other navigation items. For detailed usage and examples, refer to the "Updating the Docusaurus Navigation Bar" section below.                                                                                                                                                                                                                                                               |

#### Updating the Docusaurus Navigation Bar

The `prodcat generate` command offers convenient options to automatically integrate a link to your software product directory page into your Docusaurus website's navigation bar. This feature is controlled by the `--update-navbar`, `--navbar-label`, and `--navbar-position` options.

**How it Works:**

When `--update-navbar` is set to `true`, Prodcat will automatically locate your `docusaurus.config.js` file (as defined in `prodcat.config.js`) and inject a new navigation item into its `themeConfig.navbar.items` array.

**Important Considerations:**

-   If you have a complex or highly customized `docusaurus.config.js` with specific navigation logic, it's recommended to manually add the navigation item to avoid unexpected changes.
-   Prodcat will attempt to add the link as a new item. If an item with the same `label` or `to` path already exists, it might create a duplicate or require manual adjustment.

**Navigation Item Structure:**

Prodcat adds an item similar to this to your `docusaurus.config.js` `navbar.items` array:

```javascript
{
  type: 'doc', // or 'docSidebar' depending on Docusaurus version/config
  docId: 'products/index', // Assumes your landing page is products/index.md
  position: 'left', // Configurable via --navbar-position
  label: 'Products', // Configurable via --navbar-label
}
```

**Position Combinations:**

You can control the placement and label of the navigation link using `navbar-label` and `navbar-position`.

-   **`--update-navbar --navbar-label "Our Products" --navbar-position left`**
    -   Adds a navigation link labeled "Our Products" to the left side of your Docusaurus navbar.
    ```bash
    prodcat generate --update-navbar --navbar-label "Our Products" --navbar-position left
    ```
    *(Result in `docusaurus.config.js` example)*:
    ```javascript
    navbar: {
      items: [
        {
          type: 'doc',
          docId: 'products/index',
          position: 'left',
          label: 'Our Products',
        },
        // ... other left-aligned items
      ],
    },
    ```

-   **`--update-navbar --navbar-label "Catalog" --navbar-position right`**
    -   Adds a navigation link labeled "Catalog" to the right side of your Docusaurus navbar.
    ```bash
    prodcat generate --update-navbar --navbar-label "Catalog" --navbar-position right
    ```
    *(Result in `docusaurus.config.js` example)*:
    ```javascript
    navbar: {
      items: [
        // ... other left-aligned items
        {
          type: 'doc',
          docId: 'products/index',
          position: 'right',
          label: 'Catalog',
        },
        // ... other right-aligned items
      ],
    },
    ```

This functionality streamlines the process of integrating your Prodcat-generated content into your main Docusaurus site navigation, making your product catalog easily accessible to your audience.

### Examples

#### Generate website with default settings

```bash
prodcat generate
```

#### Generate website using a custom products file

```bash
prodcat generate --input data/my-products.js
```

#### Generate website and update navbar with a custom label and position

```bash
prodcat generate --update-navbar --navbar-label "Our Solutions" --navbar-position right
```

### Output produced

The `prodcat generate` command creates a directory structure for your software products within the Docusaurus `docs` directory (as configured in `prodcat.config.js`), along with a landing page for your software products.

<!-- TODO: Add a screenshot of the CLI output after running `prodcat generate` successfully. -->
<!-- TODO: Add a screenshot of the generated directory structure within `website/docs` after running `prodcat generate`. -->
