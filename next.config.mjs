/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow static image imports from src/assets
  images: {
    domains: [],
    unoptimized: false,
  },
  // Preserve @/* alias already in tsconfig
  experimental: {
    // React 19 is default in Next 15 — no extra flag needed
  },
};

export default nextConfig;
