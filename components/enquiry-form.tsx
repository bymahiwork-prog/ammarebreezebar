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
  title,
  fields,
  submitLabel,
  showWhatsapp = false,
  dark = false,
}: {
  title: ReactNode;
  fields: Field[];
  submitLabel: string;
  showWhatsapp?: boolean;
  dark?: boolean;
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

  const tone = dark
    ? { label: "text-sage-pale", input: "border-cream/25 text-cream focus:border-sage-pale [color-scheme:dark]", note: "text-cream/50" }
    : { label: "text-sage", input: "border-ink/25 text-ink focus:border-sage-deep", note: "text-muted" };
  const input = `block w-full border-0 border-b bg-transparent px-0 pb-2.5 pt-2 text-[1rem] font-light outline-none transition-colors ${tone.input}`;

  return (
    <form onSubmit={onSubmit} noValidate={false}>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-3">
        <div className={`display text-4xl ${dark ? "text-cream" : "text-ink"}`}>{title}</div>
        <p className={`text-xs ${tone.note}`}>Fields marked * are required</p>
      </div>
      <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
        {fields.map((f) => (
          <label key={f.name} className={`block ${f.half ? "" : "sm:col-span-2"}`}>
            <span className={`kicker text-[0.6rem] ${tone.label}`}>
              {f.label}
              {f.required && " *"}
            </span>
            {f.type === "textarea" ? (
              <textarea name={f.name} required={f.required} rows={3} className={`${input} resize-none`} />
            ) : f.type === "select" ? (
              <select name={f.name} required={f.required} className={`${input} cursor-pointer`} defaultValue={f.options?.[0]}>
                {f.options?.map((o) => (
                  <option key={o} className="text-ink">
                    {o}
                  </option>
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
      <div className="mt-12 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className={`group inline-flex items-center gap-3 px-7 py-[0.95rem] text-[0.66rem] uppercase tracking-[0.28em] transition-colors ${
            dark ? "bg-cream text-olive hover:bg-paper" : "bg-sage-deep text-paper hover:bg-olive"
          }`}
        >
          {submitLabel}
          <span aria-hidden className="h-px w-5 bg-current transition-all duration-300 group-hover:w-8" />
        </button>
        {showWhatsapp && (
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`kicker border-b pb-1 ${dark ? "border-cream/40 text-cream" : "border-ink/30 text-ink"}`}
          >
            Or WhatsApp us
          </a>
        )}
      </div>
      {sent && (
        <p role="status" className={`mt-6 text-sm ${dark ? "text-sage-pale" : "text-sage-deep"}`}>
          Thank you — WhatsApp has opened with your details. Press send and our team will be in touch.
        </p>
      )}
    </form>
  );
}
