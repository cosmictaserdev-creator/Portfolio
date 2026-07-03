import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons/BrandIcons";
import { socialLinks } from "@/content/links";
import { PERSON_NAME, PERSON_ALIAS } from "@/content/site";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  mail: Mail,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-2xl lowercase">{PERSON_ALIAS}</p>
            <p className="mt-1 text-sm text-muted">
              {PERSON_NAME} · Android &amp; software developer, India
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks
              .filter((link) => link.icon !== "file-text")
              .map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
                  >
                    {Icon ? <Icon size={16} /> : null}
                  </a>
                );
              })}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 text-xs uppercase tracking-wide text-muted sm:flex-row sm:items-center">
          <p>
            © {year} {PERSON_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6">
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
      </div>
    </footer>
  );
}
