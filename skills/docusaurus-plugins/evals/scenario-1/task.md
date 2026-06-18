# Team Directory Plugin for Docusaurus

## Problem Description

Your company maintains a Docusaurus documentation site and wants to add a public-facing team directory that lists all employees with individual profile pages. The HR team exports team data as a JSON file (`inputs/team.json`) that contains each person's name, role, department, and a short bio. You need to build a standalone Docusaurus plugin that reads this file, creates browsable team pages, and improves the site's performance characteristics by hinting at external font resources.

The plugin should be structured as a publishable npm package so that other internal Docusaurus sites can install and reuse it. The data loading and page generation should happen at build time — no runtime fetches. The plugin should also expose a browser-side module that logs navigation events to the console so that the team can later wire analytics in.

The plugin must accept configuration options (at minimum, the path to the team data file and a `showDepartment` toggle). These options should be validated so that misconfiguration fails loudly with helpful messages rather than silently doing the wrong thing.

## Output Specification

Produce the following files in your working directory:

- **`index.js`** — the main plugin entry point. It should read the team data file during the build, register team pages as routes, expose the team list as global data, and inject an HTML preconnect hint into the document head. It should also provide a reference to a client-side module.
- **`clientModule.js`** — the browser-side module loaded by the plugin. It should respond to route changes.
- **`package.json`** — the npm package manifest for the plugin, with correct dependency declarations for a publishable Docusaurus plugin package.

The team data file is available at `inputs/team.json`. Your plugin code should read from that path (or use it as the default for the configurable data-file option).
