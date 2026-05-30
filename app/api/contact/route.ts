import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Payload = Record<string, unknown>;

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  // honeypot — silently succeed for bots
  if (str(data.company)) {
    return NextResponse.json({ ok: true });
  }

  const navn = str(data.navn);
  const epost = str(data.epost);
  const telefon = str(data.telefon);
  const emne = str(data.emne);
  const melding = str(data.melding);

  if (!navn || !epost || !looksLikeEmail(epost)) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress =
    process.env.RESEND_FROM ?? `Sjøparken Garten <onboarding@resend.dev>`;
  const toAddress = process.env.CONTACT_TO ?? site.contact.email;

  const subject = emne
    ? `Sjøparken: ${emne} — ${navn}`
    : `Sjøparken: ny henvendelse fra ${navn}`;

  const lines = [
    `Navn:     ${navn}`,
    `E-post:   ${epost}`,
    telefon ? `Telefon:  ${telefon}` : null,
    emne ? `Gjelder:  ${emne}` : null,
    "",
    "Melding:",
    melding || "(ingen melding)",
  ].filter(Boolean);
  const textBody = lines.join("\n");

  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;max-width:560px;margin:0 auto;color:#0E1E27">
      <h2 style="color:#0B3A53;margin:0 0 16px">Ny henvendelse via sjoparkengarten.no</h2>
      <table style="border-collapse:collapse;width:100%;margin-bottom:18px">
        <tr><td style="padding:6px 0;color:#5B6C76;width:90px"><b>Navn</b></td><td>${escapeHtml(navn)}</td></tr>
        <tr><td style="padding:6px 0;color:#5B6C76"><b>E-post</b></td><td><a href="mailto:${escapeHtml(epost)}">${escapeHtml(epost)}</a></td></tr>
        ${telefon ? `<tr><td style="padding:6px 0;color:#5B6C76"><b>Telefon</b></td><td><a href="tel:${escapeHtml(telefon)}">${escapeHtml(telefon)}</a></td></tr>` : ""}
        ${emne ? `<tr><td style="padding:6px 0;color:#5B6C76"><b>Gjelder</b></td><td>${escapeHtml(emne)}</td></tr>` : ""}
      </table>
      <div style="padding:18px 20px;background:#E8F0F4;border-radius:10px;white-space:pre-wrap;line-height:1.5">${escapeHtml(melding || "(ingen melding)")}</div>
      <p style="margin-top:24px;color:#5B6C76;font-size:13px">
        Svar direkte på denne e-posten for å kontakte ${escapeHtml(navn)}.
      </p>
    </div>
  `;

  // No API key configured → fall back to logging so dev/preview never breaks
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[Sjøparken contact form — dev]", { navn, epost, telefon, emne, melding });
      return NextResponse.json({ ok: true, mode: "logged" });
    }
    console.error("[Sjøparken contact form] RESEND_API_KEY not set");
    return NextResponse.json({ error: "E-postoppsett mangler" }, { status: 500 });
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: epost,
      subject,
      text: textBody,
      html,
    });

    if (result.error) {
      console.error("[Sjøparken contact form] Resend error", result.error);
      return NextResponse.json(
        { error: "Kunne ikke sende e-post" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, id: result.data?.id });
  } catch (err) {
    console.error("[Sjøparken contact form] Unexpected error", err);
    return NextResponse.json({ error: "Uventet feil" }, { status: 500 });
  }
}
