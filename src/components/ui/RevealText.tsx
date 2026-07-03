"use client";

import { createElement, useEffect, useRef } from "react";
import { ensureGsapPlugins, gsap, SplitText, prefersReducedMotion } from "@/lib/gsap";

/**
 * Char-level heading reveal. By default the reveal progress is scrubbed
 * to scroll position (chars rise as the heading travels from the bottom
 * of the viewport toward the top). `immediate` plays it once on mount
 * instead (for above-the-fold text).
 */
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
          duration: 0.7,
          ease: "expo.inOut",
          stagger: { amount: 0.3 },
          scrollTrigger: immediate
            ? undefined
            : {
                trigger: el,
                start: "top 110%",
                end: "top 25%",
                scrub: 0.4,
              },
        });
      }, ref as React.RefObject<HTMLElement>);

      return ctx;
    };

    if (immediate) {
      const ctx = runSplit();
      return () => ctx.revert();
    }

    // defer the layout-heavy SplitText work until the heading approaches
    let ctx: ReturnType<typeof runSplit> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ctx = runSplit();
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      ctx?.revert();
    };
  }, [immediate]);

  return createElement(as, { ref, className, role: "text" }, children);
}
