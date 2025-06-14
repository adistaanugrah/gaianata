// src/components/ui/Header.tsx

import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { PiPinterestLogo } from 'react-icons/pi';
import { urlForImage } from '@/sanity/image';

const Header = ({ settings }: { settings: any }) => {
  if (!settings) return null;
  const social = settings.social_links || {};
  const logoUrl = urlForImage(settings.site_logo)?.url();

  // Komponen bantu untuk link dengan dua gaya
  const StyledLink = ({ href, boldText, regularText }: { href: string, boldText: string, regularText: string }) => (
    <Link href={href} className="hover:opacity-75 transition-opacity duration-200 whitespace-nowrap">
      <span className="font-bold text-gray-600">{boldText}</span>
      <span className="font-primary text-gray-400">{regularText}</span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-3 font-secondary">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-2 sm:px-4 lg:px-8">
        <div className="w-full flex justify-center py-2 md:order-2 md:flex-shrink-0 md:py-0 md:px-2 lg:px-4 md:w-36 lg:w-48 xl:w-56">
          <Link href="#home" className="block w-32 md:w-full">
            {logoUrl && (
              <Image src={logoUrl} alt="Gaia Nata Logo" width={704} height={352} className="h-auto w-full" priority />
            )}
          </Link>
        </div>
        
        {/* --- PERUBAHAN UTAMA UNTUK LAYOUT MOBILE --- */}
        <nav className="w-full pt-1 pb-2 md:order-1 md:flex-1 md:min-w-0 md:pt-0 md:pb-0">
          {/* Untuk Mobile (di bawah md) */}
          <div className="md:hidden flex justify-center items-center space-x-4 text-[11px] sm:text-xs tracking-widest">
            <StyledLink href="#about-us" boldText="about" regularText="us" />
            <StyledLink href="#portfolio" boldText="our" regularText="services" />
            <StyledLink href="#our-team" boldText="our" regularText="team" />
            <StyledLink href="#contact" boldText="our" regularText="contact" />
            <div className="flex items-center space-x-0.5 text-gray-600">
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-textPurpleHover"><FaInstagram size={15} /></a>
              <a href={social.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-textPurpleHover"><FaWhatsapp size={15} /></a>
              <a href={`mailto:${settings.contact_email}`} className="hover:text-textPurpleHover"><IoMailOutline size={16} /></a>
              <a href={social.pinterest} target="_blank" rel="noopener noreferrer" className="hover:text-textPurpleHover"><PiPinterestLogo size={16} /></a>
            </div>
          </div>
          {/* Untuk Desktop (md dan lebih besar) */}
          <ul className="hidden md:flex flex-wrap items-center md:justify-start space-x-4 md:space-x-6 text-[11px] sm:text-xs lg:text-sm tracking-widest">
            <li><StyledLink href="#about-us" boldText="about" regularText="us" /></li>
            <li><StyledLink href="#portfolio" boldText="our" regularText="services" /></li>
          </ul>
        </nav>
        
        <div className="hidden md:flex md:order-3 md:flex-1 md:min-w-0 md:items-center md:justify-end">
          <nav className="min-w-0">
            <ul className="flex items-center space-x-4 md:space-x-6 text-xs lg:text-sm tracking-widest">
              <li><StyledLink href="#our-team" boldText="our" regularText="team" /></li>
              <li><StyledLink href="#contact" boldText="our" regularText="contact" /></li>
            </ul>
          </nav>
          <div className="flex -space-x-5 pl-3 items-center text-gray-600">
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-textPurpleHover"><FaInstagram size={15} /></a>
            <a href={social.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-textPurpleHover"><FaWhatsapp size={15} /></a>
            <a href={`mailto:${settings.contact_email}`} className="hover:text-textPurpleHover"><IoMailOutline size={16} /></a>
            <a href={social.pinterest} target="_blank" rel="noopener noreferrer" className="hover:text-textPurpleHover"><PiPinterestLogo size={16} /></a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;