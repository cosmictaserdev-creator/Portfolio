"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects, type ProjectCategory } from "@/content/projects";

const categories: Array<ProjectCategory | "All"> = ["All", "Android", "Web", "Other"];

export function ProjectsGrid() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`rounded-full border px-4 py-2 text-sm uppercase tracking-wide transition-colors ${
              filter === cat
                ? "border-accent text-accent"
                : "border-border text-muted hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
