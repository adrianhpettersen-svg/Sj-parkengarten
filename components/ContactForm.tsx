"use client";

import { useState, type FormEvent } from "react";
import { SendIcon } from "@/components/icons/Icons";

type Props = {
  variant?: "default" | "extended";
};

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ variant = "default" }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    setMessage(null);

    const data = new FormData(form);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data.entries())),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Send failed");
      setStatus("success");
      setMessage("Takk — vi tar kontakt så snart vi kan!");
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "Beklager — noe gikk galt. Prøv igjen eller ring oss direkte.",
      );
    }
  }

  return (
    <form className="form-card reveal d1" onSubmit={onSubmit} noValidate>
      <h3>Send oss en melding</h3>
      <div className="form-row">
        <div className="field">
          <label htmlFor="cf-navn">Navn</label>
          <input
            id="cf-navn"
            name="navn"
            type="text"
            placeholder="Ditt navn"
            autoComplete="name"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="cf-tlf">Telefon</label>
          <input
            id="cf-tlf"
            name="telefon"
            type="tel"
            placeholder="Telefonnummer"
            autoComplete="tel"
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="cf-epost">E-post</label>
        <input
          id="cf-epost"
          name="epost"
          type="email"
          placeholder="din@epost.no"
          autoComplete="email"
          required
        />
      </div>
      {variant === "extended" && (
        <div className="field">
          <label htmlFor="cf-emne">Gjelder</label>
          <input
            id="cf-emne"
            name="emne"
            type="text"
            placeholder="F.eks. båtplass 2026, utleiebolig …"
          />
        </div>
      )}
      <div className="field">
        <label htmlFor="cf-melding">Melding</label>
        <textarea
          id="cf-melding"
          name="melding"
          placeholder={
            variant === "extended"
              ? "Skriv din melding her"
              : "Hva kan vi hjelpe deg med?"
          }
        />
      </div>
      {/* honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", opacity: 0 }}
        aria-hidden="true"
      />
      <button className="btn btn-primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sender …" : "Send melding"}
        <SendIcon />
      </button>
      {message && (
        <p className={`form-status${status === "error" ? " error" : ""}`} role="status">
          {message}
        </p>
      )}
    </form>
  );
}
