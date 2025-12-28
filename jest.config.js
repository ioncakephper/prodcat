// jest.config.js
export default {
  // Use 'node-main' for Jest to correctly handle ESM modules.
  // This is a common setup for Jest with ES Modules.
  // The 'node --experimental-vm-modules' flag from package.json already enables ESM.
  // We explicitly tell Jest how to interpret files.
  transform: {}, // Disable babel-jest or ts-jest transforms to use native ESM

  // Collect coverage from files in the src directory
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.d.ts', // Exclude TypeScript declaration files
  ],

  // Specify the test environment
  testEnvironment: 'node',

  // Pattern for test files
  testMatch: ['**/__tests__/**/*.test.js', '**/?(*.)+(spec|test).js'],

  // Ignore files/folders from test execution
  testPathIgnorePatterns: ['/node_modules/'],

  // If you use path aliases in your project, configure them here.
  // moduleNameMapper: {
  //   '^@/(.*)$': '<rootDir>/src/$1',
  // },

  // Setup files to run before tests in the environment
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Example for global setups

  // Display test coverage summary
  coverageReporters: ['text', 'lcov', 'clover'],

  // Enforce minimum coverage thresholds
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
