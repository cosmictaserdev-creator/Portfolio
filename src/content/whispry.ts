import { Mic, Wand2, Type, ShieldCheck, Brain, KeyRound, NotebookPen } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Shot } from "@/content/media";

// Product facts follow the app's entitlement policy and current Play release.
export const WHISPRY = {
  name: "Whispry",
  tagline: "Speak freely. Write clearly.",
  blurb: "Voice typing for Android, straight into the app you are using. Free dictation and clean formatting, with an optional one-time Premium purchase (no subscription) for personal writing tools and meeting notes. Connect your own AI provider key.",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.cosmictaser.whispry",
  supportUrl: "mailto:cosmictaser.dev@gmail.com",
  license: "Proprietary",
  minAndroid: "Android 8.0+",
} as const;

export type Feature = { icon: LucideIcon; title: string; subtitle: string; body: string; points: string[] };
export const features: Feature[] = [
  {
    icon: Mic, subtitle: "Included in Free", title: "A mic where\nyou write.",
    body: "Keep your keyboard. Add Whispry. Start dictation from the keyboard mic, the floating button, or a volume-key trigger, and insert the result into your focused text field.",
    points: ["Hold, tap, or use hands-free controls", "Adjust the trigger size and position", "Hide triggers in apps you choose"],
  },
  {
    icon: Wand2, subtitle: "Free essentials. More with Premium.", title: "Your thought.\nYour tone.",
    body: "Keep the original words with Raw or tidy them with Auto-Format. Premium adds Professional, Casual, Polite, and Concise writing presets, plus a remembered tone for each app.",
    points: ["Choose transcription and formatting providers separately", "Hinglish output for romanized Hindi", "Connect Groq, OpenAI, or compatible endpoints", "App interface available in 11 languages"],
  },
];

export const premiumFeatures = [
  { icon: Wand2, title: "Formal in email, casual in WhatsApp", body: "Professional, Casual, Polite, and Concise presets, plus a writing style Whispry remembers for each app automatically." },
  { icon: KeyRound, title: "Personal dictionary", body: "Give transcription spelling hints for your names, technical terms, and everyday vocabulary." },
  { icon: Type, title: "Shortcuts & voice commands", body: "Expand saved phrases, insert My Info entries, and trigger supported actions with your voice." },
  { icon: Brain, title: "Memory that helps you write", body: "Save facts and preferences for the AI formatting step to use when shaping your words." },
  { icon: NotebookPen, title: "Stop copy-pasting meeting notes", body: "Record or import meeting audio, transcribe it, and let Whispry write the summary and next steps for you." },
  { icon: ShieldCheck, title: "An ad-free app", body: "The paid Premium unlock removes ads. Rewarded trials unlock the writing tools while ads remain enabled." },
] satisfies { icon: LucideIcon; title: string; body: string }[];

export const comparison = [
  { label: "Dictation, with no Whispry usage cap", free: true },
  { label: "Floating, keyboard & volume-key triggers", free: true },
  { label: "Transcript library & search", free: true },
  { label: "Raw & Auto-Format presets", free: true },
  { label: "Professional, Casual, Polite & Concise", free: false },
  { label: "Personal dictionary", free: false },
  { label: "Voice commands, text expander & My Info", free: false },
  { label: "Memory & per-app tone", free: false },
  { label: "Meeting recording, import & AI notes", free: false },
  { label: "Remove advertising", free: false },
];

export const phoneShots: Shot[] = [
  { src: "/whispry/home.png", alt: "Current Whispry home screen with dictation button and recent transcripts", caption: "Free · a mic where you need it", orientation: "portrait" },
  { src: "/whispry/keyboard-trigger.png", alt: "Whispry's mic alongside the Android keyboard in the dictation tutorial", caption: "Free · keep your keyboard", orientation: "portrait" },
  { src: "/whispry/presets.png", alt: "Raw, Auto-Format, Professional, Casual, Polite and Concise writing presets", caption: "Free essentials · Premium writing styles", orientation: "portrait" },
  { src: "/whispry/library.png", alt: "Searchable transcript library with starred demo transcripts", caption: "Free · keep the words worth keeping", orientation: "portrait" },
  { src: "/whispry/dictionary.png", alt: "Personal dictionary with example names and custom spellings", caption: "Premium · your words, your spelling", orientation: "portrait" },
  { src: "/whispry/shortcuts.png", alt: "Text expander with reusable demo phrases", caption: "Premium · say it once", orientation: "portrait" },
  { src: "/whispry/meeting-notes.png", alt: "Demo meeting recording with transcript, summary and notes", caption: "Premium · meeting notes and next steps", orientation: "portrait" },
  { src: "/whispry/app-tone.png", alt: "Per-app writing styles for Gmail, Keep Notes and Messages", caption: "Premium · a tone for each app", orientation: "portrait" },
];

export const faq = [
  { q: "What can I use for free?", a: "Dictation has no Whispry usage cap. Free includes the mic triggers, transcript library and search, and Raw and Auto-Format presets. The free app contains ads. Your chosen AI provider may have its own limits and charges." },
  { q: "How does Premium work?", a: "Premium, called Whispry Pro in the app, is a one-time Google Play purchase. It unlocks the additional writing tools and meetings, and removes ads. The app shows the current price in your local currency before purchase. AI provider usage is separate." },
  { q: "Can I try the Premium tools?", a: "Complete two rewarded videos in the app to unlock Pro features for six hours. Ads remain enabled during the trial. When the trial ends, you return to Free unless you own Premium." },
  { q: "Do I need an AI provider key?", a: "Yes. Add your own key in Voice Recognition settings. Audio goes directly to your selected transcription provider; AI formatting and meeting tools also send the text needed for that request. Whispry Premium does not include provider credits." },
  { q: "Does it replace my keyboard?", a: "No. Whispry works alongside your existing keyboard, including Gboard. Its keyboard mic or floating button starts dictation and the result is inserted into your focused text field. Some apps or restricted fields may not support insertion." },
  { q: "Why does it ask for accessibility and overlay access?", a: "Optional accessibility access helps place the mic, detect the active app, and insert your dictated text. Overlay access lets the trigger appear above other apps. Enable only the permissions needed for the triggers you choose. You can turn them off in Android settings." },
  { q: "Where is my data stored?", a: "Your transcript history, meeting recordings, and settings are stored on your device. Audio and text required for AI processing go to your chosen provider. Google AdMob processes advertising data in the free app, and Google Play processes purchases. Read the privacy policy for retention and deletion choices." },
  { q: "Is Whispry open source?", a: "Whispry is proprietary software, published and maintained by cosmictaser. Official distribution is through Google Play. Contact cosmictaser.dev@gmail.com for support or feature requests." },
];
