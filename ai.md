# AI Assistant Guide — Quadlink BD

This file orients AI coding assistants (Claude, Copilot, etc.) working in this repository.

## What this project is

A static, dependency-free marketing website for Quadlink BD, an ISP in Bangladesh. No build step, no package manager, no framework. It is deployed as-is to GitHub Pages using the `CNAME` file for the custom domain `quadlinkbd.com`.

## File map

- `index.html` — All page markup and SEO/meta tags. Content sections (`#services`, `#packages`, `#benefits`, `#coverage`, stats) render into empty container `<div>`s (`servicesGrid`, `packagesGrid`, `benefitsGrid`, `coverageGrid`, `statsGrid`) via JavaScript — do not hardcode cards into the HTML.
- `css/style.css` — Single stylesheet. Design tokens (colors, spacing, radius, shadows, transitions) are defined as CSS custom properties in the `:root` block at the top. Prefer editing tokens over hardcoding new values.
- `js/main.js` — All business content and interactivity in one file:
  - `appConfig` object (top of file) — the single source of truth for company info, statistics, services, packages, benefits, and coverage zones. **Edit content here, not in HTML.**
  - `render*()` functions — build HTML strings from `appConfig` and inject via `innerHTML` into the containers in `index.html`.
  - `handleFormSubmit()` — client-side only; the form has no backend. See README for how to wire a real endpoint.
  - `setupUIInteractions()` — sticky header, mobile nav toggle, back-to-top, and scroll-reveal via `IntersectionObserver`.
- `CNAME` — GitHub Pages custom domain (`quadlinkbd.com`). Do not remove unless changing the deployment domain.
- `robots.txt` / `sitemap.xml` — keep the domain in both consistent with `CNAME`.
- `favicon.svg` — matches the inline logo SVG in `index.html`'s header; keep them in sync if the brand mark changes.

## Conventions to follow

- Site language is Bangla (`lang="bn"`); keep new user-facing copy in Bangla unless told otherwise.
- No build tools, bundlers, or npm dependencies — keep everything plain HTML/CSS/JS that runs directly from static files.
- Content changes (pricing, packages, phone/email, coverage areas) belong in `appConfig` in `js/main.js`, not scattered across `index.html`.
- Styling changes should reuse existing CSS custom properties where possible rather than introducing new hardcoded colors/spacing.
- Respect `prefers-reduced-motion` — any new animations should be disabled under that media query, matching the existing pattern at the bottom of `style.css`.
- Images currently reference external Unsplash URLs as placeholders; replace with real, licensed assets before production launch.

## Known limitations (intentional, not bugs)

- The contact form does not submit anywhere — it's a static demo. Do not silently "fix" this by adding a backend unless asked.
- Phone number (`phoneRaw: "+8801000000000"`) and other contact details in `appConfig` are placeholders and should be updated with real values before launch.
