"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <section className="relative overflow-hidden px-6 pb-20 pt-16 sm:px-10 sm:pb-28 sm:pt-24">
      <div className="absolute inset-0">{showStickers && <StickerField count={10} />}</div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted">
            available for freelance work &middot; {LOCATION}
          </p>

          <RevealText as="h1" immediate className="text-clamp-xxl lowercase">
            aryan sharma
          </RevealText>
          <RevealText
            as="p"
            immediate
            className="mt-1 font-display text-clamp-md lowercase text-accent"
          >
            aka cosmictaser
          </RevealText>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Android &amp; software developer building fast, well-crafted apps and
            web products — from first sketch to the Play Store.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
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

        <div className="relative mx-auto w-56 shrink-0 sm:w-72 lg:w-80">
          <div className="absolute inset-0 scale-110 rounded-[3rem] bg-gradient-to-br from-accent/40 to-accent-2/30 blur-3xl" />
          <div className="relative aspect-[0.51] overflow-hidden rounded-[2.5rem] border border-border bg-surface">
            <Image
              src="/images/aryan-hero.png"
              alt="Aryan Sharma"
              fill
              priority
              sizes="(min-width: 1024px) 320px, 288px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
