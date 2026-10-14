"use client";

import { useState, type FormEvent, type ReactNode } from "react";
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
  eyebrow,
  title,
  fields,
  submitLabel,
  showWhatsapp = false,
}: {
  eyebrow?: string;
  title: ReactNode;
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
    "mt-2 block w-full rounded-xl border border-line bg-paper px-4 py-3 text-[0.95rem] text-ink outline-none transition focus:border-sage focus:ring-4 focus:ring-sage/15";

  return (
    <form onSubmit={onSubmit} className="rounded-[24px] bg-cream p-6 text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,.45)] sm:p-9">
      {eyebrow && <p className="kicker text-[0.66rem] tracking-[0.28em] text-sage">{eyebrow}</p>}
      <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
        <div className="display text-[2rem] text-olive">{title}</div>
        <p className="text-xs text-muted">Fields marked with an * are required.</p>
      </div>
      <div className="mt-7 grid gap-x-5 gap-y-5 sm:grid-cols-2">
        {fields.map((f) => (
          <label key={f.name} className={`block ${f.half ? "" : "sm:col-span-2"}`}>
            <span className="text-[0.78rem] font-medium text-olive">
              {f.label}
              {f.required && <span className="text-sage"> *</span>}
            </span>
            {f.type === "textarea" ? (
              <textarea name={f.name} required={f.required} rows={4} className={`${input} resize-none`} />
            ) : f.type === "select" ? (
              <select name={f.name} required={f.required} className={`${input} cursor-pointer`} defaultValue={f.options?.[0]}>
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
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-sage-deep px-7 py-3 text-[0.82rem] font-medium tracking-wide text-cream transition-colors hover:bg-olive"
        >
          {submitLabel} →
        </button>
        {showWhatsapp && (
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-olive/30 px-7 py-3 text-[0.82rem] font-medium tracking-wide text-olive transition-colors hover:bg-olive hover:text-cream"
          >
            Or WhatsApp Us
          </a>
        )}
      </div>
      {sent && (
        <p role="status" className="mt-5 text-sm text-sage-deep">
          Thank you — WhatsApp has opened with your details. Press send and our team will be in touch.
        </p>
      )}
    </form>
  );
}
