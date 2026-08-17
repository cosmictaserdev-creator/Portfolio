"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { ensureGsapPlugins, gsap, prefersReducedMotion } from "@/lib/gsap";
import { RevealText } from "@/components/ui/RevealText";

/**
 * Homepage feature block for Whispry — same slot pattern as ConvxShowcase,
 * scoped to the violet theme so it reads as its own product, not a Convx
 * reskin.
 */
export function WhispryShowcase({ stats }: { stats: { label: string; value: string }[] }) {
  const rootRef = useRef<HTMLElement | null>(null);
  const photoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ensureGsapPlugins();
    const root = rootRef.current;
    const photo = photoRef.current;
    if (!root || !photo || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        photo,
        { yPercent: 10, scale: 1.06 },
        {
          yPercent: -10,
          scale: 1,
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
      className="theme-whispry relative isolate overflow-hidden px-6 py-28 sm:px-10 sm:py-40"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
        <p>talk instead of thumb-typing</p>
        <RevealText as="h2" className="text-clamp-xxl normal-case leading-[0.92] text-accent">
          Whispry
        </RevealText>
        <p className="mt-4 max-w-[52ch] text-sm normal-case leading-relaxed text-muted sm:text-base">
          A free, open-source hold-to-talk transcription app for Android. A
          volume-key hold, floating widget or keyboard button types a
          formatted transcript straight into any app. Bring your own AI key,
          keep everything else on-device.
        </p>
      </div>

      <div
        ref={photoRef}
        className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-[2rem] border border-border shadow-2xl shadow-black/30 will-change-transform"
      >
        <Image
          src="/whispry/hero.jpg"
          alt="Whispry, talk it out, Whispry writes it right"
          width={1600}
          height={827}
          sizes="(max-width: 768px) 92vw, 896px"
          className="h-auto w-full"
        />
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
          href="/whispry"
          className="glass glass-accent group flex items-center gap-3 rounded-full px-8 py-4 text-sm text-white transition-transform hover:scale-[1.03]"
        >
          <Download size={17} />
          explore whispry
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          href="/whispry#screens"
          className="glass flex items-center gap-2 rounded-full px-6 py-4 text-sm transition-transform hover:scale-[1.03]"
        >
          see the screens
        </Link>
      </div>
    </section>
  );
}
