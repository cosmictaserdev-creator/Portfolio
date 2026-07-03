"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { startViewTransition } from "@/lib/view-transition";
import { prefersReducedMotion } from "@/lib/gsap";

/**
 * Wraps internal link navigation in a View Transition so route changes
 * get the directional slide + motion-blur defined in globals.css.
 * Renders nothing; listens via event delegation.
 */
export function PageTransitions() {
  const router = useRouter();
  const pathname = usePathname();
  const resolveRef = useRef<(() => void) | null>(null);

  // the new route has rendered — let the transition snapshot it
  useEffect(() => {
    resolveRef.current?.();
    resolveRef.current = null;
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      )
        return;

      const anchor = (e.target as Element).closest?.("a");
      if (!anchor || anchor.target === "_blank") return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("/")) return;

      const url = new URL(href, window.location.href);
      // same-page (hash) navigation keeps its smooth scroll
      if (url.pathname === window.location.pathname) return;

      if (prefersReducedMotion()) return;
      if (!("startViewTransition" in document)) return; // Next.js handles it

      // claim the navigation before next/link's own handler fires
      e.preventDefault();
      e.stopPropagation();

      const root = document.documentElement;
      root.classList.add("page-transition");

      const transition = startViewTransition(
        () =>
          new Promise<void>((resolve) => {
            resolveRef.current = resolve;
            router.push(url.pathname + url.search + url.hash);
            // safety valve so a slow/failed navigation never freezes the page
            window.setTimeout(resolve, 1000);
          })
      );

      transition?.finished.finally(() =>
        root.classList.remove("page-transition")
      );
    };

    // capture phase so this runs ahead of next/link's click handler
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return null;
}
