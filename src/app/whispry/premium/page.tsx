import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, X } from "lucide-react";
import { RevealText } from "@/components/ui/RevealText";
import { Statement } from "@/components/sections/Statement";
import { WHISPRY, premiumFeatures } from "@/content/whispry";
import { SITE_URL } from "@/content/site";

const TITLE = "Whispry Premium: unlock every feature";
const DESCRIPTION =
  "Whispry Premium is a one-time purchase that unlocks presets, voice commands, text expander, memory, meeting notes and removes ads. No subscription.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/whispry/premium` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/whispry/premium`,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const COMPARISON: { label: string; basic: boolean }[] = [
  { label: "Unlimited dictation", basic: true },
  { label: "Floating mic & keyboard mic", basic: true },
  { label: "Library & search", basic: true },
  { label: "Clean formatting", basic: true },
  { label: "All writing presets", basic: false },
  { label: "Voice commands", basic: false },
  { label: "Personal dictionary", basic: false },
  { label: "Text expander & My Info", basic: false },
  { label: "Memory & per-app tone", basic: false },
  { label: "Meetings & AI notes", basic: false },
  { label: "No ads", basic: false },
];

export default function WhispryPremiumPage() {
  return (
    <div className="theme-whispry">
      <section className="px-6 pb-10 pt-16 sm:px-10 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/whispry"
            className="mb-10 flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} />
            whispry
          </Link>

          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            one-time purchase · no subscription
          </span>

          <RevealText as="h1" immediate className="mt-5 text-clamp-xxl lowercase leading-[0.92] text-accent">
            whispry premium
          </RevealText>

          <p className="mt-6 max-w-[48ch] text-sm normal-case leading-relaxed text-muted sm:text-base">
            Whispry's core dictation stays free, forever. Premium is a single purchase that
            unlocks every preset, voice commands, text expander, memory, meeting notes, and
            removes ads — bought once in the app, through Google Play.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={WHISPRY.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-accent group flex items-center gap-3 rounded-full px-7 py-3.5 text-sm text-white transition-transform hover:scale-[1.03]"
            >
              get whispry on google play
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
          <p className="mt-4 text-xs text-muted">
            Premium unlocks from inside the app — Settings &gt; Whispry Pro.
          </p>
        </div>
      </section>

      <Statement
        intro="one purchase, every feature"
        lines={["unlock it", "once,", "keep it"]}
        outro="no subscription, no recurring charge — buy Premium once and it's yours on that account."
      />

      {/* ---------------- premium features ---------------- */}
      <section className="px-6 py-10 sm:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {premiumFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col gap-5 rounded-[2rem] border border-border bg-surface p-7"
              >
                <Icon size={28} strokeWidth={1.5} className="text-accent" />
                <h3 className="font-display text-2xl lowercase">{feature.title}</h3>
                <p className="text-sm normal-case leading-relaxed text-muted">{feature.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------- comparison ---------------- */}
      <section className="px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto mb-12 flex max-w-6xl flex-col items-center gap-3 px-0 text-center">
          <p>basic vs premium</p>
          <RevealText as="h2" className="text-clamp-xl lowercase leading-[0.92] text-accent">
            what you get
          </RevealText>
        </div>

        <div className="mx-auto max-w-2xl overflow-hidden rounded-[2rem] border border-border bg-surface">
          <div className="flex items-center border-b border-border px-6 py-4">
            <span className="flex-1 text-xs tracking-wide text-muted">feature</span>
            <span className="w-16 text-center text-xs tracking-wide text-muted">basic</span>
            <span className="w-16 text-center text-xs tracking-wide text-accent">premium</span>
          </div>
          {COMPARISON.map((row) => (
            <div
              key={row.label}
              className="flex items-center border-b border-border px-6 py-4 last:border-b-0"
            >
              <span className="flex-1 text-sm normal-case text-foreground">{row.label}</span>
              <span className="flex w-16 justify-center">
                {row.basic ? (
                  <Check size={16} className="text-muted" />
                ) : (
                  <X size={16} className="text-muted/40" />
                )}
              </span>
              <span className="flex w-16 justify-center">
                <Check size={18} className="text-accent" />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- cta ---------------- */}
      <section className="border-t border-border px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs text-muted">questions before you buy</p>
            <Link
              href="/whispry/privacy"
              className="mt-1 block font-display text-3xl normal-case text-accent transition-opacity hover:opacity-70 sm:text-4xl"
            >
              read the privacy policy
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/whispry"
              className="rounded-full border border-border px-6 py-3.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              back to whispry
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
