# Techio Solutions — website

Marketing website for Techio Solutions. Public content is in Spanish; code and
documentation are in English.

- **Stack:** Next.js 16 (App Router, Cache Components, Turbopack) · React 19 · TypeScript (strict) · Tailwind CSS 4 · Lucide icons
- **Rendering:** every page is statically prerendered. The only server code is the contact form's server action.
- **Unresolved business/legal content:** see [`CONTENT_REVIEW.md`](./CONTENT_REVIEW.md) before launch.

## Required tools

- Node.js 20.9+ (developed with Node 24 LTS) and npm.

> On the development machine, Node was installed to `~/.local/share/node` without
> changing shell config. Either add it to your PATH for the session:
>
> ```bash
> export PATH="$HOME/.local/share/node/bin:$PATH"
> ```
>
> or install Node system-wide from <https://nodejs.org>.

## Installation

```bash
cd techio-website
npm install
```

## Development server

```bash
npm run dev
```

Open <http://localhost:3000>.

## Production build and preview

```bash
npm run build
npm run start
```

`npm run start` serves the production build at <http://localhost:3000>.

Quality checks:

```bash
npm run lint
npx tsc --noEmit
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in what applies.

| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | In production | Public origin, e.g. `https://www.example.com`. Used for canonical URLs, Open Graph, `sitemap.xml` and `robots.txt`. Falls back to `http://localhost:3000`. |
| `CONTACT_FORM_ENDPOINT` | To receive leads | HTTPS URL that accepts a JSON `POST` with the form data. |
| `CONTACT_FORM_TOKEN` | Optional | Sent as `Authorization: Bearer <token>` to the endpoint. |

Never commit `.env.local` or secrets.

## Deployment

The site is a standard Next.js app and deploys to any Node-capable host or a
platform with native Next.js support (e.g. Vercel, Netlify, a container running
`npm run start`).

1. Set `NEXT_PUBLIC_SITE_URL` and the contact-form variables in the host's environment.
2. Build with `npm run build`; start with `npm run start` (or let the platform do it).
3. After deploying, verify `/robots.txt`, `/sitemap.xml` and that a contact submission arrives at the receiving service.

## Project structure

```
src/
├── app/                      Routes (App Router), metadata, sitemap, robots, icon, OG image
│   ├── contacto/actions.ts   Contact form server action (integration boundary)
│   └── soluciones/<slug>/    Thin pages that render SolutionPageTemplate
├── components/
│   ├── layout/               SiteHeader, DesktopNavigation, MobileNavigation, SiteFooter
│   ├── ui/                   Buttons (PrimaryButton, SecondaryButton, ArrowLink…), SectionHeading,
│   │                         Breadcrumbs, Logo, BrandMark, SolutionIcon
│   ├── sections/             Page sections: HeroVisual, ProblemCard, SolutionCard, ProcessStep,
│   │                         ProcessOverview, FAQAccordion, CTASection, PageHero, SolutionPageTemplate
│   └── forms/                ContactForm, FormField, ChoiceGroup, FormStatus
├── content/                  Typed site copy: solutions.ts, process.ts, home.ts
├── lib/                      site config, metadata helper, contact validation, utilities
└── types/                    Shared content types
```

Design tokens (colors, radii, shadows, type scale, motion) live as CSS custom
properties in `src/app/globals.css` and are exposed to Tailwind through `@theme`.

## Editing content

- **Solutions:** `src/content/solutions.ts` — names, audience, problem, included / not included, client requirements, maintenance, FAQs and SEO text for each solution.
- **Process stages:** `src/content/process.ts` (used on the home page, `/como-trabajamos` and `/contacto`).
- **Home FAQs and "Por qué Techio":** `src/content/home.ts`.
- **Navigation, tagline, contact channels, site URL:** `src/lib/site.ts`.
- Other page copy lives directly in each `src/app/**/page.tsx`.

Keep commercial statements consistent with `CONTENT_REVIEW.md`: no fixed prices,
delivery dates, revision counts or support commitments until they are approved.

## Adding a solution page

1. Add an entry to the `solutions` array in `src/content/solutions.ts` (TypeScript enforces every field).
2. Create `src/app/soluciones/<slug>/page.tsx` by copying an existing one and changing the slug.
3. Add the slug to `solutionOptions` in `src/lib/contact.ts` so the contact form can preselect it.
4. If it needs a new icon or accent, extend `SolutionIconKey` / `BrandAccent` in `src/types/content.ts`.

The home page, `/soluciones`, footer and sitemap pick up the new entry automatically.

## Configuring the contact form

The form (`src/components/forms/ContactForm.tsx`) validates on blur and on submit
with the same rules the server uses (`src/lib/contact.ts`), shows inline errors
plus a focusable error summary, prevents double submission, and preselects the
solution when the URL has `?solucion=<slug>`.

Delivery happens in `src/app/contacto/actions.ts`:

- **No `CONTACT_FORM_ENDPOINT`:** returns `not-configured`; the visitor is told the request was **not** sent. Nothing is stored.
- **With an endpoint:** the action `POST`s JSON and shows the success state **only** if the endpoint answers 2xx.

Payload sent to the endpoint:

```json
{
  "name": "…", "businessName": "…", "businessType": "…",
  "solution": "menu-qr-restaurantes", "solutionLabel": "Menú QR y web para restaurante",
  "needs": "…", "currentSetup": "…",
  "channel": "whatsapp", "channelLabel": "WhatsApp", "contactValue": "…",
  "source": "techio-website/contacto", "submittedAt": "2026-10-26T15:00:00.000Z"
}
```

Any service that accepts a JSON webhook works (form backends, Make/Zapier/n8n
webhooks, a small email-sending function). Test with a real submission after
configuring.

## Replacing brand assets

The logo currently in use is a **provisional vector trace** of the mark from the
brand board, with the wordmark set in Sora. When official files arrive:

1. **Mark / logo:** replace the SVG paths in `src/components/ui/BrandMark.tsx`, or swap `Logo.tsx` to render the official horizontal SVG (e.g. `public/brand/techio-logo.svg` with `next/image` or an inline SVG). Keep original proportions; provide color and inverse (dark background) versions.
2. **Favicon:** replace `src/app/icon.svg` (optionally add `src/app/apple-icon.png`, 180×180).
3. **Open Graph image:** replace `src/app/opengraph-image.tsx` with a static `src/app/opengraph-image.png` (1200×630) if a designed image is provided.
4. Update `CONTENT_REVIEW.md` §2.

## Accessibility and performance notes

- Semantic landmarks, skip link, one `h1` per page, visible focus rings (navy on light, lime on dark).
- Mobile menu is a non-modal disclosure: `aria-expanded`, closes on Escape (focus returns to the toggle), outside click and navigation.
- FAQs use native `<details>/<summary>` (work without JavaScript).
- Scroll reveal uses CSS scroll-driven animations as progressive enhancement; content is fully visible where unsupported and with `prefers-reduced-motion`.
- Fonts are self-hosted at build time by `next/font` (no runtime request to Google).
- No Lighthouse score has been measured yet; run Lighthouse against `npm run start` before launch.
