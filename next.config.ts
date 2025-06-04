import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Removed output: "export" to enable API routes
  // distDir: "dist", // Using default .next output for server-side functionality
  trailingSlash: true,
  images: {
    unoptimized: true // Required for static hosting
  }
};

export default nextConfig;