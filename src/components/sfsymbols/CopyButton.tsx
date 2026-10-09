"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

/**
 * Copy-to-clipboard button with a brief "copied" hint. Used across the SF
 * Symbols page on every code block and icon tile.
 */
export function CopyButton({ text, className = "" }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // fallback for older browsers / non-secure contexts
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      className={`glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition-transform hover:scale-[1.04] active:scale-95 ${className}`}
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
      {copied ? "copied" : "copy"}
    </button>
  );
}
