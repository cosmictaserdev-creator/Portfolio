import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { CONVX } from "@/content/convx";
import { SITE_URL, CONTACT_EMAIL } from "@/content/site";

export const metadata: Metadata = {
  title: "Convx terms of use",
  description:
    "Terms of use for Convx — the free, open-source Liquid Glass music player for Android. Licence, disclaimer, acceptable use and liability.",
  alternates: { canonical: `${SITE_URL}/convx/terms` },
};

export default function ConvxTermsPage() {
  return (
    <LegalPage
      title="terms of use"
      updated="3 August 2026"
      intro="Convx is free software given away for nothing. These terms exist so everyone knows where they stand."
      sections={[
        {
          heading: "acceptance",
          body: [
            "By downloading, installing or using Convx you agree to these terms. If you do not agree, do not install the app.",
          ],
        },
        {
          heading: "licence",
          body: [
            `Convx is released under the ${CONVX.license} licence. You are free to use, study, modify and redistribute it under that licence's conditions — including the requirement that derivative works remain under the same licence and that source is made available.`,
            `The full licence text lives with the source at ${CONVX.repoUrl}.`,
          ],
        },
        {
          heading: "no affiliation",
          body: [
            "Convx is an independent project. It is not affiliated with, funded by, authorised by, endorsed by or in any way associated with YouTube, Google LLC, or any of their affiliates and subsidiaries.",
            "All trademarks, service marks, trade names and other intellectual property referenced remain the property of their respective owners.",
          ],
        },
        {
          heading: "content and acceptable use",
          body: [
            "Convx does not host, own or distribute any music. It is a client that plays publicly available streams. All content is the property of its respective rights holders.",
            "You are responsible for using Convx in a way that complies with the laws of your country and with the terms of the services it connects to. Convx is provided for educational and personal use.",
          ],
        },
        {
          heading: "distribution",
          body: [
            `The only official builds of Convx are the APKs published at ${CONVX.releasesUrl} and linked from this website. Builds obtained anywhere else are not verified and may be modified.`,
          ],
        },
        {
          heading: "no warranty",
          body: [
            "Convx is provided “as is”, without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose and non-infringement.",
            "Sideloaded software carries inherent risk. You install and run Convx at your own discretion.",
          ],
        },
        {
          heading: "limitation of liability",
          body: [
            "To the maximum extent permitted by law, the author shall not be liable for any claim, damages, data loss or other liability arising from or in connection with the use of Convx.",
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
            "These terms may be updated as the project evolves. Continued use of Convx after an update constitutes acceptance of the revised terms.",
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
