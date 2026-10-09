import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { CONTACT_EMAIL, SITE_URL } from "@/content/site";

export const metadata: Metadata = { title: "Whispry data deletion", description: "How to remove Whispry transcripts, meeting recordings, settings and provider keys. Whispry has no user accounts.", alternates: { canonical: `${SITE_URL}/whispry/data-deletion` } };
export default function DataDeletionPage() {
  return <LegalPage title="delete your data" updated="9 October 2026" backHref="/whispry" backLabel="whispry"
    intro="Whispry has no user accounts. Your app content is stored on your device, so you can remove it directly. We do not run a server that holds your recordings or transcript history."
    sections={[
      { heading: "delete selected content", body: ["Delete individual transcripts from the Library, or clear History in Settings. Delete meeting recordings and their associated notes from Meetings. Remove saved shortcuts, My Info entries, dictionary words, and memories from their respective settings screens.", "History retention applies to transcript history. Meeting recordings and notes stay until you delete them. Deleting a transcript does not delete a separate meeting recording."] },
      { heading: "remove all local app data", body: ["In Android Settings, open Apps > Whispry > Storage and use Clear storage or Clear data. This removes local recordings, transcripts, settings, saved entries, and provider keys. You can also uninstall Whispry to remove its app storage.", "Files you exported or shared outside the app must be deleted separately from their destination. Clearing app storage does not delete them or cancel, refund, or revoke a Google Play purchase."] },
      { heading: "provider and google data", body: ["Removing local data does not delete requests already processed by your AI provider. Contact that provider to exercise deletion rights under its policy. Manage or revoke API keys in the provider's account dashboard.", "Google processes advertising and purchases under its own policies: https://policies.google.com/privacy. Change ad consent in Settings > Data & Privacy > Ad privacy choices. Manage Android backups separately in your Google account or device backup settings."] },
      { heading: "ask for help", body: [`Email ${CONTACT_EMAIL} for help with deleting data or a privacy request. Do not send API keys. If you previously emailed support or voluntarily shared a crash log, identify the correspondence you want removed so we can handle the request. See the privacy policy at https://cosmictaser.de5.net/whispry/privacy.`] },
    ]} />;
}
