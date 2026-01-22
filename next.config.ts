import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Configuration pour les images externes (si besoin)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
