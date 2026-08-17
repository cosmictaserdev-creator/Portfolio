import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { linkTree } from "@/content/links";
import { PERSON_NAME, PERSON_ALIAS } from "@/content/site";

export const metadata: Metadata = {
  title: "Links",
  description: `All of ${PERSON_NAME}'s (${PERSON_ALIAS}) links in one place.`,
};

export default function LinksPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center px-6 py-16 text-center sm:py-24">
      <div className="relative h-24 w-24 overflow-hidden rounded-full border border-border bg-surface">
        <Image
          src="/images/me.jpg"
          alt={PERSON_NAME}
          fill
          priority
          sizes="96px"
          className="object-cover object-top"
        />
      </div>

      <h1 className="mt-6 font-display text-3xl lowercase">{PERSON_ALIAS}</h1>
      <p className="mt-2 text-sm text-muted">
        {PERSON_NAME}, Android &amp; software developer
      </p>

      <div className="mt-10 flex w-full flex-col gap-4">
        {linkTree.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex items-center justify-between rounded-2xl border border-border bg-surface px-6 py-4 text-left transition-colors hover:border-accent"
          >
            <span>
              <span className="block font-display text-lg lowercase">{link.label}</span>
              <span className="block text-xs normal-case text-muted">{link.description}</span>
            </span>
            <ArrowUpRight
              size={18}
              className="shrink-0 text-muted transition-colors group-hover:text-accent"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
