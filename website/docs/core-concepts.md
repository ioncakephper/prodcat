---
sidebar_position: 2
---

# Core Concepts

This section covers the core concepts of Prodcat that you'll need to understand to use it effectively.

## Software Products

### Understanding software product pages

Each software product you define in your `products.js` file will have its own dedicated page on the website. This page will display all the information you've provided about the software product, such as its name, title, description, and front matter.

### Software Product attributes

You can define a variety of attributes for each software product, including:

- **`name`:** The name of the software product.
- **`id`:** A unique identifier for the software product.
- **`title`:** A short, descriptive title for the software product.
- **`description`:** A detailed description of the software product.
- **`frontMatter`:** An object containing `description` and `summary` properties for the front matter of the generated page.

These attributes will be displayed on the software product page in a clear and organized format.

## Categories

### Browsing by category

Prodcat allows you to organize your software products into categories. This makes it easy for users to browse your software products and find what they're looking for. The categories will be listed on a dedicated categories page, and users can click on a category to see all the software products within it.

### Understanding category pages

Each category has its own page that lists all the software products belonging to that category. This allows for a structured and intuitive browsing experience for the end-user.

## Search

### How to use search effectively

Prodcat's search functionality, powered by Docusaurus and potentially Algolia, is a powerful tool for finding software products quickly. Simply type your search query into the search bar at the top of the page, and the results will be displayed instantly.

### Search filters and operators

You can use filters and operators to refine your search results. For example, you can search for software products within a specific category. Supported operators include:

- **`"exact phrase"`:** Use quotes to search for an exact phrase.
- **`category:`:** Filter by a specific category (e.g., `category:productivity`).
