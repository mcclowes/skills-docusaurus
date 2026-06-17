---
name: docusaurus-v2-to-v3-migration
description: Use when migrating Docusaurus projects from v2 to v3 — upgrade @docusaurus/React/MDX/prism dependencies, rewrite MDX v1 syntax to v3 (escape bare { and <, fix autolinks), swap @tsconfig/docusaurus for @docusaurus/tsconfig, update Prism imports, and resolve React 18 breaking changes. Triggers on tasks involving MDX v1 to v3 migration, Docusaurus dependency updates, React 18 compatibility, or v2/v3 breaking changes.
license: MIT
metadata:
  author: mcclowes
  version: "1.0.0"
---

# Docusaurus V2 To V3 Migration

## Quick Start

```json
{
  "@docusaurus/core": "^3.0.0",
  "@mdx-js/react": "^3.0.0",
  "prism-react-renderer": "^2.1.0",
  "react": "^18.2.0"
}
```

## Core Principles

- **MDX v1 → v3**: Main challenge - escape `{` and `<` characters or wrap in code blocks
- **Node.js >=18.0**: Required for Docusaurus v3
- **React 18**: Breaking changes may affect custom components

## Migration Steps

This migration edits dependencies and content across the project, so work on a clean tree and verify after the risky steps rather than at the end.

0. **Back up**: Commit or branch first (`git switch -c migrate-v3`) so you can diff and roll back.
1. **Pre-check**: Run `npx docusaurus-mdx-checker` to identify MDX issues and note the count.
2. **Update deps**: Upgrade all @docusaurus packages, React, MDX, prism-react-renderer
3. **Fix MDX**: Escape bare `{` `<` characters, convert GFM autolinks, use code fences. Then re-run `npx docusaurus-mdx-checker` and confirm it reports zero issues before moving on.
4. **Update config**: Replace `@tsconfig/docusaurus` with `@docusaurus/tsconfig`, update Prism imports
5. **Test**: Run `npm start`, then `npm run build`. If the build fails, read the error, fix it, and re-run until clean.

## Reference Files

- [breaking-changes.md](references/breaking-changes.md) - Complete migration guide with examples
