import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    ignores: ['website/**', 'second.config.js'], // Ignore files in the website directory globally
  },
  // Base ESLint recommended rules
  pluginJs.configs.recommended,

  // Node and Jest globals
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },

  // React configuration
  {
    files: ['**/*.{js,jsx}'], // Apply to JS and JSX files
    languageOptions: {
      globals: {
        ...globals.browser, // Add browser globals for React components
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...react.configs.recommended.rules, // Add React recommended rules
      ...reactHooks.configs.recommended.rules, // Add React Hooks recommended rules
      'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
      'react/prop-types': 'off', // Disable prop-types validation if not using them
      'no-unused-vars': ['warn', { varsIgnorePattern: 'React' }], // Ignore React in no-unused-vars
    },
  },

  // Prettier configuration (should be last to override other formatting rules)
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...configPrettier.rules,
      'prettier/prettier': 'error',
    },
  },
];
