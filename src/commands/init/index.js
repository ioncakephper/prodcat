import { initAction } from './initAction.js';
export async function register(program, commandName, commandDependencies) {
  const name = program.name();
  program
    .command(commandName)
    .description('initialize a new prodcat configuration file')
    .alias('i')
    .argument(
      '[configFile]',
      'name of the configuration file to create',
      `${name}.config.js`,
    )
    .option('-f, --force', 'overwrite existing configuration file if it exists')
    .option('-y, --yes', 'skip prompts and use default values')
    .action(async (configFile, options) => {
      // const { logger, config } = commandDependencies;
      //   const { initCommand } = await import('./index.js');
      //   await initCommand(commandDependencies);
      await initAction(configFile, options, commandDependencies);
    });
}
