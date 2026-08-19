# Mercury Partners — mercfund.com

Branded informational site for Mercury Partners, built with Astro and plain CSS.
Content architecture from the client's reference package (`client files/`); look and feel from the
Mercury Partners Webflow site and the project style guide.

## Stack

- **Astro 7** (static output, Netlify adapter), TypeScript
- React 19 used only for the contact-form island (`src/components/ContactForm.tsx`)
- Plain CSS design tokens in `src/styles/global.css` (no CSS framework)
- Self-hosted fonts via `@font-face` (`public/fonts/`): Causten Light (headings), Freight Big Pro
  Light + Italic (serif accents). Inter (body) via `@fontsource-variable/inter`.
- `@astrojs/sitemap` emits `/sitemap-index.xml`; `public/robots.txt` points at it
- Deployed on Netlify

## Develop

```bash
npm install
npm run dev
```

`npm run build` outputs static pages to `dist/` plus a Netlify function for the contact endpoint;
`npm run preview` serves the production build locally.

## Contact form

`src/components/ContactForm.tsx` (React island, `client:visible`) posts to
`src/pages/api/contact.ts` (a server endpoint, `prerender = false`), which sends mail through
[Resend](https://resend.com). Configure in Netlify → Site configuration → Environment variables:

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | API key from the Resend dashboard |
| `CONTACT_TO` | Destination inbox (defaults to `info@mercfund.com`) |

For production deliverability, verify the `mercfund.com` domain in Resend and change the `from`
address in `src/pages/api/contact.ts` to something like `website@mercfund.com`.
Until the key is set, the form shows an error state with a direct-email fallback.

Set `PUBLIC_SITE_URL` at build time to control the canonical site URL used by the sitemap
(defaults to `https://mercurypartners.netlify.app` until the mercfund.com cutover — update
`public/robots.txt` then too).

## Design system

Tokens, type scale, components, and usage rules are documented in the project style guide
(internal artifact). Key rules: border-radius is always 0; one Freight-italic `<em>` phrase per
headline (renders indigo #263A99); International Orange is reserved for eyebrows and accents,
never fills; navy `#00224E` is the interactive color.

## Content

Page copy lives directly in `src/pages/*.astro`. The client's original reference pages are kept in
`client files/` for comparison; their design system (Cormorant Garamond/Jost, different palette)
was intentionally **not** used.
