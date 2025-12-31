---
sidebar_position: 4
---

# Advanced Topics

This section covers advanced topics for developers who want to take Prodcat to the next level.

## Plugin System

### Extending Prodcat with plugins

Prodcat has a plugin system that allows you to extend its functionality without modifying the core code. Plugins can be used to add new commands to the CLI, modify the build process, or integrate with other tools and services.

### Plugin development guide

To create a plugin, you need to create a new npm package that exports a function. This function will be called by Prodcat and will be passed an object with the following properties:

-   `registerCommand`: A function that allows you to register a new command with the CLI.
-   `on`: A function that allows you to listen for events that are emitted by Prodcat during the build process.

Here's an example of a simple plugin that adds a new `hello` command to the CLI:

```javascript
module.exports = (api) => {
  api.registerCommand('hello', () => {
    console.log('Hello from my plugin!');
  });
};
```

## API Reference

### Overview of available APIs

Prodcat provides a set of APIs that you can use to interact with the application programmatically. These APIs can be used to build your own custom integrations or to automate tasks.

The main API is the `Prodcat` class, which is located in `src/index.js`. This class provides methods for initializing a project, generating a website, and more.

### Using the Prodcat API for data retrieval

You can use the Prodcat API to retrieve product data and other information from your project. Here's an example of how you can use the API to get a list of all your products:

```javascript
const Prodcat = require('prodcat');

const prodcat = new Prodcat();
const products = prodcat.getProducts();

console.log(products);
```
