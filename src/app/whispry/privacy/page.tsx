import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { WHISPRY } from "@/content/whispry";
import { SITE_URL, CONTACT_EMAIL } from "@/content/site";

export const metadata: Metadata = {
  title: "Whispry privacy policy",
  description:
    "Whispry runs no servers that receive your voice, text or personal data. Full privacy policy: what the app handles, Premium and advertising data, and your rights.",
  alternates: { canonical: `${SITE_URL}/whispry/privacy` },
};

export default function WhispryPrivacyPage() {
  return (
    <LegalPage
      title="privacy policy"
      updated="2 October 2026"
      backHref="/whispry"
      backLabel="whispry"
      intro={`Whispry ("the app") is a voice-to-text dictation app published by cosmictaser ("we", "us"). This policy explains what data the app handles, why, how long it's kept, who receives it, and the rights you have. In short: Whispry has no user accounts and we run no servers that receive your voice, your text, or your personal data. Your recordings go straight from your phone to the AI provider you choose, with your own API key. We do not sell your data and we do not use it to train AI models.`}
      sections={[
        {
          heading: "data the app handles",
          body: [
            "Voice recordings: audio is recorded only after you start a dictation or a meeting recording (Android shows its microphone indicator while recording), then sent directly from your device to the speech-to-text provider you select in Settings (Groq by default, OpenAI, or a custom endpoint), authenticated with your own API key. Premium users' personal dictionary words are sent with it as spelling hints.",
            "Transcripts and AI formatting: if you use an AI writing preset, the transcript text is sent to the AI formatting provider you select. For Premium users, the Memory notes you saved are included so the result matches your style.",
            "Content you create: history, meeting recordings and notes, text shortcuts, My Info entries, voice commands, personal dictionary, memories, app tones, and settings — all stored only on your device.",
            "API keys: stored on-device, encrypted with the Android Keystore, sent only to the provider they belong to, and excluded from device backups.",
            "Accessibility Service, only if you turn it on: used to see which app is in front and where your keyboard is (to place the mic button and apply an app tone you configured), paste your dictated text into the field you're typing in, and, only for the optional \"calculate\" voice command, tap your calculator's buttons. It accesses the focused editable field and its existing text only to insert your dictated words, reads calculator button labels only on request, and can forward short taps on the collapsed side tab to the app underneath. This data is processed locally and is not stored or transmitted by Whispry.",
            "Display over other apps: shows the floating mic button and keyboard mic button above other apps. It is not used to collect data.",
            "Advertising data (free version): Google AdMob may collect device identifiers (such as the Android advertising ID), IP address, approximate location derived from IP, and ad interaction data to show, measure, and limit ads and to prevent ad fraud.",
            "Purchases: Premium is sold through Google Play Billing. Google processes your payment; the app only receives a signed purchase confirmation that unlocks Premium. We never see your payment details.",
            "Crash logs: if the app crashes, a report (app version, device model, Android version, technical stack trace; no transcripts or audio) is saved on your device only. It leaves your device only if you tap \"Share Crash Log\" and send it yourself.",
          ],
        },
        {
          heading: "why we process it",
          body: [
            "Providing dictation, transcription and formatting you request: performance of a contract (GDPR Art. 6(1)(b)).",
            "Personalized advertising: your consent, collected through Google's consent tool (Art. 6(1)(a)). Non-personalized ads and fraud prevention: legitimate interest (Art. 6(1)(f)).",
            "Purchases and legal obligations: contract and legal obligation (Art. 6(1)(b), (c)).",
          ],
        },
        {
          heading: "who receives data",
          body: [
            "The speech-to-text and AI formatting providers you choose, acting on your instructions: Groq, OpenAI, OpenRouter, Together AI, or a custom endpoint you point the app at — check that operator's own policy. Whether a provider retains API data or uses it for training is governed by that provider's API terms; most do not train on API data by default.",
            "Google, for AdMob ads and consent, and Google Play Billing.",
            "Nobody else. We do not sell or rent personal data, and we do not \"share\" it for cross-context behavioral advertising beyond the AdMob processing described above.",
          ],
        },
        {
          heading: "international transfers",
          body: [
            "The providers above may process data outside your country (mainly in the United States). Transfers take place when you choose to use them, under their own safeguards such as Standard Contractual Clauses.",
          ],
        },
        {
          heading: "retention",
          body: [
            "Dictation audio is deleted from your device as soon as transcription succeeds; a failed recording is kept temporarily so you can retry, then cleaned up. Transcripts and meeting recordings stay on your device until you delete them or your chosen History retention period removes them. API keys and settings are kept until you remove them, reset the app, or uninstall. We hold no copy of any of it; data held by AI providers and Google follows their own policies.",
          ],
        },
        {
          heading: "security & backups",
          body: [
            "Data stays in the app's private storage, API keys are encrypted with the Android Keystore, and all network traffic uses HTTPS. No method of storage or transmission is perfectly secure, but the app is designed to keep your data on your device.",
            "If Android backup is turned on, Android may include the app's local data (not API keys) in your Google account backup, encrypted by Google.",
          ],
        },
        {
          heading: "your rights and choices",
          body: [
            "Delete any transcript or recording in the app, clear all History in Settings, or uninstall to remove everything from the device. Turn the Accessibility Service, overlay, or microphone permission off at any time in Android settings. Change or withdraw ad consent in Settings > Data & Privacy > Ad privacy choices, or reset/delete your advertising ID in Android settings.",
            "Depending on where you live (GDPR, UK GDPR, California's CCPA/CPRA, or India's DPDP Act 2023), you may have rights to access, correct, delete or port your data, object to or restrict processing, withdraw consent, nominate a person to exercise your rights, and complain to a data protection authority. Because we hold no personal data on our servers, most of these are exercised directly in the app; for data held by an AI provider or Google, contact them directly. You can also email us and we will help.",
          ],
        },
        {
          heading: "children",
          body: [
            "Whispry is not directed to children under 13 (or under 16 where local law sets a higher age), and we do not knowingly collect their data.",
          ],
        },
        {
          heading: "changes to this policy",
          body: [
            "We update this policy when the app's data practices change, show the new effective date at the top, and notify you in the app for material changes.",
          ],
        },
        {
          heading: "contact and grievances",
          body: [
            `Privacy questions, requests, or grievances (including under India's DPDP Act): ${CONTACT_EMAIL}. We aim to respond within 30 days. You can also open an issue at ${WHISPRY.issuesUrl}.`,
          ],
        },
      ]}
    />
  );
}
