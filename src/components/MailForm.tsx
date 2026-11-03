"use client";

import { FormEvent } from "react";

export type MailField = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  options?: string[];
};

/**
 * Opens the visitor's email app. The static site does not store the message.
 */
export function MailForm({
  to,
  subject,
  fields,
  submitLabel,
  onDark = false,
}: {
  to: string;
  subject: string;
  fields: MailField[];
  submitLabel: string;
  onDark?: boolean;
}) {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = fields.map((field) => {
      const value = String(data.get(field.name) ?? "").trim();
      return `${field.label}: ${value}`;
    });
    const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {fields.map((field) => (
        <label
          key={field.name}
          className={`block text-sm font-semibold ${onDark ? "text-white" : "text-stone-800"}`}
        >
          {field.label}
          {field.required ? <span className="text-crimson"> *</span> : null}
          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              required={field.required}
              rows={5}
              className="mt-1 w-full rounded-md border border-stone-300 bg-white px-3 py-2 font-normal"
            />
          ) : field.type === "select" ? (
            <select
              name={field.name}
              required={field.required}
              className="mt-1 w-full rounded-md border border-stone-300 bg-white px-3 py-2 font-normal"
              defaultValue=""
            >
              <option value="" disabled>
                Välj
              </option>
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              name={field.name}
              type={field.type ?? "text"}
              required={field.required}
              className="mt-1 w-full rounded-md border border-stone-300 bg-white px-3 py-2 font-normal"
            />
          )}
        </label>
      ))}
      <button
        type="submit"
        className={`rounded-md px-5 py-3 text-sm font-semibold uppercase tracking-wider ${
          onDark
            ? "bg-white text-crimson hover:bg-stone-100"
            : "bg-crimson text-white hover:bg-crimson-dark"
        }`}
      >
        {submitLabel}
      </button>
      <p className={`text-sm ${onDark ? "text-red-50" : "text-stone-600"}`}>
        Knappen öppnar ditt e-postprogram med texten ifylld. Webbplatsen sparar inte meddelandet.
      </p>
    </form>
  );
}
