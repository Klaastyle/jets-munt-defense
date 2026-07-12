/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or rejected cookies
    const consent = localStorage.getItem("jm_cookie_consent");
    if (!consent) {
// eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("jm_cookie_consent", "accepted");
    setIsVisible(false);
    // Here you would typically initialize Google Analytics or other trackers
  };

  const rejectCookies = () => {
    localStorage.setItem("jm_cookie_consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
      <div className="cookie-banner-content">
        <div className="cookie-banner-text">
          <strong>Uso de cookies</strong>
          <p>
            Utilizamos cookies propias y de terceros para fines analíticos y para mostrarte contenido personalizado. 
            Puedes aceptar todas las cookies pulsando el botón "Aceptar" o rechazarlas pulsando "Rechazar".
          </p>
          <Link href="/politica-de-cookies" className="cookie-link">
            Leer política completa
          </Link>
        </div>
        <div className="cookie-banner-actions">
          <button onClick={rejectCookies} className="btn btn-outline">
            Rechazar
          </button>
          <button onClick={acceptCookies} className="btn btn-primary">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
