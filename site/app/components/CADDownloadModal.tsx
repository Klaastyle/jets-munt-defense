"use client";

import { useState } from "react";
import { X, FileBox, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type CADDownloadModalProps = {
  isOpen: boolean;
  onClose: () => void;
  engineModel: string;
  locale?: string;
};

export default function CADDownloadModal({ isOpen, onClose, engineModel, locale = "es" }: CADDownloadModalProps) {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const copy = {
    es: {
      title: "Solicitar Archivo CAD 3D",
      subtitle: `Introduce tus datos corporativos para recibir el modelo 3D del ${engineModel}.`,
      name: "Nombre / Apellido",
      company: "Empresa",
      email: "Email corporativo",
      send: "Solicitar Descarga",
      success: "Solicitud enviada. Revisa tu bandeja de entrada en los próximos minutos.",
      error: "Error al solicitar la descarga. Inténtalo de nuevo.",
    },
    en: {
      title: "Request 3D CAD File",
      subtitle: `Enter your corporate details to receive the 3D model for ${engineModel}.`,
      name: "Full Name",
      company: "Company",
      email: "Corporate Email",
      send: "Request Download",
      success: "Request sent. Please check your inbox in the next few minutes.",
      error: "Error requesting download. Please try again.",
    },
    fr: {
      title: "Demander le Fichier CAO 3D",
      subtitle: `Saisissez vos coordonnées professionnelles pour recevoir le modèle 3D du ${engineModel}.`,
      name: "Nom complet",
      company: "Entreprise",
      email: "Email professionnel",
      send: "Demander le téléchargement",
      success: "Demande envoyée. Veuillez vérifier votre boîte de réception dans les prochaines minutes.",
      error: "Erreur lors de la demande. Veuillez réessayer.",
    }
  }[locale as "es" | "en" | "fr"] || {
    title: "Request 3D CAD File",
    subtitle: `Enter your corporate details to receive the 3D model for ${engineModel}.`,
    name: "Full Name",
    company: "Company",
    email: "Corporate Email",
    send: "Request Download",
    success: "Request sent. Please check your inbox in the next few minutes.",
    error: "Error requesting download. Please try again.",
  };

  if (!isOpen) return null;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setState("submitting");

    const data = {
      ...Object.fromEntries(new FormData(form).entries()),
      engineModel,
      locale,
    };

    try {
      const response = await fetch("/api/cad-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("API Error");
      }

      setState("success");
      setMessage(copy.success);
      form.reset();

      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "cad_download_request",
          engine: engineModel,
        });
      }
    } catch (error) {
      setState("error");
      setMessage(copy.error);
    }
  }

  return (
    <div className="cad-modal-overlay" onClick={onClose}>
      <div className="cad-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="cad-modal-close" onClick={onClose} aria-label="Close">
          <X />
        </button>
        
        <div className="cad-modal-header">
          <FileBox className="cad-modal-icon" />
          <h2>{copy.title}</h2>
          <p>{copy.subtitle}</p>
        </div>

        {state === "success" ? (
          <div className="cad-modal-success">
            <CheckCircle className="icon-success" />
            <p>{message}</p>
            <button className="btn btn-outline" onClick={onClose}>Cerrar</button>
          </div>
        ) : (
          <form className="contact-form cad-form" onSubmit={handleSubmit}>
            <input type="hidden" name="hp" value="" />
            <label>
              <span>{copy.name} *</span>
              <input name="name" type="text" className="cta-field" required />
            </label>
            <label>
              <span>{copy.company} *</span>
              <input name="company" type="text" className="cta-field" required />
            </label>
            <label>
              <span>{copy.email} *</span>
              <input name="email" type="email" className="cta-field" required />
            </label>

            {state === "error" && (
              <div className="contact-status error">
                <AlertCircle />
                <span>{message}</span>
              </div>
            )}

            <button type="submit" className="btn btn-primary w-full" disabled={state === "submitting"}>
              {state === "submitting" ? <Loader2 className="spinner" /> : copy.send}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
