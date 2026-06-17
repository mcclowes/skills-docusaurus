---
name: docusaurus-plugins
description: Use when creating Docusaurus plugins — write remark transformers for markdown AST, rehype transformers for HTML/HAST, lifecycle plugins that add routes/webpack config/global data via loadContent and contentLoaded, theme plugins and swizzled components, and content plugins for custom data sources. Triggers on tasks involving custom remark/rehype plugins, content plugins, theme plugins, or Docusaurus lifecycle hooks.
license: MIT
metadata:
  author: mcclowes
  version: "1.0.0"
---

# Docusaurus Plugin Guide

## Quick Start

```javascript
// Remark plugin - transforms markdown AST
module.exports = function remarkPlugin(options = {}) {
  return async function transformer(ast, vfile) {
    const { visit } = require('unist-util-visit');

    visit(ast, 'link', (node) => {
      // Transform nodes
      node.data = node.data || {};
      node.data.hProperties = { className: 'custom' };
    });

    return ast;
  };
};

// In docusaurus.config.js:
// remarkPlugins: [require('./plugins/my-plugin')]
```

## Choosing a plugin type

Start here — pick the type from what you need to change, then open the matching reference file:

| You want to… | Use | Reference |
|---|---|---|
| Change markdown syntax/content before HTML | Remark | remark-plugins.md |
| Change the generated HTML | Rehype | rehype-plugins.md |
| Add routes, webpack config, or global build data | Lifecycle | lifecycle-plugins.md |
| Override or wrap UI components | Theme | theme-plugins.md |
| Load a custom content source (CMS, API, files) | Content | content-plugins.md |

## Core Principles

- **5 Plugin Types**: Remark (markdown), Rehype (HTML), Lifecycle (routes/webpack), Theme (components), Content (custom data)
- **Remark**: Transforms markdown before HTML conversion, use `unist-util-visit` for AST traversal
- **Rehype**: Transforms HTML after compilation, processes HAST (HTML AST)
- **Lifecycle**: Most flexible, implements hooks like `loadContent()`, `contentLoaded()`, `postBuild()`
- **Export function**: Returns transformer (remark/rehype) or plugin object (lifecycle)

## Reference Files

Detailed guides for each plugin type:
- [references/remark-plugins.md](references/remark-plugins.md) - Markdown transformation
- [references/rehype-plugins.md](references/rehype-plugins.md) - HTML processing
- [references/lifecycle-plugins.md](references/lifecycle-plugins.md) - Routes, webpack, global data
- [references/theme-plugins.md](references/theme-plugins.md) - Themes and swizzling
- [references/content-plugins.md](references/content-plugins.md) - Custom content types
- [references/package-structure.md](references/package-structure.md) - Publishing and config
