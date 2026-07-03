import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL, PERSON_NAME, PERSON_ALIAS, SITE_DESCRIPTION } from "@/content/site";

const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash",
  weight: "200 700",
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
    default: `${PERSON_NAME} — ${PERSON_ALIAS} | Android & Software Developer`,
    template: `%s | ${PERSON_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Aryan Sharma",
    "cosmictaser",
    "Android developer",
    "Kotlin developer",
    "Jetpack Compose",
    "software developer India",
    "freelance Android developer",
  ],
  authors: [{ name: PERSON_NAME }],
  creator: PERSON_NAME,
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: `${PERSON_NAME} — ${PERSON_ALIAS}`,
    title: `${PERSON_NAME} — ${PERSON_ALIAS} | Android & Software Developer`,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSON_NAME} — ${PERSON_ALIAS}`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${clashDisplay.variable} ${satoshi.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SmoothScrollProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
