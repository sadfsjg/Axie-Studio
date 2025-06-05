/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['placeholder.com', 'via.placeholder.com', 'blob.v0.dev'],
    unoptimized: true,
  },
  // Removing i18n configuration as it's not supported in App Router
  async redirects() {
    return [
      {
        source: '/en',
        has: [
          {
            type: 'header',
            key: 'accept-language',
            value: '(sv|sv-SE)(,|;|$)',
          },
        ],
        destination: '/',
        permanent: false,
      },
      {
        source: '/',
        has: [
          {
            type: 'header',
            key: 'accept-language',
            value: '(en|en-US|en-GB)(,|;|$)',
          },
        ],
        destination: '/en',
        permanent: false,
      },
    ]
  }
}

export default nextConfig
