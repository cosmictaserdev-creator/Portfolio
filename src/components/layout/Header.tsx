import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { PERSON_ALIAS } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="font-display text-lg lowercase tracking-tight transition-colors hover:text-accent"
        >
          {PERSON_ALIAS}
        </Link>

        <nav className="flex items-center gap-4 text-sm uppercase tracking-wide sm:gap-6">
          <Link href="/projects" className="transition-colors hover:text-accent">
            work
          </Link>
          <Link href="/links" className="transition-colors hover:text-accent">
            links
          </Link>
          <Link
            href="/#contact"
            className="hidden rounded-full border border-border px-4 py-1.5 normal-case transition-colors hover:border-accent hover:text-accent sm:inline"
          >
            Reach out
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
