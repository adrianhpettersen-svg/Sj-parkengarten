import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Gallery, type GalleryImage } from "@/components/Gallery";
import { ContactForm } from "@/components/ContactForm";
import { homeGraph, JsonLd } from "@/lib/structured-data";
import { nav, site } from "@/lib/site";
import {
  ArrowRight,
  FerryIcon,
  FishIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  SunIcon,
} from "@/components/icons/Icons";

const services = [
  {
    n: "01",
    title: "Båtplasser",
    text: "15 plasser i godt skjermet havn — fra 2,5 m og opp til 35 fot.",
    image: "/assets/harbor.jpg",
    alt: "Båtplasser i marinaen på Garten",
    href: "/baatplasser",
  },
  {
    n: "02",
    title: "Sløyebod",
    text: "Profesjonell løsning for å gjøre klar fangsten — rett ved kaikanten.",
    image: "/assets/marina.jpg",
    alt: "Sløyebod ved sjøen i Sjøparken Garten",
    href: "/kontakt",
  },
  {
    n: "03",
    title: "Båtslipp",
    text: "Enkelt båtutsett og båtopptak når sesongen starter og slutter.",
    image: "/assets/cabins-deck.jpg",
    alt: "Båtslipp for utsett og opptak",
    href: "/kontakt",
  },
  {
    n: "04",
    title: "Båtlager",
    text: "Trygg lagring av båter og hengere gjennom vintersesongen.",
    image: "/assets/extra1.jpg",
    alt: "Båtlager for båter og hengere",
    href: "/kontakt",
  },
] as const;

const facts = [
  { Icon: FerryIcon, body: <><b>Fergesamband</b> med hyppige avganger til Storfosna, Kråkvåg og Leksa.</> },
  { Icon: FishIcon, body: <><b>Umiddelbart fiske</b> rett utenfor marinaen — fjord og storhav.</> },
  { Icon: SunIcon, body: <><b>Spektakulær kveldssol</b> om sommeren — må bare oppleves.</> },
  { Icon: PinIcon, body: <><b>Kort vei</b> til Hitra og Frøya og en fantastisk skjærgård.</> },
];

const galleryImages: GalleryImage[] = [
  { src: "/assets/sunset.jpg", alt: "Solnedgang over havet ved Sjøparken Garten", cls: "wide tall" },
  { src: "/assets/marina.jpg", alt: "Boliger ved marinaen", cls: "" },
  { src: "/assets/rope.jpg", alt: "Tau og fortøyning langs havna", cls: "" },
  { src: "/assets/harbor.jpg", alt: "Marinaen sett ovenfra", cls: "wide" },
  { src: "/assets/extra2.jpg", alt: "Båthavn i sol", cls: "" },
  { src: "/assets/sign.jpg", alt: "Skiltet til Sjøparken Garten", cls: "" },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <JsonLd data={homeGraph(nav.map((n) => ({ name: n.label, href: n.href })))} />

      {/* HERO */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-bg">
          <Image
            src="/assets/hero-sunset.jpg"
            alt="Kveldssol over marinaen på Garten"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", transform: "scale(1.05)" }}
          />
        </div>
        <Image
          className="hero-watermark"
          src="/assets/current-logo.png"
          alt=""
          aria-hidden="true"
          width={400}
          height={120}
        />
        <div className="container-x hero-inner">
          <Reveal as="p" className="eyebrow light">
            Garten · Trøndelagskysten
          </Reveal>
          <Reveal as="h1" delay={1}>
            <span id="hero-title">
              Helt ytterst av
              <br />
              <em>Fosen-halvøya</em>
            </span>
          </Reveal>
          <Reveal as="p" className="hero-sub" delay={2}>
            {site.longName} — en godt skjermet havn tett på storhavet. Trygt i havn,
            ett tau-kast fra fisket og den spektakulære kveldssola.
          </Reveal>
          <Reveal className="hero-cta" delay={3}>
            <Link className="btn btn-primary" href="/baatplasser">
              Se båtplasser <ArrowRight />
            </Link>
            <Link className="btn btn-ghost" href="/kontakt">
              Kontakt oss
            </Link>
          </Reveal>
        </div>
        <div className="scroll-ind" aria-hidden="true">
          <span>Bla</span>
          <div className="mouse" />
        </div>
      </section>

      {/* INTRO / STATS */}
      <section className="section-y intro" aria-labelledby="intro-title">
        <div className="container-x">
          <div className="intro-lead">
            <Reveal>
              <p className="eyebrow">Velkommen</p>
              <h2 id="intro-title">Et anlegg bygget for båtfolk — og for roen etterpå.</h2>
            </Reveal>
            <Reveal as="p" delay={1}>
              {site.longName} ligger nordvendt ytterst på Garten, siste stopp med
              fastlandsforbindelse via bro. Et fullverdig marinaanlegg med
              fantastisk skjærgård rett utenfor og kort vei til både fjord og
              storhav.
            </Reveal>
          </div>
          <div className="intro-grid">
            <Reveal className="stat">
              <div className="num">
                30<small>MÅL</small>
              </div>
              <p className="lbl">Anlegg med båtplasser, sløyebod, båtslipp og båtlager.</p>
            </Reveal>
            <Reveal className="stat" delay={1}>
              <div className="num">
                165<small>METER</small>
              </div>
              <p className="lbl">Gressbelagt molo som skjermer havna godt mot dårlig vær.</p>
            </Reveal>
            <Reveal className="stat" delay={2}>
              <div className="num">{site.established}</div>
              <p className="lbl">Etablert anlegg med erfaring — drevet med lokal omtanke.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-y services" id="tjenester" aria-labelledby="svc-title">
        <div className="container-x">
          <div className="svc-head">
            <Reveal>
              <p className="eyebrow">Tjenester</p>
              <h2 id="svc-title">Alt du trenger for et trygt liv på sjøen.</h2>
            </Reveal>
            <Reveal delay={1}>
              <Link className="textlink" href="/baatplasser">
                Se priser og detaljer <ArrowRight />
              </Link>
            </Reveal>
          </div>
          <div className="svc-grid">
            {services.map((s, i) => (
              <Reveal
                key={s.n}
                as="article"
                className="svc-card"
                delay={(i as 0 | 1 | 2 | 3)}
              >
                <div className="svc-media">
                  <span className="svc-num">{s.n}</span>
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 1080px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="svc-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <Link className="textlink" href={s.href}>
                    Les mer <ArrowRight />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OM OSS / BELIGGENHET */}
      <section className="section-y" id="omoss" aria-labelledby="omoss-title">
        <div className="container-x">
          <div className="split">
            <Reveal className="split-media">
              <Image
                src="/assets/aerial.jpg"
                alt="Flyfoto av Garten og skjærgården"
                width={900}
                height={990}
                sizes="(max-width: 860px) 100vw, 50vw"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <div className="map-chip">
                <PinIcon />
                <div>
                  <b>{site.address.full}</b>
                  <span>Nordvendt ytterst på øya</span>
                </div>
              </div>
            </Reveal>
            <Reveal className="split-body" delay={1}>
              <p className="eyebrow">Beliggenhet</p>
              <h2 id="omoss-title">Siste stopp før storhavet.</h2>
              <p>
                Anlegget ligger nordvendt på Garten — siste stopp med
                fastlandsforbindelse via bro. Fergesamband med frekvente avganger tar
                deg videre til Storfosna, Kråkvåg og Leksa. Et ideelt utgangspunkt
                for å utforske norskekysten, enten du går sør eller nord.
              </p>
              <div className="split-facts">
                {facts.map(({ Icon, body }, i) => (
                  <div className="row" key={i}>
                    <Icon />
                    <span>{body}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BERTH HIGHLIGHT */}
      <section className="section-y berth" id="baatplasser" aria-labelledby="berth-title">
        <div className="container-x">
          <div className="berth-grid">
            <Reveal>
              <p className="eyebrow light">Båtplasser 2026</p>
              <h2 id="berth-title">15 plasser i en havn som tåler været.</h2>
              <p className="lead">
                Den 165 meter lange moloen skjermer bassenget godt. Et knippe plasser
                er ledige for neste sesong — sikre deg fast plass ytterst mot storhavet.
              </p>
              <div className="berth-stats">
                <div className="bstat">
                  <div className="n">12</div>
                  <div className="t">plasser · 2,5 meter</div>
                </div>
                <div className="bstat">
                  <div className="n">1</div>
                  <div className="t">plass · 3,5 meter</div>
                </div>
                <div className="bstat">
                  <div className="n">2</div>
                  <div className="t">plasser · opp til 35 fot</div>
                </div>
              </div>
              <div className="berth-cta">
                <Link className="btn btn-primary" href="/baatplasser">
                  Se alle båtplasser <ArrowRight />
                </Link>
                <span className="berth-note">
                  <span className="dot" />
                  Ta kontakt for båtplasser 2026!
                </span>
              </div>
            </Reveal>
            <Reveal className="berth-map" delay={1}>
              <Image
                src="/assets/berth-map.png"
                alt="Kart over båtplassene i marinaen — brygge A 1–12, B og C"
                width={1200}
                height={900}
                sizes="(max-width: 860px) 100vw, 40vw"
                style={{ width: "100%", height: "auto" }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-y gallery" id="galleri" aria-labelledby="gal-title">
        <div className="container-x">
          <div className="svc-head">
            <Reveal>
              <p className="eyebrow">Galleri</p>
              <h2 id="gal-title">Et lite glimt av Garten.</h2>
            </Reveal>
            <Reveal delay={1}>
              <Link className="textlink" href="/galleri">
                Se hele galleriet <ArrowRight />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={1}>
            <Gallery images={galleryImages} />
          </Reveal>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="section-y contact" id="kontakt" aria-labelledby="contact-title">
        <div className="contact-bg">
          <Image
            src="/assets/sunset.jpg"
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
              <p className="eyebrow light">Kontakt</p>
              <h2 id="contact-title">Klar for en plass ytterst mot havet?</h2>
              <p className="lead">
                Ta kontakt for båtplasser 2026 eller spørsmål om anlegget — vi
                svarer gjerne.
              </p>
              <div className="contact-info">
                <div className="row">
                  <PinIcon />
                  <span>{site.address.full}</span>
                </div>
                <div className="row">
                  <PhoneIcon />
                  <a href={`tel:${site.contact.phoneE164}`}>{site.contact.phone}</a>
                </div>
                <div className="row">
                  <MailIcon />
                  <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                </div>
              </div>
            </Reveal>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
