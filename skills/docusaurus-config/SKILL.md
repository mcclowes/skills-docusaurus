---
name: docusaurus-config
description: Use when working with docusaurus.config.js/ts files — validate the config structure, set required fields (title/url/baseUrl), fix URL and baseUrl formats, add presets and plugins, configure navbar/footer/theme settings, and move unknown keys into customFields. Triggers on tasks involving docusaurus.config.js, docusaurus.config.ts, site configuration, URL formats, presets, or theme config.
license: MIT
metadata:
  author: mcclowes
  version: "1.0.0"
---

# Docusaurus Config

## Quick Start

Configuration lives in `docusaurus.config.js` or `docusaurus.config.ts` at project root.

```typescript
import {Config} from '@docusaurus/types';

const config: Config = {
  title: 'My Site',           // Required
  url: 'https://example.com', // Required, no trailing /
  baseUrl: '/',               // Required, must start and end with /

  favicon: 'img/favicon.ico',
  organizationName: 'my-org',
  projectName: 'my-project',

  presets: [['@docusaurus/preset-classic', { /* options */ }]],
  themeConfig: { /* theme config */ },
  customFields: { /* unknown fields go here */ }
};

export default config;
```

## Core Principles

- **Required**: `title`, `url`, `baseUrl` are mandatory
- **Custom fields**: Unknown fields must use `customFields` object
- **Validation**: `url` no trailing slash, `baseUrl` must be `/path/`
- **Plugins/themes**: Use string or `[name, options]` array format

## Common Tasks

**Before editing**: Read current config to preserve format (JS/TS, ESM/CommonJS)

**After editing**: Verify required fields and URL formats, then validate the build:

1. Run `npm run build` — Docusaurus validates the full config and fails loudly on bad fields.
2. If it errors, read the message (it names the offending field), fix it, and re-run.
3. Once the build passes, restart the dev server (`npm start`) to confirm runtime behaviour.

A bad config breaks the whole site, so always confirm with a build before considering the change done.

## Reference Files

See [references/detailed-guide.md](references/detailed-guide.md) for comprehensive examples
