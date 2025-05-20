// src/app/layout.tsx
import type { Metadata } from 'next';
// Import Poppins dan font serif Anda (misal Playfair_Display)
import { Playfair_Display, Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

// Konfigurasi font Serif (misal Playfair Display)
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Ketebalan yang dibutuhkan untuk judul
  variable: '--font-playfair', // Nama variabel CSS
});

// Konfigurasi font Sans Serif (Poppins)
const poppins = Poppins({
  subsets: ['latin'],
  // Pilih weight yang akan Anda gunakan di seluruh web
  // (400=regular, 500=medium, 600=semibold, 700=bold)
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins', // Nama variabel CSS
});

export const metadata: Metadata = {
  title: 'Gaia Nata - Bespoke Floral & Event Design',
  description: 'Creating unforgettable moments with bespoke floral art and event decoration.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    // GANTI nilai 'icon' dengan path ke file ikon BARU Anda
    icon: '/gaia-nata-icon.png', // <-- CONTOH jika nama file Anda gaia-nata-icon.png
    // Atau jika pakai SVG: icon: '/gaia-nata-icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Gabungkan semua variabel font di tag html
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      {/* Atur font default body ke sans (yang akan diarahkan ke Poppins) */}
      <body className="font-sans"> {/* <-- Gunakan font-sans sebagai default */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}