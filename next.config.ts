// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    // NO proxy aquí: Next 16 no lo soporta.
  },
};

module.exports = nextConfig;
