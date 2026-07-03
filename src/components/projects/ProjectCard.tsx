import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-[2rem] border border-border bg-surface transition-transform duration-300 hover:-translate-y-1"
    >
      <div
        className="relative aspect-[16/10] w-full"
        style={{
          background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
        }}
      >
        <span className="absolute left-5 top-5 rounded-full bg-black/20 px-3 py-1 text-xs uppercase tracking-wide text-white backdrop-blur-sm">
          {project.category}
        </span>
        <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-black/20 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
          <ArrowUpRight size={16} />
        </span>
        <span className="absolute bottom-5 left-5 font-display text-4xl lowercase text-white">
          {project.title}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <p className="text-sm normal-case leading-relaxed text-muted">{project.tagline}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
