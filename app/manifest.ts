import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.longName,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf7",
    theme_color: "#0b3a53",
    lang: "no",
    icons: [
      {
        src: "/assets/current-logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
