"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const stepsData = {
  es: [
    {
      index: "01",
      title: "DISEÑO DE TURBINA",
      text: "Diseño aerodinámico, análisis termodinámico y desarrollo mecánico in-house optimizado para aplicaciones UAV.",
      bullets: ["Optimización de rendimiento", "Ingeniería aeroespacial"],
    },
    {
      index: "02",
      title: "DESARROLLO DE ECU",
      text: "Unidades de control electrónico propias desarrolladas in-house para un control, monitoreo y protección activos del motor.",
      bullets: ["Hardware de control propietario", "Monitoreo y protección activos"],
    },
    {
      index: "03",
      title: "SOFTWARE EMBEBIDO",
      text: "Algoritmos de control en tiempo real, diagnósticos integrados y optimización del rendimiento adaptados a cada misión.",
      bullets: ["Algoritmos en tiempo real", "Optimización de misión"],
    },
    {
      index: "04",
      title: "SISTEMAS DE TELEMETRÍA",
      text: "Monitoreo del motor, adquisición de datos de alta frecuencia e integración de telemetría de misión para conciencia situacional.",
      bullets: ["Fusión de sensores Kalman", "Adquisición a alta frecuencia"],
    },
    {
      index: "05",
      title: "INTEGRACIÓN EN UAV",
      text: "Soporte de integración de propulsión para fabricantes (OEMs), organizaciones de investigación y programas aeroespaciales.",
      bullets: ["Interfaces flexibles y rápidas", "Soluciones de instalación y combustible"],
    },
    {
      index: "06",
      title: "FABRICACIÓN DE PRECISIÓN",
      text: "Fabricación de componentes críticos y montaje final en nuestras instalaciones de España bajo un estricto control de calidad.",
      bullets: ["Instalaciones en España", "Certificación y control estricto"],
    },
  ],
  en: [
    {
      index: "01",
      title: "TURBINE DESIGN",
      text: "In-house aerodynamic design, thermodynamic analysis, and mechanical development optimized for UAV applications.",
      bullets: ["Performance optimization", "Aerospace engineering"],
    },
    {
      index: "02",
      title: "ECU DEVELOPMENT",
      text: "Proprietary electronic control units developed in-house for precise engine control, monitoring, and active protection.",
      bullets: ["Proprietary control hardware", "Active protection logic"],
    },
    {
      index: "03",
      title: "EMBEDDED SOFTWARE",
      text: "Real-time control algorithms, diagnostics, and performance optimization tailored to specific mission requirements.",
      bullets: ["Real-time algorithms", "Mission customization"],
    },
    {
      index: "04",
      title: "TELEMETRY SYSTEMS",
      text: "Engine monitoring, high-frequency data acquisition, and mission telemetry integration for real-time situational awareness.",
      bullets: ["Kalman filter processing", "High-frequency logging"],
    },
    {
      index: "05",
      title: "UAV INTEGRATION",
      text: "Propulsion integration support for OEMs, research organizations, and aerospace programs with flexible solutions.",
      bullets: ["Flexible fuel & control lines", "Rapid bench validation"],
    },
    {
      index: "06",
      title: "PRECISION MANUFACTURE",
      text: "Precision manufacturing and assembly of critical components in Spain under strict quality control standards.",
      bullets: ["Made in Spain", "Strict quality control"],
    },
  ],
  fr: [
    {
      index: "01",
      title: "CONCEPTION DE TURBINES",
      text: "Conception aérodynamique, analyse thermodynamique et développement mécanique interne optimisés pour les applications UAV.",
      bullets: ["Optimisation des performances", "Ingénierie aérospatiale"],
    },
    {
      index: "02",
      title: "DÉVELOPPEMENT D'ECU",
      text: "Unités de contrôle électronique exclusives développées en interne pour un contrôle, un suivi et une protection précis.",
      bullets: ["Matériel de contrôle propriétaire", "Protection active du moteur"],
    },
    {
      index: "03",
      title: "LOGICIEL EMBARQUÉ",
      text: "Algorithmes de contrôle en temps réel, diagnostics et optimisation des performances adaptés aux exigences de chaque mission.",
      bullets: ["Algorithmes temps réel", "Optimisation de mission"],
    },
    {
      index: "04",
      title: "SYSTÈMES DE TÉLÉMÉTRIE",
      text: "Surveillance moteur, acquisition de données haute fréquence et intégration de la télémétrie de mission.",
      bullets: ["Filtrage Kalman", "Acquisition haute fréquence"],
    },
    {
      index: "05",
      title: "INTÉGRATION UAV",
      text: "Support d'intégration de propulsion pour les OEM, les organismes de recherche et les programmes aérospatiaux.",
      bullets: ["Lignes carburant & contrôle", "Validation rapide sur banc"],
    },
    {
      index: "06",
      title: "FABRICATION DE PRÉCISION",
      text: "Fabrication de composants critiques et assemblage final dans nos installations en Espagne sous contrôle qualité strict.",
      bullets: ["Fabriqué en Espagne", "Contrôle qualité strict"],
    },
  ],
};

const headingData = {
  es: { label: "Competencias Clave", title: "Capacidades integradas in-house." },
  en: { label: "Core Competencies", title: "Complete in-house capabilities." },
  fr: { label: "Compétences Clés", title: "Capacités internes complètes." },
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
