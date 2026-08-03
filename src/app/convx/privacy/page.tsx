import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { CONVX } from "@/content/convx";
import { SITE_URL, CONTACT_EMAIL } from "@/content/site";

export const metadata: Metadata = {
  title: "Convx privacy policy",
  description:
    "Convx collects nothing. No telemetry, no analytics, no accounts — your library, history and settings stay on your device. Full privacy policy.",
  alternates: { canonical: `${SITE_URL}/convx/privacy` },
};

export default function ConvxPrivacyPage() {
  return (
    <LegalPage
      title="privacy policy"
      updated="3 August 2026"
      intro="Convx is built so that there is nothing to collect. This page explains exactly what that means, in plain language."
      sections={[
        {
          heading: "the short version",
          body: [
            "Convx does not collect, store, transmit or sell any personal data. There is no account system, no analytics SDK, no crash reporter and no background service watching what you do.",
            "Everything Convx knows about you — your library, playlists, listening history, downloads and settings — is stored locally on your device and is deleted when you uninstall the app.",
          ],
        },
        {
          heading: "what stays on your device",
          body: [
            "Your local library and playlists are stored in an on-device Room database. Preferences are stored in Android's DataStore. Downloaded and cached audio is written to app-private storage.",
            "None of it is backed up to a Convx server, because there is no Convx server.",
          ],
        },
        {
          heading: "network requests Convx makes",
          body: [
            "Streaming and search: Convx talks directly to YouTube Music's InnerTube endpoints to search, stream and fetch artwork. Those requests go from your device to Google's servers, and are subject to Google's own privacy policy.",
            "Sign-in (optional): if you choose to sign in with a YouTube account to access your own playlists, the session cookie is stored locally on your device and sent only to Google.",
            "Lyrics: synced lyrics are fetched from third-party lyrics providers using the track title and artist.",
            "Updates: Convx checks the GitHub Releases API for a newer version. GitHub receives the request as an ordinary anonymous API call.",
            "Discord Rich Presence (optional, off by default): if you enable it, the currently playing track title and artist are sent to your local Discord client so it can show them on your profile.",
            "Listen Together (optional): if you start or join a session, playback position and the current track are shared with the people in that session for as long as it lasts.",
          ],
        },
        {
          heading: "permissions",
          body: [
            "Convx requests only the Android permissions it needs to function: network access for streaming, notification access for playback controls, and storage access for downloads. It does not request contacts, location, camera or microphone.",
          ],
        },
        {
          heading: "children",
          body: [
            "Convx is not directed at children under 13 and collects no data from anyone, including children.",
          ],
        },
        {
          heading: "changes to this policy",
          body: [
            "If this policy changes it will be updated on this page with a new date at the top. Because Convx collects nothing, material changes are unlikely.",
          ],
        },
        {
          heading: "contact",
          body: [
            `Questions about privacy: email ${CONTACT_EMAIL}, open an issue at ${CONVX.issuesUrl}, or ask in the Discord server linked from the Convx page.`,
          ],
        },
      ]}
    />
  );
}
