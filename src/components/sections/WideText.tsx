"use client";

import { useEffect, useRef } from "react";
import { ensureGsapPlugins, gsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * One word split into three chunks spread across the full width at
 * staggered heights. Scroll scrubs them in from opposite corners with
 * rotation + blur, they assemble, then drift apart again as a parallax
 * while the section leaves — so the word never sits still.
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
        { autoAlpha: 0, yPercent: -140, x: "20vw", rotation: -12, filter: "blur(12px)" },
        { autoAlpha: 0, yPercent: 60, scale: 0.4, filter: "blur(12px)" },
        { autoAlpha: 0, yPercent: 140, x: "-20vw", rotation: 12, filter: "blur(12px)" },
      ];

      parts.forEach((part, i) => {
        // assemble on the way in
        gsap.fromTo(part, froms[i], {
          autoAlpha: 1,
          yPercent: 0,
          x: 0,
          scale: 1,
          rotation: 0,
          filter: "blur(0px)",
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "center 45%",
            scrub: 0.4,
          },
        });

        // gentle drift apart on the way out
        gsap.to(part, {
          xPercent: (i - 1) * 14,
          yPercent: (i - 1) * -6,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "center 45%",
            end: "bottom top",
            scrub: 0.6,
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

        <h2 className="flex w-full flex-row justify-between text-clamp-xxl leading-[0.92] text-accent">
          <div className="wide-part pb-3 will-change-transform">sea</div>
          <div className="wide-part mt-24 pb-3 will-change-transform">mle</div>
          <div className="wide-part mt-48 pb-3 will-change-transform">ss</div>
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
