import path from 'path';
import { loadModule } from './moduleLoader.js';

/**
 * Loads product data from a specified JavaScript file using an injected fs dependency.
 *
 * @param {string} productsFilePath - The path to the JavaScript file containing product data.
 * @param {object} dependencies - Injected dependencies.
 * @param {import('fs').promises} dependencies.fs - The file system promises API.
 * @returns {Promise<Array<object>>} A promise that resolves to an array of product objects.
 */
export async function loadProducts(productsFilePath, { fs }) {
  const resolvedProductsFilePath = path.resolve(
    process.cwd(),
    productsFilePath,
  );
  const products = await loadModule(fs, resolvedProductsFilePath);
  return products;
}
