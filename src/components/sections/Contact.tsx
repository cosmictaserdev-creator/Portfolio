"use client";

import { useState } from "react";
import { Mail, Clock, ArrowDown, ArrowDownRight } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  DiscordIcon,
} from "@/components/icons/BrandIcons";
import { CONTACT_EMAIL } from "@/content/site";
import { GITHUB_URL, LINKEDIN_URL, INSTAGRAM_URL } from "@/content/links";
import { CONVX } from "@/content/convx";

type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";

const rows = [
  {
    icon: Mail,
    label: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: Clock,
    label: "replies within 24 hours",
  },
] as const;

const socialRows = [
  { icon: GithubIcon, label: "Github", href: GITHUB_URL },
  { icon: DiscordIcon, label: "Discord", href: CONVX.discordUrl },
  { icon: LinkedinIcon, label: "LinkedIn", href: LINKEDIN_URL },
  { icon: InstagramIcon, label: "Instagram", href: INSTAGRAM_URL },
] as const;

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus(json.configured ? "sent" : "unconfigured");
      if (json.configured) form.reset();
    } catch {
      setStatus("error");
    }
  }

  const buttonLabel =
    status === "sending" ? "hang tight..." : status === "sent" ? "got it" : "send";

  return (
    <section
      id="contact"
      className="scroll-mt-24 px-6 py-28 sm:px-10 sm:py-40"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <span className="flex items-center gap-2 text-sm">
            get in touch your way
            <ArrowDown size={18} aria-hidden />
          </span>

          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div className="flex flex-col gap-5">
              {rows.map((row) => {
                const Icon = row.icon;
                const content = (
                  <>
                    <Icon size={18} className="shrink-0 text-accent" />
                    <span className="text-sm">{row.label}</span>
                  </>
                );
                return "href" in row && row.href ? (
                  <a
                    key={row.label}
                    href={row.href}
                    className="flex items-center gap-3 transition-colors hover:text-accent"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={row.label} className="flex items-center gap-3">
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-5">
              {socialRows.map((row) => {
                const Icon = row.icon;
                return (
                  <a
                    key={row.label}
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-colors hover:text-accent"
                  >
                    <Icon size={18} className="shrink-0 text-accent" />
                    <span className="text-sm">{row.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <span className="flex items-center gap-2 text-sm">
            <ArrowDownRight size={18} aria-hidden />
            or my way
          </span>

          <div className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                name="name"
                required
                placeholder="NAME"
                className="w-full border-b border-foreground bg-transparent px-1 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-accent"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="EMAIL"
                className="w-full border-b border-foreground bg-transparent px-1 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-accent"
              />
            </div>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="MESSAGE"
              className="resize-none border-b border-foreground bg-transparent px-1 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-accent"
            />

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="glass glass-accent mt-4 self-start rounded-full px-10 py-3 text-sm text-white transition-transform hover:scale-105 disabled:opacity-70"
            >
              {buttonLabel}
            </button>

            {status === "unconfigured" && (
              <p className="text-sm normal-case text-muted">
                The form isn&apos;t wired to an email service yet — reach out
                directly at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="normal-case text-accent">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            )}
            {status === "error" && (
              <p className="text-sm normal-case text-red-500">
                Something went wrong — email me directly at {CONTACT_EMAIL}.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
