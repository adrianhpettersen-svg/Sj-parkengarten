import { ogContentType, ogImage, ogSize } from "@/lib/og-template";

export const runtime = "nodejs";
export const alt = "Båtplasser ved Sjøparken Garten Marina";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Båtplasser",
    title: "15 plasser i en",
    italicTail: "havn som tåler været",
    subtitle: "Fra 2,5 m til 35 fot — godt skjermet bak den 165 meter lange moloen.",
  });
}
