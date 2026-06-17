---
name: docusaurus-themes
description: Use when swizzling Docusaurus theme components and editing theme elements — wrap or eject components from @docusaurus/theme-classic, override navbar/footer/sidebar/TOC/DocItem, place customised components under src/theme/, and choose safe (--wrap) vs full (--eject) swizzles. Triggers on tasks involving Docusaurus swizzling, theme component customization, navbar, footer, sidebar, or layout modifications.
license: MIT
metadata:
  author: mcclowes
  version: "1.0.0"
---

# Docusaurus Swizzle

## Quick Start

Swizzle components to customize Docusaurus theme behavior:

```bash
npm run swizzle @docusaurus/theme-classic ComponentName -- --wrap
```

## Core Principles

- **Wrap** (safe): Extends original component, easier to upgrade
- **Eject** (unsafe): Full copy for maximum control, harder to maintain
- **Interactive mode**: Use `npm run swizzle` to browse available components
- Swizzled components go in `src/theme/ComponentName/`

## Common Patterns

**List available components:**
```bash
npm run swizzle @docusaurus/theme-classic -- --list
```

**Commonly swizzled:** Footer, Navbar, DocItem, DocSidebar, TOC

## Workflow

Swizzling copies internal theme code into your project, so a wrong choice or a broken edit can fail the build. Work through it in order:

1. **List** available components: `npm run swizzle @docusaurus/theme-classic -- --list`
2. **Choose** wrap vs eject — prefer `--wrap` unless you need to change the component's internals.
3. **Swizzle**: `npm run swizzle @docusaurus/theme-classic <Component> -- --wrap`
4. **Verify** the files landed in `src/theme/<Component>/`, then make your edits there.
5. **Validate** with `npm run build`; if it errors, fix the swizzled component and re-run before moving on.

## Reference Files

For detailed documentation, see:
- [references/commands.md](references/commands.md) - All swizzle commands and options
- [references/components.md](references/components.md) - Component-specific guides

## Notes

- Prefer `--wrap` for minor changes to maintain upgrade compatibility
- Test thoroughly after swizzling components
- Check official docs for component-specific swizzle safety ratings
