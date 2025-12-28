# prodcat 🐱‍💻

[![NPM Version](https://img.shields.io/npm/v/prodcat?color=blue)](https://www.npmjs.com/package/prodcat)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com)

A CLI to build product directory and landing pages for Docusaurus-powered sites.

## Description

`prodcat` is a command-line tool designed to streamline the creation and maintenance of product documentation for sites built with [Docusaurus](https://docusaurus.io/). It takes a structured list of products from a single source file and uses customizable templates to automatically generate a full directory structure of Markdown pages.

This project solves the tedious and error-prone task of manually creating and updating individual documentation pages for a large catalog of products. By treating your product data as the single source of truth, `prodcat` ensures consistency and dramatically speeds up your documentation workflow.

### Key Features

- **Automated Page Generation**: Instantly scaffold a complete product documentation site from a simple JavaScript data file.
- **Template-Driven Content**: Use [Handlebars](https://handlebarsjs.com/) templates to define the structure and layout of your generated pages, ensuring consistency and customizability.
- **Interactive Setup**: Get started in seconds with the `init` command, which interactively guides you through creating a configuration file.
- **Configuration as Code**: Define your generation pipeline in a simple `prodcat.config.js` file, making your documentation setup version-controllable and easy to replicate.
- **Docusaurus Integration**: Works seamlessly with Docusaurus's file-based routing and can automatically inject navigation links into your site's navbar.

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [CLI Commands](#cli-commands)
- [Configuration](#configuration)
  - [Available Settings](#available-settings)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/) (LTS version 18.x or higher recommended)
- A Docusaurus project (v2 or higher)

### Local Installation (Recommended)

For most use cases, running `prodcat` with `npx` is the recommended approach as it uses the latest version without a global installation.

```bash
npx prodcat --help
```

### Global Installation

If you prefer to have the `prodcat` command available system-wide:

```bash
npm install -g prodcat
```

Verify the installation:

```bash
prodcat --version
```

## Quick Start

Here is a minimal example of how to set up and run `prodcat` in your project.

### 1. Initialize Configuration

Run the `init` command in the root of your repository. It will ask a few questions to create a `prodcat.config.js` file.

```bash
npx prodcat init
```

This will create a `prodcat.config.js` file similar to this:

```javascript
// prodcat.config.js
export default {
  docsRoot: 'website/docs',
  productsFilePath: 'products.js',
  productsOutputPath: 'website/docs/products',
  // ...and other settings
};
```

### 2. Create a Product Data File

Create a `products.js` file (or the name you specified) with an array of your product objects.

```javascript
// products.js
export default [
  {
    name: '4K Smart TV',
    id: '4k-smart-tv-j5k6l', // URL-friendly slug
    description: 'A stunning 4K television with smart features.',
    category: 'Electronics',
  },
  {
    name: 'Noise-Cancelling Headphones',
    id: 'nc-headphones-g3h4i',
    description: 'Immerse yourself in sound.',
    category: 'Audio',
  },
];
```

### 3. Run the Generator

Execute the `generate` command. `prodcat` will read your `products.js` file, process it through the default templates, and write the output files.

```bash
npx prodcat generate
```

### 4. Check the Output

After running, `prodcat` will generate a directory structure inside the path specified by `productsOutputPath`.

```
website/docs/products/
├── 4k-smart-tv-j5k6l/
│   └── index.md
├── nc-headphones-g3h4i/
│   └── index.md
└── index.md
```

The Docusaurus development server will automatically pick up these new files and render them as part of your site.

## CLI Commands

### `prodcat generate`

Generates the product documentation pages.

**Alias**: `g`

**Options**:

- `-i, --input <path>`: (Short for `--input`) Specifies the path to the product data file. Overrides the `productsFilePath` value in your config.
- `--update-navbar`: Injects a link to the products page into the Docusaurus navbar. (Default: `false`)
- `--navbar-label <string>`: The text label for the new navbar link. Defaults to `config.defaultNavbarLabel` (or "Products" if not set).
- `--navbar-position <specifier>`: Position of the link. Formats: `'left'`, `'right'`, `'left:start'`, `'right:end'`, `'before:Label'`, `'after:Label'`. Defaults to `config.defaultNavbarPosition` (or "left" if not set).

#### Example: Updating the Navbar

To automatically add a link to your product catalog in your site's navigation bar, use the `--update-navbar` flag.

```bash
# Generate docs and add a "Catalog" link after the "Docs" link
npx prodcat generate \
  --update-navbar \
  --navbar-label "Catalog" \
  --navbar-position "after:Docs"
```

### `prodcat init`

Starts an interactive wizard to create a `prodcat.config.js` file.

**Alias**: `i`

**Arguments**:

- `[configFile]`: The name of the configuration file to create. (Default: `prodcat.config.js`)

**Options**:

- `-f, --force`: Overwrite an existing configuration file without prompting.
- `-y, --yes`: Skip all interactive prompts and use default values.

## Configuration

`prodcat` is configured via a `prodcat.config.js` file in the root of your project.

**Example `prodcat.config.js`:**

```javascript
export default {
  // Root directory for Docusaurus docs.
  docsRoot: 'website/docs',

  // Path to the JS file containing product data.
  productsFilePath: 'products.js',

  // Directory where generated product pages will be saved.
  productsOutputPath: 'website/docs/products',

  // A pattern for generating product page paths.
  landingPagePathPattern: '{{{ productsOutputPath }}}/{{{ product.id }}}',

  // Defines the template files to use for generation.
  templates: {
    'products-directory': 'templates/products-directory.md.hbs',
    'landing-page': 'templates/landing-page.md.hbs',
  },
};
```

### Available Settings

Here's a detailed breakdown of all available configuration options with the new, clearer naming convention.

#### `defaultNavbarLabel`

- **Type**: `string`
- **Default**: `"Products"`
- **Description**: _(Optional)_ The default text label for the navbar link when using the `--update-navbar` flag without specifying `--navbar-label`.

#### `defaultNavbarPosition`

- **Type**: `string`
- **Default**: `"left"`
- **Description**: _(Optional)_ The default positioning specifier for the navbar link when using the `--update-navbar` flag without specifying `--navbar-position`. Accepts formats like `'left'`, `'right'`, `'before:Label'`, etc.

#### `docsRoot`

- **Type**: `string`
- **Default**: `website/docs`
- **Description**: **(Required)** The root directory of your Docusaurus documentation (`docs` folder). All generated paths are typically relative to this directory.

#### `docusaurusConfigPath`

- **Type**: `string`
- **Default**: `website/docusaurus.config.js`
- **Description**: _(Optional)_ The path to your Docusaurus configuration file. This is required by the `--update-navbar` feature.

#### `landingPagePathPattern`

- **Type**: `string`
- **Default**: `{{{ directoryPath }}}/{{{ product.id }}}`
- **Description**: **(Required)** A Handlebars template string that defines the path structure for individual product landing pages. It supports variables like `directoryPath` (the `productsOutputPath` value) and `product.id`.

#### `productsFilePath`

- **Type**: `string`
- **Default**: `products.js`
- **Description**: **(Required)** The path to the JavaScript file that exports your product data array. This file serves as the single source of truth for all products.

#### `productsOutputPath`

- **Type**: `string`
- **Default**: `website/docs/products`
- **Description**: **(Required)** The base directory where `prodcat` will generate all product-related documentation files (both the product directory index and individual product landing pages).

#### `sidebarsPath`

- **Type**: `string`
- **Default**: `website/sidebars.js`
- **Description**: _(Optional)_ The path to your Docusaurus `sidebars.js` file. Similar to `docusaurusConfigPath`, this is for structural reference.

#### `templates`

- **Type**: `object`
- **Description**: **(Required)** An object where the key is the logical template name and the value is the path to its Handlebars template file. Paths should be relative to your project root.
  - `templates['landing-page']`: Path to the template for individual product pages.
  - `templates['products-directory']`: Path to the template for the main product directory index page.

### Security Note

`prodcat` executes JavaScript files specified in your configuration (`prodcat.config.js`, `products.js`). This is a powerful feature that allows for dynamic data generation. **Only run this tool with configuration files from trusted sources.**

## Performance Considerations

`prodcat` is designed for efficient generation of documentation, but it's important to be aware of certain performance characteristics, especially with large datasets or specific features.

### Product Data Loading

The tool loads the entire product data file (specified by `productsFilePath`) into memory at once. This approach works well for moderately sized product catalogs. However, for very large datasets (e.g., hundreds of thousands or millions of products), loading all data into memory can lead to high memory consumption and potential out-of-memory errors, limiting scalability. If you anticipate extremely large product catalogs, consider alternative data storage solutions (like databases or streamable formats) and a customized data loading mechanism for `prodcat`.

### Navbar Updates

The `--update-navbar` feature (used with the `generate` command) modifies your Docusaurus configuration file (`docusaurus.config.js`) by parsing its JavaScript code into an Abstract Syntax Tree (AST), modifying the AST, and then writing it back. AST manipulation is a computationally intensive process. While performed only once per `generate` command execution, it can add a noticeable overhead. For critical build pipelines or frequent runs, be mindful of this performance cost.

## Development

To set up the development environment for `prodcat` itself:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/prodcat.git
    cd prodcat
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run in development:**
    You can run the CLI directly using `node`:
    ```bash
    node ./bin/cli.js generate --help
    ```

### Running Tests

This project uses Jest for testing. To run the test suite:

```bash
npm test
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request. We recommend creating an issue first to discuss any major changes.

For more details, please see our (forthcoming) `CONTRIBUTING.md` file and be sure to follow our Code of Conduct.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.
