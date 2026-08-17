"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Download, MessageCircle } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { ensureGsapPlugins, gsap, prefersReducedMotion } from "@/lib/gsap";
import { WHISPRY } from "@/content/whispry";

const WORDMARK = "Whispry";

type Props = {
  version: string;
  apkUrl: string;
  apkSizeMb: number | null;
  stats: { label: string; value: string }[];
};

export function WhispryHero({ version, apkUrl, apkSizeMb, stats }: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    ensureGsapPlugins();
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .fromTo(
          ".whispry-char",
          { yPercent: 110 },
          { yPercent: 0, duration: 1.1, stagger: 0.06 },
          0.1
        )
        .fromTo(
          ".whispry-rise",
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.09 },
          0.45
        )
        .fromTo(
          ".whispry-photo",
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 1.3 },
          0.35
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative isolate overflow-hidden pb-20 pt-10 sm:pb-28 sm:pt-16">
      {/* clean full-width banner, whole image visible, nothing overlaid on it */}
      <div className="whispry-photo relative -mt-8 w-full sm:-mt-14">
        <Image
          src="/whispry/hero.jpg"
          alt="Whispry, talk it out, Whispry writes it right"
          width={1600}
          height={827}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />

        {/* progressive blur ramping in toward the bottom edge */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/3"
          style={{
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            maskImage: "linear-gradient(to bottom, transparent, black)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
          }}
          aria-hidden
        />

        {/* fades into the page's own background colour so the content below picks up seamlessly */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/70 to-transparent"
          aria-hidden
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pt-12 sm:px-10 sm:pt-16">
        <div className="min-w-0 max-w-3xl">
          <span className="glass whispry-rise inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            open source · android · {version}
          </span>

          <h1
            className="mt-5 flex overflow-hidden font-display font-semibold normal-case leading-[0.88] tracking-tight text-accent"
            style={{ fontSize: "clamp(2.6rem, 15vw, 11rem)" }}
          >
            {WORDMARK.split("").map((char, i) => (
              <span
                key={i}
                aria-hidden
                className="whispry-char inline-block will-change-transform"
              >
                {char}
              </span>
            ))}
            <span className="sr-only">
              Whispry, hold-to-talk voice transcription for Android
            </span>
          </h1>

          <p className="whispry-rise mt-5 max-w-[46ch] text-sm leading-relaxed text-muted sm:text-base">
            {WHISPRY.tagline} Volume-key hold, floating widget or keyboard button. Bring your
            own AI key, keep your transcripts on-device.
          </p>

          <div className="whispry-rise mt-9 flex flex-wrap items-center gap-3">
            <a
              href={apkUrl}
              className="glass glass-accent group flex items-center gap-3 rounded-full px-7 py-3.5 text-sm text-white transition-transform hover:scale-[1.03]"
              data-analytics="whispry-download-hero"
            >
              <Download size={17} className="transition-transform group-hover:translate-y-0.5" />
              download apk
              <span className="text-white/70">
                {version}
                {apkSizeMb ? ` · ${apkSizeMb} MB` : ""}
              </span>
            </a>

            <a
              href={WHISPRY.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-2 rounded-full px-6 py-3.5 text-sm transition-transform hover:scale-[1.03]"
            >
              <GithubIcon size={17} />
              source
            </a>

            <a
              href={WHISPRY.discussionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-2 rounded-full px-6 py-3.5 text-sm transition-transform hover:scale-[1.03]"
            >
              <MessageCircle size={17} />
              discussions
            </a>
          </div>

          <p className="whispry-rise mt-4 text-xs text-muted">
            {WHISPRY.minAndroid} · sideload the apk, then Whispry updates itself
          </p>

          <dl className="whispry-rise mt-12 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-border pt-8 sm:grid-cols-4">
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
      </div>
    </section>
  );
}
