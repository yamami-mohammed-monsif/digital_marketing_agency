import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable gzip compression
  compress: true,

  // Enable SWC minification
  swcMinify: true,

  // Image optimization settings
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24, // 24 hours
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Remove x-powered-by header
  poweredByHeader: false,

  // Production optimizations
  reactStrictMode: true,
  productionBrowserSourceMaps: false,

  // Experimental features
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

export default nextConfig;
