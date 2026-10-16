/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

function updateGoogleConsent(status: "granted" | "denied") {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];

  if (status === "granted") {
    try {
      document.cookie = '_iub_cs-s4605151={"consent":true,"purposes":{"1":true,"2":true,"3":true,"4":true,"5":true}}; path=/; max-age=31536000; SameSite=Lax';
    } catch (e) {
      console.warn("Could not set iubenda cookie", e);
    }
  } else {
    try {
      document.cookie = '_iub_cs-s4605151={"consent":false,"purposes":{"1":false,"2":false,"3":false,"4":false,"5":false}}; path=/; max-age=31536000; SameSite=Lax';
    } catch (e) {
      console.warn("Could not set iubenda cookie", e);
    }
  }

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: status,
      ad_storage: status,
      ad_user_data: status,
      ad_personalization: status,
    });
  } else {
    window.dataLayer.push([
      "consent",
      "update",
      {
        analytics_storage: status,
        ad_storage: status,
        ad_user_data: status,
        ad_personalization: status,
      },
    ]);
  }

  window.dataLayer.push({
    event: status === "granted" ? "cookie_consent_accepted" : "cookie_consent_rejected",
  });

  if (status === "granted") {
    window.dataLayer.push({ event: "iubenda_consent_given_purpose_1" });
    window.dataLayer.push({ event: "iubenda_consent_given_purpose_4" });
    window.dataLayer.push({ event: "iubenda_consent_given_purpose_5" });
  }
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or rejected cookies
    const consent = localStorage.getItem("jm_cookie_consent");
    if (!consent) {
// eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
    } else if (consent === "accepted") {
      updateGoogleConsent("granted");
    } else if (consent === "rejected") {
      updateGoogleConsent("denied");
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("jm_cookie_consent", "accepted");
    updateGoogleConsent("granted");
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("jm_cookie_consent", "rejected");
    updateGoogleConsent("denied");
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
