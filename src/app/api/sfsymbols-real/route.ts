import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";

// Real SF Symbol path data is ~1.7 MB — too large for Next's static public/
// asset serving, so it's streamed through a Route Handler instead. Immutable
// at build time, so clients may cache it indefinitely.
export async function GET() {
  try {
    const file = path.join(process.cwd(), "public", "sfsymbols-real.json");
    const body = await readFile(file, "utf8");
    return new NextResponse(body, {
      status: 200,
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
