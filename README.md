# Zarrow Medical Aesthetics — Website

Marketing and booking site for **Zarrow Medical Aesthetics** (also presented as
*Zarrow Aesthetics & IV Bar*) — Greendale, Harare and Newtown, Kwekwe.

Built on the `resorts-template` architecture (Next.js App Router · React 19 ·
Tailwind v4 · framer-motion), re-themed to Zarrow's own identity: warm ivory
surfaces, the logo's muted teal, a gentle gold accent and soft charcoal text.

---

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

Node 18.18+ required.

## Structure

```
src/
├── app/
│   ├── layout.tsx          root shell: fonts, metadata, navbar, footer, WhatsApp FAB
│   ├── page.tsx            home
│   ├── treatments/         full treatment menu with prices
│   ├── gallery/            masonry gallery + lightbox
│   ├── about/              story, values, safety & consent
│   ├── contact/            contact details, form, studio maps
│   ├── booking/            3-step appointment request wizard
│   ├── api/booking/        POST — validates + logs a request
│   ├── api/contact/        POST — validates + logs a message
│   ├── robots.ts · sitemap.ts
│   └── globals.css         the whole design system
├── components/             Navbar, Footer, PageHero, Section, Reveal, TreatmentCard,
│                           PriceList, GalleryGrid, BookingFlow, ContactForm,
│                           ScrollProgress, WhatsAppFab, Credit
└── lib/
    ├── site.ts             business details, branches, nav, WhatsApp helper
    ├── treatments.ts       the treatment menu + prices (single source of truth)
    └── images.ts           brand photography + supporting imagery
```

**All content is config-driven.** To change a price, add a treatment, or update a
phone number, edit `src/lib/*.ts` — never the JSX.

## Design system

Defined entirely in `src/app/globals.css`:

| Token | Role |
| --- | --- |
| `--color-teal-*` | primary — taken from the logo's interlocking rings |
| `--color-gold-*` | accent — the wordmark's "MEDICAL AESTHETICS" sub-line |
| `--color-cream` / `--color-ivory` / `--color-paper` | warm surfaces |
| `--color-charcoal` / `--color-stone` / `--color-mist` | text ramp |
| `--ease-soft` | `cubic-bezier(0.22, 1, 0.36, 1)` — used by every transition |

Type: **Cormorant Garamond** (display) + **Jost** (sans).

Motion is deliberately restrained — scroll reveals fire once, hero imagery uses a
26-second ken-burns, and every animation is disabled under
`prefers-reduced-motion`.

---

## Before this goes live

The supplied resource pack flagged several details as unconfirmed. Each one is a
one-line edit in `src/lib/site.ts`:

1. **Phone numbers** — the artwork carried two (`+263 78 129 4032` and
   `+263 77 616 9869`). Confirm which is the booking line.
2. **Both addresses** — Greendale, Harare and Newtown, Kwekwe.
3. **Opening hours** — none were supplied, so the site says appointments are
   "arranged individually" rather than inventing times, and the booking wizard
   asks for a preferred *part of the day* rather than offering fixed slots. Add
   real hours if they exist.
4. **Social profile URLs** — `SITE.social.instagram` and `SITE.social.facebook`
   are best-guess handles built from the labels "Zarrow_aesthetics and IV Bar"
   and "Zarrow Aesthetics". **Verify both before launch.**
5. **All prices** in `src/lib/treatments.ts` are transcribed from the supplied
   price cards. Confirm currency, current pricing, eligibility, treatment scope
   and any consultation fee.
6. **Clinical claims** — the copy deliberately avoids guaranteed results,
   permanent outcomes and medical cures, and presents injectables, laser, IV,
   PRP and contouring as consultation-led. Have a clinician approve the wording,
   aftercare and consent content.

### Not yet wired

`src/app/api/booking/route.ts` and `src/app/api/contact/route.ts` validate the
submission and return a reference, but **only log to the server console**.
Connect an email provider (Resend, Mailtrap, SMTP) or the studio's booking system
so requests actually arrive.

### Imagery

`public/images/*` are Zarrow's own supplied photographs. The gallery also uses a
small set of licensed Unsplash images (attributed in-page via `<Credit/>`) —
swap these for the studio's own photography when it is available. Everything
lives in `src/lib/images.ts`.
