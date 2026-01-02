---
sidebar_position: 1
title: Installation & Deployment Guide
sidebar_label: "Installation & Deployment"
description: "Learn how to install and deploy your Prodcat documentation website. This guide covers server requirements, software dependencies, step-by-step installation, and deployment strategies for platforms like Netlify and Vercel, including CI/CD."
keywords: ["Prodcat", "installation", "deployment", "Docusaurus", "Node.js", "Netlify", "Vercel", "CI/CD", "web server"]
---

# Installation & Deployment

This guide provides instructions for installing and deploying your Prodcat documentation website.

## Prerequisites

### Server requirements

- A web server (e.g., Apache, Nginx)
- Node.js and npm

### Software dependencies

- Docusaurus
- Prodcat

## Installation

### Step-by-step installation guide

1.  **Install Node.js and npm:** Follow the official instructions to install Node.js and npm on your server.
2.  **Install Docusaurus:** Use `npx` to create a new Docusaurus site: `npx create-docusaurus@latest my-website classic`.
3.  **Install Prodcat:** Install Prodcat in your Docusaurus project: `npm install prodcat`.

### Configuring the environment

- Set up your environment variables for development and production.
- Configure your web server to serve the Docusaurus build output.

## Deployment

### Building for production

Run the following command to build a production-ready version of your website:

```bash
npm run build
```

This will generate a `build` directory with static HTML, CSS, and JavaScript files.

### Deployment strategies

You can deploy your Prodcat website to various hosting platforms:

- **Netlify:** A popular choice for hosting static websites with continuous deployment.
- **Vercel:** Another excellent platform for deploying Docusaurus sites.
- **Self-hosted:** You can host the `build` directory on your own web server.

### Continuous integration and deployment (CI/CD)

Set up a CI/CD pipeline with GitHub Actions, GitLab CI, or Jenkins to automate the build and deployment process whenever you push changes to your repository.