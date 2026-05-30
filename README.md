# Sjøparken Garten Marina — nettside

Next.js 16 + Tailwind CSS v4 + TypeScript. Bygget på designet fra Claude Design (Coastal Nordic). Klar for deploy til Vercel.

## Kom i gang

```bash
npm install
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000).

## Bygg & produksjon

```bash
npm run build     # Produksjonsbygg (Turbopack)
npm start         # Server produksjonsbygg lokalt
npm run lint      # ESLint
```

## Sider

| Rute | Fil | Notat |
|---|---|---|
| `/` | [`app/page.tsx`](app/page.tsx) | Forside (hero, intro, tjenester, om/beliggenhet, båtplasser, galleri-teaser, sitat, kontakt-CTA) |
| `/baatplasser` | [`app/baatplasser/page.tsx`](app/baatplasser/page.tsx) | Kart, plasstyper & priser (plassholdere), fasiliteter, CTA |
| `/utleieboliger` | [`app/utleieboliger/page.tsx`](app/utleieboliger/page.tsx) | Foreløpig placeholder — innhold mangler |
| `/galleri` | [`app/galleri/page.tsx`](app/galleri/page.tsx) | Full mosaikk av alle bilder |
| `/kontakt` | [`app/kontakt/page.tsx`](app/kontakt/page.tsx) | Info-kort + skjema (utvidet variant) |
| `/sitemap.xml` | [`app/sitemap.ts`](app/sitemap.ts) | Auto-generert |
| `/robots.txt` | [`app/robots.ts`](app/robots.ts) | Auto-generert |
| `/manifest.webmanifest` | [`app/manifest.ts`](app/manifest.ts) | PWA manifest |
| `404` | [`app/not-found.tsx`](app/not-found.tsx) | Egen 404-side |

## Mappestruktur

```
app/
  layout.tsx          # Root layout, fonts, metadata, JSON-LD
  globals.css         # Designsystem (tokens, komponenter, responsivt)
  page.tsx            # Forside
  api/contact/        # POST-endepunkt for skjema (logger i dev)
  baatplasser/  utleieboliger/  galleri/  kontakt/
  sitemap.ts robots.ts manifest.ts not-found.tsx
components/
  Header.tsx          # Sticky / solid variant + mobilmeny
  Footer.tsx
  Reveal.tsx          # Scroll-reveal-wrapper
  ContactForm.tsx     # Skjema med honeypot
  icons/Icons.tsx     # Alle inline SVG-ikoner
lib/
  site.ts             # Sentral konstanter (telefon, e-post, adresse, geo)
  structured-data.tsx # JSON-LD: Organization, LocalBusiness, WebSite, Breadcrumb
public/assets/        # Bilder + logo (bytt ut med endelige bilder her)
```

## Designtokens

Alle tokens (farger, fonts, radius, skygger) ligger i [`app/globals.css`](app/globals.css) i `@theme`-blokken — Tailwind v4 plukker dem opp automatisk. Endre der for å justere palett globalt.

| Token | Verdi | Bruk |
|---|---|---|
| `--color-ocean` | `#0B3A53` | Primær, mørke seksjoner, knapper |
| `--color-sky` | `#E8F0F4` | Lyse seksjonsbakgrunner |
| `--color-sand` | `#D9C9A8` | Aksent, kursiv i hero |
| `--color-sunset` | `#E07A3C` | CTA-primær, eyebrow-streker |
| `--color-off` | `#FAFAF7` | Sidebakgrunn |
| `--color-ink` | `#0E1E27` | Brødtekst |

Fonts via `next/font/google`: **Newsreader** (serif, overskrifter + kursiv aksent) og **Hanken Grotesk** (sans, brødtekst/UI).

## SEO

- **Metadata API** på alle sider (title, description, canonical, OpenGraph, Twitter card)
- **JSON-LD strukturert data** på alle sider: `Organization`, `LocalBusiness + TouristAttraction` (med adresse, geo, åpningstider-felt klart, amenityFeature), `WebSite`, `BreadcrumbList` på undersider
- **Sitemap** auto-generert med riktig prioritet/changefreq
- **robots.txt** med sitemap-referanse, `/api/` disallow'd
- **manifest.webmanifest** (PWA-klar)
- **Semantisk HTML** (`<section aria-labelledby>`, `<nav aria-label>`, `<h1>` per side, ingen hopp i hierarki)
- **alt-tekst** på alle dekorative + meningsbærende bilder
- **next/image** med AVIF/WebP + responsive `srcset`
- **Sikkerhets-headers** + cache-immutable på `/assets/*` ([`next.config.ts`](next.config.ts))
- **Norsk språk-flagg** (`lang="no"`, `locale: "nb_NO"`)

## Skjema (`/api/contact`)

Skjema POST'er JSON til `/api/contact` ([`app/api/contact/route.ts`](app/api/contact/route.ts)). I dev logger den til konsoll. **TODO før prod:** koble til e-postutsendelse — anbefaling for Vercel:

- **Resend** (`npm i resend`) — enkleste, gratis-tier på 3 000 e-poster/mnd
- eller **Formspree** / **Web3Forms** hvis du heller vil unngå en e-post-API

Sett `RESEND_API_KEY` i Vercel env vars + bytt ut handler-implementasjonen.

Honeypot-felt (`company`) blokkerer trivielle bot-submissions.

## Deploy til Vercel

```bash
npm i -g vercel
vercel              # Første gang: link prosjektet
vercel --prod       # Deploy til produksjon
```

Eller: push til GitHub og koble Vercel til repoet (auto-deploy ved push).

**Env-variabler å sette i Vercel** (kommer):
- `RESEND_API_KEY` (når skjema kobles til e-post)
- Eventuelt `NEXT_PUBLIC_GA_ID` hvis dere skal ha Google Analytics

## Plassholdere som må erstattes

Se [`SPORSMAL_TIL_KRISTOFFER.md`](../SPORSMAL_TIL_KRISTOFFER.md) i prosjektroten for komplett liste.

Kort versjon:
- Sesongpriser på båtplasser (3 nivåer)
- Org.nr. (vises i footer)
- Sosiale lenker (Facebook + Instagram)
- Sitater fra fornøyde båteiere
- Innhold + bilder til Utleieboliger-siden
- Endelige optimaliserte bilder (kan beholde nåværende inntil videre)
- Eksakt geo-koordinater (har omtrentlige nå)
- Åpningstider hvis relevant
- Avgjørelse: skal `/api/contact` sende e-post via Resend, eller koble til en form-tjeneste?
