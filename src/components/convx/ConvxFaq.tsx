"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ensureGsapPlugins, gsap, prefersReducedMotion } from "@/lib/gsap";

type Item = { q: string; a: string };

/**
 * Accordion FAQ. Built on buttons rather than <details> because
 * ::details-content still can't be transitioned outside Chromium, and the
 * answers need to animate. Answers stay in the DOM either way, so crawlers
 * (and the FAQPage JSON-LD) see the full text regardless of open state.
 */
export function ConvxFaq({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const baseId = useId();

  // rows fade up as the block scrolls in
  useEffect(() => {
    ensureGsapPlugins();
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-row",
        { autoAlpha: 0, y: 26 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "expo.out",
          stagger: 0.07,
          scrollTrigger: { trigger: root, start: "top 80%", once: true },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  // open/close
  useEffect(() => {
    const reduced = prefersReducedMotion();

    panelRefs.current.forEach((panel, i) => {
      if (!panel) return;
      const isOpen = i === open;
      const body = panel.firstElementChild;

      if (reduced) {
        gsap.set(panel, { height: isOpen ? "auto" : 0 });
        gsap.set(body, { autoAlpha: isOpen ? 1 : 0 });
        return;
      }

      gsap.to(panel, {
        height: isOpen ? "auto" : 0,
        duration: isOpen ? 0.5 : 0.38,
        ease: isOpen ? "expo.out" : "power2.inOut",
        overwrite: true,
      });
      gsap.to(body, {
        autoAlpha: isOpen ? 1 : 0,
        y: isOpen ? 0 : -6,
        duration: isOpen ? 0.45 : 0.25,
        delay: isOpen ? 0.08 : 0,
        ease: "power2.out",
        overwrite: true,
      });
    });
  }, [open]);

  return (
    <div ref={rootRef} className="flex flex-col">
      {items.map((item, i) => {
        const isOpen = i === open;
        return (
          <div key={item.q} className="faq-row border-t border-border last:border-b">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`${baseId}-panel-${i}`}
                id={`${baseId}-button-${i}`}
                className="group flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left"
              >
                <span
                  className={`font-display text-xl lowercase transition-colors duration-300 group-hover:text-accent ${
                    isOpen ? "text-accent" : ""
                  }`}
                >
                  {item.q}
                </span>

                <span
                  aria-hidden
                  className="relative mt-2 block h-4 w-4 shrink-0 text-accent"
                >
                  <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
                  <span
                    className={`absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current transition-transform duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                      isOpen ? "rotate-90 scale-y-0" : "rotate-0 scale-y-100"
                    }`}
                  />
                </span>
              </button>
            </h3>

            <div
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              id={`${baseId}-panel-${i}`}
              role="region"
              aria-labelledby={`${baseId}-button-${i}`}
              style={{ height: i === 0 ? "auto" : 0 }}
              className="overflow-hidden"
            >
              <p className="max-w-[60ch] pb-7 pr-10 text-sm normal-case leading-relaxed text-muted">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
