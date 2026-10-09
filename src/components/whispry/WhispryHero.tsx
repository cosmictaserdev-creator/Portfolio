import Link from "next/link";
import { WHISPRY } from "@/content/whispry";
import { AndroidPhoneFrame } from "@/components/whispry/AndroidPhoneFrame";
import { DictationDemo } from "@/components/whispry/DictationDemo";

export function WhispryHero() {
  return (
    <section className="px-6 pb-16 pt-12 sm:px-10 sm:pb-24 sm:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-sm text-muted">voice typing for android</p>
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
        <div className="relative mx-auto w-full max-w-[280px] lg:ml-auto">
          <AndroidPhoneFrame
            src="/whispry/home.png"
            alt="Whispry home with the dictation button and recent transcripts"
            priority
            sizes="(max-width: 600px) 55vw, 280px"
          />
          <div className="relative mx-auto mt-8 w-full max-w-[300px] lg:absolute lg:-bottom-6 lg:-left-[260px] lg:mt-0 lg:w-[300px]">
            <DictationDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
