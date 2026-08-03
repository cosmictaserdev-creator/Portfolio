"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Download, MessageCircle } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { ensureGsapPlugins, gsap, prefersReducedMotion } from "@/lib/gsap";
import { Aurora } from "@/components/convx/Aurora";
import { CONVX } from "@/content/convx";

const WORDMARK = "Convx";

type Props = {
  version: string;
  apkUrl: string;
  apkSizeMb: number | null;
  stats: { label: string; value: string }[];
};

export function ConvxHero({ version, apkUrl, apkSizeMb, stats }: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    ensureGsapPlugins();
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .fromTo(
          ".convx-char",
          { yPercent: 110 },
          { yPercent: 0, duration: 1.1, stagger: 0.06 },
          0.1
        )
        .fromTo(
          ".convx-rise",
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.09 },
          0.45
        )
        .fromTo(
          ".convx-phone",
          { autoAlpha: 0, y: 70, rotate: 6, "--phone-blur": "14px" },
          {
            autoAlpha: 1,
            y: 0,
            rotate: 0,
            "--phone-blur": "0px",
            duration: 1.4,
            // filters are the expensive part — stop paying for it once the
            // intro has landed
            onComplete: () => gsap.set(".convx-phone", { "--phone-blur": "0px" }),
          },
          0.35
        );

      // phones drift apart as the hero scrolls away
      gsap.utils.toArray<HTMLElement>(".convx-phone").forEach((el, i) => {
        gsap.to(el, {
          yPercent: i === 0 ? -14 : 10,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: 0.5 },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative isolate overflow-hidden px-6 pb-20 pt-10 sm:px-10 sm:pb-28 sm:pt-16"
    >
      <Aurora />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="min-w-0">
          <span className="glass convx-rise inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            open source · android · {version}
          </span>

          <h1
            className="mt-5 flex overflow-hidden font-display font-semibold normal-case leading-[0.88] tracking-tight text-accent"
            style={{ fontSize: "clamp(3.8rem, 15vw, 11rem)" }}
          >
            {WORDMARK.split("").map((char, i) => (
              <span key={i} aria-hidden className="convx-char inline-block will-change-transform">
                {char}
              </span>
            ))}
            <span className="sr-only">
              Convx — Liquid Glass music player for Android
            </span>
          </h1>

          <p className="convx-rise mt-5 max-w-[46ch] text-sm leading-relaxed text-muted sm:text-base">
            {CONVX.tagline} Real backdrop blur, springy motion, the whole YouTube
            Music catalogue — no ads, no telemetry, no account.
          </p>

          <div className="convx-rise mt-9 flex flex-wrap items-center gap-3">
            <a
              href={apkUrl}
              className="glass glass-accent group flex items-center gap-3 rounded-full px-7 py-3.5 text-sm text-white transition-transform hover:scale-[1.03]"
              data-analytics="convx-download-hero"
            >
              <Download size={17} className="transition-transform group-hover:translate-y-0.5" />
              download apk
              <span className="text-white/70">
                {version}
                {apkSizeMb ? ` · ${apkSizeMb} MB` : ""}
              </span>
            </a>

            <a
              href={CONVX.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-2 rounded-full px-6 py-3.5 text-sm transition-transform hover:scale-[1.03]"
            >
              <GithubIcon size={17} />
              source
            </a>

            <a
              href={CONVX.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-2 rounded-full px-6 py-3.5 text-sm transition-transform hover:scale-[1.03]"
            >
              <MessageCircle size={17} />
              discord
            </a>
          </div>

          <p className="convx-rise mt-4 text-xs text-muted">
            {CONVX.minAndroid} · sideload the apk, then Convx updates itself
          </p>

          <dl className="convx-rise mt-12 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-border pt-8 sm:grid-cols-4">
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

        <div className="shot-glow relative flex items-end justify-center gap-3 sm:gap-6 lg:justify-end">
          <div className="convx-phone relative w-[38%] max-w-[210px] shrink-0 translate-y-8 lg:w-[42%]">
            <Image
              src="/convx/lyrics-mobile.png"
              alt="Convx synced lyrics screen"
              width={1245}
              height={2359}
              priority
              sizes="(max-width: 1024px) 38vw, 210px"
              className="h-auto w-full"
            />
          </div>
          <div className="convx-phone relative w-[52%] max-w-[290px] shrink-0 lg:w-[56%]">
            <Image
              src="/convx/home-mobile.png"
              alt="Convx home screen with the liquid glass mini player"
              width={1245}
              height={2359}
              priority
              sizes="(max-width: 1024px) 52vw, 290px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
