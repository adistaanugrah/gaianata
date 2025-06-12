// src/app/layout.tsx

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

// --- TAMBAHAN: Import modul Node.js untuk membaca file ---
import fs from 'fs';
import path from 'path';

// --- Konfigurasi Font Anda (tetap sama) ---
const museo = localFont({
  src: [{ path: '../../public/fonts/Museo300-Regular.otf', weight: '300', style: 'normal' }],
  variable: '--font-museo',
  display: 'swap',
});
const didot = localFont({
  src: [
    { path: '../../public/fonts/Didot-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Didot-Italic.ttf', weight: '400', style: 'italic' },
  ],
  variable: '--font-didot',
  display: 'swap',
});
const simpleAsk = localFont({
  src: [{ path: '../../public/fonts/SimpleAsk-Regular.ttf', weight: '400', style: 'normal' }],
  variable: '--font-simple-ask',
  display: 'swap',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Gaianata - “Bespoke In Every Bloom, Tailored To Your Moment”',
  description: 'Wedding & Event Decorator | Designer | Floral Art',
  viewport: 'width=device-width, initial-scale=1',
  icons: { icon: '/gaia-nata-icon.png' },
};

// --- TAMBAHAN: Fungsi untuk membaca data settings.json ---
const getSettingsData = () => {
  const filePath = path.join(process.cwd(), 'src/content/settings.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // --- TAMBAHAN: Panggil fungsi untuk mendapatkan data ---
  const settings = getSettingsData();

  return (
    <html lang="en" className={`${poppins.variable} ${museo.variable} ${didot.variable} ${simpleAsk.variable}`}>
      <body className="font-sans">
        {/* --- PERUBAHAN: Kirim data settings sebagai props --- */}
        <Header settings={settings} />
        <main>{children}</main>
        {/* --- PERUBAHAN: Kirim data settings sebagai props --- */}
        <Footer settings={settings} />
      </body>
    </html>
  );
}