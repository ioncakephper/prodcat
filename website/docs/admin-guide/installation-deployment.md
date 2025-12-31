---
sidebar_position: 1
---

# Installation & Deployment

This guide is for administrators who are responsible for installing, deploying, and maintaining Prodcat.

## Prerequisites

### Server requirements

Prodcat is a Node.js application, so you'll need a server with Node.js installed. We recommend using the latest LTS version of Node.js.

### Software dependencies

-   **Node.js:** Required to run the Prodcat CLI.
-   **npm or yarn:** For package management.
-   **Git:** For version control.

## Installation

### Step-by-step installation guide

1.  **Install Node.js:** If you don't have Node.js installed, you can download it from the [official website](https://nodejs.org/).
2.  **Install Prodcat:** Install Prodcat globally using npm:

    ```bash
    npm install -g prodcat
    ```

3.  **Verify Installation:** Verify that Prodcat is installed correctly by running the following command:

    ```bash
    prodcat --version
    ```

### Configuring the environment

Once you've installed Prodcat, you can initialize a new project by running the `prodcat init` command. This will create a new directory with the basic project structure.

## Deployment

### Building for production

To build your website for production, run the following command in your project directory:

```bash
prodcat generate
```

This will create a production-ready build of your website in the `website/build` directory.

### Deployment strategies

You can deploy your Prodcat website to any static hosting provider. Here are a few popular options:

-   **Netlify:** Netlify is a great option for hosting static websites. It's easy to use and has a generous free tier.
-   **Vercel:** Vercel is another popular option for hosting static websites. It's known for its speed and performance.
-   **Self-hosted:** You can also host your website on your own server. You'll need to configure a web server, such as Nginx or Apache, to serve the static files from the `website/build` directory.

### Continuous integration and deployment (CI/CD)

You can use a CI/CD service, such as GitHub Actions, to automate the process of building and deploying your website. You can set up a workflow that automatically builds and deploys your website whenever you push a change to your Git repository.
