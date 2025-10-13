import type { NextConfig } from 'next'
import { i18n } from './next-i18next.config.js'

const nextConfig: NextConfig = {
  i18n,
  experimental: {
    cacheComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
