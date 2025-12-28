#! /usr/bin/env node

import { run } from '../src/index.js';
import logger from '../src/utils/logger.js'; // Import the new logger
import updateNotifier from 'update-notifier';
import { promises as fs } from 'fs'; // Import promises API for fs
import path from 'path'; // Import path module
import { fileURLToPath } from 'url'; // Import fileURLToPath

// Determine __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Construct path to package.json
const pkgPath = path.join(__dirname, '..', 'package.json');

let pkg;
try {
  const pkgContent = await fs.readFile(pkgPath, 'utf8');
  pkg = JSON.parse(pkgContent);
} catch (error) {
  logger.error(
    'Failed to load package.json for update-notifier:',
    error.message,
  );
  // Proceed without update-notifier if package.json cannot be loaded
  pkg = { name: 'prodcat', version: '0.0.0' }; // Provide a fallback pkg
}

// Check for updates
updateNotifier({ pkg }).notify();

run().catch((error) => {
  logger.error('Unhandled error during CLI execution:', error.message);
  if (logger.isVerbose()) {
    logger.error(error.stack);
  }
  process.exit(1);
});
