"use client";

import { useEffect, useRef } from "react";

export default function ScrollHeroVideos({ sources }: { sources: string[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const lastTimes = useRef<number[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let ticking = false;

    const update = () => {
      const scrubArea = root.closest(".hero") ?? root.parentElement ?? root;
      const rect = scrubArea.getBoundingClientRect();
      const viewport = window.innerHeight;
      const scrollable = Math.max(1, rect.height - viewport);
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
      const segmentSize = 1 / sources.length;
      const activeIndex = Math.min(sources.length - 1, Math.floor(progress / segmentSize));

      const activeVideo = videoRefs.current[activeIndex];

      videoRefs.current.forEach((video, index) => {
        const isActive = index === activeIndex;
        video.style.opacity = isActive ? "0.74" : "0";

        if (!isActive && video.readyState >= 2 && video.duration) {
          const parkedTime = index < activeIndex ? video.duration : 0;
          if (Math.abs(video.currentTime - parkedTime) > 0.12) {
            video.currentTime = parkedTime;
          }
        }
      });

      if (activeVideo?.readyState && activeVideo.readyState >= 2 && activeVideo.duration) {
        const segmentStart = activeIndex * segmentSize;
        const localProgress = Math.max(0, Math.min(1, (progress - segmentStart) / segmentSize));
        const targetTime = localProgress * activeVideo.duration;
        const lastTime = lastTimes.current[activeIndex] ?? -1;

        if (Math.abs(targetTime - lastTime) > 0.025) {
          try {
            activeVideo.fastSeek(targetTime);
          } catch {
            activeVideo.currentTime = targetTime;
          }
          lastTimes.current[activeIndex] = targetTime;
        }
      }

      ticking = false;
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    const videos = videoRefs.current;

    videos.forEach((video) => {
      video.pause();
      video.addEventListener("loadedmetadata", requestUpdate);
    });
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    requestUpdate();

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      videos.forEach((video) => video.removeEventListener("loadedmetadata", requestUpdate));
    };
  }, [sources.length]);

  return (
    <div ref={rootRef} className="hero-video-bg scroll-hero-videos" aria-hidden="true">
      {sources.map((src, index) => (
        <video
          key={src}
          ref={(node) => {
            if (node) videoRefs.current[index] = node;
          }}
          src={src}
          muted
          playsInline
          preload="auto"
        />
      ))}
    </div>
  );
}
