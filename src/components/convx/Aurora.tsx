"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

// Gradient field parked while the look is decided. Flip to false to bring
// the drifting colour blobs back — glass surfaces currently fall back to
// plain frosted over the page background.
const DISABLED = true;

const BLOBS = [
  { color: "var(--accent)", size: "44vw", top: "-8%", left: "-6%" },
  { color: "var(--accent-2)", size: "38vw", top: "30%", left: "58%" },
  { color: "#ff7ab6", size: "30vw", top: "58%", left: "12%" },
  { color: "#4fd6e0", size: "26vw", top: "4%", left: "62%" },
];

/**
 * Slow drifting colour field behind the glass surfaces — without
 * something coloured back there, backdrop-blur has nothing to bend.
 */
export function Aurora() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (DISABLED || !root || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("span").forEach((blob, i) => {
        gsap.to(blob, {
          xPercent: i % 2 ? -18 : 22,
          yPercent: i % 2 ? 16 : -14,
          duration: 14 + i * 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  if (DISABLED) return null;

  return (
    <div ref={ref} className="aurora" aria-hidden>
      {BLOBS.map((blob) => (
        <span
          key={blob.left + blob.top}
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            background: blob.color,
          }}
        />
      ))}
    </div>
  );
}
