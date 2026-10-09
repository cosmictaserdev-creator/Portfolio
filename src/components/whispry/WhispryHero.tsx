import Image from "next/image";
import Link from "next/link";
import { WHISPRY } from "@/content/whispry";

export function WhispryHero() {
  return (
    <section className="px-6 pb-16 pt-12 sm:px-10 sm:pb-24 sm:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/whispry/icon.png" alt="" width={48} height={48} className="rounded-xl" />
            <span className="font-display text-2xl normal-case">Whispry</span>
          </div>
          <p className="mt-8 text-sm text-muted">voice typing for android</p>
          <h1 className="mt-4 font-display text-[clamp(2.6rem,6vw,5.5rem)] font-semibold normal-case leading-[0.98] tracking-tight">
            Speak freely.<br /><span className="text-accent">Write clearly.</span>
          </h1>
          <p className="mt-7 max-w-[43ch] text-base normal-case leading-relaxed text-muted sm:text-lg">
            A message. A quick thought. Your next draft. Say it in the app you&apos;re already using, and let Whispry put it into words.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={WHISPRY.playStoreUrl} className="whispry-primary" data-analytics="whispry-google-play">Get it on Google Play</a>
            <Link href="/whispry/premium" className="whispry-secondary">See Premium</Link>
          </div>
          <p className="mt-5 text-xs normal-case leading-relaxed text-muted">{WHISPRY.minAndroid} · Free with ads · Optional one-time Premium purchase<br />Your AI provider key is required. Provider charges are separate.</p>
        </div>
        <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center gap-4 sm:gap-5">
          <Image src="/whispry/home.png" alt="Whispry home with the dictation button and recent transcripts" width={945} height={2048} priority sizes="(max-width: 600px) 43vw, 210px" className="w-[51%] rounded-[1.6rem] border border-border bg-black" />
          <Image src="/whispry/keyboard-trigger.png" alt="Whispry mic works alongside your existing keyboard" width={945} height={2048} priority sizes="(max-width: 600px) 35vw, 175px" className="mt-20 w-[43%] rounded-[1.4rem] border border-border bg-black" />
        </div>
      </div>
    </section>
  );
}
