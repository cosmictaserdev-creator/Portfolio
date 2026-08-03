import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The screenshots are the heaviest thing on the site — AVIF lands roughly
    // 20-30% under WebP on flat UI artwork like this. Netlify's image CDN
    // caches the transform, so the encode cost is paid once.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
