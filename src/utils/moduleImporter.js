// src/utils/moduleImporter.js
export async function importModule(moduleURL) {
  return await import(moduleURL);
}
