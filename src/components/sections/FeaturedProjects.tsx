import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealText } from "@/components/ui/RevealText";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/content/projects";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <RevealText as="h2" className="text-clamp-lg lowercase">
          selected work
        </RevealText>
        <Link
          href="/projects"
          className="group flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-muted transition-colors hover:text-accent"
        >
          view all projects
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
