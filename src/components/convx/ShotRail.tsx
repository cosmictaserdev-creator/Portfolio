"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ensureGsapPlugins, gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import type { Shot } from "@/content/convx";

/**
 * Screenshot rail. On desktop the section pins and the row scrubs
 * sideways with scroll; on small screens it degrades to a native
 * snap-scrolling row (no pinning, no jank).
 */
export function ShotRail({ shots }: { shots: Shot[] }) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const rowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ensureGsapPlugins();
    const section = sectionRef.current;
    const row = rowRef.current;
    if (!section || !row || prefersReducedMotion()) return;

    // The row overflows visibly on desktop (the parent does the clipping),
    // and scrollWidth is unreliable on an overflow:visible box — so measure
    // the children directly. offsetWidth is layout-based, which means the
    // active x-transform can't skew the reading.
    const distance = () => {
      const items = Array.from(row.children) as HTMLElement[];
      if (!items.length) return 0;
      const styles = getComputedStyle(row);
      const gap = parseFloat(styles.columnGap) || 0;
      const padding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
      const content =
        items.reduce((sum, item) => sum + item.offsetWidth, 0) + gap * (items.length - 1);
      return Math.max(0, content + padding - row.clientWidth);
    };

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const tween = gsap.to(row, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(row, { x: 0 });
      };
    });

    // images settle after the fonts/layout do — recalc once everything is in
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      mm.revert();
    };
  }, []);

  return (
    // On desktop this box is exactly one viewport tall and the row centres
    // itself inside it, so pinning can't shove content up under the sticky
    // header. Kept as a block so the row still sizes to the container width.
    <div ref={sectionRef} className="overflow-hidden py-4 lg:h-[100svh] lg:py-0">
      <div
        ref={rowRef}
        // will-change promotes the row to one stable compositor layer, so the
        // 20 drop-shadowed images rasterise once instead of every frame of
        // the scrub
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 will-change-transform sm:px-10 lg:h-full lg:items-center lg:gap-16 lg:overflow-visible lg:px-16 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {shots.map((shot) => (
          <figure
            key={shot.src}
            className={`shrink-0 snap-center lg:w-auto ${
              shot.orientation === "landscape"
                ? "w-[85vw] max-w-[620px]"
                : "w-[62vw] max-w-[270px]"
            }`}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={shot.orientation === "landscape" ? 2226 : 1245}
              height={shot.orientation === "landscape" ? 1590 : 2359}
              // desktop slots are height-driven (62svh), so the real widths
              // differ per orientation — one shared `sizes` was upscaling the
              // tablet shots and over-fetching the phone ones
              sizes={
                shot.orientation === "landscape"
                  ? "(max-width: 1023px) 85vw, 950px"
                  : "(max-width: 1023px) 62vw, 380px"
              }
              // capped to the viewport on desktop so a short laptop screen
              // never pushes the rail back under the header
              className="shot-shadow h-auto w-full lg:h-[62svh] lg:w-auto lg:max-w-none"
            />
            <figcaption className="mt-4 text-center text-xs text-muted">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
