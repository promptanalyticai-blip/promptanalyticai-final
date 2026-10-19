/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignorar errores de TypeScript en producción
  typescript: {
    ignoreBuildErrors: true,
  },

  // Eliminar claves obsoletas
  // Next.js 16 ya no permite eslint ni experimental.serverActions aquí

  // Configuración estable para Vercel + Turbopack
  reactStrictMode: true,

  // Puedes agregar aquí otras configuraciones válidas si las necesitas
};

module.exports = nextConfig;
