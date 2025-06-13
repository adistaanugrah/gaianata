/** @type {import('next').NextConfig} */
const nextConfig = {
  // Konfigurasi ini WAJIB agar komponen <Image> dari Next.js
  // bisa menampilkan gambar yang di-hosting di Sanity.
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