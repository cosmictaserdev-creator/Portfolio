import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/layout/LegalPage";
import { CONTACT_EMAIL, SITE_URL } from "@/content/site";

export const metadata: Metadata = { title: "Whispry support", description: "Help with Whispry setup, microphone permissions, AI provider keys and Premium purchases.", alternates: { canonical: `${SITE_URL}/whispry/support` } };
export default function SupportPage() {
  return <>
    <LegalPage title="whispry support" updated="9 October 2026" backHref="/whispry" backLabel="whispry"
      intro={`Need help or want to suggest a feature? Email ${CONTACT_EMAIL}. Support is best effort. Include your app version, Android version, device model, and the steps that led to the problem. Do not send API keys or private recordings.`}
      sections={[
        { heading: "get started", body: ["Install the official Google Play build. Add your AI provider key under Settings > Voice Recognition and choose your transcription and formatting providers. Whispry Premium does not include an API key or provider credits.", "Follow the in-app setup for your mic trigger. Whispry works alongside your existing keyboard. Accessibility and overlay permissions support insertion and triggers over other apps; microphone access records only when you start dictation or a meeting."] },
        { heading: "the mic is missing", body: ["Check that Whispry is enabled and that your selected mic trigger is enabled in Settings. Check Android's accessibility, display-over-other-apps, and microphone permissions. Hidden-app settings can suppress the trigger in selected apps.", "If the trigger disappears after the app is idle, check your device's background and battery settings for Whispry. Some manufacturers restrict background services. Follow the help shown in the app for your device."] },
        { heading: "transcription or formatting failed", body: ["Check your connection, provider key, endpoint, model selection, and provider rate limits or credit balance. Transcription and formatting can use separate providers, so check both configurations.", "Do not include your API key when reporting a problem. You can share the error message and provider name. Review generated text before sending it."] },
        { heading: "premium and restoring purchases", body: ["Premium is labelled Whispry Pro in the app. Open its screen in Settings and use Restore purchases while signed into the same Google Play account used for the purchase. A pending payment must complete before Premium unlocks.", "If the price is unavailable, check your Play Store account and connection and use the official Play installation. For payment or refund requests, use Google Play's purchase support: https://support.google.com/googleplay/answer/2479637.", "Rewarded trials unlock Pro tools for six hours after two completed videos. Trials keep ads enabled and do not create a paid purchase to restore."] },
        { heading: "crash reports", body: ["Crash logs stay on your device. Use About > Share Crash Log only if you choose to send a report to support. Review the file before sharing. Audio and transcripts are not automatically uploaded with a crash report."] },
      ]} />
    <div className="mx-auto flex max-w-3xl flex-wrap gap-6 px-6 pb-16 text-sm sm:px-10"><Link href="/whispry/privacy">privacy policy</Link><Link href="/whispry/data-deletion">delete your data</Link></div>
  </>;
}
