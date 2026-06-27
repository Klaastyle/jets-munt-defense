"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    index: "01",
    title: "Turbine core",
    text: "Compact turbojet hardware matched to thrust, mass and envelope.",
    bullets: ["98-255 N range", "Compact XM classes"],
  },
  {
    index: "02",
    title: "Control stack",
    text: "ECU, sensors and telemetry integrated into the propulsion package.",
    bullets: ["12-32 V PRO supply", "CAN Bus and data logging"],
  },
  {
    index: "03",
    title: "Validation support",
    text: "Bench checks and flight-test preparation close the loop.",
    bullets: ["Fuel architecture review", "Flight-test preparation"],
  },
];

export default function ScrollPropulsionPartner() {
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
  }, []);

  return (
    <section ref={sectionRef} className="partner-scroll-section" id="partner">
      <div className="partner-sticky">
        <div className="container partner-grid">
          <div className="partner-video-frame">
            <video ref={videoRef} src="/media/videos/turbine-exploded-scrub.mp4" muted playsInline preload="auto" />
            <div className="partner-video-label">Turbine exploded view</div>
          </div>

          <div className="partner-steps">
            <div className="partner-heading">
              <p className="section-label">Built as a complete propulsion partner</p>
              <h2 className="heading-lg">One propulsion stack.</h2>
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
