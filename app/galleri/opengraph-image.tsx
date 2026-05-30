import { ogContentType, ogImage, ogSize } from "@/lib/og-template";

export const runtime = "nodejs";
export const alt = "Galleri — Sjøparken Garten Marina";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Galleri",
    title: "Et glimt",
    italicTail: "av Garten",
    subtitle: "Bilder fra marinaen, skjærgården og kveldssolen ytterst på Fosen.",
  });
}
