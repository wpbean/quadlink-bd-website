# Quadlink BD — Node.js / Express ISP Website

Production website for **Quadlink BD** (Internet Service Provider), served by a small Node.js/Express backend. The frontend is the original static HTML/CSS/vanilla-JS site (now under `public/`); the backend adds a working contact form (via [Resend](https://resend.com)) and a foundation for future features like a billing system.

---

## 🚀 Key Features

* **Node.js + Express backend:** serves the static site and exposes a small JSON API (`/api/contact` today; more routes — e.g. billing — can be added under `src/routes/`).
* **Working contact form:** submissions are validated server-side and emailed via the Resend API.
* **Same frontend as before:** Bangla UI (`Hind Siliguri` font), centralized content config in `public/js/main.js` (`appConfig`), zero frontend build step.
* **Rate-limited API:** the contact endpoint is throttled to reduce spam/abuse.

---

## 📂 Project Structure

```text
quadlinkbd.com/
├── server.js              # Express app entry point
├── ecosystem.config.js    # pm2 process config for VPS deployment
├── package.json
├── .env.example            # Copy to .env and fill in real values (never commit .env)
├── src/
│   └── routes/
│       └── contact.js      # POST /api/contact — validates input, sends email via Resend
├── public/                 # Everything served as static files
│   ├── index.html          # Main markup with OpenGraph/SEO meta
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js         # appConfig (business content) + rendering + contact form fetch()
├── README.md
└── claude.md                # Guide for AI coding assistants
```

---

## ⚙️ Local Development

```bash
npm install
cp .env.example .env   # then fill in RESEND_API_KEY etc.
npm run dev             # auto-restarts on file changes (node --watch)
# or: npm start
```

The site runs at `http://localhost:3000` (or `$PORT`).

---

## ✏️ Editing Site Content

Business content — company name, phone, email, address, statistics, services, packages, benefits, coverage areas — still lives in one place: the `appConfig` object at the top of `public/js/main.js`. Update values there; the page re-renders those sections on load. No HTML editing needed for routine content changes.

Branding colors, spacing, and typography are CSS custom properties in the `:root` block at the top of `public/css/style.css`.

---

## 📨 Contact Form / Resend Setup

The form at `#contactForm` POSTs to `/api/contact`, which sends an email via the [Resend](https://resend.com) API using the official `resend` npm package.

1. Create a Resend account and an API key.
2. Verify `quadlinkbd.com` (or a subdomain) as a sending domain in Resend — **required** before you can send from an address like `noreply@quadlinkbd.com`. (This is done — the domain is verified, so submissions deliver straight to `info@quadlinkbd.com`.)
3. Set these in `.env` (see `.env.example`):
   ```
   RESEND_API_KEY=re_...
   CONTACT_FROM_EMAIL="Quadlink BD Website <noreply@quadlinkbd.com>"
   CONTACT_TO_EMAIL=info@quadlinkbd.com
   ```
4. Restart the server. Submissions will arrive as plain-text emails at `CONTACT_TO_EMAIL`.

If `RESEND_API_KEY` is missing, the API responds with a friendly Bangla error and logs a warning instead of crashing — the rest of the site keeps working.

---

## 🚢 Deploying to a VPS

1. Provision a VPS (Ubuntu, etc.), install Node.js (>=18) and [pm2](https://pm2.keymetrics.io/) (`npm install -g pm2`).
2. Clone this repo onto the server, run `npm install --omit=dev`, and create `.env` with real production values (never commit it).
3. Start the app under pm2:
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup   # follow the printed instructions to launch pm2 on boot
   ```
4. Put a reverse proxy (Nginx or Caddy) in front of the app to terminate TLS and forward to `http://127.0.0.1:3000` (or your configured `$PORT`), and obtain a certificate (e.g. via Let's Encrypt / certbot).
5. At your DNS provider, point `quadlinkbd.com` (and `www`) directly at the VPS's IP address (A/AAAA records) — GitHub Pages' `CNAME` file has been removed since the site no longer lives there.

---

## 💳 Future: Billing System

The backend is structured so new functionality is added as additional routes under `src/routes/` (e.g. `src/routes/billing.js`, mounted in `server.js` the same way `contact.js` is) rather than bolted onto the frontend. When billing work starts, expect to add a database/ORM, authentication, and likely a payment gateway integration — none of that exists yet.

---

## 🤖 For AI Coding Assistants

See [`claude.md`](./claude.md) for a concise map of this codebase intended to help AI tools make safe, correct edits.
