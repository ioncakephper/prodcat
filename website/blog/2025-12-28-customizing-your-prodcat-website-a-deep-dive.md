---
title: "Customizing Your Prodcat Website: A Deep Dive"
authors: ioncakephper
tags: [prodcat, customization, theming, templates]
---

One of the great things about Prodcat is that it's highly customizable. In this article, we'll take a deep dive into the different ways you can customize your Prodcat website to match your brand and meet your needs.

<!--truncate-->

## Theming

The easiest way to customize your Prodcat website is by modifying the CSS. Prodcat uses the Infima CSS framework, which is highly customizable. You can change the color palette, typography, and other aspects of the design by modifying the `website/src/css/custom.css` file.

You can also customize the Docusaurus components by "swizzling" them. Swizzling allows you to replace a theme component with your own implementation. This is a powerful feature that gives you full control over the markup and logic of the components.

## Templates

Prodcat uses Handlebars to generate the Markdown files for your product pages and directories. The templates are located in the `templates` directory of your Prodcat project. You can modify these templates to change the structure and content of the generated Markdown files.

For example, you could add new sections to the product pages or change the layout of the product directory. The templates are written in Handlebars, which is a simple and powerful templating language.

## Configuration

Prodcat has two main configuration files: `prodcat.config.js` and `website/docusaurus.config.js`. These files allow you to customize various aspects of your website, such as the site's title, logo, navbar, and footer.

You can also use these files to configure more advanced features, such as search integration and internationalization.

## Plugins

Finally, you can extend the functionality of Prodcat by creating your own plugins. The plugin system allows you to add new commands to the CLI, modify the build process, or integrate with other tools and services.

This is an advanced feature that requires some knowledge of Node.js and the Prodcat codebase. But it's a powerful way to extend the functionality of Prodcat and tailor it to your specific needs.

## Conclusion

In conclusion, Prodcat is a highly customizable tool that allows you to create a product documentation website that's a perfect fit for your brand. Whether you're a beginner or an experienced developer, you'll find plenty of ways to customize your Prodcat website and make it your own.
