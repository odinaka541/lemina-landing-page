/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lemina.co'],
  },
  async redirects() {
    return [
      {
        source: '/founders.html',
        destination: '/founders',
        permanent: true,
      },
      {
        source: '/thank-you.html',
        destination: '/thank-you',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig