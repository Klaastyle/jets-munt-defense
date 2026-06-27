"use client";
import { useEffect, useRef } from "react";

export default function InteractiveVideo({ src, label }: { src: string; label: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = container.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Only calculate if visible
          if (rect.top <= windowHeight && rect.bottom >= 0) {
            const totalScroll = rect.height + windowHeight;
            const currentScroll = windowHeight - rect.top;
            let progress = currentScroll / totalScroll;
            progress = Math.max(0, Math.min(1, progress));
            
            if (video.readyState >= 2 && video.duration) {
               // Soft scrub to avoid frame drop
               video.currentTime = progress * video.duration;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial calculation
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="video-section container">
      <div className="video-wrapper">
        <video 
          ref={videoRef}
          src={src} 
          muted 
          playsInline 
          preload="auto"
          className="interactive-video"
        />
        <div className="video-label">{label}</div>
      </div>
    </div>
  );
}
