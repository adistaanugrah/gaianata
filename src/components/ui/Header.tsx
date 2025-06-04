import Link from 'next/link';
import Image from 'next/image';
import { FaPinterestP, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  return (
    // (1) Padding header di mobile bisa dipertimbangkan untuk dikurangi sedikit lagi jika perlu, misal px-1
    <header className="sticky top-0 z-50 bg-white shadow-md py-3 px-2 sm:px-4 lg:px-8 font-secondary">
      <div className="container mx-auto flex justify-between items-center">

        {/* Grup Navigasi Kiri */}
        <nav className="flex-1 min-w-0">
          {/* (2) Font lebih kecil, spasi lebih rapat, hilangkan letter-spacing di mobile */}
          <ul className="flex flex-wrap justify-start items-center 
                         space-x-1 sm:space-x-2         силы {/* space-x-1 untuk mobile, sm:space-x-2 */}
                         text-[9px] sm:text-xs lg:text-sm {/* Ukuran font: 10px -> xs -> sm */}
                         tracking-normal sm:tracking-wider {/* Letter spacing normal di mobile, wider di sm+ */}
                          text-textDarkGray gap-y-1">
            <li><Link href="#home" className="hover:text-textPurpleHover">Home</Link></li>
            <li><Link href="#about-us" className="hover:text-textPurpleHover whitespace-nowrap">About Us</Link></li>
            <li><Link href="#our-service" className="hover:text-textPurpleHover whitespace-nowrap">Our Service</Link></li>
          </ul>
        </nav>

        {/* Logo di Tengah */}
        {/* (3) Kontainer logo, w-16 (64px) atau w-20 (80px) di mobile. Sesuaikan jika perlu. */}
        <div className="px-1 sm:px-2 flex-shrink-0 w-16 sm:w-20 lg:w-48"> {/* Contoh: lg:w-48 (192px) */}
          <Link href="#home">
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

        {/* Grup Navigasi Kanan + Sosial Media */}
        <div className="flex flex-1 min-w-0 items-center justify-end">
          <nav className="min-w-0">
            {/* (2) Font lebih kecil, spasi lebih rapat, hilangkan letter-spacing di mobile */}
            <ul className="flex flex-wrap justify-end items-center
                           space-x-1 sm:space-x-2        {/* space-x-1 untuk mobile, sm:space-x-2 */}
                           text-[9px] sm:text-xs lg:text-sm {/* Ukuran font: 10px -> xs -> sm */}
                           tracking-normal sm:tracking-wider {/* Letter spacing normal di mobile, wider di sm+ */}
                            text-textDarkGray gap-y-1">
              <li><Link href="#our-team" className="hover:text-brandPurpleHover whitespace-nowrap">Our Team</Link></li>
              <li><Link href="#contact" className="hover:text-textPurpleHover whitespace-nowrap">Our Contact</Link></li>
            </ul>
          </nav>
          {/* Ikon Sosial Media */}
          {/* (4) Ukuran ikon dan spasi ikon sosial bisa dipertahankan atau sedikit disesuaikan jika perlu */}
          <div className="hidden sm:flex space-x-1.5 pl-1.5 items-center text-gray-600"> {/* space-x-1.5, pl-1.5 */}
             <a href="https://id.pinterest.com/gainataslaras/" className="hover:text-textPurpleHover"><FaPinterestP size={12} /></a> {/* size 12-14 */}
             <a href="https://www.instagram.com/gaianata/" className="hover:text-textPurpleHover"><FaInstagram size={12} /></a>
             <a href="https://wa.me/6287785739449" className="hover:text-textPurpleHover"><FaWhatsapp size={12} /></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;