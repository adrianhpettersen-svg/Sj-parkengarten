export const site = {
  name: "Sjøparken Garten",
  longName: "Sjøparken Garten Marina",
  tagline: "Tett på havet, trygt i havn",
  description:
    "Godt skjermet marina ytterst på Garten i Trøndelag. Båtplasser opp til 35 fot, sløyebod, båtslipp, båtlager og utleieboliger — tett på havet, trygt i havn.",
  shortDescription:
    "Godt skjermet marina ytterst på Garten — etablert 2005.",
  url: "https://sjoparkengarten.no",
  locale: "nb_NO",
  language: "no",
  established: 2005,
  address: {
    street: "Gartveien 253",
    postalCode: "7153",
    city: "Garten",
    country: "Norge",
    countryCode: "NO",
    region: "Trøndelag",
    full: "Gartveien 253, 7153 Garten",
  },
  geo: {
    latitude: 63.6562,
    longitude: 9.5872,
  },
  contact: {
    phone: "900 22 945",
    phoneE164: "+4790022945",
    email: "post@sjoparkengarten.no",
  },
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
  },
  org: {
    name: "Sjøparken Garten AS",
    orgNumber: "986 998 454",
    legalForm: "AS",
  },
  pricing: {
    berthSmall: { label: "kr 4 900", per: "/ sesong" },
    berthMedium: { label: "kr 5 900", per: "/ sesong" },
    berthLarge: { label: "kr 5 900", per: "/ sesong" },
    winterStorage: { label: "fra kr 3 000", per: "/ sesong" },
    vatNote: "Prisene er ikke MVA-belagt.",
  },
  marina: {
    totalBerths: 16,
    breakdownByLength: [
      { count: 12, lengthMeters: 2.5, label: "12 plasser · 2,5 meter" },
      { count: 1, lengthMeters: 3.5, label: "1 plass · 3,5 meter" },
      { count: 3, lengthFeet: 35, label: "3 plasser · opp til 35 fot" },
    ],
    moloLengthMeters: 165,
    siteSizeMaal: 30,
  },
} as const;

export const nav = [
  { href: "/", label: "Hjem" },
  { href: "/baatplasser", label: "Båtplasser" },
  { href: "/galleri", label: "Galleri" },
  { href: "/kontakt", label: "Kontakt" },
] as const;
