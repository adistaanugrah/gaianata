// src/components/sections/HeroSection.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { urlForImage } from '@/sanity/image';
import { PortableText } from '@portabletext/react';

const HeroSection = ({ data }: { data: any }) => {
  if (!data) return null;

  return (
    <section id="home" className="flex flex-col md:flex-row min-h-screen bg-white">
      <div className="w-full md:w-3/4 h-[55vh] md:h-screen relative order-1 md:order-1 overflow-hidden">
        <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={0} slidesPerView={1} navigation={true} pagination={{ clickable: true }} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false }} className="w-full h-full myHeroSwiper">
          {data.slideshow_images?.map((imageAsset: any, index: number) => {
            const imageUrl = urlForImage(imageAsset)?.url();
            return (
              <SwiperSlide key={index}>
                {imageUrl && <Image src={imageUrl} alt={`Gaianata hero image ${index + 1}`} fill style={{ objectFit: 'cover' }} quality={85} priority={index === 0} />}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="w-full md:w-1/4 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 order-2 md:order-2 relative md:h-screen">
        <div className="relative px-2 w-full max-w-xs sm:max-w-sm md:max-w-[280px] lg:max-w-[320px] text-center">
          <span aria-hidden="true" className="absolute font-tertiary text-gray-200 z-0 pointer-events-none" style={{ fontSize: 'clamp(15rem, 30vw, 22rem)', top: '1rem', left: '-1rem', lineHeight: '0.6' }}>“</span>
          <blockquote className="relative z-10">
            {/* --- PERBAIKAN DI SINI --- */}
            {/* Bungkus PortableText dengan div untuk menerapkan styling */}
            <div className="text-3xl sm:text-4xl md:text-[1.2rem] lg:text-[2.8rem] font-quartenary italic text-textCharcoal leading-tight md:leading-snug">
              {data.quote_text && <PortableText value={data.quote_text} />}
            </div>
          </blockquote>
          <span aria-hidden="true" className="absolute font-tertiary text-gray-200 z-0 pointer-events-none" style={{ fontSize: 'clamp(15rem, 30vw, 22rem)', bottom: '-8rem', right: '-2rem', lineHeight: '0.6' }}>”</span>
        </div>
        <Link href="#our-service" className="relative z-20 mt-6 sm:mt-8 md:mt-10">
          <button className="bg-brand-primary text-white px-8 py-3 rounded-3xl text-sm tracking-wider font-bold italic hover:bg-brand-primary-hover transition duration-300">{data.button_text}</button>
        </Link>
      </div>
    </section>
  );
};
export default HeroSection;