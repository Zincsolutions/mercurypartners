# Mercury Partners — mercfund.com

Branded informational site for Mercury Partners, built with Next.js (App Router) and plain CSS.
Content architecture from the client's reference package (`client files/`); look and feel from the
Mercury Partners Webflow site and the project style guide.

## Stack

- **Next.js 15** (App Router), React 19, TypeScript
- Plain CSS design tokens in `app/globals.css` (no CSS framework)
- Self-hosted fonts via `next/font/local`: Causten Light (headings), Freight Big Pro Light +
  Italic (serif accents). Inter via `next/font/google` (body).
- Deployed on Vercel

## Develop

```bash
npm install
npm run dev
```

## Contact form

`components/ContactForm.tsx` posts to `app/api/contact/route.ts`, which sends mail through
[Resend](https://resend.com). Configure in Vercel → Project → Settings → Environment Variables:

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | API key from the Resend dashboard |
| `CONTACT_TO` | Destination inbox (defaults to `info@mercfund.com`) |

For production deliverability, verify the `mercfund.com` domain in Resend and change the `from`
address in `app/api/contact/route.ts` to something like `website@mercfund.com`.
Until the key is set, the form shows an error state with a direct-email fallback.

## Design system

Tokens, type scale, components, and usage rules are documented in the project style guide
(internal artifact). Key rules: border-radius is always 0; one Freight-italic `<em>` phrase per
headline (renders indigo #263A99); International Orange is reserved for eyebrows and accents,
never fills; navy `#00224E` is the interactive color.

## Content

Page copy lives directly in `app/*/page.tsx`. The client's original reference pages are kept in
`client files/` for comparison; their design system (Cormorant Garamond/Jost, different palette)
was intentionally **not** used.
