---
name: google-style-guide
description: Use when writing or reviewing technical documentation to follow Google's documentation style guide — enforce active voice and present tense, apply sentence case to headings, fix list and procedure formatting, mark code/UI elements correctly, flag non-inclusive terminology, and remove time-specific phrasing. Triggers on tasks involving technical writing, doc review, style consistency, inclusive language, or formatting standards.
license: CC-BY-4.0
metadata:
  author: mcclowes
  version: "1.0.0"
  attribution: "Adapted from the Google developer documentation style guide (https://developers.google.com/style), licensed under CC BY 4.0. Modified and condensed into skill form."
---

# Google Style Guide

> **Attribution:** This skill adapts material from the [Google developer documentation style guide](https://developers.google.com/style), © Google, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The content here has been condensed and restructured into skill form. As a derivative work it is distributed under the same CC BY 4.0 license — not MIT.

## Quick Start

Apply Google's documentation style guide principles to technical writing:

- Use **active voice** and **present tense**
- Write clear, concise headings
- Use numbered lists for procedures, bulleted lists for non-sequential items
- Put conditional clauses before instructions

## Core Principles

- **Clarity first**: Write for software developers and technical practitioners
- **Consistency**: Follow project-specific > Google > third-party style guides
- **Accessibility**: Use inclusive language and consider global audiences
- **Timeless**: Avoid time-specific references; use "currently" or "as of [date]"
- **Reader-focused**: Prioritize user understanding over strict grammatical rules

## Common Patterns

### Voice and Tense
Use active voice and present tense. Example: "The API returns..." not "The API will return..."

### Headings
Use sentence case for headings. Make them descriptive and actionable.

### Lists and Procedures
- Numbered lists: For sequential steps
- Bulleted lists: For non-sequential items
- Start each item with a capital letter

### Code and UI Elements
- Use `code font` for code elements, filenames, and UI elements
- Use **bold** for UI elements users interact with
- Use descriptive placeholder names like `YOUR_PROJECT_ID`

## Worked Example

Several rules usually apply at once. Before/after for a typical doc sentence:

> **Before:** "Once the Configuration File has been Edited by the user, the changes will be applied by the system and the build process will then be triggered."
>
> **After:** "After you edit the `config` file, the system applies your changes and triggers the build."

What changed: passive → active voice; future → present tense; title case → sentence case; wordy clauses tightened; filename in code font.

## Review Workflow

When reviewing a doc, make one focused pass per concern rather than reading once and hoping to catch everything:

1. **Voice & tense** — rewrite passive/future-tense sentences as active present tense.
2. **Structure & headings** — sentence-case headings; numbered lists for steps, bullets otherwise.
3. **Formatting** — code font for code/filenames/UI, bold for interactive elements, descriptive placeholders.
4. **Inclusive & timeless language** — flag biased terms and time-specific phrasing (see references).

## Reference Files

For detailed documentation, see:
- [references/language-grammar.md](references/language-grammar.md) - Voice, tense, pronouns
- [references/formatting.md](references/formatting.md) - Dates, numbers, lists
- [references/inclusive-language.md](references/inclusive-language.md) - Accessibility guidelines

## Notes

- Official guide: https://developers.google.com/style
- Third-party references: Merriam-Webster (spelling), Chicago Manual of Style
- When in doubt: Choose clarity over strict rule adherence
