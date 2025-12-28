// src/utils/pathValidator.js
import path from 'path';

/**
 * Resolves a user-provided path against a base directory and validates
 * that the final path does not escape the confines of the base directory.
 *
 * @param {string} baseDir - The absolute path of the directory to which the user path should be confined.
 * @param {string} userPath - The path provided by the user.
 * @returns {string} The resolved, validated absolute path.
 * @throws {Error} If path traversal is detected.
 */
export function validateAndResolvePath(baseDir, userPath) {
  const resolvedPath = path.resolve(baseDir, userPath);
  const normalizedBaseDir = path.resolve(baseDir);

  // Security check: Ensure the resolved path is within the base directory.
  if (!resolvedPath.startsWith(normalizedBaseDir)) {
    throw new Error(
      `Path traversal attempt detected. The path '${userPath}' resolves outside the intended directory.`,
    );
  }

  return resolvedPath;
}
