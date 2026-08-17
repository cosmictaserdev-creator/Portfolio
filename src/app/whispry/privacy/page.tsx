import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { WHISPRY } from "@/content/whispry";
import { SITE_URL, CONTACT_EMAIL } from "@/content/site";

export const metadata: Metadata = {
  title: "Whispry privacy policy",
  description:
    "Whispry has no backend of its own. No analytics, no telemetry, transcripts and settings stay on-device, and audio goes directly to the AI provider you configure. Full privacy policy.",
  alternates: { canonical: `${SITE_URL}/whispry/privacy` },
};

export default function WhispryPrivacyPage() {
  return (
    <LegalPage
      title="privacy policy"
      updated="17 August 2026"
      backHref="/whispry"
      backLabel="whispry"
      intro="Whispry has no backend of its own. This page explains exactly what stays on your device and what leaves it, and where."
      sections={[
        {
          heading: "the short version",
          body: [
            "Whispry does not collect, store or sell any personal data, and does not run any analytics or telemetry SDK. There is no account system and no Whispry-run server.",
            "Your transcripts, presets, memory facts, text-expander snippets and API keys are stored locally on your device and are deleted when you uninstall the app.",
          ],
        },
        {
          heading: "what stays on your device",
          body: [
            "Transcripts, saved presets, memory facts and preferences are stored in an on-device Room database and DataStore. Nothing in that store is backed up to a Whispry server, because there is no Whispry server.",
            "API keys you enter in Settings are stored locally on-device and are used only to authenticate your own requests to the AI provider you configured.",
          ],
        },
        {
          heading: "network requests Whispry makes",
          body: [
            "Transcription and formatting: when you trigger a recording, the audio (and, for formatting, the resulting transcript text) is sent directly from your device to whichever AI provider you've configured in Settings (Groq by default, or any OpenAI-compatible endpoint you point it at), using the API key you supplied. That request goes straight from your device to the provider; Whispry does not proxy, log or see it. The provider's own privacy policy governs what happens to that request from there.",
            "Updates: Whispry checks the GitHub Releases API for a newer version. GitHub receives that request as an ordinary anonymous API call.",
          ],
        },
        {
          heading: "permissions",
          body: [
            "Whispry requests the permissions its chosen trigger needs: microphone access to record, an accessibility service and overlay permission for the floating widget and keyboard-riding trigger, and network access to reach your configured AI provider and GitHub. It does not request contacts, camera or location.",
          ],
        },
        {
          heading: "crash logs",
          body: [
            "If Whispry crashes, a stack-trace file is written to the app's own local storage. There is no crash-reporting SDK and nothing is uploaded automatically. You can attach that log yourself from About → Share Crash Log when reporting a bug; it is only ever sent anywhere if you choose to share it.",
          ],
        },
        {
          heading: "children",
          body: [
            "Whispry is not directed at children under 13 and collects no data from anyone, including children.",
          ],
        },
        {
          heading: "changes to this policy",
          body: [
            "If this policy changes it will be updated on this page with a new date at the top.",
          ],
        },
        {
          heading: "contact",
          body: [
            `Questions about privacy: email ${CONTACT_EMAIL}, open an issue at ${WHISPRY.issuesUrl}, or start a discussion at ${WHISPRY.discussionsUrl}.`,
          ],
        },
      ]}
    />
  );
}
