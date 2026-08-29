# Quadlink BD — Professional ISP Static Website

Production-ready, highly responsive, and accessible static website for **Quadlink BD** (Internet Service Provider), optimized for **GitHub Pages** hosting with custom domain configuration (`quadlinkbd.com`).

---

## 🚀 Key Features

* **High Performance & Lightweight:** Built using modern vanilla semantic HTML5, modular CSS3 custom properties, and plain JavaScript. Zero heavy framework overhead.
* **Bangla Typography:** Styled with Google Fonts (`Hind Siliguri`) and balanced fallback stacks for clean Bengali rendering.
* **Centralized Configuration:** Edit pricing, packages, speeds, phone numbers, email, and coverage zones directly inside `js/main.js` in one unified `appConfig` object.
* **Accessible & Mobile Optimized:** Fluid layouts across 320px to 4K displays with ARIA attributes and `prefers-reduced-motion` compliance.
* **Turnkey GitHub Pages Deployment:** Includes preconfigured `CNAME`, `robots.txt`, and `sitemap.xml`.

---

## 📂 Project Structure

```text
quadlink-bd/
├── index.html        # Main semantic markup with OpenGraph/SEO meta
├── CNAME             # Custom domain configuration for GitHub Pages
├── robots.txt        # Search crawler permissions
├── sitemap.xml       # Search engine index mapping
├── favicon.svg       # Lightweight SVG brand favicon
├── README.md         # Deployment and usage instructions
├── ai.md             # Guide for future AI coding assistants
├── css/
│   └── style.css     # CSS Variables, grid systems, and micro-interactions
└── js/
    └── main.js        # Centralized business config and DOM hydration
```

---

## ⚙️ Editing Site Content

All business-specific content — company name, phone, email, address, statistics, services, packages, benefits, and coverage areas — lives in a single place: the `appConfig` object at the top of `js/main.js`. Update the values there and the page re-renders those sections automatically on load; no HTML editing required for routine content changes.

To change branding colors, spacing, or typography, edit the CSS custom properties (`:root` block) at the top of `css/style.css`.

---

## 🚢 Deploying to GitHub Pages

1. Create a new GitHub repository and push the contents of this folder to the `main` branch (or a `gh-pages` branch, per your preference).
2. In the repository settings, under **Pages**, set the source to the branch containing these files (root directory).
3. Confirm the `CNAME` file contains your custom domain (`quadlinkbd.com`) — GitHub Pages reads this file automatically to configure the custom domain.
4. At your domain registrar/DNS provider, point the domain to GitHub Pages:
   - For an apex domain (`quadlinkbd.com`), add `A` records pointing to GitHub's Pages IP addresses.
   - For a `www` subdomain, add a `CNAME` record pointing to `<username>.github.io`.
5. Wait for DNS propagation and enable **Enforce HTTPS** in the Pages settings once the certificate is issued.

---

## 📨 Contact Form Notes

The contact form (`#contactForm`) currently runs in **static demo mode** — it validates required fields and shows a success message client-side but does not send data anywhere, since GitHub Pages cannot run server-side code. To make it functional, connect it to a form backend such as [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) by adding their endpoint/action to the form and adjusting `handleFormSubmit()` in `js/main.js` to submit via `fetch()`.

---

## 🤖 For AI Coding Assistants

See [`ai.md`](./ai.md) for a concise map of this codebase intended to help AI tools make safe, correct edits.
