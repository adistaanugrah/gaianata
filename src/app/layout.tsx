// src/app/layout.tsx
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google'; // Kita tetap pakai Poppins dari Google Fonts
import localFont from 'next/font/local';   // Impor untuk font lokal
import './globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

// --- KONFIGURASI FONT LOKAL ---

// 1. Museo (Primary)
const museo = localFont({
  src: [
    {
      path: '../../public/fonts/Museo300-Regular.otf', // GANTI DENGAN NAMA FILE ANDA
      weight: '300', // Sesuai permintaan "Museo 300"
      style: 'normal',
    },
    // Jika ada variasi lain dari Museo yang ingin digunakan, tambahkan di sini
    // Contoh:
    // {
    //   path: '../../public/fonts/Museo500-Regular.otf',
    //   weight: '500',
    //   style: 'normal',
    // },
  ],
  variable: '--font-museo', // Variabel CSS untuk Museo
  display: 'swap',
});

// 2. Didot (Tertiary)
const didot = localFont({
  src: [
    {
      path: '../../public/fonts/Didot-Regular.ttf', // GANTI NAMA FILE JIKA BERBEDA
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Didot-Italic.ttf', // PASTIKAN NAMA FILE INI BENAR
      weight: '400', // Sesuaikan weight jika file italic Anda memiliki weight berbeda
      style: 'italic',
    },
    // Tambahkan variasi bold jika ada dan ingin digunakan
    // {
    //   path: '../../public/fonts/Didot-Bold.ttf',
    //   weight: '700',
    //   style: 'normal',
    // },
  ],
  variable: '--font-didot',
  display: 'swap',
});

// 3. Simple Ask (Quartenary)
const simpleAsk = localFont({
  src: [
    {
      path: '../../public/fonts/SimpleAsk-Regular.ttf', // GANTI DENGAN NAMA FILE ANDA
      weight: '400', // Asumsi 'Regular'
      style: 'normal',
    },
    // Jika ada variasi lain (Bold, Italic) dari Simple Ask, tambahkan di sini
    // Contoh:
    // {
    //   path: '../../public/fonts/SimpleAsk-Bold.ttf',
    //   weight: '700',
    //   style: 'normal',
    // },
  ],
  variable: '--font-simple-ask', // Variabel CSS untuk Simple Ask
  display: 'swap',
});

// --- KONFIGURASI FONT GOOGLE (Poppins - Secondary) ---
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Weight yang sudah ada bisa dipertahankan
  variable: '--font-poppins',
});

// Hapus atau komentari Playfair_Display jika tidak lagi digunakan sebagai font serif utama
// import { Playfair_Display } from 'next/font/google';
// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   variable: '--font-playfair',
// });

export const metadata: Metadata = {
  title: 'Gaianata - “Bespoke In Every Bloom, Tailored To Your Moment”',
  description: 'Wedding & Event Decorator | Designer | Floral Art',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/gaia-nata-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`
      ${poppins.variable}
      ${museo.variable}
      ${didot.variable}
      ${simpleAsk.variable}
      {/* Hapus playfair.variable jika tidak digunakan lagi */}
    `}>
      {/*
        font-sans akan mengambil dari tailwind.config.js,
        yang akan kita set ke Poppins (var(--font-poppins)) sebagai default.
        Jika Anda ingin Museo sebagai default body, ubah 'font-sans' di bawah
        menjadi 'font-primary' dan pastikan 'font-primary' di tailwind.config.js
        menggunakan var(--font-museo). Untuk sekarang, kita biarkan Poppins (via font-sans) sebagai default.
      */}
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}