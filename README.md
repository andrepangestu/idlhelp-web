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

Static export:

```bash
npm run build
```

## Deployment

`next.config.js` sets `output: "export"`, so `npm run build` writes a fully static site to `out/`.
The existing Netlify Git integration builds and publishes `development`. `.github/workflows/deploy.yml` verifies builds on both deployment branches and uploads the `main` export to the VPS:

- `development` → Netlify development site at its `*.netlify.app` address
- `main` → `206.189.84.142`, served at `https://idlhelp.com`

As of 2026-09-17, the VPS serves `main` commit `65be94f` at `https://idlhelp.com`; the GitHub build and VPS deployment jobs both passed for that commit. DNS points to `206.189.84.142`, and Let's Encrypt HTTPS is active for both apex and `www`. Certificate renewal passed a dry run. The production secret is configured separately in GitHub.

Use the existing Netlify project that previously deployed `main`. In **Project configuration → Build & deploy → Continuous deployment → Branches and deploy contexts**, change its **production branch** to `development` and leave builds **active**. As of 2026-09-17, Netlify still publishes `main` commit `723b4c7`, while the latest `development` commit was treated as a canceled deploy preview. After switching the branch, trigger a production deploy for `development` and verify the published deploy's branch and commit. Set branch deploys to **None** if no other branch needs a Netlify URL. Netlify then publishes `development` at the existing `*.netlify.app` URL without any GitHub Netlify token or Project ID secret. If `idlhelp.com` is attached as a Netlify custom domain, remove it before directing DNS to the VPS. `netlify.toml` also makes Netlify's Git builds skip `main` and sends `X-Robots-Tag: noindex, nofollow` on the development site.

Create a GitHub environment named `production` under **Settings → Environments**, restrict it to `main`, and add this environment secret:

| Environment | Secret | Value |
| --- | --- | --- |
| `production` | `DEPLOY_SSH_PRIVATE_KEY` | Contents of `~/.ssh/idlhelp_deploy` on the setup workstation |

### One-time production server setup

The existing server runs Ubuntu 24.04 with Nginx, rsync and Certbot already installed, and has other Nginx sites. The `idlhelp-deploy` account and `/var/www/idlhelp.com/releases` were created on 2026-09-17. These commands are only needed when rebuilding the server:

```bash
adduser --disabled-password --gecos '' idlhelp-deploy
install -d -o idlhelp-deploy -g idlhelp-deploy -m 700 /home/idlhelp-deploy/.ssh
install -d -o idlhelp-deploy -g idlhelp-deploy -m 755 /var/www/idlhelp.com
install -d -o idlhelp-deploy -g idlhelp-deploy -m 755 /var/www/idlhelp.com/releases
```

The dedicated private key is stored on this workstation at `~/.ssh/idlhelp_deploy`; its public key is installed in `/home/idlhelp-deploy/.ssh/authorized_keys` on the VPS. SSH login and directory permissions were verified. **Do not regenerate or commit this private key.** Put its contents in the `DEPLOY_SSH_PRIVATE_KEY` GitHub environment secret. The VPS's public host key is pinned in [`deploy/known_hosts`](deploy/known_hosts); its fingerprint was checked against the VPS before adding it.

The [`deploy/idlhelp.com.nginx.conf`](deploy/idlhelp.com.nginx.conf) virtual host includes the Certbot HTTPS settings and `nginx -t` passed on 2026-09-17. To reapply a future change, run:

```bash
scp deploy/idlhelp.com.nginx.conf root@206.189.84.142:/etc/nginx/sites-available/idlhelp.com
ssh root@206.189.84.142 'ln -sfn /etc/nginx/sites-available/idlhelp.com /etc/nginx/sites-enabled/idlhelp.com && nginx -t && systemctl reload nginx'
```

Allow inbound TCP 80 and 443 in both the server firewall and any provider firewall. Keep SSH access open. The active `main` export is at `/var/www/idlhelp.com/current`; Nginx serves that symlink. Both domain names returned HTTPS 200 for `/`, while `/home-02` returned 404 in a local VPS check. Each later deployment copies a complete release before replacing the symlink. Previous releases remain available for rollback by changing the `current` symlink.

### Domain and HTTPS

The authoritative nameservers are `dns1.registrar-servers.com` and `dns2.registrar-servers.com`. As of 2026-09-17, these Namecheap **Domain List → Manage → Advanced DNS** Host Records are active:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `206.189.84.142` |
| CNAME | `www` | `idlhelp.com` |

Do not change MX/TXT records used for email. If the VPS address changes, update the A record and check `dig +short idlhelp.com` and `dig +short www.idlhelp.com` after DNS propagation.

Certbot has issued a certificate for both names, and HTTP redirects to HTTPS. To check renewal on the server, run:

```bash
certbot renew --dry-run --cert-name idlhelp.com
```

The server hosts the public domain; Netlify keeps the development address. Before promoting new content to `main`, replace the contact and legal placeholders listed below. Template demo routes remain in the development export, which is marked `noindex`.

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
5. Remove the unused template demo routes under `src/app/` (home-02 … home-11, shop, blog, etc.) during template cleanup. Production Nginx already returns 404 for them; they remain in the Netlify development export.

## Copy guidelines

The service provides information, consultation, document checking and preparation guidance only.
Avoid wording that implies issuing, processing, renewing or guaranteeing government documents
(for example "apply for SIM", "renew your STNK", "guaranteed approval"). Prefer "Request Information",
"Administrative Consultation", "Document Checking", "Preparation Guidance".
