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
        hostname: 'api.microlink.io',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
