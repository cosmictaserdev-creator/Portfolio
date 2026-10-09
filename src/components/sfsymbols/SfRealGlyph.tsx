"use client";

import { useId } from "react";
import type { RealSymbol } from "@/lib/sfsymbols-real";
import type { SfVariant } from "@/lib/sfsymbols";

type SfRealGlyphProps = {
  real: RealSymbol;
  variant: SfVariant;
  className?: string;
};

// Flags (drive colorisation)
const primary = "var(--accent, currentColor)";
const secondary = "var(--accent-sub, #7c3aed)";

export function SfRealGlyph({ real, variant, className }: SfRealGlyphProps) {
  const uid = useId();
  const layers = real.d;
  const asArray = Array.isArray(layers) ? layers : [{ d: layers, o: 1 }];

  // Dualtone keeps each layer's opacity; monochrome flattens to a solid glyph.
  const gradientId = variant === "dualtone" && asArray.length > 1 ? `sfg-${uid}` : null;

  return (
    <svg
      viewBox={`0 0 ${real.w} ${real.h}`}
      className={className}
      role="img"
      aria-hidden="true"
    >
      {gradientId && (
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={secondary} />
            <stop offset="100%" stopColor={primary} />
          </linearGradient>
        </defs>
      )}
      {asArray.map((p, i) =>
        variant === "dualtone" && asArray.length > 1 ? (
          <path key={i} d={p.d} fill={gradientId ? `url(#${gradientId})` : primary} opacity={p.o} />
        ) : (
          <path key={i} d={p.d} fill={primary} />
        )
      )}
    </svg>
  );
}
