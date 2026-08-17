"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { ensureGsapPlugins, gsap, prefersReducedMotion } from "@/lib/gsap";
import { onIdle } from "@/lib/idle";

const StickerField = dynamic(
  () => import("@/components/ui/StickerField").then((m) => m.StickerField),
  { ssr: false }
);

const WORDMARK = "Aryan";

export function Splash() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [showSymbols, setShowSymbols] = useState(false);

  useEffect(() => onIdle(() => setShowSymbols(true)), []);

  useEffect(() => {
    ensureGsapPlugins();
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.fromTo(
        ".wordmark-char",
        { yPercent: 110 },
        { yPercent: 0, duration: 1.1, stagger: 0.07 },
        0.1
      )
        .fromTo(
          ".splash-tagline",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
          0.5
        )
        .fromTo(
          ".splash-symbols",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.8 },
          0.7
        )
        .fromTo(
          ".splash-sub",
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
          0.8
        );
    }, root);

    return () => ctx.revert();
  }, []);

  const ping = (e: React.MouseEvent<HTMLSpanElement>) => {
    const el = e.currentTarget;
    if (!el.classList.contains("letter-ping")) {
      el.classList.add("letter-ping");
      window.setTimeout(() => el.classList.remove("letter-ping"), 1500);
    }
  };

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[calc(100svh-4rem)] items-center px-6 sm:px-10"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-6 sm:gap-10">
        <div className="min-w-0 flex-1">
          {/* overflow-hidden masks the chars rising in, which otherwise crops
              the descender on "y" — pad the box out, pull the same amount
              back off the layout */}
          <h1
            aria-label="Aryan Sharma, Android &amp; software developer"
            className="-mb-[0.16em] flex overflow-hidden pb-[0.16em] font-display font-semibold normal-case leading-[0.9] tracking-tight text-accent"
            style={{ fontSize: "clamp(4.5rem, 23vw, 19rem)" }}
          >
            {WORDMARK.split("").map((char, i) => (
              <span
                key={i}
                aria-hidden
                onMouseEnter={ping}
                className="wordmark-char inline-block will-change-transform"
              >
                {char}
              </span>
            ))}
          </h1>

          <p className="splash-sub mt-4 max-w-md text-sm text-muted">
            sharma &middot; aka cosmictaser &middot; freelance developer
          </p>
        </div>

        <div className="flex items-stretch gap-4 self-stretch py-2 sm:gap-6">
          <div className="splash-tagline flex flex-col items-center">
            <p
              className="text-[0.7rem] tracking-[0.08em]"
              style={{ writingMode: "vertical-rl" }}
            >
              android &amp; software development
              <br />
              based in india
            </p>
            <span className="mt-3 w-px flex-1 bg-foreground" aria-hidden />
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="currentColor"
              aria-hidden
              className="-mt-px"
            >
              <path d="M0 0h14L7 10 0 0Z" />
            </svg>
          </div>

          <div className="splash-symbols hidden sm:block">
            {showSymbols && (
              <StickerField columns={3} rows={8} cellSize={44} fillProbability={0.75} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
