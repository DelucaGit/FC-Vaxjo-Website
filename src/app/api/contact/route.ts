import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/lib/site";

const MAX_FIELDS = 12;
const MAX_VALUE = 4000;

type IncomingField = {
  name?: unknown;
  label?: unknown;
  value?: unknown;
};

export async function POST(request: Request) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) {
    return NextResponse.json(
      { error: "Mejl är inte inställt på servern ännu." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ogiltigt meddelande." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Ogiltigt meddelande." }, { status: 400 });
  }

  const record = body as { subject?: unknown; fields?: unknown; company?: unknown };
  if (typeof record.company === "string" && record.company.trim()) {
    return NextResponse.json({ ok: true });
  }

  if (typeof record.subject !== "string" || record.subject.trim().length === 0 || record.subject.length > 200) {
    return NextResponse.json({ error: "Ämnet saknas." }, { status: 400 });
  }

  if (!Array.isArray(record.fields) || record.fields.length === 0 || record.fields.length > MAX_FIELDS) {
    return NextResponse.json({ error: "Formuläret är ofullständigt." }, { status: 400 });
  }

  const lines: string[] = [];
  let replyTo: string | undefined;
  for (const field of record.fields as IncomingField[]) {
    if (!field || typeof field !== "object") continue;
    const label = typeof field.label === "string" ? field.label.replace(/[\r\n]/g, " ").slice(0, 80) : "";
    const value = typeof field.value === "string" ? field.value.slice(0, MAX_VALUE).trim() : "";
    if (!label) continue;
    lines.push(`${label}: ${value}`);
    if (field.name === "email" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      replyTo = value;
    }
  }

  if (lines.length === 0) {
    return NextResponse.json({ error: "Formuläret är ofullständigt." }, { status: 400 });
  }

  const port = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.hostinger.com",
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || user,
      to: process.env.SMTP_TO || site.formEmail,
      replyTo,
      subject: record.subject.replace(/[\r\n]/g, " ").trim(),
      text: lines.join("\n"),
    });
  } catch {
    return NextResponse.json(
      { error: "Mejlet kunde inte skickas. Försök igen, eller ring klubben." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
