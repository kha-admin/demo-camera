/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    domains: ['images.unsplash.com', 'cdn.sanity.io'],
    loader: 'custom',
  },
}
