---
sidebar_position: 7
title: Deploying Your Prodcat Site
description: Learn how to deploy your Prodcat-generated documentation website to various hosting providers.
keywords: [Prodcat, deploy, Docusaurus, GitHub Pages, Netlify, Vercel, hosting]
---

# Deploying Your Prodcat Site

Once your Prodcat documentation website is generated, deploying it is essentially the same as deploying any Docusaurus site. This tutorial will cover common deployment strategies.

## 1. Build Your Docusaurus Site

Before deploying, you need to build your static Docusaurus site. Navigate to your `website` directory and run the build command:

```bash
cd website
npm run build
```

This command will create a `build` directory (e.g., `website/build`) containing all the static HTML, CSS, and JavaScript files for your website.

## 2. Choose a Hosting Provider

Docusaurus generates static sites, which can be hosted on a variety of platforms. Popular choices include:

*   **GitHub Pages**: Excellent for open-source projects.
*   **Netlify**: Offers continuous deployment from Git, custom domains, and more.
*   **Vercel**: Similar to Netlify, popular for Jamstack applications.
*   **Firebase Hosting**: Google's hosting solution.
*   **Amazon S3 / Google Cloud Storage**: For more manual control or integration with other cloud services.

## 3. Deployment Steps (Example: GitHub Pages)

If you're hosting on GitHub Pages, you might use the `docusaurus deploy` command or a GitHub Actions workflow.

### Using `docusaurus deploy`

First, ensure your `docusaurus.config.js` has the correct `url` and `baseUrl` properties set.

```javascript
// docusaurus.config.js
const config = {
  url: 'https://your-username.github.io', // Your GitHub Pages URL
  baseUrl: '/your-repo-name/', // Base URL for your repository
  // ...
};
```

Then, run the deploy command from your `website` directory:

```bash
cd website
npm run deploy
```

This typically pushes the contents of your `build` directory to the `gh-pages` branch of your GitHub repository.

### Using GitHub Actions

For continuous deployment, you can set up a GitHub Actions workflow that builds and deploys your Docusaurus site every time you push to your main branch. Consult the Docusaurus documentation for a sample GitHub Actions workflow.

## 4. Keeping Your Live Site Updated

Remember that after you make changes to your `products.js`, `prodcat.config.js`, or any templates:

1.  Run `prodcat generate`.
2.  Navigate to your `website` directory.
3.  Run `npm run build`.
4.  Deploy the updated `build` directory to your hosting provider.

Automating these steps with CI/CD (Continuous Integration/Continuous Deployment) is highly recommended for larger projects.
