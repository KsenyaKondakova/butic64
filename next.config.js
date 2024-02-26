/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'place-images.hb.vkcs.cloud',
      },
      {
        protocol: 'https',
        hostname: 'place-images.hb.ru-msk.vkcs.cloud',
      },
    ],
  },
};

module.exports = nextConfig;
