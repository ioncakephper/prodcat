// src/types/prodcat.d.ts

export interface ProductSpec {
  id?: string;
  name: string;
  description?: string;
  category?: string;
  docEntry?: string;
  [key: string]: any;
}

export interface TemplatesMap {
  'products-directory': string;
  'landing-page': string;
  // Add other templates here as needed
}

export interface ProdcatConfig {
  docsRoot: string; // Renamed from siteRoot
  productsFilePath: string; // Renamed from productsFile
  productsOutputPath: string; // Renamed from productsDirectoryPath
  landingPagePathPattern: string; // Renamed from landingPagesPath

  docusaurusConfigPath?: string;
  sidebarsPath?: string;

  defaultNavbarLabel?: string;
  defaultNavbarPosition?: string;

  templates: TemplatesMap;
  // templatesPath removed.
}
