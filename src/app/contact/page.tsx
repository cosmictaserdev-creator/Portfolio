import type { Metadata } from "next";
import { RevealText } from "@/components/ui/RevealText";
import { Contact } from "@/components/sections/Contact";
import { SITE_URL, PERSON_NAME, CONTACT_EMAIL } from "@/content/site";
import { CONVX } from "@/content/convx";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${PERSON_NAME} (cosmictaser) — freelance Android & software developer, maker of Convx. Project work, Convx bug reports and everything in between.`,
  alternates: { canonical: `${SITE_URL}/contact` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "Person",
    name: PERSON_NAME,
    email: CONTACT_EMAIL,
    url: SITE_URL,
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-6 pt-16 sm:px-10 sm:pt-24">
        <RevealText as="h1" immediate className="text-clamp-xl lowercase text-accent">
          say hello
        </RevealText>
        <p className="mt-6 max-w-[56ch] text-base normal-case leading-relaxed text-muted sm:text-lg">
          Freelance work, a feature that needs building, a bug in Convx, or just
          a question — the form goes straight to my inbox and I usually reply
          within a day.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-[2rem] border border-border bg-surface p-6">
            <h2 className="font-display text-xl lowercase text-accent">project work</h2>
            <p className="mt-2 text-sm normal-case leading-relaxed text-muted">
              Android apps in Kotlin &amp; Compose. Use the form — a rough
              scope and timeline is enough to start.
            </p>
          </div>
          <div className="rounded-[2rem] border border-border bg-surface p-6">
            <h2 className="font-display text-xl lowercase text-accent">convx bugs</h2>
            <p className="mt-2 text-sm normal-case leading-relaxed text-muted">
              Faster on{" "}
              <a
                href={CONVX.issuesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="normal-case text-accent underline underline-offset-4"
              >
                GitHub issues
              </a>{" "}
              or in the{" "}
              <a
                href={CONVX.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="normal-case text-accent underline underline-offset-4"
              >
                Discord
              </a>
              , where other users can help too.
            </p>
          </div>
          <div className="rounded-[2rem] border border-border bg-surface p-6">
            <h2 className="font-display text-xl lowercase text-accent">direct email</h2>
            <p className="mt-2 text-sm normal-case leading-relaxed text-muted">
              Prefer your own client?{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="normal-case text-accent underline underline-offset-4"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
}
