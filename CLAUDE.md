# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Claude Code specifics

- Work directly from the paths listed in AGENTS.md; do not explore the template folders to "understand the codebase". Everything needed is in `src/components/site`, `src/data` and `src/app/site.scss`.
- Visual checks: use the Playwright copy cached at `~/.npm/_npx/*/node_modules/playwright` (browsers already installed) with device emulation. Headless Chrome's `--window-size` cannot go below ~500 px, so it is useless for mobile screenshots. Force `scroll-behavior: auto` before scripted scrolling or `[data-reveal]` elements below the fold will not reveal.
- Prefer `Edit` over rewriting `site.scss`; it is the largest file we own.
- Answer in Indonesian. Lead with the outcome, list what changed, name placeholders still open.
