// src/app/layout.tsx

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

import { client } from '@/sanity/client';
import { groq } from 'next-sanity';

// Font config Anda (tetap sama)
const museo = localFont({ src: [{ path: '../../public/fonts/Museo300-Regular.otf', weight: '300', style: 'normal' }], variable: '--font-museo', display: 'swap' });
const didot = localFont({ src: [ { path: '../../public/fonts/Didot-Regular.ttf', weight: '400', style: 'normal' }, { path: '../../public/fonts/Didot-Italic.ttf', weight: '400', style: 'italic' } ], variable: '--font-didot', display: 'swap' });
const simpleAsk = localFont({ src: [{ path: '../../public/fonts/SimpleAsk-Regular.ttf', weight: '400', style: 'normal' }], variable: '--font-simple-ask', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'Gaianata - “Bespoke In Every Bloom, Tailored To Your Moment”',
  description: 'Wedding & Event Decorator | Designer | Floral Art',
  viewport: 'width=device-width, initial-scale=1',
  icons: { icon: '/gaia-nata-icon.png' },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settingsQuery = groq`*[_type == "settings"][0]`;
  const settings = await client.fetch(settingsQuery);

  return (
    <html lang="en" className={`${poppins.variable} ${museo.variable} ${didot.variable} ${simpleAsk.variable}`}>
      <body className="font-sans">
        {settings && <Header settings={settings} />}
        <main>{children}</main>
        {settings && <Footer settings={settings} />}
      </body>
    </html>
  );
}