"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { ensureGsapPlugins, gsap, prefersReducedMotion } from "@/lib/gsap";
import { SFSYMBOLS } from "@/content/sfsymbols";

const WORDMARK = "SF Symbols";

type Props = {
  stats: { label: string; value: string }[];
};

export function SfSymbolsHero({ stats }: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    ensureGsapPlugins();
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .fromTo(
          ".sf-char",
          { yPercent: 110 },
          { yPercent: 0, duration: 1.05, stagger: 0.05 },
          0.1
        )
        .fromTo(
          ".sf-rise",
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.08 },
          0.4
        )
        .fromTo(
          ".sf-hero-tile",
          { autoAlpha: 0, y: 40, scale: 0.9 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 1.1, stagger: 0.04 },
          0.3
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative isolate overflow-hidden px-6 pb-20 pt-10 sm:px-10 sm:pb-28 sm:pt-16"
    >
      {/* faint field of floating glyph marks behind the hero */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.14] dark:opacity-[0.1]">
        <SfHeroField />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <span className="glass sf-rise inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-wide">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          open source · jetpack compose · {SFSYMBOLS.symbolCount.toLocaleString()} glyphs
        </span>

        <h1
          className="mt-5 flex flex-wrap overflow-hidden font-display font-semibold normal-case leading-[0.88] tracking-tight text-accent"
          style={{ fontSize: "clamp(3.8rem, 15vw, 11rem)" }}
        >
          {WORDMARK.split(" ").map((word, wi) => (
            <span key={wi} className="flex overflow-hidden whitespace-pre pr-[0.16em]">
              {word
                .split("")
                .map((char, i) => (
                  <span key={i} aria-hidden className="sf-char inline-block will-change-transform">
                    {char}
                  </span>
                ))}
            </span>
          ))}
          <span className="sr-only">SF Symbols, all 7,007 ported to Jetpack Compose</span>
        </h1>

        <p className="sf-rise mt-6 max-w-[52ch] text-sm leading-relaxed text-muted sm:text-base">
          {SFSYMBOLS.tagline} Browse every glyph here, copy the exact Kotlin
          property and paste it straight into your composable.
        </p>

        <div className="sf-rise mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#catalog"
            className="glass glass-accent group flex items-center gap-3 rounded-full px-7 py-3.5 text-sm text-white transition-transform hover:scale-[1.03]"
          >
            browse the catalog
            <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#usage"
            className="glass flex items-center gap-2 rounded-full px-6 py-3.5 text-sm transition-transform hover:scale-[1.03]"
          >
            how to install
          </a>
          <a
            href={SFSYMBOLS.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass flex items-center gap-2 rounded-full px-6 py-3.5 text-sm transition-transform hover:scale-[1.03]"
          >
            <GithubIcon size={17} />
            source
          </a>
        </div>

        <p className="sf-rise mt-4 text-xs normal-case text-muted">
          {SFSYMBOLS.minSdk} · {SFSYMBOLS.variants} variants × {SFSYMBOLS.symbolCount.toLocaleString()} glyphs ·{" "}
          {SFSYMBOLS.categoryCount} categories
        </p>

        <dl className="sf-rise mt-12 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-border pt-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-xs tracking-wide text-muted">{s.label}</dt>
              <dd className="mt-1 font-display text-3xl lowercase leading-none text-accent">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/** Decorative, deterministic scatter of glyph marks behind the hero. */
function SfHeroField() {
  const marks = [
    { shape: "wifi" as const, x: "6%", y: "18%", s: 86 },
    { shape: "heart" as const, x: "88%", y: "12%", s: 60 },
    { shape: "bolt" as const, x: "14%", y: "70%", s: 52 },
    { shape: "music" as const, x: "78%", y: "64%", s: 72 },
    { shape: "camera" as const, x: "40%", y: "8%", s: 44 },
    { shape: "star" as const, x: "64%", y: "86%", s: 40 },
    { shape: "cloud" as const, x: "24%", y: "34%", s: 58 },
    { shape: "gear" as const, x: "90%", y: "36%", s: 48 },
    { shape: "lock" as const, x: "8%", y: "48%", s: 46 },
  ];
  return (
    <svg width="100%" height="100%" className="h-full w-full text-accent" aria-hidden>
      {marks.map((mk, i) => (
        <g
          key={i}
          transform={`translate(${mk.x} ${mk.y}) scale(${mk.s / 24})`}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* 24x24 stroke glyphs at identity scale */}
          <GlyphPath name={mk.shape} />
        </g>
      ))}
    </svg>
  );
}

function GlyphPath({ name }: { name: string }) {
  switch (name) {
    case "wifi":
      return (
        <>
          <path d="M2.5 9a14.5 14.5 0 0 1 19 0M5 12.5a10 10 0 0 1 14 0M7.5 16a5.5 5.5 0 0 1 9 0M12 20h.01" />
        </>
      );
    case "heart":
      return (
        <path d="M12 21c-7-3.4-8.5-7-8.5-10.2A3.8 3.8 0 0 1 12 8.3 3.8 3.8 0 0 1 20.5 10.8c0 3.2-1.5 6.8-8.5 10.2z" />
      );
    case "bolt":
      return <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H13z" />;
    case "music":
      return (
        <>
          <path d="M8 20V5l11-2v14.5" />
          <circle cx={6} cy={20} r={2.2} />
          <circle cx={17} cy={17.5} r={2.2} />
        </>
      );
    case "camera":
      return (
        <>
          <path d="M4 8h3l1.2-2h7.6L17 8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
          <circle cx={12} cy={13} r={3.4} />
        </>
      );
    case "star":
      return <path d="m12 3 2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8L6.6 19.6l1-6L3.3 9.4l6-.9z" />;
    case "cloud":
      return <path d="M7 19a4 4 0 0 1-.5-8A5 5 0 0 1 17 10a4.5 4.5 0 0 1-.5 9z" />;
    case "gear":
      return (
        <>
          <circle cx={12} cy={12} r={3.4} />
          <path d="M12 2.8v2.6M12 18.6v2.6M2.8 12h2.6M18.6 12h2.6M5.5 5.5l1.8 1.8M16.7 16.7l1.8 1.8M18.5 5.5l-1.8 1.8M7.3 16.7l-1.8 1.8" />
        </>
      );
    case "lock":
      return (
        <>
          <rect x={5.5} y={11} width={13} height={9} rx={2} />
          <path d="M8.5 11V8.5a3.5 3.5 0 0 1 7 0V11" />
        </>
      );
    default:
      return <circle cx={12} cy={12} r={9} />;
  }
}
