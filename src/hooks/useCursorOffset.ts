"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/gsap";

/**
 * Tracks a smoothed offset of the cursor (or device tilt) from the
 * viewport center and reports it via callback on each animation frame.
 * No React state — consumers mutate DOM transforms directly.
 */
export function useCursorOffset(
  onFrame: (x: number, y: number) => void,
  divisor = 30
) {
  const cb = useRef(onFrame);
  cb.current = onFrame;

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let rafId: number;

    const handleMove = (e: MouseEvent) => {
      targetX = (e.clientX - window.innerWidth / 2) / divisor;
      targetY = (e.clientY - window.innerHeight / 2) / divisor;
    };

    const handleTilt = (e: DeviceOrientationEvent) => {
      if (e.gamma == null || e.beta == null) return;
      targetX = (e.gamma * 20) / divisor;
      targetY = ((e.beta - 45) * 20) / divisor;
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("deviceorientation", handleTilt, { passive: true });

    const loop = () => {
      x += (targetX - x) * 0.06;
      y += (targetY - y) * 0.06;
      cb.current(x, y);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("deviceorientation", handleTilt);
      cancelAnimationFrame(rafId);
    };
  }, [divisor]);
}
