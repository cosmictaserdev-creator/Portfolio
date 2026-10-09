"use client";

import { useEffect, useRef } from "react";
import { ensureGsapPlugins, gsap, prefersReducedMotion } from "@/lib/gsap";

const RAW = "hey so yeah i can't make the meeting tomorrow gonna have to push it sorry";
const CLEAN = "I won't be able to attend tomorrow's meeting and will need to reschedule. Apologies for the inconvenience.";

// A real example straight from the app's Professional preset prompt (OutputPreset.kt) —
// not a made-up demo sentence. Markup renders both lines plain and visible; GSAP only
// enhances the transition for users who get motion.
export function DictationDemo() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const rawRef = useRef<HTMLParagraphElement | null>(null);
  const cleanRef = useRef<HTMLParagraphElement | null>(null);
  const tagsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    ensureGsapPlugins();

    const ctx = gsap.context(() => {
      gsap.set(cleanRef.current, { autoAlpha: 0, y: 6 });
      gsap.set(tagsRef.current ? Array.from(tagsRef.current.children) : [], { autoAlpha: 0, y: 6 });

      gsap
        .timeline({ scrollTrigger: { trigger: root, start: "top 75%", once: true }, delay: 0.3 })
        .to(rawRef.current, { autoAlpha: 0.4, duration: 0.5, ease: "power1.out" })
        .to(tagsRef.current ? Array.from(tagsRef.current.children) : [], { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.12 }, "<")
        .to(cleanRef.current, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" }, "+=0.4");
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="w-full max-w-[380px] rounded-[1.75rem] border border-border bg-surface p-6 shadow-sm">
      <p className="text-xs tracking-wide text-muted">YOU SAID</p>
      <p ref={rawRef} className="mt-2 text-sm normal-case italic leading-relaxed text-muted">
        &ldquo;{RAW}&rdquo;
      </p>
      <p className="mt-4 text-xs tracking-wide text-accent">WHISPRY WROTE</p>
      <p ref={cleanRef} className="mt-2 text-base normal-case leading-relaxed text-foreground">
        {CLEAN}
      </p>
      <div ref={tagsRef} className="mt-4 flex flex-wrap gap-2">
        {["Filler removed", "Grammar fixed", "Tone: Professional"].map((tag) => (
          <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
