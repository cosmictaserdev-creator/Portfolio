import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Download, Coffee, Wallet, ArrowUpRight, Bug, Scale } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { RevealText } from "@/components/ui/RevealText";
import { Statement } from "@/components/sections/Statement";
import { Marquee } from "@/components/ui/Marquee";
import { ShotRail } from "@/components/ui/ShotRail";
import { Faq } from "@/components/ui/Faq";
import { WhispryHero } from "@/components/whispry/WhispryHero";
import {
  WHISPRY,
  features,
  miniFeatures,
  phoneShots,
  stack,
  architecture,
  faq,
} from "@/content/whispry";
import { getReleaseInfo, formatCount, highlightsFrom } from "@/lib/github-release";
import { SITE_URL, PERSON_NAME } from "@/content/site";

// 46 chars.
const TITLE = "Whispry: Voice Transcription for Android";
// 150 chars.
const DESCRIPTION =
  "Whispry is a free, open-source Android app for hold-to-talk voice transcription. Dictate anywhere with your own AI key. Download the latest APK.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "Whispry",
    "Whispry Android app",
    "Whispry APK",
    "voice transcription Android",
    "hold to talk dictation",
    "speech to text Android app",
    "Jetpack Compose voice app",
    "open source dictation app",
    "Groq transcription app",
    "AI voice typing Android",
  ],
  alternates: { canonical: `${SITE_URL}/whispry` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/whispry`,
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

export default async function WhispryPage() {
  const release = await getReleaseInfo(WHISPRY);
  const highlights = highlightsFrom(release.notes);

  const stats = [
    { label: "apk downloads", value: formatCount(release.totalDownloads) },
    { label: "latest build", value: release.version },
    { label: "github stars", value: formatCount(release.stars) },
    { label: "price", value: "free" },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: WHISPRY.name,
      operatingSystem: "Android 8.0+",
      applicationCategory: "UtilitiesApplication",
      description: WHISPRY.blurb,
      softwareVersion: release.version,
      downloadUrl: release.apkUrl,
      url: `${SITE_URL}/whispry`,
      license: "https://www.gnu.org/licenses/agpl-3.0.html",
      author: { "@type": "Person", name: PERSON_NAME, url: SITE_URL },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <div className="theme-whispry">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <WhispryHero
        version={release.version}
        apkUrl={release.apkUrl}
        apkSizeMb={release.apkSizeMb}
        stats={stats}
      />

      <Marquee
        items={[
          "hold to talk",
          "bring your own key",
          "ai formatting",
          "hinglish output",
          "text expander",
          "memory bank",
          "zero telemetry",
          "keyboard trigger",
          "floating widget",
        ]}
      />

      <Statement
        intro="an app built around one habit"
        lines={["talk it out,", "whispry", "writes it right"]}
        outro="a single trigger (volume key, floating widget or keyboard button) types a formatted transcript straight into whatever app you're in."
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

      {/* ---------------- screenshot gallery ---------------- */}
      <section id="screens" className="scroll-mt-24 py-24 sm:py-32">
        <div className="mx-auto mb-14 flex max-w-6xl flex-col items-center gap-3 px-6 text-center sm:px-10">
          <p>seven screens, one trigger philosophy</p>
          <RevealText as="h2" className="text-clamp-xxl lowercase leading-[0.92] text-accent">
            see it
          </RevealText>
        </div>
        <ShotRail shots={phoneShots} />
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

      {/* ---------------- under the hood ---------------- */}
      <section id="tech" className="scroll-mt-24 px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
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
                href={WHISPRY.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
              >
                <GithubIcon size={16} />
                read the code
              </a>
              <a
                href={`${WHISPRY.repoUrl}/blob/master/CONTRIBUTING.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <ArrowUpRight size={16} />
                contributing
              </a>
            </div>
          </div>

          <dl className="flex flex-col gap-8">
            {architecture.map((item) => (
              <div key={item.title} className="border-t border-border pt-6">
                <dt className="font-display text-2xl lowercase text-accent">{item.title}</dt>
                <dd className="mt-2 text-sm normal-case leading-relaxed text-muted">
                  {item.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------------- what's new ---------------- */}
      {highlights.length > 0 && (
        <section id="changelog" className="scroll-mt-24 px-6 pb-24 sm:px-10 sm:pb-32">
          <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-border bg-surface p-8 sm:p-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-xs tracking-wide text-muted">
                  {release.publishedAt
                    ? new Date(release.publishedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : "latest release"}
                </span>
                <h2 className="mt-1 font-display text-4xl lowercase text-accent sm:text-5xl">
                  what&apos;s new in {release.version}
                </h2>
              </div>
              <a
                href={WHISPRY.releasesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:text-accent"
              >
                full changelog
                <ArrowUpRight size={16} />
              </a>
            </div>

            <ul className="mt-9 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
              {highlights.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 text-sm normal-case leading-relaxed text-muted"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ---------------- download ---------------- */}
      <section
        id="download"
        className="relative isolate scroll-mt-24 overflow-hidden border-y border-border px-6 py-24 sm:px-10 sm:py-32"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_auto]">
          <div>
            <p>ready when you are</p>
            <RevealText
              as="h2"
              className="mt-3 text-clamp-xxl lowercase leading-[0.92] text-accent"
            >
              get whispry
            </RevealText>

            <p className="mt-6 max-w-[48ch] text-sm normal-case leading-relaxed text-muted">
              Download the APK, allow installs from unknown sources, add your
              AI provider key in Settings, and you&apos;re dictating. Whispry
              checks GitHub for updates itself, so you never need this page
              again.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={release.apkUrl}
                className="glass glass-accent group flex items-center gap-3 rounded-full px-8 py-4 text-sm text-white transition-transform hover:scale-[1.03]"
                data-analytics="whispry-download-footer"
              >
                <Download size={18} className="transition-transform group-hover:translate-y-0.5" />
                download {release.version}
                {release.apkSizeMb ? (
                  <span className="text-white/70">{release.apkSizeMb} MB</span>
                ) : null}
              </a>
              <a
                href={WHISPRY.releasesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-2 rounded-full px-6 py-4 text-sm transition-transform hover:scale-[1.03]"
              >
                all releases
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs text-muted">
              <span className="flex items-center gap-2">
                <Scale size={14} /> {WHISPRY.license}
              </span>
              <span>{WHISPRY.minAndroid}</span>
              <span>
                {formatCount(release.totalDownloads)} downloads and counting
              </span>
            </div>
          </div>

          <div className="mx-auto w-[58%] max-w-[260px] lg:w-[260px]">
            <Image
              src="/whispry/home.png"
              alt="Whispry home screen"
              width={1480}
              height={2800}
              sizes="260px"
              className="shot-shadow h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* ---------------- community & support ---------------- */}
      <section id="community" className="scroll-mt-24 px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p>whispry is free and always will be</p>
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
                body: "Source, releases and the issue tracker. Pull requests welcome.",
                href: WHISPRY.repoUrl,
                cta: "open the repo",
              },
              {
                icon: Bug,
                label: "report a bug",
                body: "Something broken or missing? File it and it gets looked at.",
                href: WHISPRY.issuesUrl,
                cta: "open an issue",
              },
              {
                icon: Coffee,
                label: "ko-fi",
                body: "Buy a coffee. Servers, test devices and late nights say thanks.",
                href: WHISPRY.kofiUrl,
                cta: "support on ko-fi",
              },
              {
                icon: Wallet,
                label: "upi (india)",
                body: `Pay directly via UPI: ${WHISPRY.upi}`,
                href: `upi://pay?pa=${WHISPRY.upi}&pn=Whispry`,
                cta: "pay via upi",
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
              href="/whispry/privacy"
              className="rounded-full border border-border px-6 py-3.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              privacy
            </Link>
            <Link
              href="/whispry/terms"
              className="rounded-full border border-border px-6 py-3.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              terms
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
