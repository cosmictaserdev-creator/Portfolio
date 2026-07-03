"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import { RevealText } from "@/components/ui/RevealText";
import { LOCATION } from "@/content/site";
import { onIdle } from "@/lib/idle";

const StickerField = dynamic(
  () => import("@/components/ui/StickerField").then((m) => m.StickerField),
  { ssr: false }
);

export function Hero() {
  // Decorative and non-essential to first paint — mount once the browser
  // is idle so it doesn't compete with the critical hero render.
  const [showStickers, setShowStickers] = useState(false);
  useEffect(() => onIdle(() => setShowStickers(true)), []);

  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-14 sm:px-10 sm:pb-24 sm:pt-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted">
          available for freelance work &middot; {LOCATION}
        </p>

        <RevealText
          as="h1"
          immediate
          className="text-clamp-xxl font-medium lowercase leading-[0.85]"
        >
          aryan sharma
        </RevealText>

        <div className="mt-8 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <RevealText
              as="p"
              immediate
              className="font-display text-clamp-md lowercase text-accent"
            >
              aka cosmictaser
            </RevealText>

            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Android &amp; software developer building fast, well-crafted apps
              and web products — from first sketch to the Play Store.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="group flex items-center gap-2 rounded-full bg-accent-solid px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
              >
                view my work
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/#contact"
                className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                get in touch
              </Link>
            </div>
          </div>

          <div className="flex shrink-0 items-stretch gap-4 self-stretch">
            <div className="flex flex-col items-center">
              <p
                className="flex-1 text-xs uppercase tracking-[0.3em] text-muted"
                style={{ writingMode: "vertical-rl" }}
              >
                android &amp; software &middot; india
              </p>
              <span className="mt-2 h-16 w-px bg-border" aria-hidden />
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden>
                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>

            {showStickers && (
              <div className="hidden sm:block">
                <StickerField columns={4} rows={5} cellSize={30} fillProbability={0.8} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
