import Link from 'next/link';
import Image from 'next/image';
import { FaPinterestP, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  return (
    // Padding horizontal: px-4 (mobile) mungkin sudah cukup, sm:px-6, lg:px-8 untuk layar lebih besar
    <header className="sticky top-0 z-50 bg-white shadow-md py-4 px-4 sm:px-6 lg:px-8">
      {/* Ganti justify-between dengan flex-wrap jika perlu di layar sangat kecil,
          tapi biasanya justify-between cukup */}
      <div className="container mx-auto flex justify-between items-center">

        {/* Grup Navigasi Kiri */}
        <nav className="flex-1 min-w-0"> {/* Tambah flex-1 dan min-w-0 agar bisa mengecil */}
          {/* Kurangi space-x di mobile jika perlu */}
          <ul className="flex space-x-3 sm:space-x-4 text-xs sm:text-sm uppercase tracking-wider text-gray-600 justify-start"> {/* space-x-3, justify-start */}
            <li><Link href="#home" className="hover:text-purple-700">Home</Link></li>
            <li><Link href="#about-us" className="hover:text-purple-700">About Us</Link></li>
            <li><Link href="#our-service" className="hover:text-purple-700">Our Service</Link></li>
          </ul>
        </nav>

        {/* Logo di Tengah */}
        {/* Ukuran logo mungkin perlu dikecilkan lagi untuk mobile, tapi 100x50 mungkin oke */}
        <div className="px-2 sm:px-4 flex-shrink-0 w-24 lg:w-96"> {/* Beri sedikit padding horizontal logo */}
          <Link href="#home">
            <Image
              src="/images/gaianatalogo_h_2.png"
              alt="Gaia Nata Logo"
              width={704} // Mungkin coba 80?
              height={352}  // Mungkin coba 40? Sesuaikan rasio!
              className="h-auto"
              priority
            />
          </Link>
        </div>

        {/* Grup Navigasi Kanan + Sosial Media */}
        <div className="flex flex-1 min-w-0 items-center justify-end space-x-3 sm:space-x-4"> {/* Tambah flex-1, min-w-0, justify-end */}
          <nav>
            <ul className="flex space-x-3 sm:space-x-4 text-xs sm:text-sm uppercase tracking-wider text-gray-600">
              <li><Link href="#our-team" className="hover:text-purple-700">Our Team</Link></li>
              <li><Link href="#contact" className="hover:text-purple-700">Our Contact</Link></li>
            </ul>
          </nav>
          {/* Ikon Sosial Media */}
          <div className="hidden sm:flex space-x-3 text-gray-600 items-center"> {/* Sembunyikan ikon di layar xs (opsional) */}
            {/* ... ikon Anda ... */}
             <a href="https://id.pinterest.com/gainataslaras/" className="hover:text-purple-700 ..."><FaPinterestP size={16} /></a> {/* Perkecil ikon sedikit */}
             <a href="https://www.instagram.com/gaianata/" className="hover:text-purple-700 ..."><FaInstagram size={16} /></a>
             <a href="https://wa.me/6287785739449" className="hover:text-purple-700 ..."><FaWhatsapp size={16} /></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;