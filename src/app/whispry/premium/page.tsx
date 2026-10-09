import type { Metadata } from "next";
import Link from "next/link";
import { AndroidPhoneFrame } from "@/components/whispry/AndroidPhoneFrame";
import { WHISPRY, premiumFeatures, comparison } from "@/content/whispry";
import { SITE_URL } from "@/content/site";

const title = "Whispry Premium: One Purchase, More Writing Tools";
const description = "Compare Whispry Free and Premium. Unlock writing presets, dictionary, shortcuts, memory and meeting notes with one Google Play purchase. No subscription.";
export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: `${SITE_URL}/whispry/premium` },
  openGraph: { title, description, url: `${SITE_URL}/whispry/premium` },
};

export default function WhispryPremiumPage() {
  return <div className="theme-whispry whispry-product">
    <section className="px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Link href="/whispry" className="text-sm text-muted underline underline-offset-4">back to whispry</Link>
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="text-sm text-accent">premium · called whispry pro in the app</p>
            <h1 className="mt-4 font-display text-5xl normal-case leading-[1.05] tracking-tight sm:text-7xl">Less editing.<br />More of <span className="text-accent">your voice.</span></h1>
            <p className="mt-7 max-w-[48ch] text-base normal-case leading-relaxed text-muted">No subscription. One purchase unlocks personal writing tools, meeting notes, and an ad-free app — forever. Core dictation is included in Free.</p>
            <a href={WHISPRY.playStoreUrl} className="whispry-primary mt-8 inline-flex">Get Whispry on Google Play</a>
            <p className="mt-5 max-w-[52ch] text-sm normal-case leading-relaxed text-muted">Buy inside the app from Settings → Whispry Pro. Google Play shows the current local price before you confirm. No subscription. Your own AI key is required; provider usage charges are separate.</p>
          </div>
          <AndroidPhoneFrame src="/whispry/dictionary.png" alt="Whispry Premium personal dictionary with example custom words" priority sizes="(max-width: 768px) 60vw, 260px" className="mx-auto w-[60%] max-w-[260px]" />
        </div>
      </div>
    </section>
    <section className="border-y border-border bg-surface px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl normal-case sm:text-5xl">What Premium adds.</h2>
        <div className="mt-12 grid gap-x-14 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {premiumFeatures.map(feature => <div key={feature.title} className="border-t border-border pt-6">
            <h3 className="font-display text-2xl normal-case">{feature.title}</h3>
            <p className="mt-4 text-sm normal-case leading-relaxed text-muted">{feature.body}</p>
          </div>)}
        </div>
      </div>
    </section>
    <section className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-4xl normal-case sm:text-5xl">Choose what you need.</h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full text-left text-sm normal-case">
            <caption className="sr-only">Whispry Free and paid Premium feature comparison</caption>
            <thead><tr className="border-b border-border"><th scope="col" className="py-5 pr-3 font-medium">Feature</th><th scope="col" className="px-3 py-5 text-center font-medium">Free</th><th scope="col" className="px-3 py-5 text-center font-medium text-accent">Premium</th></tr></thead>
            <tbody>{comparison.map(row => <tr key={row.label} className="border-b border-border"><th scope="row" className="py-5 pr-3 font-normal">{row.label}</th><td className="px-3 py-5 text-center text-muted">{row.free ? "Included" : row.label === "Remove advertising" ? "Not included" : "Trial*"}</td><td className="px-3 py-5 text-center text-accent">Included</td></tr>)}</tbody>
          </table>
        </div>
        <p className="mt-6 text-sm normal-case leading-relaxed text-muted">*Two completed rewarded videos unlock Pro tools for six hours. Advertising remains enabled during a trial; ad removal requires the paid purchase. Provider rate limits and charges apply to both plans.</p>
        <p className="mt-4 text-sm normal-case leading-relaxed text-muted">The free app also offers a rewarded video for an individual meeting transcription or audio export when available. Creating or importing recordings and generating AI notes require Pro access.</p>
        <div className="mt-12 border-t border-border pt-8">
          <h3 className="font-display text-2xl normal-case">Already bought Premium?</h3>
          <p className="mt-4 text-sm normal-case leading-relaxed text-muted">Use Restore purchases on the Whispry Pro screen with the same Google Play account. Pending purchases unlock after payment completes. Refunds can revoke the unlock. Google Play handles payment and refund requests.</p>
          <Link href="/whispry/support" className="mt-5 inline-block text-sm underline underline-offset-4">Get purchase support</Link>
        </div>
      </div>
    </section>
    <div className="mx-auto flex max-w-6xl flex-wrap gap-6 border-t border-border px-6 py-10 text-sm sm:px-10"><Link href="/whispry">whispry</Link><Link href="/whispry/privacy">privacy policy</Link><Link href="/whispry/terms">purchase terms</Link></div>
  </div>;
}
