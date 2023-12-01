/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        util: require.resolve('util/'),
        assert: require.resolve('assert/'),
        zlib: require.resolve('browserify-zlib'),
        buffer: require.resolve('buffer/'),
        stream: require.resolve('stream-browserify'),
      };
    }

    return config;
  },
};

module.exports = nextConfig;
