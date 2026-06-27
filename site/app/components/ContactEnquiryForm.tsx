"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";

type SubmitState = "idle" | "sending" | "sent" | "error";

export default function ContactEnquiryForm({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : pathname.startsWith("/fr") ? "fr" : "es";
  const copy = {
    es: {
      error: "No se ha podido enviar la consulta.",
      sent: "Consulta enviada. JetsMunt respondera usando los datos de contacto indicados.",
      name: "Nombre / empresa",
      email: "Email de contacto",
      country: "Pais",
      phone: "Telefono / WhatsApp",
      type: "Tipo de consulta",
      choose: "Selecciona una opcion",
      options: ["Seleccion de motor", "Accesorios", "Servicio tecnico", "Distribuidor", "Integracion de ingenieria"],
      engine: "Motor / accesorio",
      platform: "Tipo de plataforma",
      timeline: "Plazo",
      notes: "Notas del proyecto",
      placeholder: "Empuje objetivo, ciclo de uso, limites de instalacion, ECU/telemetria o sintomas de servicio.",
      consent: "Acepto que JetsMunt contacte conmigo sobre esta consulta tecnica.",
      sending: "Enviando consulta...",
      submit: "Enviar consulta",
    },
    en: {
      error: "The enquiry could not be sent.",
      sent: "Enquiry sent. JetsMunt will reply using the contact details provided.",
      name: "Name / company",
      email: "Contact email",
      country: "Country",
      phone: "Phone / WhatsApp",
      type: "Request type",
      choose: "Select one",
      options: ["Engine selection", "Accessories", "Technical service", "Distributor route", "Engineering integration"],
      engine: "Engine / accessory",
      platform: "Platform type",
      timeline: "Timeline",
      notes: "Project notes",
      placeholder: "Target thrust, duty cycle, installation limits, ECU/telemetry needs or service symptoms.",
      consent: "I agree to be contacted by JetsMunt regarding this technical enquiry.",
      sending: "Sending enquiry...",
      submit: "Send enquiry",
    },
    fr: {
      error: "La demande n'a pas pu etre envoyee.",
      sent: "Demande envoyee. JetsMunt repondra avec les coordonnees indiquees.",
      name: "Nom / entreprise",
      email: "Email de contact",
      country: "Pays",
      phone: "Telephone / WhatsApp",
      type: "Type de demande",
      choose: "Selectionnez une option",
      options: ["Selection moteur", "Accessoires", "Service technique", "Distributeur", "Integration ingenierie"],
      engine: "Moteur / accessoire",
      platform: "Type de plateforme",
      timeline: "Delai",
      notes: "Notes du projet",
      placeholder: "Poussee cible, cycle d'utilisation, limites d'installation, ECU/telemetrie ou symptomes de service.",
      consent: "J'accepte que JetsMunt me contacte au sujet de cette demande technique.",
      sending: "Envoi en cours...",
      submit: "Envoyer la demande",
    },
  }[locale];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = {
      ...Object.fromEntries(new FormData(form).entries()),
      locale,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || copy.error);
      }

      setState("sent");
      setMessage(copy.sent);
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : copy.error);
    }
  }

  return (
    <form className={compact ? "contact-form contact-form-compact" : "contact-form"} onSubmit={handleSubmit}>
      <input name="locale" type="hidden" value={locale} />
      <label className="contact-hp" aria-hidden="true">
        <span>Website</span>
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <label>
        <span>{copy.name} <b aria-hidden="true">*</b></span>
        <input name="name" type="text" className="cta-field" autoComplete="organization" required />
      </label>
      <label>
        <span>{copy.email} <b aria-hidden="true">*</b></span>
        <input name="email" type="email" className="cta-field" autoComplete="email" required />
      </label>
      <label>
        <span>{copy.country} <b aria-hidden="true">*</b></span>
        <input name="country" type="text" className="cta-field" autoComplete="country-name" required />
      </label>
      <label>
        <span>{copy.phone}</span>
        <input name="phone" type="tel" className="cta-field" autoComplete="tel" />
      </label>
      <label>
        <span>{copy.type} <b aria-hidden="true">*</b></span>
        <select name="request_type" className="cta-field" defaultValue="" required>
          <option value="" disabled>{copy.choose}</option>
          {copy.options.map((option) => <option key={option}>{option}</option>)}
        </select>
      </label>
      <label>
        <span>{copy.engine}</span>
        <input name="engine_or_accessory" type="text" className="cta-field" />
      </label>
      <label>
        <span>{copy.platform}</span>
        <input name="platform" type="text" className="cta-field" />
      </label>
      <label>
        <span>{copy.timeline}</span>
        <input name="timeline" type="text" className="cta-field" />
      </label>
      <label className="contact-form-wide">
        <span>{copy.notes}</span>
        <textarea
          name="notes"
          className="cta-field"
          rows={compact ? 4 : 5}
          placeholder={copy.placeholder}
        />
      </label>
      <label className="contact-consent">
        <input name="consent" type="checkbox" value="accepted" required />
        <span>{copy.consent} <b aria-hidden="true">*</b></span>
      </label>
      <button className="btn btn-primary cta-submit" type="submit" disabled={state === "sending"}>
        {state === "sending" ? copy.sending : copy.submit}
      </button>
      {message && (
        <p className={`form-status ${state === "sent" ? "success" : "error"}`} role="status">
          {message}
        </p>
      )}
    </form>
  );
}
