# Indonesia Driving License Help (IDL Help) — website

One-page marketing site for an independent administrative guidance service for foreigners in Indonesia.
Built with Next.js (App Router) on top of the "Bexon" template project.

Brand assets live in `public/images/site/`: `idl-mark.png` (logo mark used in header and footer),
`idl-logo-full.png` (full logo with wordmark) and `idl-icon-512.png` (source of `src/app/icon.png`).
The wordmark is rendered as text in `src/components/site/Logo.js` so the spelling stays correct
("License"; the supplied artwork contains a typo).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3005](http://localhost:3005).

Production build:

```bash
npm run build
npm run start
```

## Deployment (Netlify via GitHub Actions)

`next.config.js` sets `output: "export"`, so `npm run build` writes a fully static site to `out/`.
`.github/workflows/deploy.yml` builds on every push and pull request and, when the secrets below exist, uploads `out/` to Netlify:

- push to `main` → production deploy
- pull request → preview deploy at `https://pr-<number>--<site-name>.netlify.app` (URL shown in the job summary)

Required GitHub repository secrets (Settings → Secrets and variables → Actions):

| Secret | Where to get it |
| --- | --- |
| `NETLIFY_AUTH_TOKEN` | Netlify → User settings → Applications → Personal access tokens → New access token |
| `NETLIFY_SITE_ID` | Netlify → your site → Site configuration → General → Site details → Site ID |

`netlify.toml` adds caching and security headers plus a temporary `X-Robots-Tag: noindex` header. Remove that header before the real launch.

## Where things live

| What | Where |
| --- | --- |
| Page composition | `src/app/page.js` |
| Site sections | `src/components/site/*` |
| Styles for the site (scoped under `.iag-site`) | `src/app/site.scss` |
| Contact details, WhatsApp number, navigation | `src/data/site.js` |
| All copy: services, steps, trust points, FAQ, about, disclaimer | `src/data/content.js` |
| Fonts and page metadata | `src/app/layout.js` |

Every call to action opens WhatsApp with a pre-filled message. Service cards send a service-specific message so the team knows what the lead is asking about.

## Before going live

1. Set the real WhatsApp number and email in `src/data/site.js` (both are placeholders).
2. Add a hero background photo (set `heroPhoto` in `src/data/site.js`, e.g. `/images/site/hero-banner.jpg`) and replace the About image placeholder in `About.js`.
3. Optionally replace `idl-mark.png` with a cleaner export of the logo (transparent PNG or SVG).
4. Add Privacy Policy and Terms & Conditions pages and point the footer links to them.
5. Remove the unused template demo routes under `src/app/` (home-02 … home-11, shop, blog, etc.) so they are not publicly reachable.

## Copy guidelines

The service provides information, consultation, document checking and preparation guidance only.
Avoid wording that implies issuing, processing, renewing or guaranteeing government documents
(for example "apply for SIM", "renew your STNK", "guaranteed approval"). Prefer "Request Information",
"Administrative Consultation", "Document Checking", "Preparation Guidance".
