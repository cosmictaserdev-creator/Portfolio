import type { LucideIcon } from "lucide-react";
import { Smartphone, Globe, Layers, Rocket } from "lucide-react";

export type Pillar = {
  icon: LucideIcon;
  subtitle: string;
  title: string;
  paragraph: string;
};

export const pillars: Pillar[] = [
  {
    icon: Smartphone,
    subtitle: "Native Android",
    title: "android\ndevelopment",
    paragraph:
      "Kotlin & Jetpack Compose apps built offline-first, with clean architecture and animations that don't drop frames.",
  },
  {
    icon: Globe,
    subtitle: "Full stack",
    title: "web &\nsoftware",
    paragraph:
      "Fast, SEO-friendly web products with Next.js and TypeScript — from marketing sites to full applications.",
  },
  {
    icon: Layers,
    subtitle: "Design systems",
    title: "ui &\nsystems",
    paragraph:
      "Design systems and internal tooling that keep products consistent and teams moving quickly.",
  },
  {
    icon: Rocket,
    subtitle: "Freelance",
    title: "let's\nbuild",
    paragraph:
      "Currently taking on freelance and contract work — from a single feature to a full product build.",
  },
];
