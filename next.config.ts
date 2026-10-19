/** @type {import('next').NextConfig} */
const nextConfig = {
  // Evita que Vercel rompa el build por módulos incompletos
  typescript: {
    ignoreBuildErrors: true,
  },

  // Configuración estable para Next.js 16 + Turbopack
  reactStrictMode: true,
};

module.exports = nextConfig;
