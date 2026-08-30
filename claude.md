# AI Assistant Guide — Quadlink BD

This file orients AI coding assistants (Claude, Copilot, etc.) working in this repository.

## What this project is

A Node.js/Express-backed marketing website for Quadlink BD, an ISP in Bangladesh. The frontend is the original static HTML/CSS/vanilla-JS site (no frontend build step, no framework); Express now serves it and adds a small JSON API. It was converted from a pure static site (formerly deployed to GitHub Pages) so it can run a real backend — starting with a working contact form via Resend, and eventually a billing system.

## File map

- `server.js` — Express app entry point. Serves `public/` as static files, mounts API routers under `/api/*`, applies rate limiting to the contact endpoint.
- `src/routes/contact.js` — `POST /api/contact`. Validates required fields server-side, sends the submission as an email via the `resend` npm package. Returns `{ ok: boolean, error?: string }` JSON.
- `ecosystem.config.js` — pm2 process config for running the app on a VPS.
- `.env.example` — template for required environment variables (`PORT`, `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`). Real values go in `.env`, which is gitignored — never commit it or paste real secrets into files that get committed.
- `public/index.html` — All page markup and SEO/meta tags. Content sections (`#services`, `#packages`, `#benefits`, `#coverage`, stats) render into empty container `<div>`s (`servicesGrid`, `packagesGrid`, `benefitsGrid`, `coverageGrid`, `statsGrid`) via JavaScript — do not hardcode cards into the HTML.
- `public/css/style.css` — Single stylesheet. Design tokens (colors, spacing, radius, shadows, transitions) are defined as CSS custom properties in the `:root` block at the top. Prefer editing tokens over hardcoding new values.
- `public/js/main.js` — All business content and frontend interactivity in one file:
  - `appConfig` object (top of file) — the single source of truth for company info, statistics, services, packages, benefits, and coverage zones. **Edit content here, not in HTML.**
  - `render*()` functions — build HTML strings from `appConfig` and inject via `innerHTML` into the containers in `index.html`.
  - `handleFormSubmit()` — `async`, `fetch()`s `POST /api/contact` with the form fields as JSON, shows the server's success/error message, disables the submit button while in flight.
  - `setupUIInteractions()` — sticky header, mobile nav toggle, scroll-spy, back-to-top, and scroll-reveal via `IntersectionObserver`.
- `public/robots.txt` / `public/sitemap.xml` — keep the domain in both consistent with production (`quadlinkbd.com`).
- `public/img/logo.png` / `public/img/logo-white.png` — the brand wordmark ("Quad Link", black text on transparent) and its white-text variant for use on dark backgrounds (e.g. the footer). Referenced via `<img class="brand-mark">` in `index.html`'s header and footer.
- `public/favicon.png` — the "Q" mark cropped from the logo, on a rounded navy tile; keep in sync if the brand mark changes.

## Conventions to follow

- Site language is Bangla (`lang="bn"`); keep new user-facing copy (including API error strings) in Bangla unless told otherwise.
- Frontend stays plain HTML/CSS/JS with no build step — don't introduce a bundler/framework for the frontend without being asked.
- Backend code goes under `src/` (e.g. new features as `src/routes/<name>.js`, mounted in `server.js`) rather than inline in `server.js`.
- Content changes (pricing, packages, phone/email, coverage areas) belong in `appConfig` in `public/js/main.js`, not scattered across `index.html`.
- Styling changes should reuse existing CSS custom properties where possible rather than introducing new hardcoded colors/spacing.
- Respect `prefers-reduced-motion` — any new animations should be disabled under that media query, matching the existing pattern at the bottom of `style.css`.
- Images currently reference external Unsplash URLs as placeholders; replace with real, licensed assets before production launch.
- Never commit `.env` or real API keys/secrets; only `.env.example` (with placeholder values) is tracked.

## Known limitations / in-progress items

- Resend's sending domain (`quadlinkbd.com`) is now verified — the contact form sends from `noreply@quadlinkbd.com` to `info@quadlinkbd.com` in production. See README "Contact Form / Resend Setup".
- Phone number (`phoneRaw` in `appConfig`) and other contact details are placeholders and should be updated with real values before launch.
- No database, authentication, or payment gateway exists yet — these will be introduced when billing system work starts. Don't scaffold them speculatively; add them when that work is actually requested.
- Hosting target is a VPS (via pm2 + a reverse proxy), not GitHub Pages — the old `CNAME` file has been removed.
