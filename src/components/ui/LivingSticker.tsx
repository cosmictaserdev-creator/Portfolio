"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";

const CHANGE_PROBABILITY = 0.2;
const INTERVAL_MS = 900;

export function LivingSticker({
  icons,
  size = 52,
  style,
  className = "",
}: {
  icons: LucideIcon[];
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
          let next = Math.floor(Math.random() * icons.length);
          if (next === prev && icons.length > 1) next = (next + 1) % icons.length;
          return next;
        });
      }
    }, INTERVAL_MS);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [icons.length]);

  const Icon = icons[index] ?? icons[0];

  return (
    <div
      ref={ref}
      style={{ width: size, height: size, ...style }}
      className={`flex items-center justify-center rounded-2xl border border-border bg-surface/60 text-muted transition-transform duration-300 hover:scale-110 ${
        flashing ? "animate-sticker-flash text-accent" : ""
      } ${className}`}
      onMouseEnter={() => {
        setFlashing(true);
        window.setTimeout(() => setFlashing(false), 1200);
      }}
    >
      <Icon size={size * 0.45} strokeWidth={1.5} />
    </div>
  );
}
