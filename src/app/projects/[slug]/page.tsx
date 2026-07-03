import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { RevealText } from "@/components/ui/RevealText";
import { projects, getProjectBySlug } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Aryan Sharma`,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <div
        className="relative flex min-h-[50vh] flex-col justify-end px-6 py-16 sm:px-10 sm:py-24"
        style={{
          background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
        }}
      >
        <div className="mx-auto w-full max-w-6xl">
          <Link
            href="/projects"
            className="mb-10 flex w-fit items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            all projects
          </Link>

          <span className="text-sm uppercase tracking-wide text-white/80">
            {project.category} &middot; {project.year}
          </span>
          <RevealText
            as="h1"
            immediate
            className="mt-2 text-clamp-xl lowercase text-white"
          >
            {project.title}
          </RevealText>
          <p className="mt-4 max-w-xl text-lg text-white/90">{project.tagline}</p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1fr_18rem]">
        <div className="space-y-12">
          <section>
            <h2 className="text-xs uppercase tracking-wide text-muted">Overview</h2>
            <p className="mt-3 text-base normal-case leading-relaxed text-foreground sm:text-lg">
              {project.overview}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-wide text-muted">The problem</h2>
            <p className="mt-3 text-base normal-case leading-relaxed text-foreground sm:text-lg">
              {project.problem}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-wide text-muted">The solution</h2>
            <p className="mt-3 text-base normal-case leading-relaxed text-foreground sm:text-lg">
              {project.solution}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-wide text-muted">Highlights</h2>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-base normal-case text-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-8">
          <div>
            <h2 className="text-xs uppercase tracking-wide text-muted">Role</h2>
            <p className="mt-2 text-sm text-foreground">{project.role}</p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-wide text-muted">Stack</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
              >
                <GithubIcon size={16} />
                view code
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-accent-solid px-5 py-3 text-sm text-white transition-transform hover:scale-[1.02]"
              >
                <ExternalLink size={16} />
                live preview
              </a>
            )}
          </div>
        </aside>
      </div>

      <div className="border-t border-border/60">
        <Link
          href={`/projects/${next.slug}`}
          className="group mx-auto flex max-w-6xl items-center justify-between px-6 py-10 sm:px-10"
        >
          <span className="text-xs uppercase tracking-wide text-muted">Next project</span>
          <span className="font-display text-3xl lowercase transition-colors group-hover:text-accent">
            {next.title} &rarr;
          </span>
        </Link>
      </div>
    </article>
  );
}
