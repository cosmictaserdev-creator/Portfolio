import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // OpenNext Cloudflare serves next/image optimization only through the
    // paid Cloudflare Images binding. All images here are local files already
    // sized for display, so serve them as-is on the free plan. To restore
    // on-the-fly AVIF/WebP conversion later, add an IMAGES binding to
    // wrangler.jsonc and drop `unoptimized`.
    unoptimized: true,
  },
  // Moved here from netlify.toml — OpenNext honors native Next.js redirects.
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/convx",
        permanent: true,
      },
      {
        source: "/projects/:path*",
        destination: "/convx",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
