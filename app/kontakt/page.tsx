import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";
import { breadcrumbSchema, JsonLd } from "@/lib/structured-data";
import {
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinFilled,
  PinIcon,
} from "@/components/icons/Icons";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Ta kontakt med ${site.longName} — ${site.address.full}. Telefon ${site.contact.phone}, e-post ${site.contact.email}.`,
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: `Kontakt — ${site.longName}`,
    description: `Ta kontakt med ${site.longName} — Gartveien 253, 7153 Garten.`,
    url: `${site.url}/kontakt`,
    images: [{ url: "/assets/aerial.jpg", width: 1600, height: 900 }],
  },
};

export default function KontaktPage() {
  return (
    <>
      <Header variant="solid" />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hjem", href: "/" },
          { name: "Kontakt", href: "/kontakt" },
        ])}
      />

      <section
        style={{
          paddingTop: "clamp(140px, 16vh, 180px)",
          paddingBottom: 0,
        }}
        aria-labelledby="kt-title"
      >
        <div className="container-x">
          <Reveal
            className="section-head"
            // override margin
          >
            <nav
              className="crumbs"
              style={{ color: "var(--muted)" }}
              aria-label="Brødsmuler"
            >
              <Link href="/" style={{ color: "var(--color-ocean)" }}>
                Hjem
              </Link>
              <span aria-hidden="true">/</span>
              <span>Kontakt</span>
            </nav>
            <p className="eyebrow" style={{ marginTop: 18 }}>
              Kontakt
            </p>
            <h1 id="kt-title" style={{ color: "var(--color-ink)" }}>
              Vi svarer gjerne på det du lurer på.
            </h1>
            <p>
              Enten det gjelder båtplass for 2026, utleiebolig eller en henvendelse
              om anlegget — ta kontakt, så hører du fra oss.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingBottom: "clamp(72px, 11vw, 140px)" }}>
        <div className="container-x">
          <div className="contact-page">
            <Reveal className="info-card">
              <h3>{site.longName}</h3>
              <p className="lead">
                Helt ytterst på Fosen-halvøya — siste stopp med fastlandsforbindelse
                via bro.
              </p>
              <div className="ci">
                <div className="row">
                  <PinIcon />
                  <div>
                    <b>Adresse</b>
                    <span>{site.address.full}</span>
                  </div>
                </div>
                <div className="row">
                  <PhoneIcon />
                  <div>
                    <b>Telefon</b>
                    <a href={`tel:${site.contact.phoneE164}`}>{site.contact.phone}</a>
                  </div>
                </div>
                <div className="row">
                  <MailIcon />
                  <div>
                    <b>E-post</b>
                    <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                  </div>
                </div>
                <div className="row">
                  <ClockIcon />
                  <div>
                    <b>Etablert</b>
                    <span>{site.established}</span>
                  </div>
                </div>
              </div>
              <div className="map-embed">
                <Image
                  src="/assets/aerial.jpg"
                  alt="Flyfoto av Garten med Sjøparken markert"
                  fill
                  sizes="(max-width: 860px) 100vw, 50vw"
                  style={{ objectFit: "cover", opacity: 0.85 }}
                />
                <span className="pin" aria-hidden="true">
                  <PinFilled />
                </span>
              </div>
            </Reveal>

            <ContactForm variant="extended" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
