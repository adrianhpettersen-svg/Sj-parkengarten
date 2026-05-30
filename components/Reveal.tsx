"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type Props = {
  as?: ElementType;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
  children: ReactNode;
};

export function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);

    const fallback = window.setTimeout(() => el.classList.add("in"), 1600);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const classes = [
    "reveal",
    delay ? `d${delay}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={classes}
    >
      {children}
    </Tag>
  );
}
