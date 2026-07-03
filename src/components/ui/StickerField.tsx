"use client";

import { useMemo } from "react";
import {
  Smartphone,
  Code,
  Terminal,
  GitBranch,
  Cpu,
  Zap,
  Sparkles,
  Rocket,
} from "lucide-react";
import { LivingSticker } from "@/components/ui/LivingSticker";
import { useParallaxLayer } from "@/hooks/useParallaxLayer";

const ICON_SET = [Smartphone, Code, Terminal, GitBranch, Cpu, Zap, Sparkles, Rocket];

type SpotConfig = { top: string; left: string; size: number; delay: number };

export function StickerField({ count = 10 }: { count?: number }) {
  const parallaxRef = useParallaxLayer<HTMLDivElement>(24);

  const spots = useMemo<SpotConfig[]>(() => {
    return Array.from({ length: count }, () => ({
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
      size: 40 + Math.random() * 24,
      delay: Math.random() * 2,
    }));
  }, [count]);

  return (
    <div ref={parallaxRef} className="pointer-events-none absolute inset-0">
      {spots.map((spot, i) => (
        <div
          key={i}
          className="pointer-events-auto absolute animate-[fade-in_0.6s_ease_both]"
          style={{ top: spot.top, left: spot.left, animationDelay: `${spot.delay}s` }}
        >
          <LivingSticker icons={ICON_SET} size={spot.size} />
        </div>
      ))}
    </div>
  );
}
