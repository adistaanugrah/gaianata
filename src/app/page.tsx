// src/app/page.tsx

import fs from 'fs';
import path from 'path';

// --- BAGIAN YANG HILANG SEBELUMNYA ---
// Pastikan semua komponen section diimpor di sini.
import HeroSection from '@/components/sections/HeroSection';
import ServicesIntroSection from '@/components/sections/ServicesIntroSection';
import AboutSection from '@/components/sections/AboutSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TeamSection from '@/components/sections/TeamSection';
import ContactSection from '@/components/sections/ContactSection';

// Fungsi untuk membaca data JSON
const getHomepageData = () => {
  const filePath = path.join(process.cwd(), 'src/content/homepage.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
};

const getSettingsData = () => {
  const filePath = path.join(process.cwd(), 'src/content/settings.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
};

export default function Home() {
  const pageData = getHomepageData();
  const settingsData = getSettingsData(); // Ambil settings juga

  return (
    <>
      <HeroSection data={pageData.hero_section} />
      <ServicesIntroSection data={pageData.services_section} />
      <AboutSection data={pageData.about_section} />
      <PortfolioSection data={pageData.portfolio_section} />
      <TeamSection data={pageData.team_section} />
      <ContactSection data={pageData.contact_section} settings={settingsData} />
    </>
  );
}