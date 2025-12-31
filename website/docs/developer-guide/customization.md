---
sidebar_position: 3
---

# Customization

Prodcat is designed to be highly customizable, allowing you to tailor the look and feel of your website to match your brand.

## Theming

### Modifying the look and feel

You can customize the look and feel of your website by modifying the CSS files in the `website/src/css` directory. The `custom.css` file is the best place to add your own custom styles.

Docusaurus uses the Infima CSS framework. You can customize the Infima variables to change the color palette, typography, and other aspects of the design. You can find more information in the [Docusaurus Theming documentation](https://docusaurus.io/docs/styling-layout).

### CSS and styling guidelines

When adding your own CSS, try to follow these guidelines:

-   Use BEM (Block, Element, Modifier) naming conventions for your CSS classes.
-   Avoid using global CSS selectors.
-   Keep your CSS modular and organized.

### Customizing Docusaurus components

Docusaurus is built with React, and it allows you to "swizzle" components to customize them. Swizzling allows you to replace a theme component with your own implementation. This is a powerful feature that gives you full control over the markup and logic of the components.

You can find more information on how to swizzle components in the [Docusaurus Swizzling documentation](https://docusaurus.io/docs/swizzling).

## Templates

### Understanding Handlebars templates

Prodcat uses Handlebars to generate the Markdown files for your product pages and directories. The templates are located in the `templates` directory of the Prodcat project.

-   `landing-page.md.hbs`: This template is used to generate the main landing page for your products.
-   `products-directory.md.hbs`: This template is used to generate the individual product pages.

### Creating and modifying templates

You can modify these templates to change the structure and content of the generated Markdown files. For example, you could add new sections to the product pages or change the layout of the product directory.

The templates are written in Handlebars, which is a simple and powerful templating language. You can find more information on how to use Handlebars in the [Handlebars documentation](https://handlebarsjs.com/).
