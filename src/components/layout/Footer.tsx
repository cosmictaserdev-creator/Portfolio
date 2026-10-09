"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PERSON_NAME, PERSON_ALIAS } from "@/content/site";
import { CONVX } from "@/content/convx";
import { GITHUB_URL } from "@/content/links";

const internal = [
  { href: "/convx", label: "convx" },
  { href: "/convx#download", label: "convx download" },
  { href: "/whispry", label: "whispry" },
  { href: "/whispry#download", label: "whispry download" },
  { href: "/sfsymbols", label: "sf symbols" },
  { href: "/links", label: "links" },
  { href: "/contact", label: "contact" },
];

const external = [
  { href: GITHUB_URL, label: "github" },
  { href: CONVX.discordUrl, label: "discord" },
  { href: CONVX.kofiUrl, label: "ko-fi" },
];

const legal = [
  { href: "/convx/privacy", label: "convx privacy" },
  { href: "/convx/terms", label: "convx terms" },
  { href: "/whispry/privacy", label: "whispry privacy" },
  { href: "/whispry/terms", label: "whispry terms" },
];

function PortfolioFooter() {
  const year = new Date().getFullYear();
  return (
    <div className="mx-auto max-w-6xl border-t border-border pt-10">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-1">
          <Link href="/" className="no-type font-display text-2xl lowercase transition-colors hover:text-accent">
            {PERSON_ALIAS}
          </Link>
          <p className="mt-3 max-w-[30ch] text-xs normal-case leading-relaxed text-muted">
            {PERSON_NAME}, freelance Android &amp; software developer, India.
            Maker of Convx, Whispry and Jetpack SF Symbols.
          </p>
        </div>
        <nav className="flex flex-col gap-3 text-xs text-muted">
          <span className="text-foreground">site</span>
          {internal.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-accent">
              {link.label}
            </Link>
          ))}
        </nav>
        <nav className="flex flex-col gap-3 text-xs text-muted">
          <span className="text-foreground">elsewhere</span>
          {external.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>
        <nav className="flex flex-col gap-3 text-xs text-muted">
          <span className="text-foreground">legal</span>
          {legal.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-accent">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center">
        <p>© {PERSON_NAME} {year}</p>
        <p className="max-w-[52ch] normal-case">
          Convx is not affiliated with YouTube or Google LLC. Whispry is not
          affiliated with Groq, OpenAI or any other AI provider it can be
          configured to use.
        </p>
        <p>crafted with <span className="text-accent">♥</span> by {PERSON_ALIAS}</p>
      </div>
    </div>
  );
}

const whispryLinks = [
  { href: "/whispry", label: "whispry" },
  { href: "/whispry/premium", label: "premium" },
  { href: "/whispry/support", label: "support" },
  { href: "/whispry/privacy", label: "privacy" },
  { href: "/whispry/terms", label: "terms" },
  { href: "/whispry/data-deletion", label: "data deletion" },
];

function WhispryFooter() {
  const year = new Date().getFullYear();
  return (
    <div className="mx-auto max-w-6xl border-t border-border pt-10">
      <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
        <div>
          <Link href="/whispry" className="no-type font-display text-2xl normal-case transition-colors hover:text-accent">
            Whispry
          </Link>
          <p className="mt-3 max-w-[34ch] text-xs normal-case leading-relaxed text-muted">
            Voice typing for Android. Whispry is not affiliated with Groq,
            OpenAI or any other AI provider it can be configured to use.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted">
          {whispryLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-accent">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center">
        <p>© Whispry {year}</p>
        <Link href="/" className="transition-colors hover:text-accent">
          made by {PERSON_ALIAS}
        </Link>
      </div>
    </div>
  );
}

export function Footer() {
  const pathname = usePathname();
  const isWhispry = pathname?.startsWith("/whispry");

  return (
    <footer className="px-6 py-10 sm:px-10">
      {isWhispry ? <WhispryFooter /> : <PortfolioFooter />}
    </footer>
  );
}
