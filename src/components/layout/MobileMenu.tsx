"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/projects", label: "work" },
  { href: "/links", label: "links" },
  { href: "/#contact", label: "reach out" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  // close when the route changes (page transitions swallow link onClick)
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const overlay = (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-40 flex flex-col justify-between bg-background px-6 pb-10 pt-28 transition-[opacity,visibility] duration-300 sm:hidden ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <nav className="flex flex-col items-start gap-3">
        {links.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className={`no-type font-display text-5xl lowercase transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-accent ${
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <p
        className={`text-xs text-muted transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: open ? "360ms" : "0ms" }}
      >
        android &amp; software developer &middot; india
      </p>
    </div>
  );

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full border border-border text-foreground transition-colors hover:border-accent"
      >
        <span
          className={`h-px w-4 bg-current transition-transform duration-300 ${
            open ? "translate-y-[3px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-px w-4 bg-current transition-transform duration-300 ${
            open ? "-translate-y-[3px] -rotate-45" : ""
          }`}
        />
      </button>

      {mounted && createPortal(overlay, document.body)}
    </div>
  );
}
