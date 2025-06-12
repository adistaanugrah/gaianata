// src/components/ui/Header.tsx

import Link from 'next/link';
import Image from 'next/image';
import { FaPinterestP, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { IoMailOutline } from "react-icons/io5";
import { PiPinterestLogo } from "react-icons/pi";

// --- PERUBAHAN: Terima props 'settings' ---
const Header = ({ settings }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-3 font-secondary">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-2 sm:px-4 lg:px-8">
        <div className="w-full flex justify-center py-2 md:order-2 md:flex-shrink-0 md:py-0 md:px-2 lg:px-4 md:w-36 lg:w-48 xl:w-56">
          <Link href="#home" className="block w-32 md:w-full">
            {/* --- PERUBAHAN: Gunakan data dari props --- */}
            <Image
              src={settings.site_logo}
              alt="Gaia Nata Logo"
              width={704}
              height={352}
              className="h-auto w-full"
              priority
            />
          </Link>
        </div>
        <nav className="w-full pt-1 pb-2 md:order-1 md:flex-1 md:min-w-0 md:pt-0 md:pb-0">
          <ul className="flex flex-wrap justify-center items-center md:justify-start space-x-2 sm:space-x-2.5 md:space-x-3 text-[11px] sm:text-xs lg:text-sm tracking-normal sm:tracking-wider text-textDarkGray gap-y-2 md:gap-y-1">
            <li><Link href="#about-us" className="hover:text-textPurpleHover whitespace-nowrap">About Us</Link></li>
            <li><Link href="#our-service" className="hover:text-textPurpleHover whitespace-nowrap">Our Services</Link></li>
            <li className="md:hidden"><Link href="#our-team" className="hover:text-brandPurpleHover whitespace-nowrap">Our Team</Link></li>
            <li className="md:hidden"><Link href="#contact" className="hover:text-textPurpleHover whitespace-nowrap">Our Contact</Link></li>
            <li className="md:hidden flex items-center space-x-2 pl-1">
              {/* --- PERUBAHAN: Gunakan data dari props --- */}
              <a href={settings.social_links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-textPurpleHover"><FaInstagram size={14} /></a>
              <a href={settings.social_links.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-textPurpleHover"><FaWhatsapp size={14} /></a>
              <a href={`mailto:${settings.contact_email}`} className="hover:text-textPurpleHover"><FaEnvelope size={14} /></a>
              <a href={settings.social_links.pinterest} target="_blank" rel="noopener noreferrer" className="hover:text-textPurpleHover"><FaPinterestP size={14} /></a>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex md:order-3 md:flex-1 md:min-w-0 md:items-center md:justify-end">
          <nav className="min-w-0">
            <ul className="flex items-center space-x-2.5 md:space-x-3 text-xs lg:text-sm tracking-wider text-textDarkGray">
              <li><Link href="#our-team" className="hover:text-brandPurpleHover whitespace-nowrap">Our Team</Link></li>
              <li><Link href="#contact" className="hover:text-textPurpleHover whitespace-nowrap">Our Contact</Link></li>
            </ul>
          </nav>
          <div className="flex space-x-2 pl-3 items-center text-gray-600">
            {/* --- PERUBAHAN: Gunakan data dari props --- */}
            <a href={settings.social_links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-textPurpleHover"><FaInstagram size={14} /></a>
            <a href={settings.social_links.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-textPurpleHover"><FaWhatsapp size={14} /></a>
            <a href={`mailto:${settings.contact_email}`} className="hover:text-textPurpleHover"><IoMailOutline size={15} /></a>
            <a href={settings.social_links.pinterest} target="_blank" rel="noopener noreferrer" className="hover:text-textPurpleHover"><PiPinterestLogo size={15} /></a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;