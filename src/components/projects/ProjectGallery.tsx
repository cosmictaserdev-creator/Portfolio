"use client";

import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

// TODO: swap the placeholder screen faces for real app screenshots —
// replace the inner <div> face with next/image and per-screen files.
type Props = {
  title: string;
  gradient: [string, string];
  screens: string[];
};

function ScreenFace({
  title,
  label,
  index,
  total,
  gradient,
}: {
  title: string;
  label: string;
  index: number;
  total: number;
  gradient: [string, string];
}) {
  return (
    <div
      className="no-type flex h-full w-full flex-col justify-between overflow-hidden rounded-[inherit] p-3 text-white"
      style={{
        background: `linear-gradient(165deg, ${gradient[0]}, ${gradient[1]})`,
        filter: `brightness(${1 - index * 0.07})`,
      }}
    >
      <div className="flex items-center justify-between text-[0.55em] opacity-80">
        <span className="no-type">9:41</span>
        <span className="flex gap-1">
          <span className="h-[0.4em] w-[0.4em] rounded-full bg-white/80" />
          <span className="h-[0.4em] w-[0.4em] rounded-full bg-white/80" />
          <span className="h-[0.4em] w-[0.4em] rounded-full bg-white/50" />
        </span>
      </div>

      <div>
        <p className="no-type font-display text-[1.1em] lowercase leading-tight">
          {title}
        </p>
        <p className="no-type text-[0.6em] lowercase opacity-80">{label}</p>
        <p className="no-type mt-1 text-[0.5em] opacity-60">
          {index + 1} / {total}
        </p>
      </div>

      <div className="mx-auto h-[0.25em] w-1/3 rounded-full bg-white/70" />
    </div>
  );
}

export function ProjectGallery({ title, gradient, screens }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(
    () => setActive((a) => (a - 1 + screens.length) % screens.length),
    [screens.length]
  );
  const next = useCallback(
    () => setActive((a) => (a + 1) % screens.length),
    [screens.length]
  );

  // keyboard nav + scroll lock while the lightbox is open
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, close, prev, next]);

  const mid = (screens.length - 1) / 2;

  return (
    <div>
      {/* fanned stack — group hover spreads the fan, card hover lifts it */}
      <button
        type="button"
        onClick={() => {
          setActive(0);
          setOpen(true);
        }}
        aria-label={`Open ${title} gallery`}
        aria-haspopup="dialog"
        className="group relative block h-72 w-full cursor-zoom-in"
      >
        {screens.map((label, i) => {
          const off = i - mid;
          return (
            <div
              key={label}
              className="absolute left-1/2 top-1/2 h-52 w-28 rounded-xl border border-white/25 text-[13px] shadow-lg transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [transform:translate(-50%,-50%)_rotate(var(--rot))_translateY(var(--lift))] group-hover:[transform:translate(-50%,-50%)_rotate(var(--rot-wide))_translateY(var(--lift))] hover:!z-30 hover:[transform:translate(-50%,-62%)_rotate(var(--rot-wide))_scale(1.07)]"
              style={
                {
                  zIndex: i,
                  transformOrigin: "50% 135%",
                  "--rot": `${off * 6}deg`,
                  "--rot-wide": `${off * 14}deg`,
                  "--lift": `${Math.abs(off) * 7}px`,
                } as React.CSSProperties
              }
            >
              <ScreenFace
                title={title}
                label={label}
                index={i}
                total={screens.length}
                gradient={gradient}
              />
            </div>
          );
        })}

        <span className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap text-xs text-muted transition-colors group-hover:text-accent">
          <Maximize2 size={12} />
          view gallery
        </span>
      </button>

      {/* lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery`}
          className="fixed inset-0 z-[90] flex items-center justify-center"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            aria-label="Close gallery"
            onClick={close}
            className="absolute inset-0 animate-[gallery-backdrop-in_0.35s_ease_both] bg-black/75 backdrop-blur-sm"
          />

          <div className="relative h-[70vh] max-h-[560px] w-full max-w-lg animate-[gallery-in_0.45s_cubic-bezier(0.22,1,0.36,1)_both]">
            {screens.map((label, i) => {
              const rel = i - active;
              const wrapped =
                Math.abs(rel) > screens.length / 2
                  ? rel - Math.sign(rel) * screens.length
                  : rel;
              if (Math.abs(wrapped) > 2) return null;
              const isActive = wrapped === 0;

              return (
                <button
                  key={label}
                  type="button"
                  aria-label={isActive ? `${label} (current)` : `Show ${label}`}
                  onClick={() => !isActive && setActive(i)}
                  className="absolute left-1/2 top-1/2 h-full w-[52%] rounded-3xl border border-white/25 text-[26px] shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    zIndex: 10 - Math.abs(wrapped),
                    opacity: isActive ? 1 : 0.4,
                    transform: `translate(calc(-50% + ${wrapped * 58}%), -50%) scale(${
                      isActive ? 1 : 0.8
                    }) rotate(${wrapped * 5}deg)`,
                    pointerEvents: Math.abs(wrapped) > 1 ? "none" : "auto",
                    cursor: isActive ? "default" : "pointer",
                  }}
                >
                  <ScreenFace
                    title={title}
                    label={label}
                    index={i}
                    total={screens.length}
                    gradient={gradient}
                  />
                </button>
              );
            })}
          </div>

          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-6 text-white">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous screen"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition-all hover:scale-110 hover:border-white"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {screens.map((label, i) => (
                <button
                  key={label}
                  type="button"
                  aria-label={`Go to screen ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next screen"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition-all hover:scale-110 hover:border-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:rotate-90 hover:border-white"
          >
            <X size={18} />
          </button>

          <p className="pointer-events-none absolute top-7 left-1/2 -translate-x-1/2 text-sm text-white/80">
            {screens[active]}
          </p>
        </div>
      )}
    </div>
  );
}
