import HeroSection from '@/components/sections/HeroSection'; // Import komponen
import ServicesIntroSection from '@/components/sections/ServicesIntroSection';
import AboutSection from '@/components/sections/AboutSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TeamSection from '@/components/sections/TeamSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <> {/* Gunakan Fragment (<> </>) jika hanya ada satu elemen utama */}
      <HeroSection />
      <ServicesIntroSection /> {/* <-- Tambahkan di sini */}
      <AboutSection />         {/* <-- Tambahkan ini */}
      <PortfolioSection />         {/* <-- Tambahkan ini */}
      <TeamSection />           {/* <-- Tambahkan ini */}
      <ContactSection /> {/* <-- Tambahkan ini */}
      {/* Di sini nanti kita akan menambahkan section lainnya */}
      {/* <ServicesIntroSection /> */}
      {/* <AboutSection /> */}
      {/* ... dst */}
    </>
  );
}