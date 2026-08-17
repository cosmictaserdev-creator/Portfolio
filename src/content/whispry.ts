import type { LucideIcon } from "lucide-react";
import {
  Mic,
  Wand2,
  Type,
  ShieldCheck,
  Languages,
  Brain,
  RefreshCw,
  KeyRound,
} from "lucide-react";
import type { Shot } from "@/content/media";

// Single source of truth for everything Whispry on this site. The live
// bits (version, download counts, stars) are fetched from the GitHub
// API at build/revalidate time — see @/lib/github-release.

export const WHISPRY = {
  name: "Whispry",
  tagline: "Hold-to-talk voice transcription for Android, dictated straight into any app.",
  blurb:
    "Whispry is a free, open-source Android app that turns a volume-key hold, a floating widget or a keyboard-riding button into an instantly formatted transcript, typed straight into whatever app you're in. No copy-paste, no cloud dashboard. Transcription runs through the AI provider you configure, with your own API key.",
  repo: "cosmictaserdev-creator/whispry",
  repoUrl: "https://github.com/cosmictaserdev-creator/whispry",
  releasesUrl: "https://github.com/cosmictaserdev-creator/whispry/releases",
  issuesUrl: "https://github.com/cosmictaserdev-creator/whispry/issues",
  discussionsUrl: "https://github.com/cosmictaserdev-creator/whispry/discussions",
  kofiUrl: "https://ko-fi.com/cosmictaser",
  upi: "cosmictaser@okicici",
  license: "AGPL-3.0",
  minAndroid: "Android 8.0+",
  // Fallbacks used only if the GitHub API is unreachable at build time.
  fallbackVersion: "v1.1.0",
  fallbackApkUrl:
    "https://github.com/cosmictaserdev-creator/whispry/releases/download/v1.1.0/whispry-1.1.0.apk",
} as const;

export type Feature = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  body: string;
  points: string[];
};

export const features: Feature[] = [
  {
    icon: Mic,
    subtitle: "The trigger",
    title: "hold to\ntalk",
    body: "Three trigger surfaces, so dictation is never more than a press away: a volume-key hold, a draggable floating widget, or a button that rides the on-screen keyboard.",
    points: [
      "Volume-key hold with hands-free and single/double-press modes",
      "Draggable floating widget that snaps to the screen edge",
      "Keyboard-riding trigger button, live in any text field",
      "Per-app suppression keeps triggers out of the way where unwanted",
    ],
  },
  {
    icon: Wand2,
    subtitle: "The brain",
    title: "ai\nformatting",
    body: "Transcription and formatting resolve independently. Groq is the default, or point either one at any OpenAI-compatible endpoint using your own API key.",
    points: [
      "Six presets: Raw, Auto-Format, Professional, Casual, Polite, Concise",
      "Hinglish output: romanized Hindi instead of Devanagari",
      "App-aware tone: a different style per app, same dictation",
      "11-language UI localization",
    ],
  },
  {
    icon: Type,
    subtitle: "The workflow",
    title: "voice\ncommands",
    body: "A spoken command router for expanding a snippet or inserting a saved value mid-dictation, plus a persistent memory the formatting step can draw on.",
    points: [
      "Voice commands: expand, insert and app commands as the first word",
      "Text Expander: short typed triggers expand into full snippets",
      "Memory Bank & My Info: facts you never repeat yourself",
      "Configurable widget size, position, arming delay and idle behaviour",
    ],
  },
  {
    icon: ShieldCheck,
    subtitle: "The fine print",
    title: "your key,\nyour data",
    body: "No analytics, no telemetry, and no backend of its own. Audio goes straight from your device to whichever provider you configured, using an API key only you hold.",
    points: [
      "No analytics or telemetry, nothing about you leaves the device",
      "Transcripts, settings and API keys stored locally via Room + DataStore",
      "Audio sent device-to-provider directly, Whispry never sees it",
      "Open source under AGPL-3.0, in-app OTA updater from GitHub Releases",
    ],
  },
];

export type MiniFeature = { icon: LucideIcon; title: string; body: string };

export const miniFeatures: MiniFeature[] = [
  {
    icon: Languages,
    title: "11 languages",
    body: "The interface is localized into 11 languages, not just the transcription.",
  },
  {
    icon: KeyRound,
    title: "bring your own key",
    body: "Groq out of the box, or any OpenAI-compatible endpoint with a key only you hold.",
  },
  {
    icon: Brain,
    title: "memory bank",
    body: "Persistent facts about you the formatting step can draw on, so you stop repeating yourself.",
  },
  {
    icon: RefreshCw,
    title: "in-app updates",
    body: "Whispry checks GitHub Releases itself and installs the signed APK in place.",
  },
];

export const phoneShots: Shot[] = [
  {
    src: "/whispry/home.png",
    alt: "Whispry home screen with the hold-to-talk trigger, service status and recent transcripts",
    caption: "home: trigger, daily usage, recent transcripts",
    orientation: "portrait",
  },
  {
    src: "/whispry/keyboard-trigger-idle.png",
    alt: "Whispry's keyboard-riding trigger button sitting idle above the keyboard in Gmail",
    caption: "keyboard trigger: idle, riding the keyboard",
    orientation: "portrait",
  },
  {
    src: "/whispry/keyboard-trigger-listening.png",
    alt: "Whispry's keyboard trigger actively listening and transcribing speech inside Gmail",
    caption: "keyboard trigger: listening, live transcription",
    orientation: "portrait",
  },
  {
    src: "/whispry/output-preset-picker.png",
    alt: "Switching Whispry's AI formatting preset mid-dictation from the keyboard trigger",
    caption: "switch formatting preset mid-dictation",
    orientation: "portrait",
  },
  {
    src: "/whispry/presets.png",
    alt: "Whispry formatting presets screen: Raw, Auto-Format, Professional, Casual, Polite, Concise",
    caption: "presets: raw, auto-format, tone & style",
    orientation: "portrait",
  },
  {
    src: "/whispry/library.png",
    alt: "Whispry transcript library screen, noting that transcripts stay on-device",
    caption: "library: searchable, stays on-device",
    orientation: "portrait",
  },
  {
    src: "/whispry/settings.png",
    alt: "Whispry settings screen showing accent colour, voice commands, text expander and memory bank",
    caption: "settings: accent colour, shortcuts, memory",
    orientation: "portrait",
  },
];

export const stack = [
  "Kotlin",
  "Jetpack Compose",
  "MVI",
  "Hilt",
  "Room",
  "DataStore",
  "Groq / OpenAI-compatible",
  "GitHub Actions",
];

export const architecture = [
  {
    title: "ui",
    body: "Jetpack Compose with an MVI presentation layer. Each screen observes a single UiState, driven by intents.",
  },
  {
    title: "triggers",
    body: "The volume-key hold, floating widget and keyboard button run through an accessibility service plus overlay windows, feeding one shared capture pipeline.",
  },
  {
    title: "ai",
    body: "Transcription and formatting resolve independently. Groq is the default, or any OpenAI-compatible endpoint with your own key. Requests go straight from device to provider.",
  },
  {
    title: "data",
    body: "Room holds transcripts and memory facts, DataStore holds preferences. Hilt wires the modules together.",
  },
];

export const faq = [
  {
    q: "Is Whispry free?",
    a: "Yes. Whispry is free and open source under AGPL-3.0 (with a Section 7 attribution term). There's no subscription and no paid tier. Support is entirely optional.",
  },
  {
    q: "Do I need my own API key?",
    a: "Yes. Whispry ships pointed at Groq, which has a generous free tier, or you can point transcription and formatting at any OpenAI-compatible endpoint using a key you supply in Settings.",
  },
  {
    q: "Which Android versions are supported?",
    a: "Android 8.0 (Oreo) and above.",
  },
  {
    q: "Is it on the Play Store?",
    a: "No. Whispry is distributed as an APK through GitHub Releases. Download it from this page, allow install from unknown sources, and the built-in updater handles every version after that.",
  },
  {
    q: "Does Whispry collect any data?",
    a: "No analytics or telemetry, and there's no backend of its own. Transcripts, settings and API keys stay on-device. Audio is sent directly from your device to whichever AI provider you configured, using your own key. That provider's privacy policy governs what happens from there.",
  },
  {
    q: "What are the three trigger surfaces?",
    a: "A volume-key hold (with hands-free and single/double-press modes), a draggable floating widget that snaps to the screen edge, and a button that rides the on-screen keyboard. All three are configurable and can be hidden per app.",
  },
  {
    q: "How can I report a bug or request a feature?",
    a: "Open an issue on GitHub, or start a Discussion. Both are linked at the bottom of this page. Pull requests are welcome too.",
  },
];
