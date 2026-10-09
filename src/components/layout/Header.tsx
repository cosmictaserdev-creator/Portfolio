"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { PERSON_ALIAS } from "@/content/site";
import { WHISPRY } from "@/content/whispry";

function PortfolioNav() {
  return (
    <>
      <Link href="/" className="no-type font-display text-lg lowercase tracking-tight transition-colors hover:text-accent">
        {PERSON_ALIAS}
      </Link>
      <div className="flex items-center gap-4 sm:gap-6">
        <nav className="hidden items-center gap-6 text-sm tracking-wide sm:flex">
          <Link href="/convx" className="transition-colors hover:text-accent">convx</Link>
          <Link href="/whispry" className="transition-colors hover:text-accent">whispry</Link>
          <Link href="/sfsymbols" className="transition-colors hover:text-accent">sf symbols</Link>
          <Link href="/links" className="transition-colors hover:text-accent">links</Link>
          <Link href="/contact" className="glass rounded-full px-4 py-1.5 transition-transform hover:scale-105">
            reach out
          </Link>
        </nav>
        <ThemeToggle />
        <MobileMenu variant="portfolio" />
      </div>
    </>
  );
}

function WhispryNav() {
  return (
    <>
      <Link href="/whispry" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
        <Image src="/whispry/icon.png" alt="" width={28} height={28} className="rounded-lg" />
        <span className="font-display text-lg normal-case tracking-tight">Whispry</span>
      </Link>
      <div className="flex items-center gap-4 sm:gap-6">
        <nav className="hidden items-center gap-6 text-sm tracking-wide sm:flex">
          <Link href="/whispry#features" className="transition-colors hover:text-accent">features</Link>
          <Link href="/whispry/premium" className="transition-colors hover:text-accent">premium</Link>
          <Link href="/whispry/support" className="transition-colors hover:text-accent">support</Link>
          <a
            href={WHISPRY.playStoreUrl}
            className="glass rounded-full px-4 py-1.5 transition-transform hover:scale-105"
          >
            get the app
          </a>
        </nav>
        <ThemeToggle />
        <MobileMenu variant="whispry" />
      </div>
    </>
  );
}

export function Header() {
  const pathname = usePathname();
  const isWhispry = pathname?.startsWith("/whispry");

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        {isWhispry ? <WhispryNav /> : <PortfolioNav />}
      </div>
    </header>
  );
}
