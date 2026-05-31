import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

type ImageRef = { url: string; title?: string; caption?: string };

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    changeFrequency: "weekly" | "monthly" | "yearly";
    priority: number;
    images?: ImageRef[];
  }> = [
    {
      path: "/",
      changeFrequency: "monthly",
      priority: 1,
      images: [
        { url: `${site.url}/assets/hero-sunset.jpg`, title: "Kveldssol over marinaen på Garten", caption: "Sjøparken Garten Marina i solnedgang" },
        { url: `${site.url}/assets/aerial.jpg`, title: "Flyfoto av Garten", caption: "Sjøparken sett ovenfra" },
        { url: `${site.url}/og-default.jpg`, title: "Sjøparken Garten Marina" },
      ],
    },
    {
      path: "/baatplasser",
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        { url: `${site.url}/assets/harbor.jpg`, title: "Marinaen ovenfra", caption: "Båtplasser ved Sjøparken Garten" },
        { url: `${site.url}/assets/berth-map.png`, title: "Kart over båtplassene" },
      ],
    },
    {
      path: "/galleri",
      changeFrequency: "monthly",
      priority: 0.6,
      images: [
        { url: `${site.url}/assets/sunset.jpg` },
        { url: `${site.url}/assets/marina.jpg` },
        { url: `${site.url}/assets/rope.jpg` },
        { url: `${site.url}/assets/harbor.jpg` },
        { url: `${site.url}/assets/aerial.jpg` },
        { url: `${site.url}/assets/extra1.jpg` },
        { url: `${site.url}/assets/extra2.jpg` },
        { url: `${site.url}/assets/sign.jpg` },
        { url: `${site.url}/assets/cabins-deck.jpg` },
        { url: `${site.url}/assets/hero-sunset.jpg` },
      ],
    },
    {
      path: "/kontakt",
      changeFrequency: "yearly",
      priority: 0.7,
      images: [{ url: `${site.url}/assets/aerial.jpg`, title: "Sjøparken Garten på kartet" }],
    },
  ];

  return routes.map(({ path, changeFrequency, priority, images }) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: { "nb-NO": `${site.url}${path}`, "no": `${site.url}${path}` },
    },
    ...(images?.length ? { images: images.map((i) => i.url) } : {}),
  }));
}
