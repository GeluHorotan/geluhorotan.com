/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: '0.0.0.0',
        protocol: 'http',
        port: '8055',
        pathname: '/assets/*',
      },
      {
        hostname: 'geluhorotan-directus.koyeb.app',
        protocol: 'https',
        pathname: '/assets/*',
      },
      {
        hostname: 'api.microlink.io',
        protocol: 'https',
      },
      {
        hostname: 'localhost',
      },
    ],
  },
};

export default nextConfig;
