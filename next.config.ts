import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable gzip compression
  compress: true,

  // Image optimization settings
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    minimumCacheTTL: 60,
  },

  // Remove x-powered-by header
  poweredByHeader: false,

  // Production optimizations
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
};

export default nextConfig;
