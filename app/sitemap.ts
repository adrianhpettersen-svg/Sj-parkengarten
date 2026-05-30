import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: Array<{
    path: string;
    changeFrequency: "weekly" | "monthly" | "yearly";
    priority: number;
  }> = [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    { path: "/baatplasser", changeFrequency: "monthly", priority: 0.9 },
    { path: "/galleri", changeFrequency: "monthly", priority: 0.6 },
    { path: "/kontakt", changeFrequency: "yearly", priority: 0.7 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
