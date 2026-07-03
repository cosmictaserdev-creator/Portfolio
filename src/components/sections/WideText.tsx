"use client";

import { useEffect, useRef } from "react";
import { ensureGsapPlugins, gsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * A single word split into three chunks spread across the full page
 * width at staggered heights; each chunk scrubs in from a different
 * direction as the section approaches the viewport center.
 */
export function WideText() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ensureGsapPlugins();
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const parts = gsap.utils.toArray<HTMLElement>(".wide-part");
      const froms = [
        { autoAlpha: 0, yPercent: -100 },
        { autoAlpha: 0 },
        { autoAlpha: 0, yPercent: 100 },
      ];

      parts.forEach((part, i) => {
        gsap.fromTo(part, froms[i], {
          autoAlpha: 1,
          yPercent: 0,
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "center center",
            scrub: 0.4,
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto flex max-w-6xl flex-col gap-4">
        <p className="max-w-[30ch] pl-4 sm:pl-16">
          i obsess over making apps feel completely
        </p>

        <h2 className="flex w-full flex-row justify-between overflow-hidden text-clamp-xxl leading-[0.92] text-accent">
          <div className="wide-part pb-3">sea</div>
          <div className="wide-part mt-24 pb-3">mle</div>
          <div className="wide-part mt-48 pb-3">ss</div>
        </h2>

        <p className="w-full max-w-none self-end pr-4 pt-4 text-right sm:pr-16">
          <span className="inline-block max-w-[38ch]">
            The invisible work — cold starts, offline sync, a steady 60fps —
            is what makes an app feel effortless.
          </span>
        </p>
      </div>
    </section>
  );
}
