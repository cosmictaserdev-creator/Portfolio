"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { pillars } from "@/content/pillars";
import { ensureGsapPlugins, gsap, prefersReducedMotion } from "@/lib/gsap";
import { GeoSymbol } from "@/components/icons/GeoSymbols";

export function Bento() {
  const portraitRef = useRef<HTMLDivElement | null>(null);
  const imgWrapRef = useRef<HTMLDivElement | null>(null);

  // slow parallax zoom on the portrait as it travels through the viewport
  useEffect(() => {
    ensureGsapPlugins();
    if (!portraitRef.current || !imgWrapRef.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgWrapRef.current,
        { scale: 1 },
        {
          scale: 1.25,
          ease: "none",
          scrollTrigger: {
            trigger: portraitRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-stretch gap-5">
        <div
          ref={portraitRef}
          className="relative min-h-[320px] w-full max-w-[300px] flex-[1_1_260px] overflow-hidden rounded-[2.5rem] border border-border bg-surface"
        >
          <div ref={imgWrapRef} className="absolute inset-0 will-change-transform">
            <Image
              src="/images/aryan-hero.png"
              alt="Aryan Sharma"
              fill
              sizes="300px"
              className="object-cover object-top"
            />
          </div>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-surface/85 px-4 py-1 text-xs text-muted backdrop-blur-sm">
            (probably debugging something)
          </span>
        </div>

        {pillars.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className={`group flex min-h-[320px] flex-[1_1_320px] flex-col gap-8 rounded-[2.5rem] border border-border bg-surface p-8 sm:p-10 ${
                i === 1 ? "order-none" : ""
              }`}
            >
              <Icon size={40} strokeWidth={1.5} className="text-accent" />

              <div>
                <span className="text-xs tracking-wide text-muted">
                  {pillar.subtitle}
                </span>
                <h3 className="mt-1 whitespace-pre-line font-display text-4xl lowercase text-accent sm:text-5xl">
                  {pillar.title}
                </h3>
              </div>

              <p className="mt-auto text-sm leading-relaxed normal-case">
                {pillar.paragraph}
              </p>

              <Link
                href="/#contact"
                className="-mb-2 flex h-5 items-center gap-2 text-sm opacity-0 transition-all duration-300 group-hover:gap-3 group-hover:opacity-100 group-focus-within:opacity-100"
              >
                reach out
                <ArrowRight size={16} />
              </Link>
            </div>
          );
        })}

        <div className="hidden min-h-[320px] flex-[1_1_260px] items-center justify-center rounded-[2.5rem] border border-border bg-surface xl:flex">
          <GeoSymbol
            id="target"
            width={150}
            height={150}
            strokeWidth={0.9}
            className="text-muted/40"
          />
        </div>
      </div>
    </section>
  );
}
