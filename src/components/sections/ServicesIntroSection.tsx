// src/components/sections/ServicesIntroSection.tsx
"use client"; 
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeInWhenVisible from '../../components/ui/FadeInWhenVisible'; // Pastikan path ini benar

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
          {/* Beri tinggi yang lebih terkontrol pada div pembungkus Swiper atau Swiper itu sendiri */}
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
              // Tentukan tinggi Swiper untuk berbagai breakpoint
              // Mobile (default & landscape): h-[250px] atau bisa pakai vh (misal h-[50vh] atau h-[60vh])
              // Tablet: sm:h-[300px], md:h-[350px]
              // Desktop: lg:h-[480px] (sesuai aspek rasio 4:3 jika lebar kolom kiri sekitar 640px)
              className="mySwiper rounded-3xl overflow-hidden shadow-lg h-[250px]] sm:h-[300px] md:h-[350px] lg:h-[480px]"
            >
              {carouselImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={src}
                    alt={`Service example ${index + 1}`}
                    width={800} // Tetap penting untuk Next.js Image optimization & aspect ratio hint
                    height={600} // Tetap penting untuk Next.js Image optimization & aspect ratio hint
                    // Gambar mengisi kontainer SwiperSlide dengan object-cover
                    className="w-full h-full object-cover" 
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Kolom Kanan: Teks Deskripsi & Tombol */}
          <div 
            className="w-full lg:w-1/2 p-8 lg:p-12 rounded-lg text-center lg:text-center flex flex-col justify-center 
                       min-h-[300px] lg:min-h-[480px]" // Sesuaikan min-h agar serasi dengan tinggi carousel
          >
            <FadeInWhenVisible yOffset={20} duration={0.5} >
              <p className="font-primary text-brandtext-primary text-lg md:text-xl leading-relaxed mb-6 md:mb-8">
                <span className="font-semibold">gaia</span>nata offers complete decoration services, including concept development, theme design, lighting, table styling, and floral arrangements.
              </p>
              <p className="font-primary text-brandtext-primary text-lg md:text-xl leading-relaxed">
                From Cultural ceremonies, Engagements, Akad Nikah & Holy Matrimonies, to Wedding Receptions and other events — we’re here to make your vision come to life.
              </p>
            </FadeInWhenVisible>
            
            <Link href="#portfolio" className="mt-8 md:mt-10 inline-block">
              <button
                className="inline-block bg-brand-primary text-white px-8 py-3 rounded-3xl text-sm tracking-wider font-quartenary italic hover:bg-brand-primary-hover transition duration-300"
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