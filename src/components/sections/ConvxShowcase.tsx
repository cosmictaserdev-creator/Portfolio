"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { ensureGsapPlugins, gsap, prefersReducedMotion } from "@/lib/gsap";
import { RevealText } from "@/components/ui/RevealText";
import { Aurora } from "@/components/ui/Aurora";

const SHOTS = [
  { src: "/convx/home-mobile.png", alt: "Convx home screen with the liquid glass mini player" },
  { src: "/convx/lyrics-mobile.png", alt: "Convx word-by-word synced lyrics screen" },
  { src: "/convx/player-mobile.png", alt: "Convx player screen with FLAC quality badge" },
];

/**
 * Homepage feature block for Convx — the one shipped product, so it
 * gets the whole slot the old project grid used to occupy.
 */
export function ConvxShowcase({ stats }: { stats: { label: string; value: string }[] }) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    ensureGsapPlugins();
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".convx-shot").forEach((el, i) => {
        gsap.fromTo(
          el,
          { yPercent: 14 + i * 9 },
          {
            yPercent: -(10 + i * 8),
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative isolate overflow-hidden px-6 py-28 sm:px-10 sm:py-40"
    >
      <Aurora />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
        <p>the thing i actually shipped</p>
        <RevealText as="h2" className="text-clamp-xxl normal-case leading-[0.92] text-accent">
          Convx
        </RevealText>
        <p className="mt-4 max-w-[52ch] text-sm normal-case leading-relaxed text-muted sm:text-base">
          A free, open-source music player for Android with a Liquid Glass
          interface: real backdrop blur and refraction, synced lyrics, offline
          downloads and no telemetry at all. Built in Kotlin and Jetpack Compose.
        </p>
      </div>

      <div className="shot-glow mx-auto mt-16 flex max-w-4xl items-start justify-center gap-4 sm:gap-8">
        {SHOTS.map((shot, i) => (
          <div
            key={shot.src}
            className={`convx-shot w-1/3 max-w-[240px] will-change-transform ${
              i === 1 ? "" : "opacity-90"
            }`}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={1245}
              height={2359}
              sizes="(max-width: 640px) 30vw, 240px"
              className="shot-shadow h-auto w-full"
            />
          </div>
        ))}
      </div>

      <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 border-y border-border py-8 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <dt className="text-xs tracking-wide text-muted">{s.label}</dt>
            <dd className="mt-1 font-display text-3xl lowercase leading-none text-accent">
              {s.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-center gap-3">
        <Link
          href="/convx"
          className="glass glass-accent group flex items-center gap-3 rounded-full px-8 py-4 text-sm text-white transition-transform hover:scale-[1.03]"
        >
          <Download size={17} />
          explore convx
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          href="/convx#screens"
          className="glass flex items-center gap-2 rounded-full px-6 py-4 text-sm transition-transform hover:scale-[1.03]"
        >
          see the screens
        </Link>
      </div>
    </section>
  );
}
