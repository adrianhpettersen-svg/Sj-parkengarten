import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { breadcrumbSchema, JsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Galleri",
  description: `Bilder fra ${site.longName} — marinaen, skjærgården, solnedganger og anlegget på Garten.`,
  alternates: { canonical: "/galleri" },
  openGraph: {
    title: `Galleri — ${site.longName}`,
    description: "Bilder fra marinaen, skjærgården og anlegget.",
    url: `${site.url}/galleri`,
    images: [{ url: "/assets/sunset.jpg", width: 1600, height: 900 }],
  },
};

const images = [
  { src: "/assets/sunset.jpg", alt: "Solnedgang over havet ved Sjøparken Garten", cls: "wide tall" },
  { src: "/assets/marina.jpg", alt: "Utleieboliger ved marinaen", cls: "" },
  { src: "/assets/rope.jpg", alt: "Tau og fortøyning langs havna", cls: "tall" },
  { src: "/assets/harbor.jpg", alt: "Marinaen sett ovenfra", cls: "wide" },
  { src: "/assets/aerial.jpg", alt: "Flyfoto av Garten og skjærgården", cls: "" },
  { src: "/assets/extra2.jpg", alt: "Båthavn i sol", cls: "" },
  { src: "/assets/extra1.jpg", alt: "Området ved sjøen", cls: "" },
  { src: "/assets/sign.jpg", alt: "Skiltet til Sjøparken Garten", cls: "wide" },
  { src: "/assets/cabins-deck.jpg", alt: "Båtslipp og dekk", cls: "" },
  { src: "/assets/hero-sunset.jpg", alt: "Kveldssol over marinaen", cls: "wide" },
];

export default function GalleriPage() {
  return (
    <>
      <Header variant="solid" />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Hjem", href: "/" },
          { name: "Galleri", href: "/galleri" },
        ])}
      />

      <section
        style={{ paddingTop: "clamp(140px, 16vh, 180px)", paddingBottom: 0 }}
        aria-labelledby="gal-title"
      >
        <div className="container-x">
          <Reveal className="section-head">
            <nav className="crumbs" style={{ color: "var(--muted)" }} aria-label="Brødsmuler">
              <Link href="/" style={{ color: "var(--color-ocean)" }}>
                Hjem
              </Link>
              <span aria-hidden="true">/</span>
              <span>Galleri</span>
            </nav>
            <p className="eyebrow" style={{ marginTop: 18 }}>
              Galleri
            </p>
            <h1 id="gal-title" style={{ color: "var(--color-ink)" }}>
              Bilder fra anlegget og skjærgården.
            </h1>
            <p>
              Et utvalg bilder fra marinaen, utleieboligene og naturen rundt {site.longName}.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y gallery" aria-label="Galleribilder">
        <div className="container-x">
          <Reveal className="gal-grid">
            {images.map((img) => (
              <figure key={img.src} className={img.cls || undefined}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 560px) 50vw, (max-width: 1080px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
