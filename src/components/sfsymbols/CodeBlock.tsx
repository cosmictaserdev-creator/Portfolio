"use client";

import { useEffect, useRef } from "react";
import { ensureGsapPlugins, gsap, prefersReducedMotion } from "@/lib/gsap";
import { CopyButton } from "@/components/sfsymbols/CopyButton";

/**
 * Monospace code block with a copy button. GSAP rise-reveal when it enters
 * the viewport, matching the rest of the page.
 */
export function CodeBlock({ code, refId }: { code: string; refId?: string }) {
  const blockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ensureGsapPlugins();
    const el = blockRef.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 92%" },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={blockRef}
      className="relative mt-5 overflow-hidden rounded-2xl border border-border bg-surface/80"
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <span className="text-[11px] uppercase tracking-wide text-muted">
          {refId ?? "build.gradle.kts"}
        </span>
        <CopyButton text={code} />
      </div>
      <pre className="overflow-x-auto px-4 py-4 text-[13px] leading-relaxed">
        <code className="no-type block font-mono normal-case text-foreground/90">{code}</code>
      </pre>
    </div>
  );
}
