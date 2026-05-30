import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "@/components/icons/Icons";

export const metadata: Metadata = {
  title: "Siden finnes ikke",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header variant="solid" />
      <section
        style={{
          paddingTop: "clamp(160px, 18vh, 220px)",
          paddingBottom: "clamp(80px, 12vw, 140px)",
          textAlign: "center",
        }}
      >
        <div className="container-x" style={{ maxWidth: 680 }}>
          <p className="eyebrow center" style={{ justifyContent: "center" }}>
            404
          </p>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              marginTop: 20,
              color: "var(--color-ocean)",
            }}
          >
            Vi fant ikke siden du leter etter.
          </h1>
          <p style={{ marginTop: 20, color: "var(--muted)", fontSize: "1.06rem" }}>
            Lenken er kanskje utdatert, eller siden er flyttet. Prøv hovedsiden
            eller ta kontakt så hjelper vi deg videre.
          </p>
          <div
            className="hero-cta"
            style={{ marginTop: 36, justifyContent: "center", display: "flex" }}
          >
            <Link className="btn btn-primary" href="/">
              Til forsiden <ArrowRight />
            </Link>
            <Link className="btn btn-outline" href="/kontakt">
              Kontakt oss
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
