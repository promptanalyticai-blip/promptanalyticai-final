import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {},
  },

  // 👇 Esto es lo que necesita Turbopack para ApexCharts
  transpilePackages: ["react-apexcharts"],
};

export default nextConfig;
