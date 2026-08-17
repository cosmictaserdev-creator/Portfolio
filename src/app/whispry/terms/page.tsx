import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { WHISPRY } from "@/content/whispry";
import { SITE_URL, CONTACT_EMAIL } from "@/content/site";

export const metadata: Metadata = {
  title: "Whispry terms of use",
  description:
    "Terms of use for Whispry, the free, open-source hold-to-talk voice transcription app for Android. Licence, third-party AI providers, disclaimer and liability.",
  alternates: { canonical: `${SITE_URL}/whispry/terms` },
};

export default function WhispryTermsPage() {
  return (
    <LegalPage
      title="terms of use"
      updated="17 August 2026"
      backHref="/whispry"
      backLabel="whispry"
      intro="Whispry is free software given away for nothing. These terms exist so everyone knows where they stand."
      sections={[
        {
          heading: "acceptance",
          body: [
            "By downloading, installing or using Whispry you agree to these terms. If you do not agree, do not install the app.",
          ],
        },
        {
          heading: "licence",
          body: [
            `Whispry is released under the ${WHISPRY.license} licence, with an additional Section 7 term requiring attribution to be preserved in any fork or redistribution. You are free to use, study, modify and redistribute it under that licence's conditions.`,
            `The full licence text and the attribution notice live with the source at ${WHISPRY.repoUrl}.`,
          ],
        },
        {
          heading: "bring your own AI provider",
          body: [
            "Whispry does not perform transcription or formatting itself. It sends your audio, and for formatting your transcript text, directly from your device to the AI provider you configure in Settings (Groq by default, or any OpenAI-compatible endpoint), using an API key that only you hold.",
            "You are responsible for that provider's own terms of service, acceptable-use policy and any costs your usage incurs on your account. Whispry has no visibility into, and no control over, how that provider handles your request once it leaves your device.",
          ],
        },
        {
          heading: "no affiliation",
          body: [
            "Whispry is an independent project. It is not affiliated with, funded by, authorised by, endorsed by or in any way associated with Groq, OpenAI, or any other AI provider it can be configured to use.",
            "All trademarks, service marks and trade names referenced remain the property of their respective owners.",
          ],
        },
        {
          heading: "acceptable use",
          body: [
            "You are responsible for using Whispry, and the transcripts it produces, in a way that complies with the laws of your country and the terms of the AI provider you've configured. Whispry is provided for personal and professional productivity use.",
          ],
        },
        {
          heading: "distribution",
          body: [
            `The only official builds of Whispry are the APKs published at ${WHISPRY.releasesUrl} and linked from this website. Builds obtained anywhere else are not verified and may be modified.`,
          ],
        },
        {
          heading: "no warranty",
          body: [
            "Whispry is provided “as is”, without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose and non-infringement.",
            "Sideloaded software carries inherent risk, and transcription accuracy depends entirely on the AI provider you choose. You install and use Whispry at your own discretion.",
          ],
        },
        {
          heading: "limitation of liability",
          body: [
            "To the maximum extent permitted by law, the author shall not be liable for any claim, damages, data loss, mis-transcription or other liability arising from or in connection with the use of Whispry or any third-party AI provider it connects to.",
          ],
        },
        {
          heading: "donations",
          body: [
            "Ko-fi and UPI contributions are voluntary gifts toward development. They are not purchases, do not buy features, priority support or a licence, and are non-refundable.",
          ],
        },
        {
          heading: "changes",
          body: [
            "These terms may be updated as the project evolves. Continued use of Whispry after an update constitutes acceptance of the revised terms.",
          ],
        },
        {
          heading: "contact",
          body: [`Questions about these terms: ${CONTACT_EMAIL}.`],
        },
      ]}
    />
  );
}
