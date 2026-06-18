# Upgrade a Docusaurus Site to v3

## Problem Description

Your team maintains a documentation site that was originally built with Docusaurus v2. The project has been working fine for a while, but the team has decided to move to Docusaurus v3 so you can take advantage of improved MDX support, the latest React ecosystem, and long-term maintenance from the Docusaurus team.

The project files are in your working directory under `inputs/`. They contain the configuration that was set up for v2: the dependency versions reference the old Docusaurus v2 packages, the TypeScript config extends an old tsconfig package, and the Docusaurus config file uses the old Prism theme import style. No one has updated these files yet.

Your task is to update the configuration files so the project is ready to run on Docusaurus v3. You do not need to run `npm install` or start the dev server — just update the three configuration files (`package.json`, `tsconfig.json`, and `docusaurus.config.js`) to reflect what a freshly-scaffolded Docusaurus v3 project would look like.

When you are done, write a short summary of all changes you made to a file called `migration-summary.md`.

## Output Specification

Update the following files in-place (they are already in the `inputs/` directory):

- `inputs/package.json` — updated dependency versions and any required new fields
- `inputs/tsconfig.json` — correct TypeScript configuration for v3
- `inputs/docusaurus.config.js` — updated Prism configuration

And produce:

- `migration-summary.md` — a brief bullet-point summary of every change you made, grouped by file
