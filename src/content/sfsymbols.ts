import type { LucideIcon } from "lucide-react";
import {
  Search,
  Rocket,
  Boxes,
  ShieldCheck,
  Zap,
  Layers,
  Blocks,
} from "lucide-react";

// SF Symbols is a *library*, not an app — so there's no GitHub release to
// poll. Stars/downloads don't apply. The repo + JitPack coordinates are the
// static canonical facts shown on the page.

export const SFSYMBOLS = {
  name: "SF Symbols",
  wordmark: "SF Symbols",
  tagline:
    "All 7,007 Apple SF Symbols, ported to Jetpack Compose ImageVectors. Dualtone + monochrome, tree-shakeable, zero startup cost.",
  blurb:
    "Jetpack SF Symbols is a free, open-source Kotlin library that brings the complete Apple SF Symbols 7.3 set to Jetpack Compose. Every one of the 7,007 glyphs ships as a lazy ImageVector in two variants — Dualtone for that layered, iOS-style depth, and Monochrome for flat outline work. R8-safe, tree-shakeable and Compose Multiplatform ready: only the symbols you import ever make it into your APK.",
  repo: "cosmictaserdev-creator/Jetpack_SF_Symbols",
  repoUrl: "https://github.com/cosmictaserdev-creator/Jetpack_SF_Symbols",
  issuesUrl: "https://github.com/cosmictaserdev-creator/Jetpack_SF_Symbols/issues",
  discussionsUrl: "https://github.com/cosmictaserdev-creator/Jetpack_SF_Symbols/discussions",
  kofiUrl: "https://ko-fi.com/cosmictaser",
  upi: "cosmictaser@okicici",
  license: "MIT",
  jitpack: "com.github.cosmictaserdev-creator:Jetpack_SF_Symbols:1.0.0",
  symbolCount: 7007,
  variants: 2,
  categoryCount: 30,
  minSdk: "Android 5.0+ (minSdk 21)",
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
    icon: Layers,
    subtitle: "Two ways to render",
    title: "dualtone &\nmonochrome",
    body: "Every symbol exists twice: Dualtone lays down a transparent, layered fill for iOS-style depth, while Monochrome gives you the flat, single-path mark for outline work.",
    points: [
      "Dualtone = primary 85% + secondary alpha depth layer",
      "Monochrome = single path, fillAlpha 1.0",
      "Tint either via Icon tint / colorFilter",
      "Material You can colour Dualtone layers independently",
    ],
  },
  {
    icon: Zap,
    subtitle: "Built for production",
    title: "zero startup\ncost",
    body: "Every ImageVector is a lazy Kotlin property. Nothing is allocated until the moment a composable first draws it, so a 7,007-symbol dependency costs you literally nothing at launch.",
    points: [
      "Lazy backing properties, instantiated on first render only",
      "Vastly smaller than XML vector drawables",
      "No reflection, no generated init, no startup hit",
    ],
  },
  {
    icon: Boxes,
    subtitle: "Every glyph searchable",
    title: "runtime\ncatalog",
    body: "A typed metadata index ships with the library. Search by name, find by Apple dot-name, or enumerate every symbol and its categories at runtime.",
    points: [
      "SfSymbolsCatalog.search(\"wifi\") returns matches",
      "findByAppleName(\"heart.fill\") for the exact glyph",
      "categories: Devices, Fitness, Weather, Automotive, and 26 more",
    ],
  },
  {
    icon: Rocket,
    subtitle: "Ship it small",
    title: "r8-safe &\ntree-shakeable",
    body: "Unreferenced symbols are stripped out at build time. Your APK only carries the glyphs your import statements actually pull in — nothing else.",
    points: [
      "consumer-rules.pro ships with the module",
      "ProGuard/R8 strips what you never reference",
      "Compose Multiplatform ready: Android, Desktop, iOS and Wasm",
    ],
  },
];

export type MiniFeature = { icon: LucideIcon; title: string; body: string };

export const miniFeatures: MiniFeature[] = [
  {
    icon: Blocks,
    title: "7,007 glyphs",
    body: "The complete SF Symbols 7.3 set, Apple dot-names mapped to clean Kotlin SF PascalCase.",
  },
  {
    icon: Layers,
    title: "14,014 vectors",
    body: "Every symbol in both Dualtone and Monochrome — roughly 14k hand-ported ImageVectors.",
  },
  {
    icon: Search,
    title: "searchable preview",
    body: "Browse every symbol here, copy the exact Kotlin import + property, paste it straight in.",
  },
  {
    icon: ShieldCheck,
    title: "MIT licensed",
    body: "Free for anything. The glyphs carry Apple's SF Symbols license; the port is yours.",
  },
];

// How-to: add the dependency, then use it. Mirror the actual code a dev copies.
export const usageSteps = [
  {
    title: "add the repository",
    caption: "settings.gradle.kts",
    body: "Jetpack SF Symbols is published on JitPack — one repository block is all it takes.",
    code: `// settings.gradle.kts
dependencyResolutionManagement {
    repositories {
        maven("https://jitpack.io")
    }
}`,
  },
  {
    title: "declare the dependency",
    caption: "app/build.gradle.kts",
    body: "One line in your app module pulls the whole set in. R8 strips what you don't use.",
    code: `// app/build.gradle.kts
dependencies {
    implementation("com.github.cosmictaserdev-creator:Jetpack_SF_Symbols:1.0.0")
}`,
  },
  {
    title: "install & render",
    caption: "any composable",
    body: "Import the symbol you want, hand the lazy ImageVector to Icon, tint it your way.",
    code: `import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.composables.sfsymbols.SfSymbols
import com.composables.sfsymbols.dualtone.SFHeartFill

Icon(
    imageVector = SfSymbols.Dualtone.SFHeartFill,
    contentDescription = "Favorite",
    tint = MaterialTheme.colorScheme.primary,
    modifier = Modifier.size(24.dp)
)`,
  },
  {
    title: "search at runtime",
    caption: "anywhere in code",
    body: "Prefer the monochrome variant, or look a glyph up by Apple's original dotted name.",
    code: `import com.composables.sfsymbols.SfSymbols
import com.composables.sfsymbols.SfSymbolsCatalog
import com.composables.sfsymbols.monochrome.SFWifi

// Browse by Apple dot-name
val results = SfSymbolsCatalog.search("wifi")
val heart = SfSymbolsCatalog.findByAppleName("heart.fill")

Icon(
    imageVector = SfSymbols.Monochrome.SFWifi,
    contentDescription = "Wi-Fi",
    tint = MaterialTheme.colorScheme.secondary
)`,
  },
];

export const stack = [
  "Kotlin",
  "Jetpack Compose",
  "Compose Multiplatform",
  "JitPack",
  "ImageVector",
  "SF Symbols 7.3",
];

export const architecture = [
  {
    title: "symbols",
    body: "Each of the 7,007 glyphs is a standalone .kt file exporting a lazy ImageVector extension property on SfSymbols.Dualtone or SfSymbols.Monochrome.",
  },
  {
    title: "catalog",
    body: "SfSymbolsCatalog is a runtime metadata index: Apple dot-name, Kotlin PascalCase name, category tags and platform restrictions for every symbol.",
  },
  {
    title: "builder",
    body: "SfIconBuilder centralises the sfIcon() + addSfPath() helpers that turn raw Apple path strings into alpha-aware Compose paths with the exact viewport preserved.",
  },
  {
    title: "distribution",
    body: "Published to JitPack from a KMP module. Consumer ProGuard rules keep it R8-safe and tree-shakeable.",
  },
];

export const faq = [
  {
    q: "Is Jetpack SF Symbols free?",
    a: "Yes. The Kotlin port is MIT licensed in full — free for personal and commercial use, no attribution required. The glyph designs themselves inherit Apple's SF Symbols license, which permits use inside apps.",
  },
  {
    q: "What Android versions does it support?",
    a: "minSdk 21, so Android 5.0 (Lollipop) and above. It's also Compose Multiplatform ready, so the same symbols can render on Desktop, iOS and Wasm targets.",
  },
  {
    q: "Do all 7,007 symbols bloat my APK?",
    a: "No. Everything is lazy and R8 tree-shakeable. A symbol is only compiled in if your code references it, and it's only constructed the first time it's drawn. An app using a handful of symbols pays for a handful of symbols.",
  },
  {
    q: "What's the difference between Dualtone and Monochrome?",
    a: "Dualtone reproduces Apple's layered look with a primary path at ~85% alpha plus a secondary accent path for depth — great for tinting. Monochrome is a single uniform path at full alpha for flat, outline-style icons.",
  },
  {
    q: "Are all symbols restricted on Android?",
    a: "A handful of Apple symbols are restricted for use only inside Apple products, and the catalog flags those with isRestricted. Everything else is available in Compose. The library ships them all regardless.",
  },
  {
    q: "Can I see the real glyph before using it?",
    a: "This page renders a styled mark for each of the 7,007 symbols with its exact Kotlin name and category, so you can search, browse and copy instantly. On-device, the real Apple glyph is what gets drawn.",
  },
  {
    q: "How do I contribute?",
    a: "Open an issue for a bug or request, or start a Discussion. Pull requests for new symbols, tooling or docs are very welcome. The repo link is at the bottom of this page.",
  },
];
