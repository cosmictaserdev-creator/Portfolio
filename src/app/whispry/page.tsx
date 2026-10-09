import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/ui/Faq";
import { WhispryHero } from "@/components/whispry/WhispryHero";
import { ToneComparison } from "@/components/whispry/ToneComparison";
import { AndroidPhoneFrame } from "@/components/whispry/AndroidPhoneFrame";
import { WHISPRY, features, phoneShots, faq } from "@/content/whispry";
import { SITE_URL, PERSON_NAME } from "@/content/site";

const title = "Whispry: Voice Typing & Meeting Notes for Android";
const description = "Speak freely. Write clearly. Android voice typing with your own AI key. Free dictation, plus a one-time Premium unlock for writing tools and meeting notes.";
export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: `${SITE_URL}/whispry` },
  openGraph: { type: "website", url: `${SITE_URL}/whispry`, title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function WhispryPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: WHISPRY.name,
    operatingSystem: WHISPRY.minAndroid, applicationCategory: "ProductivityApplication", description: WHISPRY.blurb,
    url: `${SITE_URL}/whispry`, installUrl: WHISPRY.playStoreUrl, author: { "@type": "Person", name: PERSON_NAME },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free with ads and optional in-app Premium purchase. AI provider usage is separate." } };
  return (
    <div className="theme-whispry whispry-product">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WhispryHero />
      <section id="features" className="scroll-mt-24 border-t border-border px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-24">
          {features.map((feature) => <div key={feature.title}>
            <p className="text-sm normal-case text-accent">{feature.subtitle}</p>
            <h2 className="mt-4 whitespace-pre-line font-display text-4xl normal-case leading-tight sm:text-5xl">{feature.title}</h2>
            <p className="mt-6 max-w-[48ch] text-base normal-case leading-relaxed text-muted">{feature.body}</p>
            <ul className="mt-7 space-y-3 border-t border-border pt-6 text-sm normal-case text-muted">{feature.points.map(point => <li key={point}>{point}</li>)}</ul>
          </div>)}
        </div>
      </section>
      <section className="border-y border-border px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm text-accent">premium · a tone for every app</p>
          <h2 className="mt-4 font-display text-4xl normal-case sm:text-6xl">Formal in email.<br />Casual in WhatsApp.</h2>
          <p className="mx-auto mt-5 max-w-[56ch] text-base normal-case leading-relaxed text-muted">
            Same words. Pick a tone and Whispry rewrites them to match — then remembers which app gets which tone, automatically.
          </p>
        </div>
        <div className="mt-12">
          <ToneComparison />
        </div>
      </section>
      <section className="border-b border-border bg-surface px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <AndroidPhoneFrame src="/whispry/meeting-notes.png" alt="A demo meeting with audio playback, transcript and AI notes" className="mx-auto w-[65%] max-w-[290px]" />
          <div>
            <p className="text-sm text-accent">whispry premium</p>
            <h2 className="mt-4 font-display text-4xl normal-case leading-tight sm:text-6xl">More room<br />for your voice.</h2>
            <p className="mt-6 max-w-[46ch] text-base normal-case leading-relaxed text-muted">Your dictionary. Your reusable phrases. A tone for every app. And meeting recordings you can turn into transcripts, notes, and answers.</p>
            <p className="mt-5 max-w-[46ch] text-base normal-case leading-relaxed text-muted">Unlock Premium once through Google Play for the full set of tools and an ad-free app. Your provider key powers the AI requests.</p>
            <Link href="/whispry/premium" className="whispry-primary mt-8 inline-flex">Compare Free &amp; Premium</Link>
          </div>
        </div>
      </section>
      <section id="screens" className="scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm text-muted">inside whispry</p>
          <h2 className="mt-4 font-display text-4xl normal-case sm:text-6xl">Small mic. Big possibilities.</h2>
          <p className="mt-5 max-w-[60ch] text-sm normal-case leading-relaxed text-muted">Real Android app screens with example content. Premium tools are labelled below. Swipe or scroll to see the full set.</p>
          <div tabIndex={0} role="region" aria-label="Whispry screenshots, scroll horizontally" className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6">
            {phoneShots.map(shot => <figure key={shot.src} className="w-[65vw] max-w-[245px] shrink-0 snap-start">
              <AndroidPhoneFrame src={shot.src} alt={shot.alt} sizes="(max-width: 640px) 65vw, 245px" />
              <figcaption className="mt-4 text-sm normal-case leading-relaxed text-muted">{shot.caption}</figcaption>
            </figure>)}
          </div>
        </div>
      </section>
      <section className="border-t border-border px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-24">
          <h2 className="font-display text-4xl normal-case leading-tight sm:text-5xl">Your phone.<br />Your provider.<br />Your choice.</h2>
          <div className="space-y-5 text-base normal-case leading-relaxed text-muted">
            <p>History and meeting recordings live on your device. Your API keys are encrypted with Android Keystore. Whispry has no user accounts or server that receives your recordings.</p>
            <p>Transcription sends audio directly to your chosen AI provider. Formatting and meeting requests send the text they need, including saved memory or dictionary hints when used. The free app uses Google AdMob; purchases use Google Play Billing.</p>
            <Link href="/whispry/privacy" className="inline-block text-accent underline underline-offset-4">Read the full privacy policy</Link>
          </div>
        </div>
      </section>
      <section id="faq" className="scroll-mt-24 border-t border-border px-6 py-20 sm:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="font-display text-4xl normal-case sm:text-5xl">Before you<br />press record.</h2><Faq items={faq} />
        </div>
      </section>
      <section id="download" className="scroll-mt-24 border-t border-border bg-surface px-6 py-20 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div><h2 className="font-display text-4xl normal-case sm:text-5xl">Talk it out.</h2><p className="mt-4 text-sm normal-case text-muted">Install Whispry, connect your provider key, and choose your mic trigger.</p></div>
          <a href={WHISPRY.playStoreUrl} className="whispry-primary w-fit">Get Whispry on Google Play</a>
        </div>
        <div className="mx-auto mt-12 flex max-w-6xl flex-wrap gap-6 text-sm"><Link href="/whispry/support">support</Link><Link href="/whispry/privacy">privacy policy</Link><Link href="/whispry/terms">terms of use</Link><Link href="/whispry/data-deletion">delete your data</Link></div>
      </section>
    </div>
  );
}
