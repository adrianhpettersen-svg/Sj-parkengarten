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

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}#organization`,
    name: site.longName,
    alternateName: site.name,
    legalName: site.org.name,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/assets/current-logo.png`,
      width: 710,
      height: 181,
    },
    foundingDate: String(site.established),
    foundingLocation: {
      "@type": "Place",
      address: postalAddress,
    },
    taxID: site.org.orgNumber,
    ...(sameAs.length ? { sameAs } : {}),
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
  } as const;
}

export function marinaSchema() {
  return {
    "@context": "https://schema.org",
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
    photo: `${site.url}/og-default.jpg`,
    logo: `${site.url}/assets/current-logo.png`,
    priceRange: "kr 4 900–5 900",
    currenciesAccepted: "NOK",
    paymentAccepted: "Bankoverføring, Vipps",
    foundingDate: String(site.established),
    slogan: "Tett på havet, trygt i havn",
    address: postalAddress,
    geo,
    hasMap: `https://www.google.com/maps/search/?api=1&query=${site.geo.latitude},${site.geo.longitude}`,
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
        description: "Etter avtale — kontakt oss på telefon eller e-post",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
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
    makesOffer: [
      {
        "@type": "Offer",
        name: "Båtplass 2,5 m — sesongleie",
        description: "Standard båtplass à 2,5 m, plass 1–12 langs hovedbrygge.",
        price: "4900",
        priceCurrency: "NOK",
        availability: "https://schema.org/InStock",
        eligibleDuration: {
          "@type": "QuantitativeValue",
          value: 7,
          unitCode: "MON",
          description: "Sesong: april–oktober",
        },
      },
      {
        "@type": "Offer",
        name: "Båtplass 3,5 m — sesongleie",
        description: "Bredere båtplass à 3,5 m (plass A).",
        price: "5900",
        priceCurrency: "NOK",
        availability: "https://schema.org/InStock",
        eligibleDuration: {
          "@type": "QuantitativeValue",
          value: 7,
          unitCode: "MON",
          description: "Sesong: april–oktober",
        },
      },
      {
        "@type": "Offer",
        name: "Båtplass opp til 35 fot — sesongleie",
        description: "Plass langs brygge for større båt opp til 35 fot (plass B/C).",
        price: "5900",
        priceCurrency: "NOK",
        availability: "https://schema.org/InStock",
        eligibleDuration: {
          "@type": "QuantitativeValue",
          value: 7,
          unitCode: "MON",
          description: "Sesong: april–oktober",
        },
      },
      {
        "@type": "Offer",
        name: "Vinterlager — båt eller henger",
        description: "Trygg vinterlagring av båter og hengere.",
        price: "3000",
        priceCurrency: "NOK",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "3000",
          priceCurrency: "NOK",
          referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "ANN" },
        },
      },
    ],
    ...(sameAs.length ? { sameAs } : {}),
  } as const;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}#website`,
    name: site.longName,
    url: site.url,
    inLanguage: "nb-NO",
    publisher: { "@id": `${site.url}#marina` },
  } as const;
}

export function breadcrumbSchema(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  } as const;
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    provider: { "@id": `${site.url}#marina` },
    areaServed: { "@type": "Place", name: "Trøndelag" },
  } as const;
}

export function imageGallerySchema(images: Array<{ src: string; alt: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `Galleri — ${site.longName}`,
    url: `${site.url}/galleri`,
    associatedMedia: images.map((img) => ({
      "@type": "ImageObject",
      contentUrl: `${site.url}${img.src}`,
      description: img.alt,
      copyrightHolder: { "@id": `${site.url}#organization` },
    })),
  } as const;
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Kontakt — ${site.longName}`,
    url: `${site.url}/kontakt`,
    about: { "@id": `${site.url}#marina` },
    mainEntity: { "@id": `${site.url}#marina` },
  } as const;
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
