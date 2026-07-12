 
"use client";

import { usePathname } from "next/navigation";
import AnimatedShaderBackground from "./AnimatedShaderBackground";

const stepIcons = [
  <svg key="1" style={{ width: "32px", height: "32px", stroke: "var(--accent)", fill: "none", strokeWidth: 1.5, marginBottom: "1rem", strokeLinecap: "round", strokeLinejoin: "round" }} viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
  <svg key="2" style={{ width: "32px", height: "32px", stroke: "var(--accent)", fill: "none", strokeWidth: 1.5, marginBottom: "1rem", strokeLinecap: "round", strokeLinejoin: "round" }} viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>,
  <svg key="3" style={{ width: "32px", height: "32px", stroke: "var(--accent)", fill: "none", strokeWidth: 1.5, marginBottom: "1rem", strokeLinecap: "round", strokeLinejoin: "round" }} viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  <svg key="4" style={{ width: "32px", height: "32px", stroke: "var(--accent)", fill: "none", strokeWidth: 1.5, marginBottom: "1rem", strokeLinecap: "round", strokeLinejoin: "round" }} viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  <svg key="5" style={{ width: "32px", height: "32px", stroke: "var(--accent)", fill: "none", strokeWidth: 1.5, marginBottom: "1rem", strokeLinecap: "round", strokeLinejoin: "round" }} viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  <svg key="6" style={{ width: "32px", height: "32px", stroke: "var(--accent)", fill: "none", strokeWidth: 1.5, marginBottom: "1rem", strokeLinecap: "round", strokeLinejoin: "round" }} viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
];

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
      title: "FABRICACIÓN DE PRECISIÓN",
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

export default function ScrollPropulsionPartner() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : pathname.startsWith("/fr") ? "fr" : "es";
  const steps = stepsData[locale];
  const heading = headingData[locale];

  return (
    <section className="partner-section section" id="partner">
      <AnimatedShaderBackground />
      <div className="container">
        <div className="partner-heading-center">
          <p className="section-label">{heading.label}</p>
          <h2 className="heading-lg" style={{ maxWidth: "none", marginBottom: "3rem" }}>{heading.title}</h2>
        </div>

        <div className="partner-grid-2col">
          {steps.map((step, index) => (
            <article className="partner-card-premium" key={step.title}>
              {stepIcons[index]}
              <div className="partner-card-header">
                <span className="partner-card-number">{step.index}</span>
                <h3 className="partner-card-title">{step.title}</h3>
              </div>
              <p className="partner-card-desc">{step.text}</p>
              <div className="partner-card-bullets">
                {step.bullets.map((bullet) => (
                  <span className="partner-card-bullet-tag" key={bullet}>
                    <span className="bullet-dot"></span>
                    {bullet}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
