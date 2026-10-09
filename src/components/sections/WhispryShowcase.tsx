import Link from "next/link";
import Image from "next/image";
import { WHISPRY } from "@/content/whispry";

export function WhispryShowcase() {
  return <section className="theme-whispry whispry-product border-y border-border px-6 py-24 sm:px-10 sm:py-32">
    <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <p className="text-sm text-muted">android · voice typing &amp; meeting notes</p>
        <h2 className="mt-4 font-display text-6xl normal-case leading-none tracking-tight text-accent sm:text-8xl">Whispry</h2>
        <p className="mt-6 font-display text-3xl normal-case sm:text-4xl">Speak freely. Write clearly.</p>
        <p className="mt-6 max-w-[46ch] text-base normal-case leading-relaxed text-muted">Dictate into the app you&apos;re already using. Keep your keyboard, connect your own AI key, and keep your history on your phone. Premium adds personal writing tools and meeting notes.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Link href="/whispry" className="whispry-primary">Meet Whispry</Link><Link href="/whispry/premium" className="whispry-secondary">Free &amp; Premium</Link></div>
        <p className="mt-5 text-xs normal-case text-muted">{WHISPRY.minAndroid} · Free with ads · Optional one-time purchase</p>
      </div>
      <div className="mx-auto flex w-full max-w-[390px] items-center gap-5">
        <Image src="/whispry/home.png" alt="Current Whispry home screen" width={945} height={2048} sizes="(max-width: 600px) 43vw, 190px" className="w-[50%] rounded-3xl border border-border" />
        <Image src="/whispry/meeting-notes.png" alt="Whispry Premium meeting transcript and notes" width={945} height={2048} sizes="(max-width: 600px) 35vw, 155px" className="mt-16 w-[42%] rounded-3xl border border-border" />
      </div>
    </div>
  </section>;
}
