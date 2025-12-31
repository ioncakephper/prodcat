---
sidebar_position: 2
---

# Core Concepts

This section covers the core concepts of Prodcat that you'll need to understand to use it effectively.

## Products

### Understanding product pages

Each product you define in your `products.js` file will have its own dedicated page on the website. This page will display all the information you've provided about the product, such as its name, description, specifications, and images.

### Product attributes and specifications

You can define a variety of attributes for each product, including:

- **`name`:** The name of the product.
- **`description`:** A detailed description of the product.
- **`price`:** The price of the product.
- **`features`:** A list of key features.
- **`specifications`:** A list of technical specifications.

These attributes will be displayed on the product page in a clear and organized format.

## Categories

### Browsing by category

Prodcat allows you to organize your products into categories. This makes it easy for users to browse your products and find what they're looking for. The categories will be listed on a dedicated categories page, and users can click on a category to see all the products within it.

### Understanding category pages

Each category has its own page that lists all the products belonging to that category. This allows for a structured and intuitive browsing experience for the end-user.

## Search

### How to use search effectively

Prodcat's search functionality, powered by Docusaurus and potentially Algolia, is a powerful tool for finding products quickly. Simply type your search query into the search bar at the top of the page, and the results will be displayed instantly.

### Search filters and operators

You can use filters and operators to refine your search results. For example, you can search for products within a specific category or price range. Supported operators include:

- **`"exact phrase"`:** Use quotes to search for an exact phrase.
- **`category:`:** Filter by a specific category (e.g., `category:electronics`).
- **`price:`:** Filter by a price or price range (e.g., `price:<100`).
