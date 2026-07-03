"use client";

import { useEffect, useRef } from "react";
import { ensureGsapPlugins, gsap, prefersReducedMotion } from "@/lib/gsap";

export function Marquee({ items, speed = 60 }: { items: string[]; speed?: number }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ensureGsapPlugins();
    const track = trackRef.current;
    if (!track || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const width = track.scrollWidth / 2;
      gsap.fromTo(
        track,
        { x: 0 },
        { x: -width, duration: width / speed, ease: "none", repeat: -1 }
      );
    });

    return () => ctx.revert();
  }, [speed]);

  return (
    <div className="relative overflow-hidden border-y border-border/60 py-6">
      <div ref={trackRef} className="flex w-max gap-8 whitespace-nowrap will-change-transform">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-2xl lowercase text-muted sm:text-4xl">
            {item} <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
