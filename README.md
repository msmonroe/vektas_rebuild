# Vektas Website Rebuild

Modern, responsive marketing site for Vektas built with React, TypeScript, Vite, Tailwind CSS, React Router, Heroicons, Framer Motion, and Cloudflare Workers.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run lint
npm run build
```

## Cloudflare deployment

The site is configured as a full-stack Cloudflare Worker in `wrangler.jsonc`:

- Static Vite assets are served from `dist`.
- SPA routes fall back to `index.html`.
- `/api/*` requests execute `worker/index.ts` first.
- Preview URLs are enabled.

Use these Cloudflare build settings:

```text
Build command: npm run build
Deploy command: npx wrangler deploy
```

## Contact form

The contact form posts to `/api/contact`. The Worker validates Cloudflare Turnstile, performs server-side validation and spam checks, and sends accepted inquiries through Resend.

Configure these runtime values in the Cloudflare Worker under **Settings → Variables and Secrets**:

- `TURNSTILE_SITE_KEY` — plain-text public Turnstile site key.
- `TURNSTILE_SECRET_KEY` — encrypted Turnstile secret key.
- `RESEND_API_KEY` — encrypted Resend API key.
- `CONTACT_FROM_EMAIL` — verified sender, for example `Vektas Website <website@vektas.com>`.
- `CONTACT_TO_EMAIL` — optional destination address. Defaults to `sales@vektas.com`.

The sending domain used by `CONTACT_FROM_EMAIL` must be verified in Resend. Redeploy after changing variables or secrets.

Never commit API keys or secrets. For local Worker testing, use Wrangler with a local `.dev.vars` file.
