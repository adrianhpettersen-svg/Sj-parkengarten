import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { breadcrumbSchema, JsonLd, serviceSchema } from "@/lib/structured-data";
import {
  ArrowRight,
  CheckIcon,
  FishIcon,
  InfoIcon,
  ParkingIcon,
  SlipIcon,
  StorageIcon,
  WaveIcon,
} from "@/components/icons/Icons";

export const metadata: Metadata = {
  title: "Båtplasser",
  description:
    "15 båtplasser i godt skjermet havn på Garten — fra 2,5 m til 35 fot. Kart, plasstyper, priser og fasiliteter ved Sjøparken Garten Marina.",
  alternates: { canonical: "/baatplasser" },
  openGraph: {
    title: "Båtplasser — Sjøparken Garten Marina",
    description:
      "15 båtplasser i godt skjermet havn på Garten — fra 2,5 m til 35 fot.",
    url: `${site.url}/baatplasser`,
  },
};

const prices = [
  {
    type: "Standard",
    size: "2,5 m",
    count: "12 plasser tilgjengelig",
    price: "kr 4 900",
    per: "/ sesong",
    features: [
      "Fast plass langs hovedbrygge",
      "Ideell for jolle og småbåt",
      "Tilgang til sløyebod & slipp",
    ],
    feature: false,
    btn: "btn-outline",
  },
  {
    type: "Mellomstor",
    size: "3,5 m",
    count: "1 plass tilgjengelig",
    price: "kr 5 900",
    per: "/ sesong",
    features: [
      "Bredere plass med god margin",
      "For dagsturbåt og bowrider",
      "Tilgang til alle fasiliteter",
    ],
    feature: true,
    btn: "btn-primary",
  },
  {
    type: "Stor",
    size: "Opp til 35 fot",
    count: "2 plasser tilgjengelig",
    price: "kr 5 900",
    per: "/ sesong",
    features: [
      "Plass langs brygge for større båt",
      "Godt skjermet bak moloen",
      "Båtslipp & vinterlager i nærheten",
    ],
    feature: false,
    btn: "btn-outline",
  },
] as const;

const facilities = [
  {
    Icon: FishIcon,
    title: "Sløyebod",
    text: "Profesjonell løsning for å sløye og gjøre klar fangsten — godt utstyrt og rett ved kaikanten. Markert som oransje boks på kartet.",
  },
  {
    Icon: SlipIcon,
    title: "Båtslipp",
    text: "Båtutsett og båtopptak vår og høst — enkelt å bruke for både små og større båter. Plassering vist på kartet.",
  },
  { Icon: StorageIcon, title: "Båtlager", text: "Trygg lagring av båter og hengere om vinteren." },
  { Icon: WaveIcon, title: "165 m molo", text: "Gressbelagt molo som skjermer havna mot vær og vind." },
  { Icon: ParkingIcon, title: "Parkering", text: "God parkering rett ved anlegget for deg og gjester." },
];

export default function BaatplasserPage() {
  return (
    <>
      <Header />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hjem", href: "/" },
          { name: "Båtplasser", href: "/baatplasser" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Båtplassutleie ved Sjøparken Garten Marina",
          description:
            "Sesongleie av båtplasser fra 2,5 m til 35 fot i godt skjermet havn på Garten i Trøndelag. Sesongen varer fra april til oktober.",
          serviceType: "Båtplassutleie",
        })}
      />

      <section className="page-hero" aria-labelledby="bp-title">
        <div className="page-hero-bg">
          <Image
            src="/assets/harbor.jpg"
            alt="Marinaen i Sjøparken Garten sett ovenfra"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="container-x">
          <Reveal as="nav" className="crumbs" aria-label="Brødsmuler">
            <Link href="/">Hjem</Link>
            <span aria-hidden="true">/</span>
            <span>Båtplasser</span>
          </Reveal>
          <Reveal as="h1" delay={1}>
            <span id="bp-title">Båtplasser</span>
          </Reveal>
          <Reveal as="p" delay={2}>
            15 plasser i en havn som er godt skjermet av den 165 meter lange moloen —
            fra jolle til 35-fotning, trygt forankret ytterst mot storhavet.
          </Reveal>
        </div>
      </section>

      {/* MAP + LEGEND */}
      <section className="section-y" aria-labelledby="bp-map-title">
        <div className="container-x">
          <div className="berth-detail">
            <Reveal>
              <div className="map-wrap">
                <Image
                  src="/assets/berth-map.png"
                  alt="Kart over båtplassene — brygge A 1–12, flytebrygge B og utligger C"
                  width={1200}
                  height={900}
                  sizes="(max-width: 860px) 100vw, 50vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <p className="cap">
                <InfoIcon style={{ width: 15, height: 15 }} />
                Hovedbrygge med plass 1–12, samt plassene A, B og C. Sløyebod
                (oransje boks) og båtslipp er markert på kartet.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <p className="eyebrow">Oversikt</p>
              <h2 id="bp-map-title">Skjermet havn, enkel adkomst.</h2>
              <p>
                Bassenget ligger lunt bak moloen, med kort vei ut til fjord og
                storhav. Faste fortøyninger, jevn vannstand og god plass mellom
                bryggene gjør det enkelt å legge til — også for større båter.
              </p>
              <div className="legend">
                <div className="row">
                  <span className="tag" style={{ fontSize: 14 }}>
                    1–12
                  </span>
                  <div>
                    <b>Hovedbrygge · plass 1–12</b>
                    <span>Tolv faste plasser à 2,5 m brede.</span>
                  </div>
                </div>
                <div className="row">
                  <span className="tag">A</span>
                  <div>
                    <b>Plass A · 3,5 m brei</b>
                    <span>Bredere plass for dagsturbåt eller bowrider.</span>
                  </div>
                </div>
                <div className="row">
                  <span className="tag">B&nbsp;·&nbsp;C</span>
                  <div>
                    <b>Plass B og C · opp til 35 fot</b>
                    <span>To plasser for større båter, godt skjermet bak moloen.</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section-y services" aria-labelledby="bp-price-title">
        <div className="container-x">
          <Reveal className="section-head">
            <p className="eyebrow">Plasstyper &amp; priser</p>
            <h2 id="bp-price-title">Velg plassen som passer båten din.</h2>
            <p>
              Plassene leies per sesong — sesongen varer fra april til oktober.
              Et knippe er ledige for 2026 — ta kontakt så finner vi rett plass
              til deg.
            </p>
          </Reveal>
          <div className="price-grid">
            {prices.map((p, i) => (
              <Reveal
                key={p.type}
                className={`price-card${p.feature ? " feature" : ""}`}
                delay={(i as 0 | 1 | 2)}
              >
                <span className="ptype">{p.type}</span>
                <div className="psize">{p.size}</div>
                <div className="pcount">{p.count}</div>
                <div className="price">
                  {p.price} <small>{p.per}</small>
                </div>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>
                      <CheckIcon /> {f}
                    </li>
                  ))}
                </ul>
                <Link className={`btn ${p.btn}`} href="/kontakt">
                  Forespør plass
                </Link>
              </Reveal>
            ))}
          </div>
          <p
            style={{
              textAlign: "center",
              marginTop: 28,
              color: "var(--muted)",
              fontSize: 14,
            }}
          >
            Prisene er ikke MVA-belagt. Vinterlager fra kr 3 000 / sesong — ta
            kontakt for tilgjengelighet.
          </p>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="section-y" aria-labelledby="bp-fac-title">
        <div className="container-x">
          <Reveal className="section-head">
            <p className="eyebrow">Fasiliteter</p>
            <h2 id="bp-fac-title">Alt på ett sted.</h2>
          </Reveal>
          <div className="fac-grid">
            {facilities.map(({ Icon, title, text }, i) => (
              <Reveal key={title} className="fac" delay={((i % 3) as 0 | 1 | 2)}>
                <div className="ic">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y contact" aria-labelledby="bp-cta-title">
        <div className="contact-bg">
          <Image
            src="/assets/extra2.jpg"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="container-x">
          <div className="contact-grid">
            <Reveal>
              <p className="eyebrow light">Båtplasser 2026</p>
              <h2 id="bp-cta-title">Sikre deg plass til neste sesong.</h2>
              <p className="lead">
                Det er begrenset antall ledige plasser. Ta kontakt, så finner vi den
                rette for båten din.
              </p>
              <div className="hero-cta" style={{ marginTop: 30 }}>
                <Link className="btn btn-primary" href="/kontakt">
                  Kontakt oss <ArrowRight />
                </Link>
                <a className="btn btn-ghost" href={`tel:${site.contact.phoneE164}`}>
                  {site.contact.phone}
                </a>
              </div>
            </Reveal>
            <Reveal delay={1} className="" >
              <div
                className="bstat"
                style={{
                  display: "inline-block",
                  textAlign: "left",
                  minWidth: 240,
                  background: "rgba(250,250,247,.1)",
                  border: "1px solid rgba(255,255,255,.18)",
                }}
              >
                <div className="n" style={{ color: "var(--color-sand)" }}>
                  15
                </div>
                <div className="t" style={{ color: "rgba(255,255,255,.8)" }}>
                  båtplasser totalt — flere ledige nå
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
