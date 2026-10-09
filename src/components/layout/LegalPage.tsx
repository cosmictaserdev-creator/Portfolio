import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { RevealText } from "@/components/ui/RevealText";

export type LegalSection = { heading: string; body: string[] };

function LinkedParagraph({ text }: { text: string }) {
  return <>{text.split(/(https?:\/\/[^\s]+|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g).map((part, index) => {
    if (!/^(https?:\/\/|[A-Za-z0-9._%+-]+@)/.test(part)) return part;
    const value = part.replace(/[.,;]+$/, "");
    return <span key={index}><a href={value.includes("://") ? value : `mailto:${value}`} className="break-words text-accent underline underline-offset-4">{value}</a>{part.slice(value.length)}</span>;
  })}</>;
}

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
    <div className={backHref.startsWith("/whispry") ? "theme-whispry whispry-product" : undefined}>
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

      <p className="mt-6 text-base normal-case leading-relaxed text-muted"><LinkedParagraph text={intro} /></p>
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
                  <LinkedParagraph text={paragraph} />
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
    </div>
  );
}
