"use client";

import { useEffect, useRef, useState } from "react";
import { GeoSymbol, type GeoSymbolId } from "@/components/icons/GeoSymbols";

const CHANGE_PROBABILITY = 0.2;
const INTERVAL_MS = 700;

export function LivingSticker({
  symbols,
  size = 40,
  style,
  className = "",
}: {
  symbols: GeoSymbolId[];
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [flashing, setFlashing] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const visible = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(el);

    const interval = setInterval(() => {
      if (!visible.current) return;
      if (Math.random() < CHANGE_PROBABILITY) {
        setIndex((prev) => {
          let next = Math.floor(Math.random() * symbols.length);
          if (next === prev && symbols.length > 1) next = (next + 1) % symbols.length;
          return next;
        });
      }
    }, INTERVAL_MS);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [symbols.length]);

  return (
    <div
      ref={ref}
      style={{ width: size, height: size, ...style }}
      className={`flex items-center justify-center text-muted/70 transition-transform duration-300 hover:scale-125 ${
        flashing ? "animate-sticker-flash text-accent" : ""
      } ${className}`}
      onMouseEnter={() => {
        setFlashing(true);
        window.setTimeout(() => setFlashing(false), 1200);
      }}
    >
      <GeoSymbol id={symbols[index] ?? symbols[0]} width={size} height={size} />
    </div>
  );
}
