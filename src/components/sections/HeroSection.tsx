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
      {/* Tambahkan overflow-hidden dan kelas rounded pada div pembungkus Swiper */}
      <div className="w-full md:w-3/4 h-[60vh] md:h-screen relative order-1 md:order-1 overflow-hidden rounded-full md:rounded-3xl md:rounded-l-xl">
        {/* 
          Catatan:
          - rounded-xl: untuk mobile, lengkungan di semua sisi.
          - md:rounded-none md:rounded-l-xl: di layar md ke atas, reset lengkungan, lalu hanya terapkan di sisi kiri jika itu yang diinginkan
            atau biarkan rounded-xl jika ingin lengkungan di semua sisi juga di desktop.
            Jika gambar memenuhi sisi kanan layar, mungkin tidak perlu lengkungan kanan di desktop.
            Untuk contoh ini, saya asumsikan lengkungan hanya di sisi yang terlihat. Jika gambar menempel ke tepi kanan layar, md:rounded-l-xl saja.
            Jika kolom kanan memiliki background, maka rounded-xl untuk semua sisi mungkin lebih baik.
            Saya akan menggunakan rounded-xl untuk semua sisi untuk konsistensi awal.
        */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0} // Tidak ada spasi antar slide untuk hero
          slidesPerView={1}
          navigation={true} // Tampilkan panah navigasi
          pagination={{ clickable: true }} // Tampilkan titik pagination dan bisa diklik
          loop={true}
          autoplay={{
            delay: 3000, // Delay 3 detik
            disableOnInteraction: false,
          }}
          // effect="fade" // Aktifkan jika ingin efek fade dan sudah impor CSS & modulnya
          // fadeEffect={{ crossFade: true }}
          className="w-full h-full myHeroSwiper" // Kelas custom jika perlu styling spesifik untuk panah/pagination
        >
          {heroImages.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`Gaianata hero image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                quality={85}
                priority={index === 0} // Hanya gambar pertama yang mendapat prioritas loading
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Kolom Kanan: Teks */}
      <div className="w-full md:w-1/4 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 order-2 md:order-2 relative">
        <div className="relative px-2 w-full max-w-xs sm:max-w-sm md:max-w-[280px] lg:max-w-[320px] text-center">
          <span
            aria-hidden="true"
            className="absolute font-tertiary text-gray-200 z-0 pointer-events-none"
            style={{
              fontSize: 'clamp(20rem, 30vw, 22rem)',
              top: '3rem',
              left: '0rem',
              lineHeight: '0.6',
            }}
          >
            “
          </span>
          <blockquote className="relative z-10">
            <p className="text-3xl sm:text-4xl md:text-[2.2rem] lg:text-[2.8rem] font-quartenary italic text-neutral-700 leading-tight md:leading-snug">
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
              fontSize: 'clamp(20rem, 30vw, 22rem)',
              bottom: '-10rem',
              right: '2rem',
              lineHeight: '0.6',
            }}
          >
            ”
          </span>
        </div>
        <Link href="#our-service" className="relative z-20 mt-6 sm:mt-8 md:mt-10">
          <button
            className="bg-brand-primary text-white px-8 py-3 rounded-3xl text-sm tracking-wider font-quartenary hover:bg-brand-primary-hover transition duration-300"
          >
            enter
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;