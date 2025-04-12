import Link from 'next/link';
import Image from 'next/image';
import { FaPinterestP, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  return (
    // Kurangi padding vertikal (py-4)
    <header className="sticky top-0 z-50 bg-white shadow-md py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">

        {/* Grup Navigasi Kiri (Sesuaikan spacing) */}
        <nav>
          <ul className="flex space-x-5 md:space-x-5 text-xs sm:text-sm uppercase tracking-wider text-gray-600"> {/* Ubah ke space-x-5 */}
            <li><Link href="#home" className="hover:text-purple-700">Home</Link></li>
            <li><Link href="#about-us" className="hover:text-purple-700">About Us</Link></li>
            <li><Link href="#our-service" className="hover:text-purple-700">Our Service</Link></li>
          </ul>
        </nav>

        {/* Logo di Tengah (Perkecil ukuran) */}
        <div className="mx-4 flex-shrink-0">
          <Link href="/">
            {/* Perkecil width/height logo */}
            <Image
              src="/images/logo-gaia-nata3.png"
              alt="Gaia Nata Logo"
              width={500} // Kurangi dari 120
              height={50}  // Kurangi dari 60
              className="h-auto"
              priority
            />
          </Link>
        </div>

        {/* Grup Navigasi Kanan + Sosial Media (Sesuaikan spacing) */}
        <div className="flex items-center space-x-5 md:space-x-5"> {/* Sesuaikan spacing jika perlu */}
      <nav>
        <ul className="flex space-x-5 md:space-x-5 text-xs sm:text-sm uppercase tracking-wider text-gray-600">
          <li><Link href="#our-team" className="hover:text-purple-700">Our Team</Link></li>
          <li><Link href="#contact" className="hover:text-purple-700">Our Contact</Link></li>
        </ul>
      </nav>

      {/* === IKON SOSIAL MEDIA (Update di sini) === */}
      <div className="flex space-x-3 sm:space-x-4 text-gray-600 items-center">
        <a
          href="https://id.pinterest.com/gainataslaras/" // <-- Ganti dengan URL Pinterest Anda
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pinterest"
          className="hover:text-purple-700 transition duration-300" // Terapkan hover color di <a>
        >
          <FaPinterestP size={18} /> {/* <-- Ganti 'P' dengan ikon */}
        </a>
        <a
          href="https://instagram.com/gaianata" // <-- Ganti dengan URL Instagram Anda
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-purple-700 transition duration-300"
        >
          <FaInstagram size={18} /> {/* <-- Ganti 'I' dengan ikon */}
        </a>
        <a
          href="https://wa.me/6287785739449" // <-- Pastikan link WA benar
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:text-purple-700 transition duration-300"
        >
          <FaWhatsapp size={18} /> {/* <-- Ganti 'W' dengan ikon */}
        </a>
      </div>
      {/* === Akhir Ikon Sosial Media === */}

    </div>

  </div>
</header>
  );
};

export default Header;