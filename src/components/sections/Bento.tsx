"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { pillars } from "@/content/pillars";

export function Bento() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 sm:px-10">
      <div className="flex flex-wrap items-stretch gap-5">
        <div className="relative min-h-[260px] w-full max-w-[280px] flex-[1_1_280px] overflow-hidden rounded-[2.5rem] border border-border bg-surface">
          <Image
            src="/images/aryan-hero.png"
            alt="Aryan Sharma"
            fill
            sizes="280px"
            className="object-cover object-top"
          />
        </div>

        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className="group flex min-h-[260px] flex-[1_1_320px] flex-col gap-8 rounded-[2.5rem] border border-border bg-surface p-8 sm:p-10"
            >
              <Icon size={38} strokeWidth={1.5} className="text-accent" />

              <div>
                <span className="text-xs uppercase tracking-wide text-muted">
                  {pillar.subtitle}
                </span>
                <h3 className="mt-1 whitespace-pre-line font-display text-4xl lowercase text-foreground">
                  {pillar.title}
                </h3>
              </div>

              <p className="mt-auto text-sm leading-relaxed text-muted">
                {pillar.paragraph}
              </p>

              <Link
                href="/#contact"
                className="-mb-2 flex items-center gap-2 text-sm font-medium text-transparent transition-all group-hover:gap-3 group-hover:text-accent group-focus-within:text-accent"
              >
                reach out
                <ArrowRight size={16} />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
