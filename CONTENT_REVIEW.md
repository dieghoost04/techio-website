# Content review — Techio Solutions website v1

Internal document. **Not published on the site.** It lists what is missing, what
conflicts, and which business/legal decisions must be approved before launch.

Sources available during development:

- `../Media/Techio Solutions Design System Poster.png` (design system v1.0)
- `../Media/WhatsApp Image 2026-10-23 at 11.31.26 AM.jpeg` (identity proposal "02 / Enlace modular")
- The written development brief (no separate commercial documentation was provided)

Status legend: 🔴 launch blocker · 🟠 needs approval · 🟡 nice to have

---

## 1. Launch blockers

| # | Item | Current state | Decision / action needed | Files / pages affected |
|---|------|---------------|--------------------------|------------------------|
| 1.1 🔴 | **Contact form delivery** | Frontend, validation and server action are complete. No receiving service exists, so submissions return "not configured" and the visitor is told the request **was not sent**. | Choose a receiving service (form service, automation webhook, email API) and set `CONTACT_FORM_ENDPOINT` (+ `CONTACT_FORM_TOKEN` if needed). Test a real submission end to end. | `/contacto`, `src/app/contacto/actions.ts` |
| 1.2 🔴 | **Privacy notice (Aviso de privacidad)** | Page exists with a visible "Documento en preparación" notice and a factual list of the fields the form collects. Marked `noindex` and excluded from the sitemap. | Provide approved legal text (responsible party, purposes, ARCO rights procedure, transfers, changes). Decide whether the form needs an explicit consent checkbox. Then remove the pending notice, `noIndex`, and add the page to `sitemap.ts`. | `/aviso-de-privacidad`, `/contacto`, footer |
| 1.3 🔴 | **Production domain** | Unknown. Canonical URLs, Open Graph URLs, `robots.txt` and `sitemap.xml` fall back to `http://localhost:3000`. | Confirm the domain and set `NEXT_PUBLIC_SITE_URL` in the hosting environment. | All pages (metadata), `sitemap.xml`, `robots.txt` |
| 1.4 🔴 | **Verified contact information** | No email, phone, WhatsApp, address or social profiles were found. None are displayed; the only channel is the form. | Provide the channels the business wants public. Add them in `siteConfig.contact` (`src/lib/site.ts`); footer, contact page and final CTA (WhatsApp button) show them automatically. | Footer, `/contacto`, every final CTA |

## 2. Brand assets

| # | Item | Current state | Action |
|---|------|---------------|--------|
| 2.1 🟠 | **Official logo files** | Only brand boards exist (raster). The site uses a **provisional vector trace** of the mark (`BrandMark.tsx`, `app/icon.svg`) plus the "techio / SOLUTIONS" wordmark set in Sora. It is not the official artwork. | Deliver official SVG files: horizontal logo (color + inverse), icon/favicon. Replace per README → "Replacing brand assets". |
| 2.2 🟡 | Open Graph image | Generated at build time (`app/opengraph-image.tsx`) from brand colors and the tagline; uses the default font, not Sora. | Optionally supply a designed 1200×630 image. |
| 2.3 🟡 | Photography | None used. The design system calls for "imágenes limpias, modernas y reales". | Provide real photos (work, team, clients' businesses with permission) if desired. |
| 2.4 🟡 | Muted text color | Brand board specifies `#667085`; the site uses `#5B6478` to keep ≥ 4.5:1 contrast on the `#F6F7FB` background. | Approve or adjust. |

## 3. Commercial decisions requiring approval

Nothing below is published as a fixed fact. The site defers each point to "your proposal" (*tu propuesta*).

| # | Topic | What the brief says | What the site says now | Pages affected |
|---|-------|---------------------|------------------------|----------------|
| 3.1 🟠 | **Pricing** | Pricing and packages unresolved. | "Cotización según alcance"; cost is defined in the proposal after the diagnosis. No prices shown. | Home FAQ, `/soluciones`, solution pages, `/contacto` |
| 3.2 🟠 | **Monthly fee** | Not defined. | "Si tu proyecto incluye un pago recurrente, su monto y lo que cubre se especifican en tu propuesta." | Home FAQ |
| 3.3 🟠 | **Payment structure (50/50) and "first month included"** | Mentioned in documentation, but milestones not verified. | **Not published.** Only "costo y condiciones de pago" in the proposal. | `/como-trabajamos` (would be the natural place) |
| 3.4 🟠 | **Maintenance scope** | Implementation + maintenance "under agreed conditions". | Maintenance exists; its scope is defined in the proposal; new features, major changes and third-party subscriptions are not included unless agreed. | Home "Por qué Techio", solution pages, FAQs |
| 3.5 🟠 | **Cancellation** | Not defined. | Content, domain and data belong to the client; cancellation conditions are in the proposal. | Home FAQ |
| 3.6 🟠 | **Client ownership of content, domain and data** | Stated in the brief. | Published as a fact ("Lo tuyo es tuyo"). Confirm it holds for domains registered on the client's behalf. | Home, `/sobre-techio` |
| 3.7 🟠 | Revisions, delivery times, support response times, warranties | Not defined. | Not promised anywhere. Revision stage says "ajustes dentro del alcance acordado". | `/como-trabajamos` |
| 3.8 🟠 | Package limits (number of pages, products, dishes) | Not defined. | "Depende del alcance del proyecto." | Catalog FAQ |

## 4. Solution scope to confirm

The "Qué incluye" lists are a reasonable reading of the brief, introduced on every page with
"El alcance final se confirma en tu propuesta". Please confirm or correct each item.

**Menú QR y web para restaurantes** (`/soluciones/menu-qr-restaurantes`)
- Included: restaurant web page (info, hours, location, contact), digital menu by category with optional prices, QR code delivered as a printable file, responsive design.
- Not included (stated): online ordering/cart, online payments, delivery platform integrations, reservations/table management, physical printing.
- To confirm: whether menu updates are part of maintenance and how often.

**Landing pages y webs para negocios de servicios** (`/soluciones/web-para-negocios-de-servicios`)
- Included: business introduction, service descriptions, contact info and CTAs, landing page or multi-section site depending on scope.
- Not included (stated): online appointment booking, CRM integrations, automated messaging, advanced analytics, online store/payments.
- To confirm: whether a contact form on the client's site is included; who registers the domain.

**Catálogos de productos** (`/soluciones/catalogos-de-productos`)
- Included: categories, product cards (image, name, description, optional price), contact info, responsive design.
- Not included (stated): full ecommerce, cart, online payments, inventory sync, shipping/logistics.
- To confirm: how products are added/updated after launch.

## 5. Missing content

| # | Item | Current handling | Pages |
|---|------|------------------|-------|
| 5.1 🟠 | **Team members and roles** | Not shown. No names, bios, photos or experience published. | `/sobre-techio` — add a "Equipo" section once real data is provided |
| 5.2 🟡 | Company history, location, legal entity | Not shown. | `/sobre-techio`, footer, privacy notice |
| 5.3 🟡 | Testimonials, case studies, portfolio | None exist; none fabricated. The brand board's sample testimonial was deliberately **not** used. | Home, solution pages (future section) |
| 5.4 🟡 | Social media profiles | None found; none linked. | Footer |

## 6. Conflicts noticed between sources

| # | Conflict | Resolution in v1 |
|---|----------|------------------|
| 6.1 | Brand board component examples show **"Gestión de citas"** and **"Inventario"** as services. The brief defers appointment booking and inventory management. | Not featured. Both are explicitly listed as *not included* where relevant. |
| 6.2 | Brand board button examples use white text on a deep purple; the official lavender `#9895FF` fails contrast with white (~2.6:1). | Primary buttons use navy text on lavender (~6.7:1). |
| 6.3 | Brand board shows a "¡Mensaje enviado!" success state for the form. | Success state exists but is shown **only** after the configured endpoint returns 2xx. |
| 6.4 | Brand board's design system mentions "Nosotros" in nav; the brief requires "Sobre Techio". | Brief followed: "Sobre Techio". |

## 7. Copy that paraphrases brand materials

- Tagline "Tecnología que impulsa tu negocio." and "Cada idea encuentra su conexión." are taken from the brand boards.
- The four principles on `/sobre-techio` (Modular, Ingeniosa, Clara, Flexible) come from the identity proposal's attribute tags; their **descriptions were written for the site** and should be reviewed.
- Hero headline "Tecnología práctica que impulsa tu negocio." adapts the official tagline.
