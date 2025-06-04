"use client"; // <-- TETAPKAN BARIS INI DI PALING ATAS
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeInWhenVisible from '../../components/ui/FadeInWhenVisible';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const ServicesIntroSection = () => {
  const carouselImages = [
    '/images/service-image-1.jpg',
    '/images/service-image-2.jpg',
    '/images/service-image-3.jpg',
  ];

  return (
    <section id="our-service" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

          {/* Kolom Kiri: Carousel Gambar */}
          <div className="w-full lg:w-1/2">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              className="mySwiper rounded-lg overflow-hidden shadow-lg"
            >
              {carouselImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={src}
                    alt={`Service example ${index + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Kolom Kanan: Teks Deskripsi & Tombol */}
          {/* Menghapus bg-brandPurple agar teks gelap terlihat di bg-white section */}
          {/* Jika ingin background berwarna di sini, pastikan warna teks kontras (misal text-white) */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 rounded-lg text-center lg:text-center flex flex-col justify-center min-h-[400px] md:min-h-[calc(100%-2rem)]"> {/* md:min-h... agar tinggi konsisten dg carousel */}
            <FadeInWhenVisible yOffset={20} duration={0.5} >
              {/* Paragraf Pertama */}
              <p className="font-primary text-brandtext-primary text-lg md:text-xl leading-relaxed mb-6 md:mb-8">
                {/* 
                  'font-primary': Menggunakan font Museo.
                  'text-brandtext-primary': Warna teks #3A3A3A.
                  'text-lg md:text-xl': Ukuran font. Sesuaikan jika perlu.
                  'leading-relaxed': Jarak antar baris.
                  'mb-6 md:mb-8': Margin bawah untuk memberi jarak ke paragraf berikutnya.
                */}
                <span className="font-semibold">gaia</span>nata offers complete decoration services, including concept development, theme design, lighting, table styling, and floral arrangements.
                {/* 
                  Gunakan <span className="font-semibold"> jika Museo weight 600 dimuat, 
                  atau <span className="font-bold"> jika Museo weight 700 dimuat.
                  Tag <strong> juga bisa, tapi kelas Tailwind lebih eksplisit.
                */}
              </p>

              {/* Paragraf Kedua */}
              <p className="font-primary text-brandtext-primary text-lg md:text-xl leading-relaxed">
                From Cultural ceremonies, Engagements, Akad Nikah & Holy Matrimonies, to Wedding Receptions and other events — we’re here to make your vision come to life.
              </p>
            </FadeInWhenVisible>
            
            {/* Tombol */}
            <Link href="#portfolio" className="mt-8 md:mt-10 inline-block"> {/* Tambah margin atas lebih konsisten */}
              <button
                className="inline-block bg-brand-primary text-white px-8 py-3 rounded-3xl text-sm tracking-wider font-primary hover:bg-brand-primary-hover transition duration-300"
                // ^^^^^^^^^^^^^^^^^^^^^^^^                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                // Warna tombol diubah ke brand colors Anda
              >
                 explore our services
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesIntroSection;