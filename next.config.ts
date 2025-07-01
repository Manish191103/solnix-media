import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone', // Recommended for Node.js server environments like Amplify Next.js SSR
  /* config options here */
  // Removed output: "export" to enable API routes
  // distDir: "dist", // Using default .next output for server-side functionality
  trailingSlash: true,
  images: {
    // unoptimized: true, // Disabled to enable Next.js image optimization on platforms like Vercel/Netlify
  },
};

export default nextConfig;
