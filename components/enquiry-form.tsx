"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "date" | "time" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  half?: boolean;
};

/**
 * Enquiry form with no backend: on submit it opens WhatsApp with the
 * details pre-filled, so every enquiry lands straight with the team.
 */
export function EnquiryForm({
  title,
  intro,
  fields,
  submitLabel,
  showWhatsapp = false,
  tone = "paper",
}: {
  tone?: "paper" | "sand";
  title: React.ReactNode;
  intro?: string;
  fields: Field[];
  submitLabel: string;
  showWhatsapp?: boolean;
}) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = fields
      .map((f) => [f.label, String(data.get(f.name) ?? "").trim()] as const)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`);
    const text = `Hello ${site.name}, I'd like to make an enquiry.\n\n${lines.join("\n")}`;
    window.open(`${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
  }

  const input =
    "mt-1.5 w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-clay focus:ring-2 focus:ring-clay/15";

  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-2xl p-6 text-ink sm:p-8 ${tone === "paper" ? "bg-paper shadow-sm" : "bg-sand"}`}
    >
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
        <div className="font-display text-3xl font-light">{title}</div>
        <p className="text-xs text-muted">{intro ?? "Fields marked with * are required."}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((f) => (
          <label key={f.name} className={`block ${f.half ? "" : "sm:col-span-2"}`}>
            <span className="eyebrow text-[0.6rem] text-muted">
              {f.label}
              {f.required && "*"}
            </span>
            {f.type === "textarea" ? (
              <textarea name={f.name} required={f.required} rows={4} className={input} />
            ) : f.type === "select" ? (
              <select name={f.name} required={f.required} className={input} defaultValue={f.options?.[0]}>
                {f.options?.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : (
              <input
                name={f.name}
                type={f.type ?? "text"}
                required={f.required}
                autoComplete={f.type === "email" ? "email" : f.type === "tel" ? "tel" : undefined}
                className={input}
              />
            )}
          </label>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="rounded-full bg-clay px-6 py-3 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-paper transition-colors hover:bg-clay-dark"
        >
          {submitLabel} →
        </button>
        {showWhatsapp && (
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink/25 px-6 py-3 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:border-clay hover:text-clay"
          >
            Or WhatsApp Us
          </a>
        )}
      </div>
      {sent && (
        <p role="status" className="mt-4 text-sm text-forest">
          Thank you — WhatsApp has opened with your details. Just press send and our team will get back to you.
        </p>
      )}
    </form>
  );
}
