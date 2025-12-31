---
sidebar_position: 2
---

# Configuration

This section explains how to configure Prodcat to meet your needs.

## `prodcat.config.js`

The `prodcat.config.js` file is the main configuration file for Prodcat. It allows you to customize the behavior of the application and the generated website.

### Detailed explanation of all configuration options

-   **`input`:** The directory where your `products.js` file is located.
-   **`output`:** The directory where the generated Markdown files will be created.
-   **`templates`:** The directory where your Handlebars templates are located.
-   **`siteName`:** The name of your website.
-   **`logo`:** The path to your website's logo.
-   **`navbar`:** The configuration for the website's navbar.
-   **`footer`:** The configuration for the website's footer.

### Example configurations

Here's an example of a `prodcat.config.js` file:

```javascript
module.exports = {
  input: './data',
  output: './website/docs/products',
  templates: './templates',
  siteName: 'My Product Catalog',
  logo: '/img/logo.svg',
  navbar: {
    title: 'My Site',
    items: [
      { to: '/docs/intro', label: 'Docs', position: 'left' },
      { href: 'https://github.com/facebook/docusaurus', label: 'GitHub', position: 'right' },
    ],
  },
  footer: {
    style: 'dark',
    links: [],
    copyright: `Copyright © ${new Date().getFullYear()} My Company, Inc.`,
  },
};
```

## `docusaurus.config.js`

The `docusaurus.config.js` file is the main configuration file for Docusaurus. It allows you to customize the Docusaurus instance.

### Configuring the Docusaurus instance

You can use this file to configure various aspects of your Docusaurus website, such as the site's title, tagline, and URL. You can find a complete list of configuration options in the [Docusaurus documentation](https://docusaurus.io/docs/api/docusaurus-config).

### Navbar and footer configuration

While you can configure the navbar and footer in `prodcat.config.js`, you can also configure them directly in `docusaurus.config.js`. This is useful if you want to take advantage of more advanced Docusaurus features that are not exposed by Prodcat.

### Search integration (e.g., Algolia)

Docusaurus has built-in support for Algolia search. To enable it, you need to add an `algolia` section to your `docusaurus.config.js` file with your Algolia API key and index name.

```javascript
module.exports = {
  // ...
  themeConfig: {
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
    },
  },
};
```

## Environment Variables

### Managing environment-specific settings

You can use environment variables to manage environment-specific settings, such as API keys and other secrets. Docusaurus has built-in support for environment variables. You can create a `.env` file in the `website` directory and Docusaurus will automatically load the variables from it.

### Security best practices

-   Never commit your `.env` file to version control.
-   Use a secret management service, such as HashiCorp Vault or AWS Secrets Manager, to manage your secrets in production.
-   Don't expose sensitive information in your client-side code.
