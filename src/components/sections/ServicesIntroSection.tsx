// src/components/sections/ServicesIntroSection.tsx

"use client"; 
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeInWhenVisible from '../../components/ui/FadeInWhenVisible';

// Import komponen dan style untuk Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Definisikan tipe data untuk kejelasan
interface ServicesData {
  carousel_images: string[]; // Tipe data sekarang adalah array of strings
  paragraph_1: string;
  paragraph_2: string;
  button_text: string;
}

const ServicesIntroSection = ({ data }: { data: ServicesData }) => {
  return (
    <section id="our-service" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* BAGIAN SLIDESHOW GAMBAR */}
          <div className="w-full lg:w-1/2">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="mySwiper rounded-3xl overflow-hidden shadow-lg h-[250px] sm:h-[300px] md:h-[350px] lg:h-[480px]"
            >
              {data && data.carousel_images && data.carousel_images.map((imageUrl, index) => (
                <SwiperSlide key={index}>
                  <Image
                    // --- PERUBAHAN UTAMA DI SINI ---
                    // Langsung gunakan 'imageUrl' karena datanya adalah array of strings
                    src={imageUrl} 
                    alt={`Contoh layanan Gaianata ${index + 1}`}
                    fill
                    style={{
                      objectFit: 'cover', 
                    }}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* BAGIAN TEKS DESKRIPSI */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 text-center flex flex-col justify-center min-h-[300px] lg:min-h-[480px]">
            <FadeInWhenVisible yOffset={20} duration={0.5}>
              <p className="font-primary text-brandtext-primary text-lg md:text-xl leading-relaxed mb-6 md:mb-8">
                <span className="font-bold">Gaianata</span> {data.paragraph_1}
              </p>
              <p className="font-primary text-brandtext-primary text-lg md:text-xl leading-relaxed">
                {data.paragraph_2}
              </p>
            </FadeInWhenVisible>
            <Link href="#portfolio" className="mt-8 md:mt-10 inline-block">
              <button className="inline-block bg-brand-primary text-white px-8 py-3 rounded-3xl text-sm tracking-wider font-bold italic hover:bg-brand-primary-hover transition duration-300">
                {data.button_text}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesIntroSection;