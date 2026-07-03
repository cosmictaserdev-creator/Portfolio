// TODO: replace every project below with your real work — titles, copy,
// tech stack, links and screenshots are placeholders wired up so the
// templates render something believable until you swap them in.

export type ProjectCategory = "Android" | "Web" | "Other";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  year: string;
  role: string;
  techStack: string[];
  gradient: [string, string];
  overview: string;
  problem: string;
  solution: string;
  highlights: string[];
  links: { repo?: string; live?: string };
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "orbit-habit-tracker",
    title: "Orbit",
    tagline: "A habit tracker that keeps momentum visible, not guilt-driven.",
    category: "Android",
    year: "2025",
    role: "Solo developer — design, Android, backend",
    techStack: ["Kotlin", "Jetpack Compose", "Room", "WorkManager", "MVVM"],
    gradient: ["#00218f", "#4364e0"],
    overview:
      "Orbit is a native Android habit tracker built around streaks, home-screen widgets and gentle nudges instead of guilt-trip notifications.",
    problem:
      "Most habit trackers punish missed days with red streak-breaks, which makes people quit the app entirely instead of the bad habit.",
    solution:
      "Designed a 'momentum' model instead of a streak counter — Compose animations show habits trending up or down over a rolling window, backed by an offline-first Room database synced in the background with WorkManager.",
    highlights: [
      "Fully offline-first with background sync",
      "Home-screen widgets built with Jetpack Glance",
      "Custom Compose animations for the momentum graph",
    ],
    links: { repo: "#", live: "#" },
    featured: true,
  },
  {
    slug: "pulse-expense-manager",
    title: "Pulse",
    tagline: "Expense tracking for people who forget to track expenses.",
    category: "Android",
    year: "2024",
    role: "Solo developer — Android",
    techStack: ["Kotlin", "Jetpack Compose", "Firebase", "ML Kit"],
    gradient: ["#002ab5", "#7c96ff"],
    overview:
      "Pulse uses on-device text recognition to log expenses straight from a photo of a receipt, cutting manual entry to a couple of taps.",
    problem:
      "Manual expense entry has huge drop-off — most people stop logging within a week because typing every line item is tedious.",
    solution:
      "Built an ML Kit-powered receipt scanner that extracts merchant, amount and category on-device, with Firebase for auth and multi-device sync.",
    highlights: [
      "On-device OCR, no data leaves the phone for scanning",
      "Category auto-detection from merchant name",
      "Monthly insights dashboard built in Compose",
    ],
    links: { repo: "#", live: "#" },
    featured: true,
  },
  {
    slug: "nimbus-weather-dashboard",
    title: "Nimbus",
    tagline: "A weather dashboard that respects your eyes and your data plan.",
    category: "Web",
    year: "2024",
    role: "Solo developer — full stack",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    gradient: ["#001060", "#3550c9"],
    overview:
      "A fast, minimal weather dashboard with hyperlocal radar, hourly breakdowns and a UI that stays legible outdoors in direct sunlight.",
    problem:
      "Most weather sites are ad-heavy and slow to load on mobile data, exactly when you need them most — outside, on the move.",
    solution:
      "Server-rendered with Next.js for near-instant loads, aggressive caching of forecast data, and a high-contrast UI tuned for outdoor readability.",
    highlights: [
      "Sub-second loads on 3G via edge caching",
      "Custom radar map overlay with canvas rendering",
      "Installable as a PWA for offline last-known forecast",
    ],
    links: { repo: "#", live: "#" },
    featured: true,
  },
  {
    slug: "taskflow",
    title: "Taskflow",
    tagline: "One task engine, shipped natively on Android and the web.",
    category: "Other",
    year: "2023",
    role: "Solo developer — Kotlin Multiplatform",
    techStack: ["Kotlin Multiplatform", "Compose Multiplatform", "SQLDelight"],
    gradient: ["#16247a", "#5a74e8"],
    overview:
      "A task and project manager sharing one Kotlin Multiplatform core between a native Android app and a Compose-for-Web dashboard.",
    problem:
      "Maintaining separate Android and web codebases for the same product logic doubles the bug surface and slows shipping.",
    solution:
      "Shared business logic and local-first storage (SQLDelight) in a common module, with thin platform-specific UI layers on each target.",
    highlights: [
      "~70% of code shared across Android and web",
      "Local-first sync engine with conflict resolution",
      "Single source of truth for task state across devices",
    ],
    links: { repo: "#", live: "#" },
    featured: false,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
