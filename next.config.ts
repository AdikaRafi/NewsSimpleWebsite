import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
      // Tambahkan domain backend kamu nanti di sini
      // {
      //   protocol: 'https',
      //   hostname: 'api.websitemu.com',
      // },
    ],
  },
};

export default nextConfig;
