import { generateAction } from './generateAction.js';

export async function register(program, commandName, commandDependencies) {
  const { config } = commandDependencies;

  program
    .command(commandName)
    .description('generate product directory and landing pages')
    .alias('g')
    .option(
      '-i, --input <path>',
      'input file path for product data',
      config.productsFilePath,
    )
    .option(
      '-u, --update-navbar',
      'inject a link to the products page into the Docusaurus navbar',
    )
    .option(
      '-l, --navbar-label <string>',
      'the text label for the new navbar link',
      config.defaultNavbarLabel,
    )
    .option(
      '-p, --navbar-position <specifier>',
      "position of the link. Formats: 'left', 'right', 'left:start', 'right:end', 'before:Label', 'after:Label'",
      config.defaultNavbarPosition,
    )
    .action(async (options) => {
      commandDependencies.logger.debug('Generate command options:', options);
      await generateAction(options, commandDependencies);
    });
}
