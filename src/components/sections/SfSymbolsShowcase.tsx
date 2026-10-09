"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { ensureGsapPlugins, gsap, prefersReducedMotion } from "@/lib/gsap";
import { RevealText } from "@/components/ui/RevealText";
import { SfGlyph } from "@/components/sfsymbols/SfGlyph";

const PREVIEW = [
  { a: "heart.fill", c: ["General"] },
  { a: "wifi", c: ["Connectivity"] },
  { a: "bolt.fill", c: ["Weather"] },
  { a: "cloud.sun.fill", c: ["Weather"] },
  { a: "play.fill", c: ["Media"] },
  { a: "mic.fill", c: ["Human"] },
  { a: "gear", c: ["Objects & Tools"] },
  { a: "square.grid.2x2.fill", c: ["Shapes"] },
  { a: "person.fill", c: ["Human"] },
  { a: "folder.fill", c: ["Objects & Tools"] },
  { a: "camera.fill", c: ["Camera & Photos"] },
  { a: "star.fill", c: ["Shapes"] },
  { a: "phone.fill", c: ["Communication"] },
  { a: "bell.fill", c: ["Objects & Tools"] },
];

/**
 * Homepage feature block for Jetpack SF Symbols — the library slot, scoped
 * to its own amber theme so it reads as a distinct project.
 */
export function SfSymbolsShowcase() {
  const rootRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ensureGsapPlugins();
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current,
        { yPercent: 6 },
        {
          yPercent: -6,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: 0.5 },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="theme-sfsymbols relative isolate overflow-hidden px-6 py-28 sm:px-10 sm:py-40"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
        <p>all of apple&apos;s icons, for compose</p>
        <RevealText as="h2" className="text-clamp-xxl normal-case leading-[0.92] text-accent">
          SF Symbols
        </RevealText>
        <p className="mt-4 max-w-[52ch] text-sm normal-case leading-relaxed text-muted sm:text-base">
          All 7,007 Apple SF Symbols ported to Jetpack Compose ImageVectors.
          Dualtone + monochrome, lazy and tree-shakeable. Browse the full
          catalog, copy the Kotlin, paste it in.
        </p>
      </div>

      <div
        ref={gridRef}
        className="mx-auto mt-16 grid max-w-4xl grid-cols-4 gap-3 sm:grid-cols-7 sm:gap-4 will-change-transform"
      >
        {PREVIEW.map((p) => (
          <div
            key={p.a}
            className="sf-tile flex aspect-square items-center justify-center rounded-2xl border border-border"
          >
            <SfGlyph
              appleName={p.a}
              categories={p.c}
              accent="currentColor"
              className="h-7 w-7 text-accent sm:h-9 sm:w-9"
            />
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-center gap-3">
        <Link
          href="/sfsymbols"
          className="glass glass-accent group flex items-center gap-3 rounded-full px-8 py-4 text-sm text-white transition-transform hover:scale-[1.03]"
        >
          <Search size={17} />
          browse the catalog
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          href="/sfsymbols#usage"
          className="glass flex items-center gap-2 rounded-full px-6 py-4 text-sm transition-transform hover:scale-[1.03]"
        >
          quick start
        </Link>
      </div>
    </section>
  );
}
