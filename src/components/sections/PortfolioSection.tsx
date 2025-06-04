import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeInWhenVisible from '../../components/ui/FadeInWhenVisible';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      // title: 'WEDDING DECORATIONS', // Judul asli bisa di-komentari atau dihapus
      isCustomTitle: true, // Flag untuk judul kustom
      customTitleParts: { // Bagian-bagian untuk judul kustom
        boldPart: "our",
        regularPart: "decoration"
      },
      description: "Whether you're drawn to timeless elegance, modern sophistication, or one-of-a-kind styles, we work closely with you to turn your vision into reality.",
      imageSrc: '/images/portfolio-wedding.jpg',
      altText: 'Wedding decorations by Gaianata', // Alt text bisa lebih deskriptif
    },
    {
      //title: 'EVENT DECORATIONS',
      isCustomTitle: true,
      customTitleParts: { // Bagian-bagian untuk judul kustom
        boldPart: "our",
        regularPart: "design"
      },
      description: 'We thoughtfully craft every detail to reflect your personal story, ensuring a truly memorable experience for you and your guests.',
      imageSrc: '/images/portfolio-event.jpg',
      altText: 'Sophisticated event decoration example',
    },
    {
      title: 'VENUE STYLING & FLORAL DESIGN',
      isCustomTitle: true,
      customTitleParts: { // Bagian-bagian untuk judul kustom
        boldPart: "floral",
        regularPart: "stylist"
      },
      description: 'Our floral creations bring elegance, charm, and the beauty of nature to your celebration — making every moment feel alive with meaning.',
      imageSrc: '/images/portfolio-styling.jpg',
      altText: 'Venue styling with floral design example',
    },
  ];

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">

        <FadeInWhenVisible yOffset={30} duration={0.6}>
        <h2 className="text-3xl sm:text-4xl font-quartenary italic text-textCharcoal mb-6">
          explore our work and get inspired!
        </h2>
        </FadeInWhenVisible>

        <div className="mb-12 lg:mb-16">
          <Link
            href="/portfolio.pdf" 
            className="inline-block bg-brand-primary text-white px-8 py-3 rounded-3xl text-sm tracking-wider font-semibold hover:bg-brand-primary-hover transition duration-300"
            // download="GaiaNata-Portfolio.pdf" 
          >
            download our portfolio
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {portfolioItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Kontainer Gambar Utama */}
              <div className="mb-4 overflow-hidden rounded-3xl shadow-md w-full relative h-[450px] sm:h-[380px] md:h-[320px] lg:h-[400px] xl:h-[450px]">
                <Image
                  src={item.imageSrc}
                  alt={item.altText}
                  fill 
                  style={{ objectFit: 'cover' }} 
                  className="transform hover:scale-105 transition duration-500 ease-in-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Judul Item (Bisa Kustom atau Standar) */}
              {item.isCustomTitle && item.customTitleParts ? (
                <h1 className="text-3xl sm:text-3xl font-semibold mb-3"> 
                  {/* 
                    'font-primary': Font Museo.
                    Ukuran disesuaikan, tidak uppercase, tidak tracking-wider.
                    Margin bawah (mb-3) disesuaikan sedikit.
                  */}
                  <span className="font-primary text-black">{item.customTitleParts.boldPart}</span>
                  <span className="font-primary text-brandbg2-primary">{item.customTitleParts.regularPart}</span>
                  {/* 
                    'font-semibold text-black': Untuk "our". Pastikan Museo weight 600 atau 700 dimuat.
                    'font-normal text-brandbg2-primary': Untuk "decoration". Warna #838383 (abu-abu medium).
                  */}
                </h1>
              ) : (
                <h3 className="text-lg sm:text-xl font-tertiary italic text-textCharcoal mb-2 uppercase tracking-wider">
                  {item.title}
                </h3>
              )}

              {/* Deskripsi Item */}
              {item.isCustomTitle ? ( // Gunakan flag yang sama untuk styling deskripsi terkait judul kustom
                <p className="font-secondary italic text-md text-brandbg2-primary leading-relaxed max-w-xs mx-auto px-1">
                  {/* 
                    'font-primary': Font Museo.
                    'text-brandbg2-primary': Warna #838383 (abu-abu medium).
                    'leading-relaxed': Jarak antar baris.
                    'max-w-xs mx-auto': Mengontrol lebar teks.
                    'px-1': Sedikit padding horizontal.
                  */}
                  {item.description}
                </p>
              ) : (
                <p className="text-textCharcoal font-tertiary italic text-lg max-w-xs mx-auto px-1">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;