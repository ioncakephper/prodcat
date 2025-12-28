// src/utils/loadPackageJson.js
import path from 'path';
import { PACKAGE_JSON } from '../constants.js';

/**
 * Loads and parses the package.json file.
 *
 * @param {object} dependencies - Injected dependencies.
 * @param {import('fs').promises} dependencies.fs - The file system promises API.
 * @returns {Promise<object>} A promise that resolves to the parsed content of package.json.
 * @throws {Error} If the package.json file cannot be read or parsed.
 */
export async function loadPackageJson({ fs }) {
  const packageJsonPath = path.resolve(process.cwd(), PACKAGE_JSON);
  try {
    const fileContent = await fs.readFile(packageJsonPath, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`package.json not found at ${packageJsonPath}`);
    }
    throw new Error(`Failed to load or parse package.json: ${error.message}`);
  }
}
