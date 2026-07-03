import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { PERSON_ALIAS } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="no-type font-display text-lg lowercase tracking-tight transition-colors hover:text-accent"
        >
          {PERSON_ALIAS}
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden items-center gap-6 text-sm tracking-wide sm:flex">
            <Link href="/projects" className="transition-colors hover:text-accent">
              work
            </Link>
            <Link href="/links" className="transition-colors hover:text-accent">
              links
            </Link>
            <Link
              href="/#contact"
              className="rounded-full border border-foreground px-4 py-1.5 transition-colors hover:border-accent hover:text-accent"
            >
              reach out
            </Link>
          </nav>

          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
