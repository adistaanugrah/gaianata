/** @type {import('next').NextConfig} */
const nextConfig = {
    // Tambahkan blok 'images' ini
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '',
          pathname: '/images/**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;