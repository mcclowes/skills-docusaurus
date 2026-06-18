# Build a Docusaurus Rehype Plugin Package

## Problem Description

The documentation team at a mid-sized SaaS company has been maintaining a Docusaurus site for over a year. As the site has grown, several HTML post-processing needs have emerged that keep being solved ad hoc with inline config. The team has decided to extract these into a standalone, publishable npm package so that their three other Docusaurus projects can reuse it without duplicating code.

The plugin needs to handle three HTML-level transformations: wrapping every `<pre>` code block in a container `<div>` with class `code-block-wrapper` (and a data attribute carrying the language label, derived from the existing language class on the code element), adding `loading="lazy"` and `decoding="async"` to every `<img>` element, and ensuring that any anchor element whose `href` starts with `http://` or `https://` gets both `class="external-link"` appended to its class list and the appropriate security attributes set. The team is serious about security — any external link handling must be airtight.

The package will be published to npm, so it needs to meet the team's publishing standards: correct dependency declarations, a TypeScript type definition file for consumers who use TypeScript, and a `files` field that keeps the published tarball lean.

## Output Specification

Produce the following files in the working directory:

- `index.js` — the rehype plugin implementation
- `index.d.ts` — TypeScript type definitions for the plugin and its options
- `package.json` — package manifest ready for `npm publish`

The plugin should be implemented as a CommonJS module (using `require`/`module.exports`). Do not write a test suite or any other files — just the three files listed above.
