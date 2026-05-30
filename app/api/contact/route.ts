import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = Record<string, unknown>;

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  if (str(data.company)) {
    return NextResponse.json({ ok: true });
  }

  const navn = str(data.navn);
  const epost = str(data.epost);
  const melding = str(data.melding);

  if (!navn || !epost) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  if (process.env.NODE_ENV !== "production") {
    console.log("[Sjøparken contact form]", { navn, epost, melding, payload: data });
  }

  return NextResponse.json({ ok: true });
}
