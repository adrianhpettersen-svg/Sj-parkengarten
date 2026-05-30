"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

type Props = {
  variant?: "auto" | "solid";
};

export function Header({ variant = "auto" }: Props) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (variant === "solid") return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  useEffect(() => {
    document.body.classList.toggle("mobile-open", open);
    return () => document.body.classList.remove("mobile-open");
  }, [open]);

  const closeMenu = () => setOpen(false);

  const classes = ["site-header"];
  if (variant === "solid") classes.push("solid");
  else if (scrolled) classes.push("scrolled");

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const ctaClass = variant === "solid" ? "btn btn-dark" : "btn btn-ghost";
  const ctaHref = variant === "solid" ? `tel:${site.contact.phoneE164}` : "/kontakt";
  const ctaLabel = variant === "solid" ? site.contact.phone : "Ta kontakt";

  return (
    <>
      <header className={classes.join(" ")}>
        <div className="container-x">
          <Link className="brand" href="/" aria-label={`${site.name} – forside`}>
            <Image
              src="/assets/current-logo.png"
              alt={site.name}
              width={170}
              height={34}
              priority
              style={{ height: 34, width: "auto" }}
            />
          </Link>

          <nav className="site-nav" aria-label="Hovedmeny">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "active" : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <div className="header-cta">
              <Link className={ctaClass} href={ctaHref}>
                {ctaLabel}
              </Link>
            </div>
            <button
              type="button"
              className="menu-toggle"
              aria-label="Åpne meny"
              aria-expanded={open}
              aria-controls="site-nav"
              onClick={() => setOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      {open && (
        <button
          type="button"
          className="menu-close"
          aria-label="Lukk meny"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
      )}
    </>
  );
}
