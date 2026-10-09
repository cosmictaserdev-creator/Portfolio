import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { WHISPRY } from "@/content/whispry";
import { SITE_URL, CONTACT_EMAIL } from "@/content/site";

export const metadata: Metadata = {
  title: "Whispry terms of use",
  description:
    "Terms of use for Whispry: proprietary licence, free features, one-time Premium purchases, rewarded trials and third-party AI providers.",
  alternates: { canonical: `${SITE_URL}/whispry/terms` },
};

export default function WhispryTermsPage() {
  return (
    <LegalPage
      title="terms of use"
      updated="9 October 2026"
      backHref="/whispry"
      backLabel="whispry"
      intro="Whispry's core features are free. Premium is an optional one-time purchase. These terms exist so everyone knows where they stand."
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
            "Whispry is proprietary software. Copyright (c) 2026 CosmicIsAryan (cosmictaser). All rights reserved. Permission to use the app is granted as part of a licensed installation obtained through official distribution channels.",
            "Redistribution, resale, modification, or publication of the source code or binaries through unofficial channels requires prior written permission. Statutory rights and exceptions under applicable law remain unaffected.",
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
            `Use the official Google Play listing: ${WHISPRY.playStoreUrl}. Availability depends on the release track and your region. Updates to Play installations are delivered through Google Play.`,
          ],
        },
        {
          heading: "premium, purchases & advertising",
          body: [
            "Premium is a one-time, non-subscription purchase made through Google Play Billing that unlocks additional features listed in the app and on this site. Google processes payment; we never see your payment details, and purchases are governed by Google Play's own refund policy.",
            "The free tier shows ads served by Google AdMob. You can remove ads by purchasing Premium.",
            "Two completed rewarded videos unlock Pro tools for six hours while ads remain enabled. Individual meeting transcription or export rewards may also be offered in the app. Trials and rewards do not constitute ownership of Premium.",
            "The app displays the current local purchase price before confirmation. Restore purchases using the same Google Play account. Pending purchases unlock after completion; refunds may revoke the entitlement. Premium does not include AI provider credits or remove provider rate limits.",
          ],
        },
        {
          heading: "no warranty",
          body: [
            "Whispry is provided “as is”, without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose and non-infringement.",
            "Transcription and AI-generated notes can contain errors. Review the output before relying on it, and obtain any required consent before recording other people. Features may be affected by device settings, Android restrictions, or third-party provider availability.",
          ],
        },
        {
          heading: "limitation of liability",
          body: [
            "To the maximum extent permitted by law, the author shall not be liable for any claim, damages, data loss, mis-transcription or other liability arising from or in connection with the use of Whispry or any third-party AI provider it connects to.",
          ],
        },
        {
          heading: "your legal rights",
          body: [
            "Nothing in these terms excludes rights or remedies that cannot be excluded under applicable consumer law. Google Play purchase and refund policies apply alongside those rights.",
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
