import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Jika tombol download mengarah ke link
import FadeInWhenVisible from '../../components/ui/FadeInWhenVisible';

const PortfolioSection = () => {
  // Data untuk item portfolio (bisa juga diambil dari CMS nanti)
  const portfolioItems = [
    {
      title: 'WEDDING DECORATIONS',
      description: 'Bespoke, artfully designed wedding décor that transforms venues into breathtaking spaces, tailored to each couple\'s vision.',
      imageSrc: '/images/portfolio-wedding.jpg', // Ganti nama file
      altText: 'Elegant wedding decoration example',
    },
    {
      title: 'EVENT DECORATIONS',
      description: 'Sophisticated and immersive décor for private celebrations, corporate events, and special occasions',
      imageSrc: '/images/portfolio-event.jpg', // Ganti nama file
      altText: 'Sophisticated event decoration example',
    },
    {
      title: 'VENUE STYLING & FLORAL DESIGN',
      description: 'Exquisite floral arrangements and custom décor solutions that enhance and personalize any space',
      imageSrc: '/images/portfolio-styling.jpg', // Ganti nama file
      altText: 'Venue styling with floral design example',
    },
  ];

  return (
    // Beri ID agar tombol "explore our services" bisa mengarah ke sini
    // Atur padding vertikal
    // Ganti bg-white jika ingin background berbeda
    <section id="portfolio" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">

        {/* Judul Utama */}
        <FadeInWhenVisible yOffset={30} duration={0.6}>
        <h2 className="text-3xl sm:text-4xl font-serif text-gray-800 mb-6">
          EXPLORE OUR WORK AND GET INSPIRED!
        </h2>
        </FadeInWhenVisible>

               {/* Tombol Download */}
               <div className="mb-12 lg:mb-16">
          <Link
            href="/portfolio.pdf" // <-- Mulai dengan '/' jika file ada di folder public
                                 // Atau gunakan '#' jika belum ada file PDF
            // Styling diterapkan langsung ke komponen Link:
            className="inline-block bg-purple-800 text-white px-8 py-3 rounded uppercase text-sm tracking-wider font-semibold hover:bg-purple-900 transition duration-300"
            // Tambahkan atribut 'download' jika Anda ingin browser langsung download file
            // download="GaiaNata-Portfolio.pdf" // Anda bisa memberi nama file download di sini
          >
            download our portfolio
          </Link> {/* <-- Tidak ada tag <a> lagi di dalamnya */}
        </div>

        {/* Grid untuk Item Portfolio */}
        {/* 'grid grid-cols-1 md:grid-cols-3' -> 1 kolom di mobile, 3 kolom di medium+ */}
        {/* 'gap-8 lg:gap-12' -> Jarak antar item */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {portfolioItems.map((item, index) => (
            // Item Portfolio Individual
            <div key={index} className="flex flex-col items-center text-center">
              {/* Gambar */}
              <div className="mb-4 overflow-hidden rounded-lg shadow-md w-full"> {/* Tambah w-full */}
                <Image
                  src={item.imageSrc}
                  alt={item.altText}
                  width={600} // Sesuaikan rasio aspek
                  height={750} // Sesuaikan rasio aspek
                  className="w-full h-auto object-cover transform hover:scale-105 transition duration-500 ease-in-out" // Efek hover zoom
                />
              </div>
              {/* Judul Item */}
              {/* Ganti font jika perlu (misal font-sans), sesuaikan ukuran/warna */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2 uppercase tracking-wider">
                {item.title}
              </h3>
              {/* Deskripsi Item */}
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;