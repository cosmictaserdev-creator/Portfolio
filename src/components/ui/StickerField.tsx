"use client";

import { useMemo } from "react";
import { LivingSticker } from "@/components/ui/LivingSticker";
import { useParallaxLayer } from "@/hooks/useParallaxLayer";
import { GEO_SYMBOL_IDS, type GeoSymbolId } from "@/components/icons/GeoSymbols";

// Mostly plain rings with a handful of other marks mixed in, echoing the
// "field of circles with occasional distinct glyphs" texture at low density.
function weightedSymbol(): GeoSymbolId {
  if (Math.random() < 0.55) return "ring";
  return GEO_SYMBOL_IDS[Math.floor(Math.random() * GEO_SYMBOL_IDS.length)];
}

type Cell = { symbols: GeoSymbolId[]; delay: number };

export function StickerField({
  columns = 7,
  rows = 6,
  cellSize = 40,
  fillProbability = 0.85,
  className = "",
}: {
  columns?: number;
  rows?: number;
  cellSize?: number;
  fillProbability?: number;
  className?: string;
}) {
  const parallaxRef = useParallaxLayer<HTMLDivElement>(20);

  const cells = useMemo<(Cell | null)[]>(() => {
    return Array.from({ length: columns * rows }, () => {
      if (Math.random() > fillProbability) return null;
      const symbols = Array.from(
        { length: 3 },
        () => weightedSymbol()
      );
      return { symbols, delay: Math.random() * 1.5 };
    });
  }, [columns, rows, fillProbability]);

  return (
    <div
      ref={parallaxRef}
      className={`pointer-events-none grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
        gap: `${cellSize * 0.35}px`,
      }}
    >
      {cells.map((cell, i) =>
        cell ? (
          <div
            key={i}
            className="pointer-events-auto animate-[fade-in_0.6s_ease_both]"
            style={{ animationDelay: `${cell.delay}s` }}
          >
            <LivingSticker symbols={cell.symbols} size={cellSize} />
          </div>
        ) : (
          <div key={i} />
        )
      )}
    </div>
  );
}
