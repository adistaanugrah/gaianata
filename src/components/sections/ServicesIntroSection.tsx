// src/components/sections/ServicesIntroSection.tsx
"use client"; 
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeInWhenVisible from '../ui/FadeInWhenVisible';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { urlForImage } from '@/sanity/image';
import { CgEnter } from 'react-icons/cg';

const ServicesIntroSection = ({ data }: { data: any }) => {
  if (!data) return null;
  return (
    <section id="our-service" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={30} slidesPerView={1} navigation pagination={{ clickable: true }} loop={true} autoplay={{ delay: 4000, disableOnInteraction: false }} className="mySwiper rounded-3xl overflow-hidden shadow-lg w-full h-[450px] sm:h-[380px] md:h-[320px] lg:h-[px] xl:h-[450px] aspect-[5/6]">
              {data.carousel_images?.map((imageAsset: any, index: number) => {
                const imageUrl = urlForImage(imageAsset)?.url();
                return (
                  <SwiperSlide key={index}>
                    {imageUrl && <Image src={imageUrl} alt={`Contoh layanan Gaianata ${index + 1}`} fill style={{ objectFit: 'cover', objectPosition: 'center center'}}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />} 
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="w-full lg:w-1/2 p-8 lg:p-12 text-center flex flex-col justify-center min-h-[300px] lg:min-h-[480px]">
            <FadeInWhenVisible yOffset={20} duration={0.5}>
              <p className="font-secondary text-brandtext-primary text-lg md:text-xl leading-relaxed mb-6 md:mb-8"><span className="font-bold">Gaianata</span> {data.paragraph_1}</p>
              <p className="font-secondary text-brandtext-primary text-lg md:text-xl leading-relaxed">{data.paragraph_2}</p>
            </FadeInWhenVisible>
            <Link href="#portfolio" className="mt-8 md:mt-10 inline-block">
              <button className="inline-block bg-brand-primary text-white px-8 py-3 rounded-3xl text-sm tracking-wider font-tertiary italic hover:bg-brand-primary-hover transition duration-300">{data.button_text}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesIntroSection;