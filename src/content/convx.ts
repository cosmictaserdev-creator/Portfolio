import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  AudioLines,
  MicVocal,
  ShieldCheck,
  Users,
  Car,
  Download,
  RefreshCw,
} from "lucide-react";
import type { Shot } from "@/content/media";

// Single source of truth for everything Convx on this site. The live
// bits (version, download counts, stars) are fetched from the GitHub
// API at build/revalidate time — see @/lib/github-release.

export const CONVX = {
  name: "Convx",
  tagline: "An iOS-inspired, Liquid Glass music player for Android.",
  blurb:
    "Convx is a free, open-source music player that streams the full YouTube Music catalogue through a UI built on real backdrop blur and refraction: frosted glass chrome, springy iOS-style motion, and colours pulled live from whatever's playing. No ads, no telemetry, no account required.",
  repo: "cosmictaserdev-creator/Convx",
  repoUrl: "https://github.com/cosmictaserdev-creator/Convx",
  releasesUrl: "https://github.com/cosmictaserdev-creator/Convx/releases",
  issuesUrl: "https://github.com/cosmictaserdev-creator/Convx/issues",
  discussionsUrl: "https://github.com/cosmictaserdev-creator/Convx/discussions",
  discordUrl: "https://discord.gg/Ejeb4cmzfd",
  kofiUrl: "https://ko-fi.com/cosmictaser",
  // TODO: drop your PayPal.me handle in here and the button lights up.
  paypalUrl: "",
  upi: "cosmictaser@okicici",
  license: "GPL-3.0",
  minAndroid: "Android 8.0+",
  // Fallbacks used only if the GitHub API is unreachable at build time.
  fallbackVersion: "v1.4",
  fallbackApkUrl:
    "https://github.com/cosmictaserdev-creator/Convx/releases/download/v1.4/convx-v1.4.apk",
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
    icon: Sparkles,
    subtitle: "The look",
    title: "liquid\nglass",
    body: "Every surface (nav bar, sheets, floating buttons) samples the pixels behind it and blurs, refracts and tints them in real time. Not a flat translucent overlay: actual backdrop capture.",
    points: [
      "Real-time backdrop blur & refraction",
      "Bouncy rubber-band overscroll, blurred page transitions",
      "Material You colours pulled from the current artwork",
      "Per-element blur / vibrancy / lens dials in settings",
    ],
  },
  {
    icon: AudioLines,
    subtitle: "The sound",
    title: "stream &\ndownload",
    body: "The whole YouTube Music catalogue, ad-free, with background playback and full lock-screen controls. Cache anything for offline, or run it lossless with the built-in equaliser.",
    points: [
      "Ad-free streaming + background playback",
      "Offline downloads with smart storage management",
      "Lossless / high-quality audio and an equaliser",
      "Auto-DJ: tempo-matched crossfades between tracks",
    ],
  },
  {
    icon: MicVocal,
    subtitle: "The words",
    title: "synced\nlyrics",
    body: "Karaoke-style lyrics that highlight word by word, with a dedicated full-screen presentation and a waveform seek bar you can scrub from the mini player.",
    points: [
      "Word-by-word synced highlighting",
      "One-tap full-screen lyrics mode",
      "Waveform seek bar in the mini player",
      "Collapsible controls, top or bottom",
    ],
  },
  {
    icon: ShieldCheck,
    subtitle: "The fine print",
    title: "zero\ntelemetry",
    body: "No trackers, no analytics, no background services watching you. Your library, history and preferences never leave the device. There is nowhere for them to go.",
    points: [
      "No data collection, at all",
      "100% local library and preferences",
      "Open source under GPL-3.0",
      "In-app updater, no store required",
    ],
  },
];

export type MiniFeature = { icon: LucideIcon; title: string; body: string };

export const miniFeatures: MiniFeature[] = [
  {
    icon: Users,
    title: "listen together",
    body: "Sync playback with friends in real time, and show what you're playing through Discord Rich Presence.",
  },
  {
    icon: Car,
    title: "android auto",
    body: "Full Android Auto support so your queue follows you into the car.",
  },
  {
    icon: Download,
    title: "tablet ready",
    body: "A collapsible glass sidebar, split player layout and an iPad-style capped-width mini player on large screens.",
  },
  {
    icon: RefreshCw,
    title: "in-app updates",
    body: "Convx checks GitHub Releases itself, downloads the APK directly and shows you the changelog first.",
  },
];

export const phoneShots: Shot[] = [
  {
    src: "/convx/home-mobile.png",
    alt: "Convx home screen with quick picks and the floating glass mini player",
    caption: "home: quick picks, mixes, floating glass nav",
    orientation: "portrait",
  },
  {
    src: "/convx/lyrics-mobile.png",
    alt: "Convx synced lyrics highlighting the current line word by word",
    caption: "lyrics: word-by-word highlighting",
    orientation: "portrait",
  },
  {
    src: "/convx/player-mobile.png",
    alt: "Convx player screen showing FLAC quality badge and output device",
    caption: "player: codec badge, output device",
    orientation: "portrait",
  },
  {
    src: "/convx/artist-mobile.png",
    alt: "Convx artist page for Clean Bandit with subscriber and monthly listener counts",
    caption: "artist: stats, bio, top songs",
    orientation: "portrait",
  },
  {
    src: "/convx/library-grid.png",
    alt: "Convx library grid with liked, downloaded, top 50 and cached playlists",
    caption: "library: liked, downloaded, cached",
    orientation: "portrait",
  },
  {
    src: "/convx/explore-mobile.png",
    alt: "Convx explore screen with genre and mood tiles",
    caption: "explore: moods & moments",
    orientation: "portrait",
  },
  {
    src: "/convx/discover-mobile.png",
    alt: "Convx daily discover carousel and YouTube playlists",
    caption: "discover: daily picks from your taste",
    orientation: "portrait",
  },
  {
    src: "/convx/artist-material-you.png",
    alt: "Convx artist page tinted purple by Material You colour extraction",
    caption: "material you: colour from the artwork",
    orientation: "portrait",
  },
  {
    src: "/convx/lyrics-fullscreen.png",
    alt: "Convx full-screen lyrics with waveform seek bar",
    caption: "full-screen lyrics + waveform seek",
    orientation: "portrait",
  },
  {
    src: "/convx/genre-mobile.png",
    alt: "Convx hip-hop genre page with playlist tiles",
    caption: "genres: curated playlist tiles",
    orientation: "portrait",
  },
  {
    src: "/convx/new-releases-mobile.png",
    alt: "Convx new releases and music videos rows",
    caption: "new releases & music videos",
    orientation: "portrait",
  },
  {
    src: "/convx/library-songs.png",
    alt: "Convx library song list filtered to songs",
    caption: "library: songs, videos, albums, artists",
    orientation: "portrait",
  },
  {
    src: "/convx/search-mobile.png",
    alt: "Convx search screen with live suggestions",
    caption: "search: live suggestions",
    orientation: "portrait",
  },
  {
    src: "/convx/artist-chrystal.png",
    alt: "Convx artist page tinted blue from the artist photo",
    caption: "artist: adaptive tint per page",
    orientation: "portrait",
  },
];

export const tabletShots: Shot[] = [
  {
    src: "/convx/home-tablet.png",
    alt: "Convx on a tablet with a collapsible glass sidebar and quick picks grid",
    caption: "tablet home: collapsible glass sidebar",
    orientation: "landscape",
  },
  {
    src: "/convx/player-tablet.png",
    alt: "Convx tablet player with split artwork and controls layout",
    caption: "tablet player: split layout",
    orientation: "landscape",
  },
  {
    src: "/convx/lyrics-tablet.png",
    alt: "Convx tablet lyrics view alongside playback controls",
    caption: "tablet lyrics: side-by-side",
    orientation: "landscape",
  },
  {
    src: "/convx/vinyl-tablet.png",
    alt: "Convx vinyl record artwork mode on a tablet",
    caption: "vinyl mode: spinning artwork",
    orientation: "landscape",
  },
  {
    src: "/convx/playlist-tablet.png",
    alt: "Convx custom hip-hop playlist page on a tablet",
    caption: "playlists: custom covers & order",
    orientation: "portrait",
  },
  {
    src: "/convx/playlist-good-tablet.png",
    alt: "Convx custom playlist page with editable cover art",
    caption: "playlists: editable cover art",
    orientation: "portrait",
  },
];

export const stack = [
  "Kotlin",
  "Jetpack Compose",
  "MVVM",
  "Media3 / ExoPlayer",
  "Room",
  "DataStore",
  "InnerTube",
  "Kyant0/backdrop",
  "Jetpack Glance",
  "GitHub Actions",
];

export const architecture = [
  {
    title: "ui",
    body: "Jetpack Compose with MVVM. Screens live in ui/screens, wired through a single NavigationBuilder.",
  },
  {
    title: "liquid glass",
    body: "Modifier.liquidGlass(...) over a vendored copy of Kyant0/backdrop. A rememberLayerBackdrop() captures real pixels; any surface holding that reference can sample, blur and refract them.",
  },
  {
    title: "playback",
    body: "A Media3 ExoPlayer foreground service: notification and lock-screen controls, Android Auto, gapless and crossfade.",
  },
  {
    title: "data",
    body: "Room for the local library, DataStore for preferences. The innertube module talks to YouTube Music and is kept out of the app module entirely.",
  },
];

export const faq = [
  {
    q: "Is Convx free?",
    a: "Yes. Convx is free and open source under GPL-3.0. There are no ads, no subscription and no paid tier. Support is entirely optional.",
  },
  {
    q: "Which Android versions are supported?",
    a: "Android 8.0 (Oreo) and above. The Liquid Glass effects scale down gracefully on older or slower devices.",
  },
  {
    q: "Is it on the Play Store?",
    a: "No. Convx is distributed as an APK through GitHub Releases. Download it from this page, allow install from unknown sources, and the built-in updater handles every version after that.",
  },
  {
    q: "Does Convx collect any data?",
    a: "No. There is no telemetry, no analytics and no account. Your library, listening history and settings are stored locally on your device and never uploaded.",
  },
  {
    q: "How do I get Convx to show up in Android Auto?",
    a: "Open Android Auto, go to Settings, tap the version number repeatedly to unlock Developer settings, then enable 'Unknown sources'. Restart Android Auto and Convx will appear.",
  },
  {
    q: "Where do the songs come from?",
    a: "Convx streams from YouTube Music through an unofficial InnerTube client. It is not affiliated with, endorsed by or associated with YouTube or Google LLC in any way.",
  },
  {
    q: "How can I report a bug or request a feature?",
    a: "Open an issue on GitHub, or drop into the Discord. Both are linked at the bottom of this page. Pull requests are welcome too.",
  },
];
