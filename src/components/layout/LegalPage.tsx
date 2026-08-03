import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { RevealText } from "@/components/ui/RevealText";

export type LegalSection = { heading: string; body: string[] };

export function LegalPage({
  title,
  intro,
  updated,
  backHref = "/convx",
  backLabel = "convx",
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  backHref?: string;
  backLabel?: string;
  sections: LegalSection[];
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
      <Link
        href={backHref}
        className="mb-10 flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={16} />
        {backLabel}
      </Link>

      <RevealText as="h1" immediate className="text-clamp-lg lowercase text-accent">
        {title}
      </RevealText>

      <p className="mt-6 text-base normal-case leading-relaxed text-muted">{intro}</p>
      <p className="mt-3 text-xs text-muted">last updated · {updated}</p>

      <div className="mt-14 flex flex-col gap-12">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-2xl lowercase text-accent">{section.heading}</h2>
            <div className="mt-4 flex flex-col gap-4">
              {section.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base normal-case leading-relaxed text-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
