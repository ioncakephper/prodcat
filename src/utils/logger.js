// src/utils/logger.js
import kleur from 'kleur';

let _isVerbose = false;

/**
 * Sets the verbose mode for the logger.
 * @param {boolean} verbose - True to enable verbose logging, false otherwise.
 */
function setVerbose(verbose) {
  _isVerbose = verbose;
  // Use console.log directly here to ensure visibility, even if debug is off.
  if (verbose) {
    console.log(kleur.dim('Verbose logging enabled.'));
  }
}

/**
 * Joins all arguments into a single string for colorization.
 * @param {any[]} args - The arguments to join.
 * @returns {string}
 */
function joinArgs(args) {
  return args
    .map((arg) =>
      typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg,
    )
    .join(' ');
}

/**
 * Logs a message at the default level.
 * @param {...any} args - The arguments to log.
 */
function log(...args) {
  console.log(joinArgs(args));
}

/**
 * Logs a message at the info level (green).
 * @param {...any} args - The arguments to log.
 */
function info(...args) {
  console.info(kleur.green(joinArgs(args)));
}

/**
 * Logs a message at the warn level (yellow).
 * @param {...any} args - The arguments to log.
 */
function warn(...args) {
  console.warn(kleur.yellow(`Warning: ${joinArgs(args)}`));
}

/**
 * Logs a message at the error level (red).
 * @param {...any} args - The arguments to log.
 */
function error(...args) {
  console.error(kleur.red(`Error: ${joinArgs(args)}`));
}

/**
 * Logs a message at the debug level (dim gray). Only logs if verbose mode is enabled.
 * @param {...any} args - The arguments to log.
 */
function debug(...args) {
  if (_isVerbose) {
    console.debug(kleur.dim(joinArgs(args)));
  }
}

const logger = {
  setVerbose,
  log,
  info,
  warn,
  error,
  debug,
  /**
   * Checks if verbose logging is currently enabled.
   * @returns {boolean} True if verbose logging is enabled, false otherwise.
   */
  isVerbose: () => _isVerbose,
};

export default logger;
