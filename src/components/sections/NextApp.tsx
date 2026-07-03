"use client";

import { useEffect, useMemo, useRef } from "react";
import { ensureGsapPlugins, gsap, prefersReducedMotion } from "@/lib/gsap";
import { RevealText } from "@/components/ui/RevealText";
import { GeoSymbol, GEO_SYMBOL_IDS, type GeoSymbolId } from "@/components/icons/GeoSymbols";

/**
 * Closing statement above the contact section, sitting inside a wide
 * ring of geo symbols that slowly rotates with scroll.
 */
export function NextApp() {
  const ringRef = useRef<HTMLDivElement | null>(null);

  const symbols = useMemo<GeoSymbolId[]>(
    () =>
      Array.from({ length: 20 }, (_, i) =>
        i % 3 === 0
          ? GEO_SYMBOL_IDS[(i * 5) % GEO_SYMBOL_IDS.length]
          : "ring"
      ),
    []
  );

  useEffect(() => {
    ensureGsapPlugins();
    const ring = ringRef.current;
    if (!ring || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ring,
        { rotation: -30 },
        {
          rotation: 30,
          ease: "none",
          scrollTrigger: {
            trigger: ring,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex items-center justify-center overflow-hidden px-6 py-40 sm:px-10 sm:py-56">
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-muted/60"
        style={{ width: "min(80vw, 820px)", height: "min(80vw, 820px)" }}
      >
        {symbols.map((id, i) => {
          const angle = (i / symbols.length) * 360;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${angle}deg) translateY(min(-40vw, -410px)) rotate(-${angle}deg)`,
              }}
            >
              <GeoSymbol id={id} width={40} height={40} />
            </div>
          );
        })}
      </div>

      <div className="relative flex flex-col items-center gap-4 text-center">
        <p>enough about me — let&apos;s talk about your</p>
        <RevealText
          as="h2"
          className="text-clamp-xxl lowercase leading-[0.92] text-accent"
        >
          next app
        </RevealText>
        <svg
          width="22"
          height="26"
          viewBox="0 0 22 26"
          fill="currentColor"
          aria-hidden
          className="mt-4"
        >
          <path d="M12.5 19.2 20 11.7l1.4 1.4L11 23.5.6 13.1 2 11.7l7.5 7.5V.5h3v18.7Z" />
        </svg>
      </div>
    </section>
  );
}
