"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/gsap";

/**
 * Returns a ref for an element that gently drifts toward the cursor
 * (or device tilt on mobile) — mutates transform directly via rAF,
 * no React state, so it never triggers a re-render.
 */
export function useParallaxLayer<T extends HTMLElement>(strength = 30) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

    const handleMove = (e: MouseEvent) => {
      targetX = (e.clientX - window.innerWidth / 2) / strength;
      targetY = (e.clientY - window.innerHeight / 2) / strength;
    };

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma == null || e.beta == null) return;
      targetX = e.gamma / 2;
      targetY = (e.beta - 45) / 2;
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("deviceorientation", handleOrientation, { passive: true });

    const loop = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      el.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("deviceorientation", handleOrientation);
      cancelAnimationFrame(rafId);
    };
  }, [strength]);

  return ref;
}
