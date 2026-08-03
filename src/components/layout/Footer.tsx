import Link from "next/link";
import { PERSON_NAME, PERSON_ALIAS } from "@/content/site";
import { CONVX } from "@/content/convx";
import { GITHUB_URL } from "@/content/links";

const internal = [
  { href: "/convx", label: "convx" },
  { href: "/convx#download", label: "download" },
  { href: "/links", label: "links" },
  { href: "/contact", label: "contact" },
];

const external = [
  { href: GITHUB_URL, label: "github" },
  { href: CONVX.discordUrl, label: "discord" },
  { href: CONVX.kofiUrl, label: "ko-fi" },
];

const legal = [
  { href: "/convx/privacy", label: "privacy" },
  { href: "/convx/terms", label: "terms" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl border-t border-border pt-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link
              href="/"
              className="no-type font-display text-2xl lowercase transition-colors hover:text-accent"
            >
              {PERSON_ALIAS}
            </Link>
            <p className="mt-3 max-w-[30ch] text-xs normal-case leading-relaxed text-muted">
              {PERSON_NAME} — freelance Android &amp; software developer, India.
              Maker of Convx.
            </p>
          </div>

          <nav className="flex flex-col gap-3 text-xs text-muted">
            <span className="text-foreground">site</span>
            {internal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-3 text-xs text-muted">
            <span className="text-foreground">convx</span>
            {external.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <nav className="flex flex-col gap-3 text-xs text-muted">
            <span className="text-foreground">legal</span>
            {legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>
            © {PERSON_NAME} {year}
          </p>
          <p className="max-w-[52ch] normal-case">
            Convx is not affiliated with, endorsed by or associated with YouTube
            or Google LLC.
          </p>
          <p>
            crafted with <span className="text-accent">♥</span> by {PERSON_ALIAS}
          </p>
        </div>
      </div>
    </footer>
  );
}
