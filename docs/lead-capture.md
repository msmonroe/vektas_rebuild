# Lead capture deployment checklist

Do not merge until the production D1 database and Turnstile are configured, the migration is applied, and the pull request passes build checks.

1. Cloudflare dashboard > Storage & databases > D1: create a database named vektas-leads.
2. Copy its database ID (not a secret) and add a d1_databases entry to wrangler.jsonc: binding DB, database_name vektas-leads, database_id the actual ID. Apply migrations/0001_leads.sql to the database using the D1 console or wrangler d1 migrations apply vektas-leads --remote.
3. Create a free Turnstile widget for vektas.com and www.vektas.com. Set VITE_TURNSTILE_SITE_KEY as a build environment variable; set TURNSTILE_SECRET as an encrypted Worker runtime secret. Never put the secret in Git.
4. Verify Cloudflare asset routing and test valid/invalid submissions, D1 persistence, error states and spam checks. Configure an appropriate request rate limit for /api/contact and /api/newsletter where available.
5. Contact leads are stored with notification_status pending; inspect them in D1 until Zoho notification delivery is implemented. No email sending is implemented yet. Newsletter requests remain pending_confirmation; do not send newsletters until double opt-in and unsubscribe workflows are implemented.
6. Verify existing GEO routes and sitemap after rollout. No extra paid form provider required.
