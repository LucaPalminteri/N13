/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{appDir: true},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3ugyf2ht6aenh.cloudfront.net',
        port: '',
        pathname: '*',
      },
    ],
  },
}

module.exports = nextConfig
