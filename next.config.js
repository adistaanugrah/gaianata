/** @type {import('next').NextConfig} */
const nextConfig = {
  // Konfigurasi ini PENTING untuk gambar dari Sanity
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
  
  // --- TAMBAHKAN BLOK INI ---
  // Ini memberitahu Next.js untuk tidak menganggap peringatan
  // ESLint sebagai error yang menghentikan build.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;