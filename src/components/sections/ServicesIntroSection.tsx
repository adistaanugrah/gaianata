"use client"; // <-- TAMBAHKAN BARIS INI DI PALING ATAS
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // Jika ingin pakai panah navigasi
import 'swiper/css/pagination'; // Jika ingin pakai titik-titik pagination
import 'swiper/css/autoplay';  // Jika ingin autoplay

// import required modules
// Pilih modul yang Anda inginkan: Navigation, Pagination, Autoplay, etc.
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const ServicesIntroSection = () => {
  // Daftar gambar untuk carousel
  const carouselImages = [
    '/images/service-image-1.jpg', // Ganti dengan nama file Anda
    '/images/service-image-2.jpg', // Ganti dengan nama file Anda
    '/images/service-image-3.jpg', // Ganti dengan nama file Anda
  ];

  return (
    // Beri ID jika link header "Our Service" akan mengarah ke sini
    // Atau arahkan link header ke section #portfolio
    <section id="our-service" className="py-16 lg:py-24 bg-white"> {/* Background section bisa disesuaikan */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Layout 2 Kolom: Stack di mobile, berdampingan di layar besar */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

          {/* Kolom Kiri: Carousel Gambar */}
          <div className="w-full lg:w-1/2">
            <Swiper
              // Install modules
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30} // Jarak antar slide
              slidesPerView={1} // Tampilkan 1 slide sekaligus
              navigation // Aktifkan panah navigasi bawaan Swiper
              pagination={{ clickable: true }} // Aktifkan pagination bawaan Swiper
              loop={true} // Agar bisa berputar terus
              autoplay={{
                delay: 4000, // Pindah slide setiap 4 detik
                disableOnInteraction: false, // Tetap autoplay setelah interaksi user
              }}
              className="mySwiper rounded-lg overflow-hidden shadow-lg" // Styling untuk Swiper container
            >
              {carouselImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={src}
                    alt={`Service example ${index + 1}`}
                    width={800} // Sesuaikan rasio gambar Anda
                    height={600} // Sesuaikan rasio gambar Anda
                    className="w-full h-auto object-cover" // Pastikan gambar responsif
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Kolom Kanan: Teks Deskripsi & Tombol */}
          {/* Ganti 'bg-purple-50' dengan warna brand Anda, misal 'bg-brand-purple-light/20' */}
          {/* Ganti warna teks sesuai brand */}
          <div className="w-full lg:w-1/2 bg-purple-50 p-8 lg:p-12 rounded-lg text-center lg:text-left flex flex-col justify-center min-h-[400px]">
             <h2 className="text-3xl lg:text-4xl font-serif text-purple-900 mb-6 leading-tight">
               EXPLORE OUR SERVICES AND DISCOVER HOW WE TRANSFORM SPACES WITH ARTISTRY, PRECISION AND TIMELESS ELEGANCE
             </h2>
             {/* Tombol ini bisa mengarah ke section portfolio */}
             <Link href="#portfolio" className="mt-6 inline-block">
                <button
                  className="bg-brand-purple text-white px-8 py-3 rounded uppercase text-sm tracking-wider font-semibold hover:bg-brand-purple-dark transition duration-300"
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