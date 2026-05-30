import { site } from "@/lib/site";

const sameAs = [site.social.facebook, site.social.instagram].filter(
  (v): v is string => Boolean(v),
);

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.longName,
    alternateName: site.name,
    legalName: site.org.name,
    url: site.url,
    logo: `${site.url}/assets/current-logo.png`,
    foundingDate: String(site.established),
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
    description: site.description,
    url: site.url,
    telephone: site.contact.phoneE164,
    email: site.contact.email,
    image: [
      `${site.url}/assets/hero-sunset.jpg`,
      `${site.url}/assets/aerial.jpg`,
      `${site.url}/assets/harbor.jpg`,
    ],
    logo: `${site.url}/assets/current-logo.png`,
    priceRange: "kr 4 900–5 900",
    foundingDate: String(site.established),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: ["Trøndelag", "Trondheimsfjorden", "Fosen"],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Båtplasser" },
      { "@type": "LocationFeatureSpecification", name: "Sløyebod" },
      { "@type": "LocationFeatureSpecification", name: "Båtslipp" },
      { "@type": "LocationFeatureSpecification", name: "Båtlager" },
      { "@type": "LocationFeatureSpecification", name: "Parkering" },
      { "@type": "LocationFeatureSpecification", name: "165 meter molo" },
    ],
    ...(sameAs.length ? { sameAs } : {}),
  } as const;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
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

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: required for JSON-LD
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
