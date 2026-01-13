Purpose
-------
This file gives brief, actionable guidance to an AI coding agent working on the Prodcat repository so it can be immediately productive.

Quick Orientation
-----------------
- Entry points: `bin/cli.js` (CLI bootstrap) and `src/index.js` (composition root).
- Commands: each command lives under `src/commands/<name>/` and must export an async `register(program, commandName, commandDependencies)`.
- Configuration: `prodcat.config.js` (project config) and `products.js` (product data array). Both use `export default` (ES modules).
- Templates: Handlebars templates live in `templates/` and are referenced from the config (e.g., `templates/landing-page.md.hbs`).

Important Patterns & Conventions
-------------------------------
- ES Modules only: `package.json` sets `type: "module"`. Use `import`/`export` and ESM-style dynamic imports.
- Dependency injection: `src/index.js` builds `commandDependencies` and passes them to `loadCommands()`; prefer adding behavior by wiring into that DI object rather than directly importing globals.
- Dynamic module loading: use `src/utils/moduleLoader.js` and `src/utils/moduleImporter.js` to load user-supplied JS (e.g., `products.js`, `sidebars.js`). Do not replace with ad-hoc `import()` without preserving the file-system abstraction used elsewhere.
- Templates are rendered with Handlebars in `src/commands/generate/generateAction.js`. Resolve template paths with `process.cwd()` and the configured `config.templates` mappings.
- Navbar updates modify `website/docusaurus.config.js` by AST edits using `recast` and `@babel/parser` in `src/utils/navbarManager.js`. Be careful: changes are written back to disk and handled as non-critical (errors are logged, not thrown).

Developer Workflows / Commands
-----------------------------
- Install deps: `npm install` (root) and `cd website && npm install` for the Docusaurus site.
- Run CLI locally: `node ./bin/cli.js <command>` or `npx prodcat <command>`.
- Run tests: `npm test` — note the test script uses Jest via `node --experimental-vm-modules node_modules/jest/bin/jest.js`. Tests expect Node 18+ or compatible runtime that supports vm modules.
- Lint & format: `npm run lint` and `npm run format`.
- Run website dev: `cd website && npm run dev` (the site has its own package.json).

Files to Inspect First (examples)
---------------------------------
- `src/index.js` — composition root, builds DI.
- `bin/cli.js` — CLI bootstrap and update-notifier integration.
- `src/utils/*.js` — especially `commandLoader.js`, `loadConfig.js`, `moduleLoader.js`, `navbarManager.js`, and `logger.js`.
- `src/commands/generate/*` — example of a command and its action (`generateAction.js`) showing template rendering and file output.
- `templates/` and `products.js` — sample template and product data shape used across the project.

Testing and Safety
------------------
- Tests use Jest; run `npm test`. The command includes `--experimental-vm-modules` so prefer Node 18+.
- Configuration loading is validated with `zod` (`src/utils/configSchema.js`). When changing config handling, update schemas accordingly.

When Making Changes
-------------------
- Follow the DI pattern: add dependencies to `commandDependencies` in `src/index.js` and consume them in command modules.
- Preserve path resolution behavior (`process.cwd()` and config paths) — generated files are written relative to the project where `prodcat` is invoked.
- Keep AST edits conservative: modify `website/docusaurus.config.js` only with `src/utils/navbarManager.js` helpers to maintain formatting and avoid syntax breakage.

If You Need More Context
------------------------
- Look at `README.md` for the user's mental model and example CLI commands and config.
- Review `package.json` scripts and `website/package.json` for site-specific workflows.

Questions for the Maintainer
---------------------------
- Do you want Copilot to open PRs for changes it makes, or only produce patches locally?
- Are there any undocumented configuration options or template variables used in downstream sites we should be aware of?

End of instructions.
