"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons/BrandIcons";
import { RevealText } from "@/components/ui/RevealText";
import { socialLinks } from "@/content/links";
import { CONTACT_EMAIL } from "@/content/site";

const iconMap = { github: GithubIcon, linkedin: LinkedinIcon, instagram: InstagramIcon } as const;

type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";

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

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
        <div>
          <RevealText as="h2" className="text-clamp-lg lowercase">
            let&apos;s build something
          </RevealText>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Have a project in mind, or just want to talk shop? My inbox is
            always open.
          </p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-8 inline-block font-display text-2xl lowercase text-accent transition-opacity hover:opacity-80 sm:text-3xl"
          >
            {CONTACT_EMAIL}
          </a>

          <div className="mt-10 flex gap-3">
            {socialLinks
              .filter((l) => l.icon === "github" || l.icon === "linkedin" || l.icon === "instagram")
              .map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            required
            placeholder="your name"
            className="rounded-2xl border border-border bg-surface px-5 py-4 text-sm outline-none transition-colors placeholder:text-muted focus:border-accent"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="your email"
            className="rounded-2xl border border-border bg-surface px-5 py-4 text-sm outline-none transition-colors placeholder:text-muted focus:border-accent"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="what are you building?"
            className="resize-none rounded-2xl border border-border bg-surface px-5 py-4 text-sm outline-none transition-colors placeholder:text-muted focus:border-accent"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex items-center justify-center gap-2 rounded-full bg-accent-solid px-6 py-4 text-sm font-medium text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
          >
            {status === "sending" ? "sending..." : "send message"}
            <Send size={16} />
          </button>

          {status === "sent" && (
            <p className="text-sm text-accent">Thanks — I&apos;ll get back to you soon.</p>
          )}
          {status === "unconfigured" && (
            <p className="text-sm text-muted">
              The form isn&apos;t wired up to an email service yet — please reach
              out directly at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">
              Something went wrong — email me directly at {CONTACT_EMAIL}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
