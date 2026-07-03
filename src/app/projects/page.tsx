import type { Metadata } from "next";
import { RevealText } from "@/components/ui/RevealText";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Android and web projects by Aryan Sharma (cosmictaser) — built with Kotlin, Jetpack Compose, Next.js and TypeScript.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
      <RevealText as="h1" immediate className="text-clamp-xl lowercase">
        selected work
      </RevealText>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
        A handful of Android and web projects — native apps, full-stack
        products, and everything in between.
      </p>

      <div className="mt-14">
        <ProjectsGrid />
      </div>
    </div>
  );
}
