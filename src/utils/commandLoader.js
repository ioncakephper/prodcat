import path from 'path';
import { pathToFileURL } from 'url';

export async function loadCommands(program, commandsPath, commandDependencies) {
  const { fs } = commandDependencies;

  const dirents = await fs.readdir(commandsPath, { withFileTypes: true });
  const commandDirs = dirents
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  for (const dirName of commandDirs) {
    const commandModulePath = path.join(commandsPath, dirName, 'index.js');
    const commandModuleURL = pathToFileURL(commandModulePath);

    try {
      const commandModule = await import(commandModuleURL);
      if (commandModule && typeof commandModule.register === 'function') {
        // Pass all dependencies down to the command registration
        commandModule.register(program, dirName, commandDependencies);
      } else {
        // If the module doesn't export a register function, it's malformed
        throw new Error(
          `Command module at '${commandModulePath}' does not export a 'register' function. Please ensure the command module exports an async 'register' function.`,
        );
      }
    } catch (error) {
      commandDependencies.logger.error(
        `Failed to load command module at '${commandModulePath}'. This might be due to a syntax error or an issue within the module.`,
      );
      commandDependencies.logger.error(`Details: ${error.message}`);
      throw new Error(
        `Failed to initialize CLI due to command loading error: ${error.message}. Please check the command module for syntax errors.`,
      );
    }
  }
}
