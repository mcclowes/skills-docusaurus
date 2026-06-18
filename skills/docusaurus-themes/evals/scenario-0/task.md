# Add a Site-Wide Announcement Banner to the Docusaurus Footer

## Problem/Feature Description

The marketing team at Acme Corp has asked you to add a persistent "site announcement" banner that appears below the footer on every page of their Docusaurus documentation site. The banner should display a short message such as "🚀 New release available — check our changelog!" so visitors always see it. The site currently has a standard Docusaurus setup with no theme customizations.

Your job is to scaffold a new Docusaurus project (use `npx create-docusaurus@latest my-docs classic --skip-install`, then run `npm install` inside the project), add the custom announcement banner below the existing footer content, and ensure the site builds successfully. After verifying the build works, delete `node_modules/` and the `build/` directory to keep the workspace clean.

## Output Specification

- A Docusaurus project directory (e.g., `my-docs/`) in the workspace
- The footer component customized so that a site-announcement banner appears below the standard footer content on every page
- A file `build-log.txt` in the workspace root containing the output of the final `npm run build` command, showing that the build succeeded
- After confirming the build succeeds: delete `node_modules/` and `build/` from the project directory before finishing
