// src/app/page.tsx

import { client } from '@/sanity/client';
import { groq } from 'next-sanity';

import HeroSection from '@/components/sections/HeroSection';
import ServicesIntroSection from '@/components/sections/ServicesIntroSection';
import AboutSection from '@/components/sections/AboutSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TeamSection from '@/components/sections/TeamSection';
import ContactSection from '@/components/sections/ContactSection';

// Query untuk mengambil semua data dalam satu panggilan
const query = groq`{
  "pageData": *[_type == "homepage"][0],
  "settingsData": *[_type == "settings"][0]
}`;

// Kita tandai sebagai dinamis untuk memastikan data selalu fresh
export const revalidate = 10; 

export default async function Home() {
  const { pageData, settingsData } = await client.fetch(query);
  // ...
  return (
    <>
      {/* ... */}
      <PortfolioSection data={pageData.portfolio_section} settings={settingsData} />
      {/* ... */}
    </>
  );
}