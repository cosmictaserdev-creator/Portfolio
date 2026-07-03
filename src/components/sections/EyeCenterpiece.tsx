"use client";

import { useRef } from "react";
import { useCursorOffset } from "@/hooks/useCursorOffset";
import { GeoSymbol } from "@/components/icons/GeoSymbols";

/**
 * Big decorative centerpiece: an original geometric eye built from
 * primitives — outlined almond, accent iris, dark lens pupil — whose
 * pupil drifts toward the cursor. Flanked by oversized geo symbols.
 * Hovering the pupil makes the eye squint.
 */
export function EyeCenterpiece() {
  const irisRef = useRef<SVGCircleElement | null>(null);
  const pupilRef = useRef<SVGGElement | null>(null);

  useCursorOffset((x, y) => {
    if (irisRef.current) {
      irisRef.current.style.transform = `translate(${x / 2}px, ${y / 2}px)`;
    }
    if (pupilRef.current) {
      pupilRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  }, 28);

  const squint = (e: React.MouseEvent<SVGGElement>) => {
    const el = e.currentTarget;
    if (!el.classList.contains("owch")) {
      el.classList.add("owch");
      window.setTimeout(() => el.classList.remove("owch"), 1500);
    }
  };

  return (
    <section className="overflow-hidden px-6 py-28 sm:px-10 sm:py-48" aria-hidden>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-8 sm:gap-14">
        <div className="hidden shrink-0 items-center gap-8 text-foreground lg:flex">
          <GeoSymbol id="grid" width={110} height={110} strokeWidth={1.1} />
          <GeoSymbol id="hourglass" width={110} height={110} strokeWidth={1.1} />
        </div>

        <svg
          viewBox="0 0 460 300"
          className="w-full max-w-[520px] shrink"
          fill="none"
        >
          {/* outer almond outline */}
          <path
            d="M18 150C70 62 148 18 230 18s160 44 212 132c-52 88-130 132-212 132S70 238 18 150Z"
            stroke="currentColor"
            strokeWidth="7"
          />
          {/* iris — lags behind the pupil for depth */}
          <circle
            ref={irisRef}
            cx="230"
            cy="150"
            r="86"
            fill="var(--accent)"
            style={{ transition: "transform 60ms linear" }}
          />
          {/* pupil — vesica shape, tracks the cursor, squints on hover */}
          <g ref={pupilRef} onMouseEnter={squint} className="cursor-pointer">
            <path
              d="M172 150c32-32 84-32 116 0-32 32-84 32-116 0Z"
              fill="currentColor"
            />
          </g>
          {/* eyelid mask ring to keep iris inside the almond */}
          <path
            d="M18 150C70 62 148 18 230 18s160 44 212 132c-52 88-130 132-212 132S70 238 18 150Z M-40 -40h540v380H-40z"
            fill="var(--background)"
            fillRule="evenodd"
          />
          <path
            d="M18 150C70 62 148 18 230 18s160 44 212 132c-52 88-130 132-212 132S70 238 18 150Z"
            stroke="currentColor"
            strokeWidth="7"
          />
        </svg>

        <div className="hidden shrink-0 items-center gap-8 text-foreground lg:flex">
          <GeoSymbol id="target" width={110} height={110} strokeWidth={1.1} />
          <GeoSymbol id="asterisk" width={110} height={110} strokeWidth={1.1} />
        </div>
      </div>
    </section>
  );
}
