const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    domains: ['images.unsplash.com', 'cdn.sanity.io'],
    loader: 'custom',
  },
  exportPathMap: () => {
    return {
      '/': { page: '/' },
    }
  },
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    register: true,
    dest: 'public',
  },
})
