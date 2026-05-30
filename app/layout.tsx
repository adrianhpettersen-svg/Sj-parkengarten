import type { Metadata, Viewport } from "next";
import { Newsreader, Hanken_Grotesk } from "next/font/google";
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
    "marina",
    "båtplasser",
    "båtplass",
    "Garten",
    "Fosen",
    "Trøndelag",
    "Trondheimsfjorden",
    "båtslipp",
    "sløyebod",
    "båtlager",
    "utleiebolig",
    "gjestehavn",
    "havn",
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
    languages: { "nb-NO": "/" },
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: site.url,
    siteName: site.longName,
    title: `${site.longName} — Helt ytterst av Fosen-halvøya`,
    description: site.description,
    images: [
      {
        url: "/assets/hero-sunset.jpg",
        width: 1600,
        height: 900,
        alt: `${site.longName} i kveldssol`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.longName} — Helt ytterst av Fosen-halvøya`,
    description: site.description,
    images: ["/assets/hero-sunset.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="no" className={`${newsreader.variable} ${hanken.variable}`}>
      <head>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={marinaSchema()} />
        <JsonLd data={websiteSchema()} />
      </head>
      <body>{children}</body>
    </html>
  );
}
