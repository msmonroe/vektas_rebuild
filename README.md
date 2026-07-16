# Vektas Website Rebuild

Modern, responsive marketing site for Vektas built with React, TypeScript, Vite, Tailwind CSS, React Router, Heroicons, Framer Motion, and Cloudflare Pages Functions.

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

## Contact form

The contact form posts to the Cloudflare Pages Function at `/api/contact` and sends inquiries through Resend.

Configure these values in Cloudflare Pages under **Settings → Variables and Secrets** for both Preview and Production:

- `RESEND_API_KEY` — encrypted secret containing the Resend API key.
- `CONTACT_FROM_EMAIL` — verified sender, for example `Vektas Website <website@vektas.com>`.
- `CONTACT_TO_EMAIL` — optional destination address. Defaults to `sales@vektas.com`.

The sending domain used by `CONTACT_FROM_EMAIL` must be verified in Resend. Redeploy after changing variables or secrets.

For local testing with Cloudflare Pages Functions, use Wrangler and a local `.dev.vars` file. Never commit API keys or secrets.
