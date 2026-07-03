"use client";

import { createElement, useEffect, useRef } from "react";
import { ensureGsapPlugins, gsap, SplitText, prefersReducedMotion } from "@/lib/gsap";

export function RevealText({
  children,
  as = "h2",
  className = "",
  immediate = false,
}: {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  immediate?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const runSplit = () => {
      ensureGsapPlugins();
      const ctx = gsap.context(() => {
        const split = new SplitText(el, { type: "lines,chars", linesClass: "split-line" });
        gsap.set(split.chars, { yPercent: 110 });

        gsap.to(split.chars, {
          yPercent: 0,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.015,
          scrollTrigger: immediate ? undefined : { trigger: el, start: "top 85%" },
        });
      }, ref as React.RefObject<HTMLElement>);

      return ctx;
    };

    // Above-the-fold headings split immediately; everything else only
    // does the (layout-touching) SplitText work once it's about to
    // enter the viewport, so we're not splitting every heading on load.
    if (immediate) {
      const ctx = runSplit();
      return () => ctx.revert();
    }

    let ctx: ReturnType<typeof runSplit> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ctx = runSplit();
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      ctx?.revert();
    };
  }, [immediate]);

  // SplitText fragments the text into per-character spans and adds an
  // aria-label with the original text for screen readers; role="text"
  // is what makes that aria-label valid/announced (Safari/VoiceOver
  // convention, also recognized by axe-core) on a non-widget element.
  return createElement(as, { ref, className, role: "text" }, children);
}
