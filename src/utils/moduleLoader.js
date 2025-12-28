// src/utils/moduleLoader.js
import { pathToFileURL } from 'url';
import * as path from 'path'; // Import the path module as a namespace import
import { importModule as defaultImportModule } from './moduleImporter.js';

/**
 * Checks if a file exists at the given path.
 * @param {import('fs').promises} fs - The file system promises API.
 * @returns {Promise<boolean>}
 */
async function fileExists(fs, filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Helper function to dynamically load a module from a given file path.
 * Uses an injected fs dependency for testability.
 *
 * @param {import('fs').promises} fs - The file system promises API.
 * @param {string} filePath - The path to the module file.
 * @param {(moduleURL: URL) => Promise<object>} [importModuleFunc=defaultImportModule] - Function to dynamically import a module, for testability.
 * @returns {Promise<object>} A promise that resolves to the module's export, or an empty object if the file doesn't exist.
 */
export async function loadModule(
  fs,
  filePath,
  importModuleFunc = defaultImportModule,
) {
  // Resolve the filePath to an absolute path to ensure correct module loading
  const absoluteFilePath = path.resolve(process.cwd(), filePath);

  if (await fileExists(fs, absoluteFilePath)) {
    const moduleURL = pathToFileURL(absoluteFilePath);
    const module = await importModuleFunc(moduleURL);
    return module.default || module;
  }
  return {};
}
