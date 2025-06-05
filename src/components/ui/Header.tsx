import Link from 'next/link';
import Image from 'next/image';
import { FaPinterestP, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { IoMailOutline } from "react-icons/io5";
import { PiPinterestLogo } from "react-icons/pi";



const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-3 font-secondary">
      {/* 
        Kontainer utama header:
        - Mobile: flex-col (item ditumpuk vertikal)
        - Desktop (md+): flex-row (item berjajar horizontal), items-center, justify-between
        - px-2 untuk padding horizontal mobile, sm:px-4 dst untuk layar lebih besar
      */}
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-2 sm:px-4 lg:px-8">

        {/* BARIS 1: LOGO (Mobile) / LOGO DI TENGAH (Desktop) */}
        {/* 
          - Mobile: w-full, flex justify-center, py-2 (padding atas bawah logo)
          - Desktop: md:order-2 (untuk tata letak NavKiri-Logo-NavKanan), md:flex-shrink-0, md:py-0 (reset padding)
                     md:px-2 lg:px-4 (padding horizontal logo di desktop)
                     atur lebar logo untuk desktop
        */}
        <div className="w-full flex justify-center py-2 
                       md:order-2 md:flex-shrink-0 md:py-0 md:px-2 lg:px-4 
                       md:w-36 lg:w-48 xl:w-56"> {/* Sesuaikan lebar logo desktop */}
          <Link href="#home" className="block w-32 md:w-full"> {/* Lebar logo di mobile, md:w-full agar mengisi kontainer desktopnya */}
            <Image
              src="/images/gaianatalogo_h_2.png"
              alt="Gaia Nata Logo"
              width={704}
              height={352}
              className="h-auto w-full"
              priority
            />
          </Link>
        </div>

        {/* BARIS 2: NAVIGASI & SOSIAL (Mobile) / NAVIGASI KIRI (Desktop) */}
        {/*
          - Mobile: w-full, pt-1 pb-2 (padding atas bawah untuk baris navigasi)
          - Desktop: md:order-1 (pindah ke kiri), md:flex-1, md:min-w-0, md:pt-0 md:pb-0
        */}
        <nav className="w-full pt-1 pb-2
                        md:order-1 md:flex-1 md:min-w-0 md:pt-0 md:pb-0">
          {/* 
            UL untuk navigasi:
            - Mobile: flex-wrap, justify-center (semua item navigasi & sosial di sini)
            - Desktop: justify-start (hanya nav kiri)
          */}
          <ul className="flex flex-wrap justify-center items-center 
                         md:justify-start
                         space-x-2 sm:space-x-2.5 md:space-x-3 {/* Spasi antar item */}
                         text-[11px] sm:text-xs lg:text-sm {/* Ukuran font */}
                         tracking-normal sm:tracking-wider
                         text-textDarkGray gap-y-2 md:gap-y-1"> {/* gap-y-2 untuk mobile jika wrap, md:gap-y-1 */}
            
            {/* Item Navigasi Kiri (Selalu ada) */}
            <li><Link href="#about-us" className="hover:text-textPurpleHover whitespace-nowrap">About Us</Link></li>
            <li><Link href="#our-service" className="hover:text-textPurpleHover whitespace-nowrap">Our Services</Link></li>

            {/* Item Navigasi Kanan (Hanya muncul di mobile dalam UL ini, di desktop pindah ke blok lain) */}
            <li className="md:hidden"><Link href="#our-team" className="hover:text-brandPurpleHover whitespace-nowrap">Our Team</Link></li>
            <li className="md:hidden"><Link href="#contact" className="hover:text-textPurpleHover whitespace-nowrap">Our Contact</Link></li>
            
            {/* Ikon Sosial Media (Hanya muncul di mobile dalam UL ini, di desktop pindah ke blok lain) */}
            {/* Bungkus ikon dalam list item agar alignment dan spacing konsisten */}
            <li className="md:hidden flex items-center space-x-2 pl-1"> {/* pl-1 untuk sedikit jarak jika item nav terakhir */}
               <a href="https://www.instagram.com/gaianata/" className="hover:text-textPurpleHover"><FaInstagram size={14} /></a>
               <a href="https://wa.me/6287785739449" className="hover:text-textPurpleHover"><FaWhatsapp size={14} /></a>
               <a href="mailto:hello@gaianata.id" className="hover:text-textPurpleHover"><FaEnvelope size={14} /></a>
               <a href="https://id.pinterest.com/gainataslaras/" className="hover:text-textPurpleHover"><FaPinterestP size={14} /></a>
            </li>
          </ul>
        </nav>

        {/* NAVIGASI KANAN & SOSIAL MEDIA (HANYA UNTUK DESKTOP) */}
        {/*
          - Mobile: hidden
          - Desktop: md:order-3, md:flex, md:flex-1, md:min-w-0, md:items-center, md:justify-end
        */}
        <div className="hidden md:flex md:order-3 md:flex-1 md:min-w-0 md:items-center md:justify-end">
          <nav className="min-w-0">
            <ul className="flex items-center
                           space-x-2.5 md:space-x-3 
                           text-xs lg:text-sm
                           tracking-wider 
                           text-textDarkGray">
              <li><Link href="#our-team" className="hover:text-brandPurpleHover whitespace-nowrap">Our Team</Link></li>
              <li><Link href="#contact" className="hover:text-textPurpleHover whitespace-nowrap">Our Contact</Link></li>
            </ul>
          </nav>
          <div className="flex space-x-2 pl-3 items-center text-gray-600"> {/* pl-3 untuk jarak dari nav kanan */}
             <a href="https://www.instagram.com/gaianata/" className="hover:text-textPurpleHover"><FaInstagram size={14} /></a>
             <a href="https://wa.me/6287785739449" className="hover:text-textPurpleHover"><FaWhatsapp size={14} /></a>
             <a href="mailto:hello@gaianata.id" className="hover:text-textPurpleHover"><IoMailOutline size={15} /></a>
             <a href="https://id.pinterest.com/gainataslaras/" className="hover:text-textPurpleHover"><PiPinterestLogo size={15} /></a>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;