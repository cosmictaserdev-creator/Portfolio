import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Bug, Coffee, Wallet, Scale, Search } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { RevealText } from "@/components/ui/RevealText";
import { Statement } from "@/components/sections/Statement";
import { Marquee } from "@/components/ui/Marquee";
import { Faq } from "@/components/ui/Faq";
import { SfSymbolsHero } from "@/components/sfsymbols/SfSymbolsHero";
import { CatalogBrowser } from "@/components/sfsymbols/CatalogBrowser";
import { CodeBlock } from "@/components/sfsymbols/CodeBlock";
import {
  SFSYMBOLS,
  features,
  miniFeatures,
  usageSteps,
  stack,
  architecture,
  faq,
} from "@/content/sfsymbols";
import { SITE_URL, PERSON_NAME } from "@/content/site";

const TITLE = "Jetpack SF Symbols: All 7,007 For Jetpack Compose";
const DESCRIPTION =
  "Jetpack SF Symbols is a free Kotlin library porting every Apple SF Symbol to Jetpack Compose ImageVectors. Browse all 7,007, copy the Kotlin, paste it in.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "SF Symbols",
    "SF Symbols Android",
    "Jetpack Compose icons",
    "SF Symbols Compose",
    "SF Symbols Kotlin",
    "ImageVector SF Symbols",
    "Compose icon library",
    "dualtone icons Compose",
    "SF Symbols 7.3",
    "open source icon library Android",
  ],
  alternates: { canonical: `${SITE_URL}/sfsymbols` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/sfsymbols`,
    siteName: `${PERSON_NAME}, cosmictaser`,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default async function SfSymbolsPage() {
  const stats = [
    { label: "glyphs", value: SFSYMBOLS.symbolCount.toLocaleString() },
    { label: "vector files", value: (SFSYMBOLS.symbolCount * SFSYMBOLS.variants).toLocaleString() },
    { label: "categories", value: String(SFSYMBOLS.categoryCount) },
    { label: "license", value: SFSYMBOLS.license },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: "Jetpack SF Symbols",
    description: SFSYMBOLS.blurb,
    codeRepository: SFSYMBOLS.repoUrl,
    programmingLanguage: "Kotlin",
    license: "https://opensource.org/licenses/MIT",
    author: { "@type": "Person", name: PERSON_NAME, url: SITE_URL },
  };

  return (
    <div className="theme-sfsymbols">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SfSymbolsHero stats={stats} />

      <Marquee
        items={[
          "7,007 glyphs",
          "dualtone & monochrome",
          "lazy imagevectors",
          "r8 tree-shakeable",
          "compose multiplatform",
          "runtime search",
          "mit licensed",
          "copy & paste",
        ]}
      />

      <Statement
        intro="apple's entire icon set, one dependency in"
        lines={["every symbol,", "all 7,007", "of them"]}
        outro="ported character-for-character to Kotlin ImageVectors, both dualtone and monochrome, ready to drop into any composable."
      />

      {/* ---------------- features ---------------- */}
      <section id="features" className="scroll-mt-24 px-6 py-10 sm:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 lg:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col gap-7 rounded-[2.5rem] border border-border bg-surface p-8 sm:p-10"
              >
                <Icon size={38} strokeWidth={1.5} className="text-accent" />

                <div>
                  <span className="text-xs tracking-wide text-muted">
                    {feature.subtitle}
                  </span>
                  <h3 className="mt-1 whitespace-pre-line font-display text-4xl lowercase text-accent sm:text-5xl">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-sm normal-case leading-relaxed">{feature.body}</p>

                <ul className="mt-auto flex flex-col gap-3 border-t border-border pt-6">
                  {feature.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm normal-case text-muted"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------- the catalog ---------------- */}
      <section id="catalog" className="scroll-mt-24 py-24 sm:py-32">
        <div className="mx-auto mb-12 flex max-w-6xl flex-col items-center gap-3 px-6 text-center sm:px-10">
          <p>the whole set, browsable</p>
          <RevealText as="h2" className="text-clamp-xxl lowercase leading-[0.92] text-accent">
            the catalog
          </RevealText>
          <p className="mt-4 max-w-[56ch] text-sm normal-case leading-relaxed text-muted sm:text-base">
            Search by Apple name, Kotlin property or category. Click any tile
            to copy the exact Kotlin block for your composable — dualtone or
            monochrome.
          </p>
        </div>

        <div className="px-6 sm:px-10">
          <CatalogBrowser />
        </div>
      </section>

      {/* ---------------- mini features ---------------- */}
      <section className="px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {miniFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col gap-5 rounded-[2rem] border border-border bg-surface p-7"
              >
                <Icon size={26} strokeWidth={1.5} className="text-accent" />
                <h3 className="font-display text-2xl lowercase">{item.title}</h3>
                <p className="text-sm normal-case leading-relaxed text-muted">{item.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------- usage / quick start ---------------- */}
      <section id="usage" className="scroll-mt-24 px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p>copy, paste, done</p>
            <RevealText
              as="h2"
              className="mt-3 text-clamp-xl lowercase leading-[0.92] text-accent"
            >
              quick start
            </RevealText>
            <p className="mt-6 max-w-[46ch] text-sm normal-case leading-relaxed text-muted">
              Add the JitPack repository, declare the dependency, then import
              any symbol by name. Everything is lazy and tree-shakeable, so a
              huge icon set costs you nothing you don&apos;t use.
            </p>

            <div className="mt-11 flex flex-col">
              {usageSteps.map((step, i) => (
                <div key={step.title} className="border-t border-border py-8 first:border-t-0 first:pt-0">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-3xl lowercase text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl lowercase">{step.title}</h3>
                      <p className="mt-2 max-w-[46ch] text-sm normal-case leading-relaxed text-muted">
                        {step.body}
                      </p>
                    </div>
                  </div>
                  <CodeBlock code={step.code} refId={step.caption} />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-2">
            <div className="lg:sticky lg:top-28">
              <p>for the people who ask what it&apos;s made of</p>
              <RevealText
                as="h2"
                className="mt-3 text-clamp-xl lowercase leading-[0.92] text-accent"
              >
                under the hood
              </RevealText>

              <div className="mt-8 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-4 py-1.5 text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={SFSYMBOLS.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
                >
                  <GithubIcon size={16} />
                  read the code
                </a>
                <a
                  href={`${SFSYMBOLS.repoUrl}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <Bug size={16} />
                  report an issue
                </a>
              </div>

              <dl className="mt-10 flex flex-col gap-6">
                {architecture.map((item) => (
                  <div key={item.title} className="border-t border-border pt-5">
                    <dt className="font-display text-2xl lowercase text-accent">{item.title}</dt>
                    <dd className="mt-2 text-sm normal-case leading-relaxed text-muted">
                      {item.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- community & support ---------------- */}
      <section id="community" className="scroll-mt-24 px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p>free, open source and always will be</p>
          <RevealText
            as="h2"
            className="mt-3 text-clamp-xl lowercase leading-[0.92] text-accent"
          >
            community &amp; support
          </RevealText>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: GithubIcon,
                label: "github",
                body: "Source, issues and the module. Pull requests welcome.",
                href: SFSYMBOLS.repoUrl,
                cta: "open the repo",
              },
              {
                icon: Bug,
                label: "report a bug",
                body: "A symbol misbehaving or a name off? File it and it gets looked at.",
                href: SFSYMBOLS.issuesUrl,
                cta: "open an issue",
              },
              {
                icon: Search,
                label: "request a symbol",
                body: "Spot a missing glyph or want a new SF Symbols release ported? Ask.",
                href: SFSYMBOLS.discussionsUrl,
                cta: "start a discussion",
              },
              {
                icon: Coffee,
                label: "ko-fi",
                body: "Buy a coffee. Porting 14k vectors takes late nights.",
                href: SFSYMBOLS.kofiUrl,
                cta: "support on ko-fi",
              },
              {
                icon: Wallet,
                label: "upi (india)",
                body: `Pay directly via UPI: ${SFSYMBOLS.upi}`,
                href: `upi://pay?pa=${SFSYMBOLS.upi}&pn=SF Symbols`,
                cta: "pay via upi",
              },
              {
                icon: Scale,
                label: "mit licensed",
                body: "Free for anything. Glyph designs inherit Apple's SF Symbols license; the port is yours.",
                href: `${SFSYMBOLS.repoUrl}/blob/main/LICENSE`,
                cta: "read the license",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col gap-4 rounded-[2rem] border border-border bg-surface p-7 transition-colors hover:border-accent"
                >
                  <Icon size={24} strokeWidth={1.5} className="text-accent" />
                  <h3 className="font-display text-2xl lowercase">{item.label}</h3>
                  <p className="text-sm normal-case leading-relaxed text-muted">{item.body}</p>
                  <span className="mt-auto flex items-center gap-2 pt-2 text-sm transition-colors group-hover:text-accent">
                    {item.cta}
                    <ArrowUpRight size={15} />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- faq ---------------- */}
      <section id="faq" className="scroll-mt-24 px-6 pb-24 sm:px-10 sm:pb-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p>the usual questions</p>
            <RevealText
              as="h2"
              className="mt-3 text-clamp-xl lowercase leading-[0.92] text-accent"
            >
              faq
            </RevealText>
          </div>

          <Faq items={faq} />
        </div>
      </section>

      {/* ---------------- back to the portfolio ---------------- */}
      <section className="border-t border-border px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs text-muted">built, designed and maintained by</p>
            <Link
              href="/"
              className="mt-1 block font-display text-4xl normal-case text-accent transition-opacity hover:opacity-70 sm:text-5xl"
            >
              {PERSON_NAME}
            </Link>
            <p className="mt-2 max-w-[44ch] text-sm normal-case text-muted">
              Freelance Android &amp; software developer. Available for app builds,
              feature work and rescue missions.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-accent-solid px-7 py-3.5 text-sm text-white transition-transform hover:scale-105"
            >
              hire me
            </Link>
            <Link
              href="/"
              className="rounded-full border border-border px-6 py-3.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              back home
            </Link>
            <Link
              href={SFSYMBOLS.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-6 py-3.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              star on github
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
