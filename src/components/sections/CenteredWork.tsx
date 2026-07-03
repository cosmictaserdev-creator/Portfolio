import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealText } from "@/components/ui/RevealText";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/content/projects";

export function CenteredWork() {
  const projects = getFeaturedProjects();

  return (
    <section className="px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
        <p>apps, experiments and other</p>
        <RevealText
          as="h2"
          className="text-clamp-xxl lowercase leading-[0.92] text-accent"
        >
          work
        </RevealText>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl justify-center">
        <Link
          href="/projects"
          className="group flex items-center gap-2 text-sm tracking-wide transition-colors hover:text-accent"
        >
          view all projects
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
