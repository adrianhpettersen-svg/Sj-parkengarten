import type { Metadata, Viewport } from "next";
import { Newsreader, Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/lib/site";
import {
  JsonLd,
  marinaSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/structured-data";
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
    // Sett GOOGLE_SITE_VERIFICATION i Vercel env vars når dere er klare for Search Console
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="no" className={`${newsreader.variable} ${hanken.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={marinaSchema()} />
        <JsonLd data={websiteSchema()} />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
