"use client";

import { useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

// Verbatim examples from the app's own preset prompts (OutputPreset.kt) —
// what each tone actually produces, not a made-up demo.
const TONES = [
  {
    label: "Professional",
    raw: "hey so yeah i can't make the meeting tomorrow gonna have to push it sorry",
    clean: "I won't be able to attend tomorrow's meeting and will need to reschedule. Apologies for the inconvenience.",
  },
  {
    label: "Casual",
    raw: "um tell him that i will reach there by like 7 ish and we can grab dinner",
    clean: "Tell him I'll be there around 7-ish and we can grab dinner!",
  },
  {
    label: "Polite",
    raw: "send me the file now i need it",
    clean: "Could you please send me the file when you get a chance? I need it fairly soon. Thank you!",
  },
] as const;

export function ToneComparison() {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const select = (i: number) => {
    if (i === active) return;
    const panel = panelRef.current;
    if (!panel || prefersReducedMotion()) {
      setActive(i);
      return;
    }
    gsap.to(panel, {
      autoAlpha: 0,
      y: 6,
      duration: 0.18,
      onComplete: () => {
        setActive(i);
        gsap.fromTo(panel, { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" });
      },
    });
  };

  const tone = TONES[active];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex flex-wrap gap-2">
        {TONES.map((t, i) => (
          <button
            key={t.label}
            type="button"
            onClick={() => select(i)}
            className={`rounded-full border px-5 py-2 text-sm normal-case transition-colors ${
              i === active ? "border-accent bg-accent text-white" : "border-border text-muted hover:border-accent hover:text-accent"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div ref={panelRef} className="mt-8 rounded-[1.75rem] border border-border bg-surface p-7 sm:p-8">
        <p className="text-xs tracking-wide text-muted">YOU SAID</p>
        <p className="mt-2 text-sm normal-case italic leading-relaxed text-muted">&ldquo;{tone.raw}&rdquo;</p>
        <p className="mt-5 text-xs tracking-wide text-accent">{tone.label.toUpperCase()}</p>
        <p className="mt-2 text-lg normal-case leading-relaxed text-foreground">{tone.clean}</p>
      </div>
    </div>
  );
}
