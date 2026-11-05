"use client";

import { FormEvent, useState } from "react";

export type MailField = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  options?: string[];
};

const fieldClass =
  "mt-1 w-full rounded-md border border-stone-300 bg-white px-3 py-2 font-normal text-stone-900";

/**
 * Sends the message through the club server. The visitor's mail app stays closed.
 */
export function MailForm({
  subject,
  fields,
  submitLabel,
  onDark = false,
  showHint = true,
}: {
  subject: string;
  fields: MailField[];
  submitLabel: string;
  onDark?: boolean;
  showHint?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setError("");
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject,
          company: String(data.get("company") ?? ""),
          fields: fields.map((field) => ({
            name: field.name,
            label: field.label,
            value: String(data.get(field.name) ?? "").trim(),
          })),
        }),
      });
      const body = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) {
        throw new Error(body?.error || "Mejlet kunde inte skickas.");
      }
      setStatus("sent");
      form.reset();
    } catch (caught) {
      setStatus("error");
      setError(caught instanceof Error ? caught.message : "Mejlet kunde inte skickas.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {fields.map((field) => (
        <label
          key={field.name}
          className={`block text-sm font-semibold ${onDark ? "text-white" : "text-stone-800"}`}
        >
          {field.label}
          {field.required ? <span className="text-crimson"> *</span> : null}
          {field.type === "textarea" ? (
            <textarea name={field.name} required={field.required} rows={5} className={fieldClass} />
          ) : field.type === "select" ? (
            <select name={field.name} required={field.required} className={fieldClass} defaultValue="">
              <option value="" disabled className="bg-white text-stone-900">
                Välj
              </option>
              {field.options?.map((option) => (
                <option key={option} value={option} className="bg-white text-stone-900">
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              name={field.name}
              type={field.type ?? "text"}
              required={field.required}
              className={fieldClass}
            />
          )}
        </label>
      ))}
      <button
        type="submit"
        disabled={status === "sending"}
        className={`rounded-md px-5 py-3 text-sm font-semibold uppercase tracking-wider disabled:opacity-60 ${
          onDark
            ? "bg-white text-crimson hover:bg-stone-100"
            : "bg-crimson text-white hover:bg-crimson-dark"
        }`}
      >
        {status === "sending" ? "Skickar..." : submitLabel}
      </button>
      {status === "sent" || status === "error" || showHint ? (
        <p className={`text-sm ${onDark ? "text-red-50" : "text-stone-600"}`}>
          {status === "sent"
            ? "Tack. Meddelandet är skickat till klubben."
            : status === "error"
              ? error
              : "Meddelandet skickas direkt till klubben. Du behöver inte öppna ett e-postprogram."}
        </p>
      ) : null}
    </form>
  );
}
