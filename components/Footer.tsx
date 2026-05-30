import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";
import { FacebookIcon, InstagramIcon } from "@/components/icons/Icons";

const hasSocials = Boolean(site.social.facebook || site.social.instagram);

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-x">
        <div className="foot-top">
          <div className="foot-brand">
            <Image
              src="/assets/current-logo.png"
              alt={site.name}
              width={150}
              height={30}
              style={{ height: 30, width: "auto" }}
            />
            <p>
              Godt skjermet marina ytterst på Garten — tett på havet, trygt i havn.
              Etablert {site.established}.
            </p>
          </div>
          <div className="foot-col">
            <h4>Snarveier</h4>
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="foot-col">
            <h4>Kontakt</h4>
            <p>
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </p>
            <a href={`tel:${site.contact.phoneE164}`}>{site.contact.phone}</a>
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>
            © {new Date().getFullYear()} {site.org.name} · Org.nr. {site.org.orgNumber}
          </span>
          {hasSocials && (
            <div className="socials">
              {site.social.facebook && (
                <a
                  href={site.social.facebook}
                  aria-label="Facebook"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FacebookIcon />
                </a>
              )}
              {site.social.instagram && (
                <a
                  href={site.social.instagram}
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <InstagramIcon />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
