// Original set of minimal geometric line marks (circles, squares,
// triangles, crosses) used as the site's scattered decorative texture.
// Built from scratch out of basic primitives — not traced from any
// reference — just working in the same "simple geometric glyph" genre.
import type { SVGProps } from "react";

export type GeoSymbolId =
  | "ring"
  | "ring-dot"
  | "ring-cross"
  | "ring-slash"
  | "square"
  | "square-dot"
  | "diamond"
  | "triangle-up"
  | "triangle-down"
  | "dome"
  | "bowl"
  | "cross"
  | "asterisk"
  | "grid"
  | "chevron-down"
  | "hourglass"
  | "target"
  | "lens";

const shared = {
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const paths: Record<GeoSymbolId, React.ReactNode> = {
  ring: <circle cx="20" cy="20" r="13" />,
  "ring-dot": (
    <>
      <circle cx="20" cy="20" r="13" />
      <circle cx="20" cy="20" r="1.6" fill="currentColor" stroke="none" />
    </>
  ),
  "ring-cross": (
    <>
      <circle cx="20" cy="20" r="13" />
      <line x1="20" y1="14" x2="20" y2="26" />
      <line x1="14" y1="20" x2="26" y2="20" />
    </>
  ),
  "ring-slash": (
    <>
      <circle cx="20" cy="20" r="13" />
      <line x1="11" y1="29" x2="29" y2="11" />
    </>
  ),
  square: <rect x="8" y="8" width="24" height="24" />,
  "square-dot": (
    <>
      <rect x="8" y="8" width="24" height="24" />
      <circle cx="20" cy="20" r="1.6" fill="currentColor" stroke="none" />
    </>
  ),
  diamond: <rect x="9" y="9" width="22" height="22" transform="rotate(45 20 20)" />,
  "triangle-up": <polygon points="20,7 32,31 8,31" />,
  "triangle-down": <polygon points="20,33 8,9 32,9" />,
  dome: <path d="M7 27a13 13 0 0 1 26 0" />,
  bowl: <path d="M7 13a13 13 0 0 0 26 0" />,
  cross: (
    <>
      <line x1="20" y1="8" x2="20" y2="32" />
      <line x1="8" y1="20" x2="32" y2="20" />
    </>
  ),
  asterisk: (
    <>
      <line x1="20" y1="9" x2="20" y2="31" />
      <line x1="10" y1="14" x2="30" y2="26" />
      <line x1="30" y1="14" x2="10" y2="26" />
    </>
  ),
  grid: (
    <>
      <rect x="7" y="7" width="11" height="11" />
      <rect x="22" y="7" width="11" height="11" />
      <rect x="7" y="22" width="11" height="11" />
      <rect x="22" y="22" width="11" height="11" />
    </>
  ),
  "chevron-down": <polyline points="9,14 20,27 31,14" />,
  hourglass: <path d="M11 8h18l-9 12-9 12h18l-9-12" />,
  target: (
    <>
      <circle cx="20" cy="20" r="13" />
      <circle cx="20" cy="20" r="6" />
    </>
  ),
  lens: <path d="M14 8a17 17 0 0 1 0 24M26 8a17 17 0 0 0 0 24" />,
};

export const GEO_SYMBOL_IDS = Object.keys(paths) as GeoSymbolId[];

export function GeoSymbol({
  id,
  ...props
}: { id: GeoSymbolId } & SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      {paths[id]}
    </svg>
  );
}
