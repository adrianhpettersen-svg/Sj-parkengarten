import { ogContentType, ogImage, ogSize } from "@/lib/og-template";

export const runtime = "nodejs";
export const alt = "Kontakt Sjøparken Garten Marina";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Kontakt",
    title: "Vi svarer",
    italicTail: "gjerne",
    subtitle: "Gartveien 253, 7153 Garten · 900 22 945 · post@sjoparkengarten.no",
  });
}
