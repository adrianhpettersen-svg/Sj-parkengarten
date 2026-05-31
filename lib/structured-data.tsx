import { site } from "@/lib/site";

const sameAs = [site.social.facebook, site.social.instagram].filter(
  (v): v is string => Boolean(v),
);

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  postalCode: site.address.postalCode,
  addressLocality: site.address.city,
  addressRegion: site.address.region,
  addressCountry: site.address.countryCode,
} as const;

const geo = {
  "@type": "GeoCoordinates",
  latitude: site.geo.latitude,
  longitude: site.geo.longitude,
} as const;

const placeGarten = {
  "@type": "Place",
  "@id": `${site.url}#place-garten`,
  name: "Garten",
  description: "Øy ytterst på Fosen-halvøya i Trøndelag — siste stopp med fastlandsforbindelse via bro.",
  address: postalAddress,
  geo,
  containedInPlace: [
    { "@type": "Place", name: "Fosen" },
    { "@type": "AdministrativeArea", name: "Trøndelag" },
    { "@type": "Country", name: "Norge" },
  ],
} as const;

function organization() {
  return {
    "@type": "Organization",
    "@id": `${site.url}#organization`,
    name: site.longName,
    alternateName: site.name,
    legalName: site.org.name,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      "@id": `${site.url}#logo`,
      url: `${site.url}/assets/current-logo.png`,
      contentUrl: `${site.url}/assets/current-logo.png`,
      width: 710,
      height: 181,
      caption: `${site.longName} logo`,
    },
    image: { "@id": `${site.url}#logo` },
    foundingDate: String(site.established),
    foundingLocation: { "@type": "Place", address: postalAddress },
    taxID: site.org.orgNumber,
    knowsAbout: [
      "Marina",
      "Båtplassutleie",
      "Båtslipp",
      "Båtlager",
      "Sløyebod",
      "Fritidsbåter",
      "Trondheimsfjorden",
    ],
    areaServed: [
      { "@type": "Place", name: "Trøndelag" },
      { "@type": "Place", name: "Fosen" },
      { "@type": "Place", name: "Trondheimsfjorden" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: site.contact.phoneE164,
        email: site.contact.email,
        areaServed: "NO",
        availableLanguage: ["Norwegian", "English"],
      },
    ],
    ...(sameAs.length ? { sameAs } : {}),
  } as const;
}

function marina() {
  return {
    "@type": ["LocalBusiness", "TouristAttraction"],
    "@id": `${site.url}#marina`,
    name: site.longName,
    alternateName: site.name,
    description: site.description,
    url: site.url,
    telephone: site.contact.phoneE164,
    email: site.contact.email,
    image: [
      `${site.url}/assets/hero-sunset.jpg`,
      `${site.url}/assets/aerial.jpg`,
      `${site.url}/assets/harbor.jpg`,
      `${site.url}/assets/sunset.jpg`,
    ],
    logo: { "@id": `${site.url}#logo` },
    priceRange: "kr 4 900–5 900",
    currenciesAccepted: "NOK",
    paymentAccepted: "Bankoverføring, Vipps",
    isAccessibleForFree: false,
    publicAccess: true,
    smokingAllowed: false,
    foundingDate: String(site.established),
    parentOrganization: { "@id": `${site.url}#organization` },
    slogan: site.tagline,
    address: postalAddress,
    geo,
    hasMap: `https://www.google.com/maps/search/?api=1&query=${site.geo.latitude},${site.geo.longitude}`,
    location: { "@id": `${site.url}#place-garten` },
    areaServed: [
      { "@type": "Place", name: "Trøndelag" },
      { "@type": "Place", name: "Trondheimsfjorden" },
      { "@type": "Place", name: "Fosen" },
      { "@type": "Place", name: "Hitra" },
      { "@type": "Place", name: "Frøya" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        description: "Sesong: april–oktober. Henvendelser på telefon og e-post hele året.",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        validFrom: "2026-04-01",
        validThrough: "2026-10-31",
      },
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Båtplasser", value: true },
      { "@type": "LocationFeatureSpecification", name: "Sløyebod", value: true },
      { "@type": "LocationFeatureSpecification", name: "Båtslipp", value: true },
      { "@type": "LocationFeatureSpecification", name: "Båtlager (vinterlager)", value: true },
      { "@type": "LocationFeatureSpecification", name: "165 meter molo", value: true },
      { "@type": "LocationFeatureSpecification", name: "Parkering", value: true },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Båtplasser og lagring",
      itemListElement: [
        {
          "@type": "Offer",
          "@id": `${site.url}#offer-berth-small`,
          name: "Båtplass 2,5 m — sesongleie",
          description: "Standard båtplass à 2,5 m, plass 1–12 langs hovedbrygge.",
          price: "4900",
          priceCurrency: "NOK",
          availability: "https://schema.org/InStock",
          eligibleRegion: { "@type": "Place", name: "Trøndelag" },
        },
        {
          "@type": "Offer",
          "@id": `${site.url}#offer-berth-medium`,
          name: "Båtplass 3,5 m — sesongleie",
          description: "Bredere båtplass à 3,5 m (plass A).",
          price: "5900",
          priceCurrency: "NOK",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          "@id": `${site.url}#offer-berth-large`,
          name: "Båtplass opp til 35 fot — sesongleie",
          description: "Plass langs brygge for større båt (plass B/C).",
          price: "5900",
          priceCurrency: "NOK",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          "@id": `${site.url}#offer-winter`,
          name: "Vinterlager — båt eller henger",
          description: "Trygg vinterlagring av båter og hengere.",
          price: "3000",
          priceCurrency: "NOK",
        },
      ],
    },
    ...(sameAs.length ? { sameAs } : {}),
  } as const;
}

function website() {
  return {
    "@type": "WebSite",
    "@id": `${site.url}#website`,
    name: site.longName,
    alternateName: site.name,
    url: site.url,
    inLanguage: "nb-NO",
    publisher: { "@id": `${site.url}#organization` },
    description: site.description,
  } as const;
}

function webpage(opts: {
  path: string;
  name: string;
  description: string;
  primaryImageOfPage?: string;
  speakable?: string[];
}) {
  return {
    "@type": "WebPage",
    "@id": `${site.url}${opts.path}#webpage`,
    url: `${site.url}${opts.path}`,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${site.url}#website` },
    about: { "@id": `${site.url}#marina` },
    inLanguage: "nb-NO",
    primaryImageOfPage: opts.primaryImageOfPage
      ? { "@type": "ImageObject", url: `${site.url}${opts.primaryImageOfPage}` }
      : undefined,
    speakable: opts.speakable
      ? { "@type": "SpeakableSpecification", cssSelector: opts.speakable }
      : undefined,
  } as const;
}

function breadcrumb(items: Array<{ name: string; href: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  } as const;
}

function siteNavigation(items: Array<{ name: string; href: string }>) {
  return {
    "@type": "SiteNavigationElement",
    "@id": `${site.url}#sitenav`,
    name: items.map((i) => i.name),
    url: items.map((i) => `${site.url}${i.href}`),
  } as const;
}

function service() {
  return {
    "@type": "Service",
    "@id": `${site.url}#service-berth-rental`,
    serviceType: "Båtplassutleie",
    name: "Sesongleie av båtplasser ved Sjøparken Garten Marina",
    description:
      "Sesongleie av båtplasser fra 2,5 m til 35 fot i godt skjermet havn på Garten i Trøndelag. Sesongen varer fra april til oktober.",
    provider: { "@id": `${site.url}#marina` },
    areaServed: [
      { "@type": "Place", name: "Trøndelag" },
      { "@type": "Place", name: "Trondheimsfjorden" },
    ],
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      validFrom: "2026-04-01",
      validThrough: "2026-10-31",
    },
    offers: { "@id": `${site.url}#offer-berth-small` },
  } as const;
}

function faqPage(items: Array<{ q: string; a: string }>) {
  return {
    "@type": "FAQPage",
    "@id": `${site.url}/baatplasser#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  } as const;
}

function imageGallery(images: Array<{ src: string; alt: string }>) {
  return {
    "@type": "ImageGallery",
    "@id": `${site.url}/galleri#gallery`,
    name: `Galleri — ${site.longName}`,
    url: `${site.url}/galleri`,
    about: { "@id": `${site.url}#marina` },
    inLanguage: "nb-NO",
    image: images.map((img, i) => ({
      "@type": "ImageObject",
      "@id": `${site.url}${img.src}#image`,
      contentUrl: `${site.url}${img.src}`,
      description: img.alt,
      caption: img.alt,
      position: i + 1,
      copyrightHolder: { "@id": `${site.url}#organization` },
      creator: { "@id": `${site.url}#organization` },
      creditText: site.longName,
    })),
  } as const;
}

function contactPage() {
  return {
    "@type": "ContactPage",
    "@id": `${site.url}/kontakt#contactpage`,
    name: `Kontakt — ${site.longName}`,
    url: `${site.url}/kontakt`,
    about: { "@id": `${site.url}#marina` },
    mainEntity: { "@id": `${site.url}#marina` },
    inLanguage: "nb-NO",
  } as const;
}

// ============================================================
// PUBLIC API — combined @graph for each page
// ============================================================

export function rootGraph(extra: Array<object> = []) {
  return {
    "@context": "https://schema.org",
    "@graph": [organization(), marina(), website(), placeGarten, ...extra],
  } as const;
}

export function homeGraph(navItems: Array<{ name: string; href: string }>) {
  return rootGraph([
    webpage({
      path: "/",
      name: `${site.longName} — Helt ytterst av Fosen-halvøya`,
      description: site.description,
      primaryImageOfPage: "/assets/hero-sunset.jpg",
      speakable: ["h1", ".hero-sub", "#intro-title", "#omoss-title"],
    }),
    breadcrumb([{ name: "Hjem", href: "/" }]),
    siteNavigation(navItems),
  ]);
}

export function baatplasserGraph(faqs: Array<{ q: string; a: string }>) {
  return rootGraph([
    webpage({
      path: "/baatplasser",
      name: `Båtplasser — ${site.longName}`,
      description: "15 båtplasser i godt skjermet havn på Garten — fra 2,5 m til 35 fot. Kart, plasstyper, priser og fasiliteter.",
      primaryImageOfPage: "/assets/harbor.jpg",
      speakable: ["#bp-title", "#bp-price-title", "#bp-fac-title"],
    }),
    breadcrumb([
      { name: "Hjem", href: "/" },
      { name: "Båtplasser", href: "/baatplasser" },
    ]),
    service(),
    faqPage(faqs),
  ]);
}

export function galleriGraph(images: Array<{ src: string; alt: string }>) {
  return rootGraph([
    webpage({
      path: "/galleri",
      name: `Galleri — ${site.longName}`,
      description: "Bilder fra marinaen, skjærgården og kveldssolen ytterst på Fosen.",
      primaryImageOfPage: "/assets/sunset.jpg",
    }),
    breadcrumb([
      { name: "Hjem", href: "/" },
      { name: "Galleri", href: "/galleri" },
    ]),
    imageGallery(images),
  ]);
}

export function kontaktGraph() {
  return rootGraph([
    webpage({
      path: "/kontakt",
      name: `Kontakt — ${site.longName}`,
      description: `Ta kontakt med ${site.longName} — ${site.address.full}. Telefon ${site.contact.phone}, e-post ${site.contact.email}.`,
      primaryImageOfPage: "/assets/aerial.jpg",
      speakable: ["#kt-title"],
    }),
    breadcrumb([
      { name: "Hjem", href: "/" },
      { name: "Kontakt", href: "/kontakt" },
    ]),
    contactPage(),
  ]);
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: required for JSON-LD
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Legacy exports kept for backwards compat (not used after this refactor,
// but harmless if any consumer still imports them).
export const organizationSchema = organization;
export const marinaSchema = marina;
export const websiteSchema = website;
export const breadcrumbSchema = breadcrumb;
export const serviceSchema = (_opts: { name: string; description: string; serviceType: string }) =>
  service();
export const imageGallerySchema = imageGallery;
export const contactPageSchema = contactPage;
