# Project: TechDocs Portal

TechDocs Portal is an internal documentation site built with **Docusaurus v2** (`@docusaurus/core: ^2.4.1`, `@docusaurus/preset-classic: ^2.4.1`). It is a medium-sized project with approximately 80 MDX documentation pages covering API references, tutorials, and guides.

## Project Characteristics

- **Docusaurus version**: 2.4.1
- **Node.js requirement**: >=16.14
- **TypeScript**: enabled (`typescript: ~4.7.4`), tsconfig extends `@tsconfig/docusaurus`
- **MDX content**: ~80 `.mdx` files in `docs/` and `blog/`
- **Custom components**: Several React components in `src/components/`, some with client-side logic
- **Prism**: Uses `prism-react-renderer` v1 with theme imported via `require('prism-react-renderer/themes/github')`
- **Languages**: Code blocks for bash, diff, and JSON appear throughout the docs

## Known Issues (pre-migration)

- `src/components/Banner.jsx` uses `import React from 'react'` at the top and conditionally renders based on `typeof window !== 'undefined'`
- Several MDX files contain bare `{key}` syntax (not JSX expressions), bare `<https://...>` autolinks, and some 4-space indented code blocks
- One doc file has `_really _` (emphasis mark with trailing space)

## Goal

The engineering team wants to upgrade to **Docusaurus v3** to get the latest MDX v3 support, React 18 compatibility, and long-term maintenance support. They have asked for a comprehensive migration plan document that a developer can follow step-by-step.
