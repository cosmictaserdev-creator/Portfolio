import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { PageTransitions } from "@/components/providers/PageTransitions";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { SITE_URL, PERSON_NAME, PERSON_ALIAS, SITE_DESCRIPTION } from "@/content/site";
import { CONVX } from "@/content/convx";
import { WHISPRY } from "@/content/whispry";
import { GITHUB_URL, LINKEDIN_URL, INSTAGRAM_URL } from "@/content/links";

// Expressive variable grotesque (OFL) — tight editorial spacing that holds
// up at the oversized display sizes this design leans on.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PERSON_NAME}, ${PERSON_ALIAS} | Android & Software Developer`,
    template: `%s | ${PERSON_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Aryan Sharma",
    "cosmictaser",
    "Convx",
    "Convx music player",
    "Whispry",
    "Whispry voice transcription",
    "Android developer",
    "Kotlin developer",
    "Jetpack Compose",
    "software developer India",
    "freelance Android developer",
  ],
  authors: [{ name: PERSON_NAME }],
  creator: PERSON_NAME,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: `${PERSON_NAME}, ${PERSON_ALIAS}`,
    title: `${PERSON_NAME}, ${PERSON_ALIAS} | Android & Software Developer`,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSON_NAME}, ${PERSON_ALIAS}`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSON_NAME,
  alternateName: PERSON_ALIAS,
  url: SITE_URL,
  jobTitle: "Android & Software Developer",
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Android Development",
    "Kotlin",
    "Jetpack Compose",
    "Web Development",
    "Software Engineering",
  ],
  sameAs: [GITHUB_URL, LINKEDIN_URL, INSTAGRAM_URL, CONVX.repoUrl, WHISPRY.repoUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${satoshi.variable}`}
    >
      <head>
        {/* release APK and avatars are fetched from GitHub — warm the connection */}
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://objects.githubusercontent.com" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GoogleAnalytics />
      </head>
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <SmoothScrollProvider>
            <PageTransitions />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
