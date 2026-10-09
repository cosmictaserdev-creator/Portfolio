"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Search, Inbox, X, Loader2, Check } from "lucide-react";
import { ensureGsapPlugins, gsap, prefersReducedMotion } from "@/lib/gsap";
import { SfRealGlyph } from "@/components/sfsymbols/SfRealGlyph";
import { loadRealSymbols, type RealMap, type RealSymbol } from "@/lib/sfsymbols-real";
import { type SfSymbol, type SfVariant, symbolKotlin } from "@/lib/sfsymbols";

const JSON_URL = "/sfsymbols-catalog.json";

export function CatalogBrowser() {
  const [symbols, setSymbols] = useState<SfSymbol[] | null>(null);
  const [real, setReal] = useState<RealMap | null>(null);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [variant, setVariant] = useState<SfVariant>("dualtone");

  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let alive = true;
    Promise.all([
      fetch(JSON_URL).then((res) => {
        if (!res.ok) throw new Error(String(res.status));
        return res.json();
      }),
      loadRealSymbols(),
    ])
      .then(([cat, realData]: [SfSymbol[], RealMap]) => {
        if (!alive) return;
        setSymbols(cat);
        setReal(realData);
      })
      .catch(() => alive && setError(true));
    return () => {
      alive = false;
    };
  }, []);

  // Only symbols that have real path data are shown — no designed-tile fallback.
  const filtered = useMemo(() => {
    if (!symbols || !real) return [];
    const q = query.trim().toLowerCase();
    return symbols.filter((s) => {
      if (!real[s.a.replace(/\./g, "-")]) return false;
      if (q) {
        return (
          s.a.toLowerCase().includes(q) ||
          s.p.toLowerCase().includes(q) ||
          s.c.some((c) => c.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [symbols, real, query]);

  const loaded = symbols !== null && real !== null;

  // Light entrance for the grid once data lands / search changes.
  useEffect(() => {
    if (!loaded || !filtered.length) return;
    ensureGsapPlugins();
    const grid = gridRef.current;
    if (!grid || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sf-card",
        { autoAlpha: 0, y: 12 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          ease: "expo.out",
          stagger: { each: 0.006, from: "start" },
        }
      );
    }, grid);
    return () => ctx.revert();
    // filtered.length intentionally excluded: the grid re-reveals on search /
    // variant changes, not on result count.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, query, variant]);

  const loading = !loaded && !error;

  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* controls */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`search ${symbols ? filtered.length.toLocaleString() : "1,201"} real glyphs…`}
            className="w-full rounded-full border border-border bg-surface py-3 pl-11 pr-10 text-sm normal-case outline-none transition-colors placeholder:text-muted/70 focus:border-accent"
            aria-label="Search symbols"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted transition-colors hover:text-foreground"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* variant toggle */}
        <div className="flex w-full items-center gap-1 rounded-full border border-border bg-surface p-1 lg:w-auto">
          {(["dualtone", "monochrome"] as SfVariant[]).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setVariant(v)}
              className={`flex-1 rounded-full px-5 py-2 text-sm transition-colors lg:flex-none ${
                variant === v ? "bg-accent-solid text-white" : "text-muted hover:text-foreground"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* result count */}
      <p className="mt-6 text-xs tracking-wide text-muted">
        {loaded ? `${filtered.length.toLocaleString()} real glyphs` : "…"}
        {query && ` for “${query}”`}
      </p>

      {/* scrollable catalog box — independent of page scroll */}
      <div
        ref={gridRef}
        className="mt-4 h-[62vh] min-h-[380px] max-h-[720px] overflow-y-auto rounded-3xl border border-border bg-surface/40 p-5 pr-4"
      >
        {loaded && (
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
            {filtered.map((s) => (
              <SymbolCard
                key={s.a}
                sym={s}
                real={real![s.a.replace(/\./g, "-")]}
                variant={variant}
              />
            ))}
          </div>
        )}

        {/* empty / loading / error states */}
        {loading && (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-muted">
            <Loader2 size={22} className="animate-spin" />
            <p className="text-xs normal-case">loading real glyphs…</p>
          </div>
        )}
        {error && (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-muted">
            <p className="text-sm normal-case">couldn&apos;t load the catalog. refresh?</p>
          </div>
        )}
        {!loading && !error && filtered.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-muted">
            <Inbox size={26} />
            <p className="text-sm normal-case">no real glyphs match that search.</p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="rounded-full border border-border px-5 py-2 text-xs transition-colors hover:border-accent hover:text-accent"
            >
              clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function SymbolCard({
  sym,
  real,
  variant,
}: {
  sym: SfSymbol;
  real: RealSymbol;
  variant: SfVariant;
}) {
  const dot = variant === "dualtone";
  const [copied, setCopied] = useState(false);
  const code = symbolKotlin(sym, variant);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = code;
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
      className="sf-card group relative flex aspect-square flex-col items-center justify-center rounded-2xl border border-border bg-surface transition-colors hover:border-accent/50"
      aria-label={`Copy ${sym.p}`}
      title={`${sym.a}\n${sym.p}`}
    >
      <span
        className="sf-tile flex h-full w-full items-center justify-center rounded-2xl"
        style={{ opacity: dot ? 1 : 0.92 }}
      >
        <SfRealGlyph real={real} variant={variant} className="h-10 w-10 text-accent transition-transform duration-300 group-hover:scale-110" />
      </span>
      {copied && (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-accent-solid/95 text-xs font-medium normal-case text-white">
          <Check size={16} />
        </span>
      )}
    </button>
  );
}
