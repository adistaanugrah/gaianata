// src/components/sections/PortfolioSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeInWhenVisible from '../../components/ui/FadeInWhenVisible';

const PortfolioSection = ({ data }: { data: any }) => {
  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <FadeInWhenVisible yOffset={30} duration={0.6}>
          <h2 className="text-3xl uppercase sm:text-4xl font-quartenary italic text-textCharcoal mb-6">
            {data.main_title}
          </h2>
        </FadeInWhenVisible>
        <div className="mb-12 lg:mb-16">
          <Link
            href={data.portfolio_pdf_file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-primary text-white px-8 py-3 rounded-3xl text-sm tracking-wider font-bold italic hover:bg-brand-primary-hover transition duration-300"
          >
            {data.button_text}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* PERBAIKAN: Tambahkan tipe 'any' dan 'number' */}
          {data.portfolio_items.map((item: any, index: number) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 overflow-hidden rounded-3xl shadow-md w-full relative h-[450px] sm:h-[380px] md:h-[320px] lg:h-[400px] xl:h-[450px]">
                <Image
                  src={item.image}
                  alt={item.description}
                  fill 
                  style={{ objectFit: 'cover' }} 
                  className="transform hover:scale-105 transition duration-500 ease-in-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h1 className="text-3xl sm:text-3xl font-semibold mb-3"> 
                <span className="font-primary text-black">{item.title_bold}</span>
                <span className="font-primary text-brandbg2-primary">{item.title_regular}</span>
              </h1>
              <p className="font-secondary italic text-md text-brandbg2-primary leading-relaxed max-w-xs mx-auto px-1">
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