 
import { NextResponse } from "next/server";

const requiredFields = ["name", "email", "country", "request_type", "consent"];
const locales = ["es", "en", "fr"] as const;
type Locale = (typeof locales)[number];

const messages: Record<Locale, Record<string, string>> = {
  es: {
    invalid: "Envio de formulario no valido.",
    required: "Completa los campos obligatorios.",
    email: "Introduce un email valido.",
    notConfigured: "El formulario esta listo, pero el envio de email aun no esta configurado.",
    failed: "No se ha podido entregar la consulta. Contacta con info@jetsmuntdefense.com.",
  },
  en: {
    invalid: "Invalid form submission.",
    required: "Please complete the required fields.",
    email: "Please enter a valid email address.",
    notConfigured: "The form is ready, but email delivery is not configured yet.",
    failed: "The enquiry could not be delivered. Please contact info@jetsmuntdefense.com.",
  },
  fr: {
    invalid: "Envoi de formulaire non valide.",
    required: "Veuillez completer les champs obligatoires.",
    email: "Veuillez saisir une adresse email valide.",
    notConfigured: "Le formulaire est pret, mais l'envoi d'email n'est pas encore configure.",
    failed: "La demande n'a pas pu etre livree. Contactez info@jetsmuntdefense.com.",
  },
};

function getLocale(value: unknown): Locale {
  return locales.includes(value as Locale) ? (value as Locale) : "es";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function line(label: string, value: unknown) {
  const text = typeof value === "string" ? value.trim() : "";
  return text ? `${label}: ${text}` : null;
}

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);
  const locale = getLocale(data && typeof data === "object" ? (data as Record<string, unknown>).locale : null);
  const copy = messages[locale];

  if (!data || typeof data !== "object") {
    return NextResponse.json({ message: copy.invalid }, { status: 400 });
  }

  if (String(data.website ?? "").trim()) {
    return NextResponse.json({ ok: true });
  }

  for (const field of requiredFields) {
    if (!String(data[field] ?? "").trim()) {
      return NextResponse.json({ message: copy.required }, { status: 400 });
    }
  }

  if (!isValidEmail(String(data.email))) {
    return NextResponse.json({ message: copy.email }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const rawTo = process.env.CONTACT_TO_EMAIL ?? "albertponslajusticia@gmail.com";
  const to = rawTo.includes(',') ? rawTo.split(',').map(e => e.trim()) : rawTo;
  const from = process.env.CONTACT_FROM_EMAIL ?? "JetsMunt Website <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      { message: copy.notConfigured },
      { status: 503 },
    );
  }

  const body = [
    "New JetsMunt technical enquiry",
    "",
    line("Language", locale.toUpperCase()),
    line("Name / company", data.name),
    line("Email", data.email),
    line("Country", data.country),
    line("Phone / WhatsApp", data.phone),
    line("Request type", data.request_type),
    line("Engine / accessory", data.engine_or_accessory),
    line("Platform type", data.platform),
    line("Timeline", data.timeline),
    "",
    "Project notes:",
    String(data.notes ?? "").trim() || "-",
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: String(data.email),
      subject: `JetsMunt enquiry - ${String(data.request_type).trim()}`,
      text: body,
    }),
  });

  if (!response.ok) {
    const errorData = await response.text();
    console.error("RESEND ERROR:", errorData);
    return NextResponse.json(
      { message: copy.failed },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
