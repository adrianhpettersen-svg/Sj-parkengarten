"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
  cls?: string;
};

type Props = {
  images: GalleryImage[];
  sizes?: string;
  className?: string;
};

export function Gallery({
  images,
  sizes = "(max-width: 560px) 50vw, (max-width: 1080px) 50vw, 25vw",
  className,
}: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => {
    setOpen(null);
    // restore focus
    if (lastFocusRef.current) lastFocusRef.current.focus();
  }, []);

  const next = useCallback(() => {
    setOpen((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  const prev = useCallback(() => {
    setOpen((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    // lock body scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // focus the close button when opening
    closeBtnRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, next, prev]);

  const openAt = (idx: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
    lastFocusRef.current = e.currentTarget;
    setOpen(idx);
  };

  const current = open !== null ? images[open] : null;

  return (
    <>
      <div className={className ?? "gal-grid"}>
        {images.map((img, i) => (
          <figure key={img.src} className={img.cls || undefined}>
            <button
              type="button"
              className="gal-btn"
              onClick={openAt(i)}
              aria-label={`Forstørr bilde: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={sizes}
                style={{ objectFit: "cover" }}
              />
            </button>
          </figure>
        ))}
      </div>

      {current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
        >
          <button
            ref={closeBtnRef}
            type="button"
            className="lightbox-close"
            onClick={close}
            aria-label="Lukk bilde"
          >
            ×
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox-nav prev"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Forrige bilde"
              >
                ‹
              </button>
              <button
                type="button"
                className="lightbox-nav next"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Neste bilde"
              >
                ›
              </button>
            </>
          )}

          <figure
            className="lightbox-figure"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={1920}
              height={1280}
              sizes="100vw"
              priority
              style={{
                objectFit: "contain",
                maxWidth: "100%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
              }}
            />
            <figcaption className="lightbox-caption">
              {current.alt}
              {images.length > 1 && (
                <span className="lightbox-count">
                  {" "}
                  · {(open ?? 0) + 1} / {images.length}
                </span>
              )}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
