// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true, // Enable server actions
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
        fs: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
  
