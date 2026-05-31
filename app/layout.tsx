import type { Metadata, Viewport } from "next";
import { Newsreader, Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/lib/site";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0b3a53" },
  ],
  width: "device-width",
  initialScale: 1,
};

const ogImage = {
  url: "/og-default.jpg",
  width: 1200,
  height: 630,
  alt: `${site.longName} i kveldssol — tett på havet, trygt i havn`,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.longName} — Helt ytterst av Fosen-halvøya`,
    template: `%s — ${site.longName}`,
  },
  description: site.description,
  applicationName: site.longName,
  generator: "Next.js",
  keywords: [
    "Sjøparken Garten",
    "Sjøparken Garten Marina",
    "marina",
    "marina Trøndelag",
    "marina Fosen",
    "båtplasser",
    "båtplass",
    "båtplass Garten",
    "båtplass Trondheim",
    "båtplass Fosen",
    "Garten",
    "Fosen",
    "Trøndelag",
    "Trondheimsfjorden",
    "båtslipp",
    "sløyebod",
    "båtlager",
    "vinterlager båt",
    "gjestehavn Trøndelag",
    "havn Trøndelag",
    "molo",
    "havn Garten",
  ],
  authors: [{ name: site.longName, url: site.url }],
  creator: site.longName,
  publisher: site.longName,
  category: "Travel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: { "nb-NO": "/", "no": "/" },
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: site.url,
    siteName: site.longName,
    title: `${site.longName} — Helt ytterst av Fosen-halvøya`,
    description: site.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.longName} — Helt ytterst av Fosen-halvøya`,
    description: site.description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_SITE_VERIFICATION,
    other: {
      ...(process.env.BING_SITE_VERIFICATION
        ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
        : {}),
      ...(process.env.FACEBOOK_DOMAIN_VERIFICATION
        ? { "facebook-domain-verification": process.env.FACEBOOK_DOMAIN_VERIFICATION }
        : {}),
      ...(process.env.PINTEREST_SITE_VERIFICATION
        ? { "p:domain_verify": process.env.PINTEREST_SITE_VERIFICATION }
        : {}),
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="no" className={`${newsreader.variable} ${hanken.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${site.longName} – nyheter`}
          href={`${site.url}/rss.xml`}
        />
        <link rel="alternate" hrefLang="nb-NO" href={site.url} />
        <link rel="alternate" hrefLang="no" href={site.url} />
        <link rel="alternate" hrefLang="x-default" href={site.url} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content={site.name} />
        <meta name="application-name" content={site.longName} />
        <meta name="msapplication-TileColor" content="#0b3a53" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="NO-50" />
        <meta name="geo.placename" content="Garten, Trøndelag" />
        <meta name="geo.position" content={`${site.geo.latitude};${site.geo.longitude}`} />
        <meta name="ICBM" content={`${site.geo.latitude}, ${site.geo.longitude}`} />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="14 days" />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
