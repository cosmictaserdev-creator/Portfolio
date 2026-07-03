import Link from "next/link";
import { PERSON_NAME, PERSON_ALIAS } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted sm:flex-row sm:items-center">
        <p>
          © {PERSON_NAME} {year}
        </p>
        <p>symbols &amp; marks drawn in-house</p>
        <p>
          crafted with <span className="text-accent">♥</span> by {PERSON_ALIAS}
        </p>
        <div className="flex gap-5">
          <Link href="/projects" className="transition-colors hover:text-accent">
            work
          </Link>
          <Link href="/links" className="transition-colors hover:text-accent">
            links
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-accent">
            contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
