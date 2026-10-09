import { CONTACT_EMAIL } from "./site";
import { CONVX } from "./convx";
import { WHISPRY } from "./whispry";
import { SFSYMBOLS } from "./sfsymbols";

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "instagram" | "discord" | "mail" | "file-text";
};

export const GITHUB_URL = "https://github.com/cosmictaserdev-creator";
export const LINKEDIN_URL = "https://linkedin.com/in/aryan-sharma-cosmictaser";
export const INSTAGRAM_URL = "https://instagram.com/cosmictaser";

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: GITHUB_URL, icon: "github" },
  { label: "Discord", href: CONVX.discordUrl, icon: "discord" },
  { label: "LinkedIn", href: LINKEDIN_URL, icon: "linkedin" },
  { label: "Instagram", href: INSTAGRAM_URL, icon: "instagram" },
  { label: "Email", href: `mailto:${CONTACT_EMAIL}`, icon: "mail" },
];

export const linkTree = [
  {
    label: "Convx",
    href: "/convx",
    description: "Liquid Glass music player for Android",
  },
  {
    label: "Download Convx",
    href: CONVX.releasesUrl,
    description: "Official Google Play listing",
  },
  {
    label: "Convx Discord",
    href: CONVX.discordUrl,
    description: "Community, support & release pings",
  },
  {
    label: "Whispry",
    href: "/whispry",
    description: "Hold-to-talk voice transcription for Android",
  },
  {
    label: "Jetpack SF Symbols",
    href: "/sfsymbols",
    description: "All 7,007 Apple SF Symbols for Jetpack Compose",
  },
  {
    label: "SF Symbols on GitHub",
    href: SFSYMBOLS.repoUrl,
    description: "The Kotlin port, MIT licensed",
  },
  {
    label: "Download Whispry",
    href: WHISPRY.playStoreUrl,
    description: "Latest APK on GitHub Releases",
  },
  {
    label: "GitHub",
    href: GITHUB_URL,
    description: "Code & open source",
  },
  {
    label: "Support on Ko-fi",
    href: CONVX.kofiUrl,
    description: "Buy me a coffee",
  },
  {
    label: "LinkedIn",
    href: LINKEDIN_URL,
    description: "Professional profile",
  },
  {
    label: "Instagram",
    href: INSTAGRAM_URL,
    description: "@cosmictaser",
  },
  {
    label: "Email me",
    href: `mailto:${CONTACT_EMAIL}`,
    description: CONTACT_EMAIL,
  },
];
