# AGENTS.md — idlhelp-web

One-page marketing site for **Indonesia Driving License Help** (independent administrative guidance for foreigners).
Next.js 16 App Router, plain JavaScript, Turbopack. Lives inside the "Bexon" ThemeForest template project; only the `/` route is ours.

## Commands

- `npm run dev` — dev server on http://localhost:3005. Check `lsof -nP -iTCP:3005 -sTCP:LISTEN` first; it is usually already running, reuse it.
- `npm run build` — static export to `out/` (`output: "export"` in `next.config.js`). Must pass before any work is called done. There are no lint or test scripts.
- Deploy: push to `main` → `.github/workflows/deploy.yml` → Netlify (`netlify.toml`). PRs get preview URLs. The site is static: never add API routes, server actions, middleware or dynamic rendering.

## Scope: touch only these paths

| Path | Role |
| --- | --- |
| `src/app/page.js` | Section composition (order matters for nav scroll-spy) |
| `src/components/site/*` | One component per section. Server components by default; `"use client"` only in `SiteHeader`, `Faq`, `Reveal` |
| `src/data/site.js` | Brand, contact placeholders, `navItems`, `whatsappLink()` |
| `src/data/content.js` | All page copy (services, steps, FAQ, disclaimer…) |
| `src/app/site.scss` | All styles, scoped under `.iag-site`, `iag-` BEM prefix |
| `src/app/layout.js` | Fonts + metadata (shared with template routes, edit carefully) |
| `public/images/site/` | Brand assets (`idl-mark.png`, `idl-logo-full.png`, `idl-icon-512.png`) |

Everything else in `src/` and `public/` is untouched template code (11 demo homes, shop, blog, 300+ files). **Never read, grep, import or restyle it.** Scope searches to the paths above; never open `src/css/globals.css` (~1 MB) or `src/app/assets/**`.

## Architecture rules

- Copy belongs in `src/data/*`, never hard-coded in JSX.
- Every CTA is `whatsappLink(message)`; service cards use `services[].message` so the team knows the topic of each lead.
- Template CSS still loads globally from `layout.js`. Our resets live in `.iag-site :where(...)` so component classes always win. Add no global selectors beyond `html` and `body.iag-lock`.
- Icons: Font Awesome Pro 6 is bundled (`fa-light`, `fa-solid`, `fa-brands`). Before using a new name run
  `grep -c "\.fa-NAME:before" src/app/assets/css/font-awesome-pro.min.css`.
- Decorative art is inline SVG (`SkylineArt.js`, gauge in `Hero.js`). Pass a unique `id` prop when reusing so gradient ids do not collide.
- Wordmark is text in `Logo.js` (the raster logo has a typo); do not swap it for the full-logo image.

## Performance

- No new dependencies. The template already ships heavy unused libs; do not add more.
- Keep client boundaries minimal; state/effects only where needed.
- Assets under ~200 KB each; PNG only when alpha is required, otherwise WebP/JPG. Give `<img>` explicit width/height.
- Motion: one hero entrance animation plus `[data-reveal]` reveal-on-scroll. Both respect `prefers-reduced-motion`. No animation or scroll libraries.
- Breakpoints in use: 1280 (desktop nav), 1100 (hero two-column), 1024, 640/560, 480, 420. Verify layouts at 360, 820, 1200 and 1440.

## Copy compliance (legal, non-negotiable)

The service offers information, consultation, document checking and preparation guidance only.
Never write: apply for / get / renew / register / transfer / process documents, "guaranteed", "fast SIM/STNK", "official partner".
Keep the Important notice, the FAQ answers and the Disclaimer text intact and visible.

## Definition of done

1. `npm run build` passes.
2. Page checked at 360, 820, 1200 and 1440 px: no horizontal overflow, no console errors.
3. Placeholders (WhatsApp number, email, hero/about images, Privacy/Terms links) left as-is unless the user supplied real values.
4. Summary to the user is short and in Indonesian.
