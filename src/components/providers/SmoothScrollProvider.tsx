"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { ensureGsapPlugins, gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { onIdle } from "@/lib/idle";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let lenis: Lenis | null = null;
    let tick: ((time: number) => void) | null = null;

    // Smooth scroll is a progressive enhancement — set it up once the
    // browser is idle so it doesn't compete with initial hydration/paint.
    const cancelIdle = onIdle(() => {
      ensureGsapPlugins();

      lenis = new Lenis({
        duration: 1,
        lerp: 0.3,
        touchMultiplier: 1.8,
        autoRaf: false,
      });
      lenisRef.current = lenis;

      lenis.on("scroll", ScrollTrigger.update);

      tick = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    });

    return () => {
      cancelIdle();
      if (tick) gsap.ticker.remove(tick);
      lenis?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
