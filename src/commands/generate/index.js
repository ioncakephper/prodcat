import { generateAction } from './generateAction.js';

export async function register(program, commandName, commandDependencies) {
  const { config } = commandDependencies;

  program
    .command(commandName)
    .description('Generate product directory and landing pages')
    .alias('g')
    .option(
      '-i, --input <path>',
      'Input file path for product data',
      config.productsFilePath,
    )
    .option(
      '-u, --update-navbar',
      'Inject a link to the products page into the Docusaurus navbar',
    )
    .option(
      '-l, --navbar-label <string>',
      'The text label for the new navbar link',
      config.defaultNavbarLabel,
    )
    .option(
      '-p, --navbar-position <specifier>',
      "Position of the link. Formats: 'left', 'right', 'left:start', 'right:end', 'before:Label', 'after:Label'",
      config.defaultNavbarPosition,
    )
    .action(async (options) => {
      commandDependencies.logger.debug('Generate command options:', options);
      await generateAction(options, commandDependencies);
    });
}
