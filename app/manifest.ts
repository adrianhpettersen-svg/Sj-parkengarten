import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.longName,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#fafaf7",
    theme_color: "#0b3a53",
    lang: "no",
    dir: "ltr",
    categories: ["travel", "lifestyle", "sports"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "/og-default.jpg",
        sizes: "1200x630",
        type: "image/jpeg",
        form_factor: "wide",
        label: "Sjøparken Garten Marina i kveldssol",
      },
    ],
    shortcuts: [
      {
        name: "Båtplasser",
        short_name: "Båtplasser",
        description: "Se alle båtplasser og priser",
        url: "/baatplasser",
      },
      {
        name: "Kontakt",
        short_name: "Kontakt",
        description: "Ta kontakt med Sjøparken Garten",
        url: "/kontakt",
      },
    ],
  };
}
