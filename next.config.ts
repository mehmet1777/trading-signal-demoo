import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  poweredByHeader: false,
  distDir: '.next',
  // Vercel için output ayarı
  output: 'standalone',
  // Experimental ayarlar
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;