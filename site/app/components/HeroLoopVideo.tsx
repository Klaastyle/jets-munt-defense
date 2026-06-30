"use client";

import { useEffect, useRef } from "react";

export default function HeroLoopVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Just ensure it plays, standard HTML5 loop handles the rest smoothly
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, this is fine
      });
    }
  }, []);

  return (
    <div className="hero-video-bg hero-loop-video" aria-hidden="true">
      <video ref={videoRef} src={src} autoPlay muted loop playsInline preload="auto" />
    </div>
  );
}
