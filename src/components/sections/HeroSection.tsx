// src/components/sections/HeroSection.tsx
"use client"; // Diperlukan untuk komponen Swiper

import Image from 'next/image';
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// Anda juga bisa menambahkan 'swiper/css/effect-fade'; jika ingin transisi fade, lalu tambahkan EffectFade ke modules dan swiper props

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Tambahkan EffectFade jika digunakan

const HeroSection = () => {
  const heroImages = [
    '/images/Cover1.jpg',
    '/images/Cover2.jpg',
    '/images/Cover3.jpg',
  ];

  return (
    <section id="home" className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Kolom Kiri: Slideshow Gambar */}
      {/* 
        Catatan untuk rounded corners:
        Kelas `rounded-xl md:rounded-xl md:rounded-l-xl` bisa disederhanakan.
        Jika ingin rounded di semua sisi pada semua ukuran layar, cukup `rounded-xl`.
        Jika ingin rounded di semua sisi pada mobile, tapi hanya sisi kiri pada desktop (dan kanan tidak rounded),
        maka gunakan `rounded-xl md:rounded-l-xl md:rounded-r-none`.
        Untuk kasus ini, `rounded-xl` saja sudah cukup jika gambar selalu tampak rounded di semua sisinya.
        Saya akan menggunakan `rounded-xl` untuk konsistensi.
      */}
      <div className="w-full md:w-3/4 h-[55vh] md:h-screen relative order-1 md:order-1 overflow-hidden rounded-xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="w-full h-full myHeroSwiper"
        >
          {heroImages.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`Gaianata hero image ${index + 1}`}
                layout="fill" // deprecated, use fill={true} and sizes
                objectFit="cover" // deprecated, use style={{ objectFit: 'cover' }}
                // Untuk Next.js 13+ dengan App Router, lebih baik gunakan:
                // fill
                // style={{ objectFit: 'cover' }}
                // sizes="(max-width: 768px) 100vw, 75vw" // Sesuaikan dengan kebutuhan
                quality={85}
                priority={index === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Kolom Kanan: Teks */}
      {/* TAMBAHKAN md:h-screen DI SINI */}
      <div className="w-full md:w-1/4 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 order-2 md:order-2 relative md:h-screen">
        <div className="relative px-2 w-full max-w-xs sm:max-w-sm md:max-w-[280px] lg:max-w-[320px] text-center">
          <span
            aria-hidden="true"
            className="absolute font-tertiary text-gray-200 z-0 pointer-events-none"
            style={{
              fontSize: 'clamp(15rem, 30vw, 22rem)',
              top: '1rem',
              left: '-1rem',
              lineHeight: '0.6',
            }}
          >
            “
          </span>
          <blockquote className="relative z-10">
            <p className="text-3xl sm:text-4xl md:text-[1.2rem] lg:text-[2.8rem] font-quartenary italic text-textCharcoal leading-tight md:leading-snug">
              BESPOKE<br />
              IN EVERY<br />
              BLOOM,<br />
              TAILORED TO <br />
              YOUR MOMENT
            </p>
          </blockquote>
          <span
            aria-hidden="true"
            className="absolute font-tertiary text-gray-200 z-0 pointer-events-none"
            style={{
              fontSize: 'clamp(15rem, 30vw, 22rem)',
              bottom: '-8rem',
              right: '-2rem',
              lineHeight: '0.6',
            }}
          >
            ”
          </span>
        </div>
        <Link href="#our-service" className="relative z-20 mt-6 sm:mt-8 md:mt-10">
          <button
            className="bg-brand-primary text-white px-8 py-3 rounded-3xl text-sm tracking-wider font-quartenary italic hover:bg-brand-primary-hover transition duration-300"
          >
            enter
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;