import path from 'path';
import { fileURLToPath } from 'url';
import { loadModule } from './moduleLoader.js';
import { RC_FILE_NAME } from '../constants.js';
import { validateAndResolvePath } from './pathValidator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function fileExists(fs, filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Recursively merges properties of two objects.
 * Properties in `source` will overwrite properties in `target`.
 * If a property is an object in both, it will be merged recursively.
 * If a property is an array, it will be replaced by the source array.
 * @param {object} target - The object to merge into.
 * @param {object} source - The object providing properties to merge.
 * @returns {object} The merged object.
 */
function deepMerge(target, source) {
  const output = { ...target };

  if (
    target &&
    typeof target === 'object' &&
    source &&
    typeof source === 'object'
  ) {
    Object.keys(source).forEach((key) => {
      if (
        source[key] &&
        typeof source[key] === 'object' &&
        !Array.isArray(source[key]) &&
        target[key] &&
        typeof target[key] === 'object' &&
        !Array.isArray(target[key])
      ) {
        output[key] = deepMerge(target[key], source[key]);
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

/**
 * Loads configuration from multiple sources, merging them in order of precedence.
 * Precedence: default < .prodcatrc.js < user-specified.
 *
 * @param {string} configPath - Optional path to a user-defined configuration file.
 * @param {object} dependencies - Injected dependencies.
 * @param {import('fs').promises} dependencies.fs - The file system promises API.
 * @param {object} dependencies.logger - The logger instance.
 * @returns {Promise<object>} A promise that resolves to the merged configuration object.
 */
export async function loadConfig(configPath, { fs, logger }) {
  const defaultConfigPath = path.resolve(
    __dirname,
    '../../config/default.config.js',
  );
  const rcConfigPath = path.resolve(process.cwd(), RC_FILE_NAME);

  // Load default and RC config in parallel
  const [defaultConfig, rcConfig] = await Promise.all([
    loadModule(fs, defaultConfigPath),
    loadModule(fs, rcConfigPath),
  ]);

  let userConfig = {};
  if (configPath) {
    // SECURITY: Validate the user-provided path to prevent traversal attacks.
    const resolvedConfigPath = validateAndResolvePath(
      process.cwd(),
      configPath,
    );
    userConfig = await loadModule(fs, resolvedConfigPath);
    if (
      Object.keys(userConfig).length === 0 &&
      (await fileExists(fs, resolvedConfigPath))
    ) {
      logger.warn(
        `User config file at '${resolvedConfigPath}' was found but appears empty or invalid.`,
      );
    }
  }

  // Replace shallow merge with deep merge
  let mergedConfig = deepMerge(defaultConfig, rcConfig);
  mergedConfig = deepMerge(mergedConfig, userConfig);
  return mergedConfig;
}
