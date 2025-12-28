import {
  COMMANDS_DIR,
  CONFIG_FILE_NAME,
  RC_FILE_NAME,
  PACKAGE_JSON,
} from '../src/constants.js';

describe('Constants', () => {
  it('COMMANDS_DIR should be defined and have the correct value', () => {
    expect(COMMANDS_DIR).toBeDefined();
    expect(typeof COMMANDS_DIR).toBe('string');
    expect(COMMANDS_DIR).toBe('./src/commands');
  });

  it('CONFIG_FILE_NAME should be defined and have the correct value', () => {
    expect(CONFIG_FILE_NAME).toBeDefined();
    expect(typeof CONFIG_FILE_NAME).toBe('string');
    expect(CONFIG_FILE_NAME).toBe('prodcat.config.js');
  });

  it('RC_FILE_NAME should be defined and have the correct value', () => {
    expect(RC_FILE_NAME).toBeDefined();
    expect(typeof RC_FILE_NAME).toBe('string');
    expect(RC_FILE_NAME).toBe('.prodcatrc.js');
  });

  it('PACKAGE_JSON should be defined and have the correct value', () => {
    expect(PACKAGE_JSON).toBeDefined();
    expect(typeof PACKAGE_JSON).toBe('string');
    expect(PACKAGE_JSON).toBe('package.json');
  });
});
