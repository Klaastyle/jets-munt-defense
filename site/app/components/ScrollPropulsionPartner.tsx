"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const stepsData = {
  es: [
    {
      index: "01",
      title: "Motor turbojet",
      text: "Hardware turbojet compacto adaptado al empuje, masa y envolvente de instalación.",
      bullets: ["Rango 98–255 N", "Clases compactas XM"],
    },
    {
      index: "02",
      title: "Sistema de control",
      text: "ECU, sensores y telemetría integrados como parte del paquete de propulsión.",
      bullets: ["Alimentación PRO 12–32 V", "CAN Bus y registro de datos"],
    },
    {
      index: "03",
      title: "Soporte de validación",
      text: "Verificación en banco y preparación para pruebas de vuelo que cierran el programa.",
      bullets: ["Revisión de arquitectura de combustible", "Preparación para pruebas de vuelo"],
    },
  ],
  en: [
    {
      index: "01",
      title: "Turbine core",
      text: "Compact turbojet hardware matched to thrust, mass and envelope.",
      bullets: ["98–255 N range", "Compact XM classes"],
    },
    {
      index: "02",
      title: "Control stack",
      text: "ECU, sensors and telemetry integrated into the propulsion package.",
      bullets: ["12–32 V PRO supply", "CAN Bus and data logging"],
    },
    {
      index: "03",
      title: "Validation support",
      text: "Bench checks and flight-test preparation close the loop.",
      bullets: ["Fuel architecture review", "Flight-test preparation"],
    },
  ],
  fr: [
    {
      index: "01",
      title: "Moteur turbojet",
      text: "Hardware turbojet compact adapté à la poussée, la masse et l'enveloppe d'installation.",
      bullets: ["Gamme 98–255 N", "Classes compactes XM"],
    },
    {
      index: "02",
      title: "Système de contrôle",
      text: "ECU, capteurs et télémétrie intégrés dans le package de propulsion.",
      bullets: ["Alimentation PRO 12–32 V", "CAN Bus et enregistrement de données"],
    },
    {
      index: "03",
      title: "Support de validation",
      text: "Vérifications sur banc et préparation aux essais en vol pour finaliser le programme.",
      bullets: ["Revue d'architecture carburant", "Préparation aux essais en vol"],
    },
  ],
};

const headingData = {
  es: { label: "Un socio de propulsión completo", title: "Un sistema de propulsión completo." },
  en: { label: "Built as a complete propulsion partner", title: "One propulsion stack." },
  fr: { label: "Un partenaire de propulsion complet", title: "Un système de propulsion complet." },
};

const videoLabelData = {
  es: "Vista explosionada de la turbina",
  en: "Turbine exploded view",
  fr: "Vue éclatée de la turbine",
};

export default function ScrollPropulsionPartner() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : pathname.startsWith("/fr") ? "fr" : "es";
  const steps = stepsData[locale];
  const heading = headingData[locale];
  const videoLabel = videoLabelData[locale];

  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const stepRefs = useRef<HTMLElement[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    let ticking = false;

    const updateVideo = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const scrollable = Math.max(1, rect.height - viewport);
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
      const nextStep = Math.min(steps.length - 1, Math.floor(progress * steps.length));

      if (video.readyState >= 2 && video.duration) {
        const targetTime = progress * video.duration;
        if (Math.abs(video.currentTime - targetTime) > 0.025) {
          try {
            video.fastSeek(targetTime);
          } catch {
            video.currentTime = targetTime;
          }
        }
      }

      setActiveStep(nextStep);
      ticking = false;
    };

    const requestVideoUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateVideo);
    };

    video.pause();
    video.addEventListener("loadedmetadata", requestVideoUpdate);
    window.addEventListener("scroll", requestVideoUpdate, { passive: true });
    window.addEventListener("resize", requestVideoUpdate);
    requestVideoUpdate();

    return () => {
      video.removeEventListener("loadedmetadata", requestVideoUpdate);
      window.removeEventListener("scroll", requestVideoUpdate);
      window.removeEventListener("resize", requestVideoUpdate);
    };
  }, [steps.length]);

  return (
    <section ref={sectionRef} className="partner-scroll-section" id="partner">
      <div className="partner-sticky">
        <div className="container partner-grid">
          <div className="partner-video-frame">
            <video ref={videoRef} src="/media/videos/turbine-exploded-scrub.mp4" muted playsInline preload="auto" />
            <div className="partner-video-label">{videoLabel}</div>
          </div>

          <div className="partner-steps">
            <div className="partner-heading">
              <p className="section-label">{heading.label}</p>
              <h2 className="heading-lg">{heading.title}</h2>
            </div>

            {steps.map((step, index) => (
              <article
                className={`partner-step ${activeStep === index ? "active" : ""}`}
                data-step={index}
                key={step.title}
                ref={(node) => {
                  if (node) stepRefs.current[index] = node;
                }}
              >
                <span>{step.index}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <ul>
                  {step.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
