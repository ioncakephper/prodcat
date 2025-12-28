import { Command } from 'commander';
import { promises as fs } from 'fs';
import readline from 'readline';
import logger from './utils/logger.js';
import { loadCommands } from './utils/commandLoader.js';
import { loadConfig } from './utils/loadConfig.js';
import { loadProducts as loadProductsFunc } from './utils/loadProducts.js';
import { configSchema } from './utils/configSchema.js';
import { loadPackageJson as loadPackageJsonFunc } from './utils/loadPackageJson.js';
import { loadModule as loadModuleFunc } from './utils/moduleLoader.js'; // Import loadModuleFunc
import { importModule as defaultImportModuleFunc } from './utils/moduleImporter.js'; // Import default importModuleFunc
import { COMMANDS_DIR, CONFIG_FILE_NAME } from './constants.js';
import { ZodError } from 'zod';

// Define global options here for clarity and reusability
const GLOBAL_OPTIONS = [
  ['-v, --verbose', 'enable verbose logging'],
  ['-c, --config <path>', 'config file path', CONFIG_FILE_NAME],
];

/**
 * Creates and configures the Commander.js program instance for the CLI.
 * This function is the "composition root" of the application, where all
 * dependencies are instantiated and wired together.
 *
 * @param {import('commander').Command} program - The Commander.js program instance.
 * @param {object} initialGlobalOptions - Object containing globally parsed options like verbose and config path.
 * @returns {Promise<import('commander').Command>} A Promise that resolves to the configured program.
 */
export async function createProgram(program, initialGlobalOptions) {
  // --- Dependency Injection and Setup ---

  // 1. Configure Logger: Set verbosity as early as possible based on initial global options.
  if (initialGlobalOptions.verbose) {
    logger.setVerbose(true);
  }

  // 2. Create Base Dependencies: These are the lowest-level services.
  const baseDependencies = {
    logger,
    fs,
    readline,
  };

  // 3. Load package.json and set program metadata
  const packageJson = await loadPackageJsonFunc(baseDependencies);
  program
    .name(packageJson.name || 'prodcat-cli')
    .version(packageJson.version || '0.0.0')
    .description(packageJson.description || 'A CLI application');

  // Add global options to the program for help text and final parsing
  GLOBAL_OPTIONS.forEach((opt) => program.option(...opt));

  program.configureHelp({
    sortSubcommands: true,
    sortOptions: true,
  });

  // 4. Load Configuration: Inject dependencies into the config loader.
  let config = await loadConfig(initialGlobalOptions.config, baseDependencies);
  try {
    config = configSchema.parse(config); // Validate the loaded config
    logger.debug('Loaded and validated configuration:', config);
  } catch (error) {
    if (error instanceof ZodError) {
      logger.error(
        'Configuration validation failed. Please check your configuration against the schema:',
      );
      error.errors.forEach((err) => {
        logger.error(`  - ${err.path.join('.')}: ${err.message}`);
      });
      logger.error(
        '\nFor more details, refer to the configuration documentation or schema.',
      );
      throw error; // Throw the ZodError instead of exiting
    } else {
      throw error; // Re-throw other errors
    }
  }

  // 5. Create Higher-Level Services with baked-in dependencies
  const loadProducts = (productsFilePath) =>
    loadProductsFunc(productsFilePath, { fs: baseDependencies.fs });

  const loadPackageJson = () => loadPackageJsonFunc(baseDependencies); // Pre-configured version for commands

  // Pre-configure loadModule with the file system dependency
  const loadModule = (filePath) =>
    loadModuleFunc(baseDependencies.fs, filePath, defaultImportModuleFunc); // Pass defaultImportModuleFunc

  // 6. Assemble All Command Dependencies: This object is passed to every command.
  const commandDependencies = {
    ...baseDependencies,
    config,
    loadProducts,
    loadPackageJson, // Add the pre-configured function
    loadModule, // Add the pre-configured loadModule function
  };

  // 7. Load Commands: Pass the fully assembled dependencies to the command loader.
  await loadCommands(program, COMMANDS_DIR, commandDependencies);

  return program;
}

/**
 * Main entry point for the CLI application's logic.
 *
 * @returns {Promise<void>}
 */
export async function run() {
  // Manually inspect process.argv for global flags early
  let verboseFlag = false;
  let configPath = CONFIG_FILE_NAME;

  for (let i = 0; i < process.argv.length; i++) {
    const arg = process.argv[i];
    if (arg === '-v' || arg === '--verbose') {
      verboseFlag = true;
    } else if (arg === '-c' || arg === '--config') {
      if (i + 1 < process.argv.length) {
        configPath = process.argv[i + 1];
        i++; // Skip next argument as it's the config path value
      }
    }
  }

  const initialGlobalOptions = {
    verbose: verboseFlag,
    config: configPath,
  };

  logger.debug('Initial options (parsed early):', initialGlobalOptions);

  const program = new Command();
  await createProgram(program, initialGlobalOptions);

  // Finally, parse all arguments (including subcommands and their options)
  await program.parseAsync(process.argv);
  logger.debug('CLI execution finished.');
}
