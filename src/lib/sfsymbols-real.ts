// Client-side loader for real SF Symbol path data. Served via a Route Handler
// (/api/sfsymbols-real) because the payload is too large for static public/
// asset serving. Maps an apple id (apple name, '.'->'-') to { a, w, h, d }
// where `d` is either a single SVG path `d` string or an array of { d, o }
// layers (o = fillAlpha). Fetches lazily alongside the catalog; the catalog
// shows only symbols that have real path data.

export type RealColor = { d: string; o: number };
export type RealSymbol = {
  a: string;
  w: number;
  h: number;
  d: string | RealColor[];
};

export type RealMap = Record<string, RealSymbol>;

const URL = "/api/sfsymbols-real";

let cache: Promise<RealMap> | null = null;

export function loadRealSymbols(): Promise<RealMap> {
  if (!cache) {
    cache = fetch(URL)
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status));
        return res.json();
      })
      .then((data: RealMap) => data)
      .catch((err) => {
        cache = null; // allow retry
        throw err;
      });
  }
  return cache;
}
