# Docusaurus v2 to v3 Migration Plan

## Problem Description

The TechDocs Portal team maintains an internal documentation site currently running on Docusaurus v2. The site has grown to about 80 MDX pages, several custom React components, and TypeScript tooling. The team has been putting off the upgrade to Docusaurus v3 for some time, but with v2 approaching end-of-life and v3 offering React 18 and MDX v3 support, the engineering lead has prioritized it for next sprint.

The team is cautious — the site is published daily and any migration that breaks the build will block documentation updates. They want a detailed, step-by-step migration plan document that a developer can follow without needing to look anything up externally. The plan must be safe enough that if something goes wrong at any point, the developer can recover cleanly.

The project details are in `inputs/project-description.md`. The current `package.json` is at `inputs/package.json`, and the main custom component that will need attention is `inputs/src/components/Banner.jsx`.

## Output Specification

Produce a file named `migration-plan.md` at the root of your working directory. The plan should be a detailed, ordered set of steps that a developer could follow to safely upgrade TechDocs Portal from Docusaurus v2 to v3. Each step should include the specific commands or code changes required.

The plan should cover dependency updates, content fixes, configuration changes, component updates, and verification. Where commands must be run or files must be edited, show exactly what to do.
