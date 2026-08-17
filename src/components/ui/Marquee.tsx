"use client";

import { useEffect, useRef } from "react";
import { ensureGsapPlugins, gsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * Seamless keyword ribbon. The list is rendered twice and the track is
 * shifted by exactly half its width, so the loop has no visible seam.
 */
export function Marquee({ items, speed = 26 }: { items: string[]; speed?: number }) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ensureGsapPlugins();
    const track = trackRef.current;
    if (!track || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tween = gsap.to(track, {
        xPercent: -50,
        ease: "none",
        duration: speed,
        repeat: -1,
      });

      // nudge speed with scroll direction for a bit of life
      gsap.to(tween, {
        timeScale: 2.4,
        ease: "none",
        scrollTrigger: {
          trigger: track,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          onLeave: () => gsap.to(tween, { timeScale: 1, duration: 0.6 }),
          onLeaveBack: () => gsap.to(tween, { timeScale: 1, duration: 0.6 }),
        },
      });
    }, track);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div className="overflow-hidden border-y border-border py-5">
      <div ref={trackRef} className="flex w-max will-change-transform">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {items.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center gap-6 whitespace-nowrap px-6 font-display text-2xl lowercase text-muted sm:text-3xl"
              >
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
