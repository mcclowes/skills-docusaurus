# Glossary Tooltip Plugin for Docusaurus

## Problem/Feature Description

The documentation team at a developer tools company maintains a large Docusaurus site filled with technical jargon. Readers frequently encounter unfamiliar terms and have to leave the page to look them up, breaking their reading flow. The team wants to introduce inline glossary tooltips: when a technical term is wrapped in double brackets — for example `[[mdx]]` or `[[ast]]` — it should be automatically replaced with an interactive tooltip component that shows the term's definition on hover.

The team already has a centrally maintained glossary stored as a JSON file at `inputs/terms.json`. Each entry maps a term key to a `display` label and a `tooltip` description. Rather than manually wrapping every occurrence in the docs, they want the transformation to happen automatically at build time so authors can keep writing plain Markdown and simply use the `[[term]]` notation wherever they want a tooltip to appear.

The plugin must run early enough in the Docusaurus pipeline that other built-in processors do not interfere with the custom `[[term]]` syntax. The component to render is called `<GlossaryTerm>` and accepts two props: `term` (the lookup key) and `tooltip` (the definition string). The display text inside the component tags should be the `display` value from the glossary. If a term is not found in the glossary, leave the text as-is (no transformation).

## Output Specification

Produce the following files:

- `plugin/index.js` — the remark plugin implementation
- `plugin/package.json` — package manifest for the plugin
- `docusaurus.config.js` — a sample Docusaurus configuration file showing how to register the plugin so it runs before the default Docusaurus remark plugins

Do not produce or start a Docusaurus project — only these three files are required. The grader will inspect their contents directly.
