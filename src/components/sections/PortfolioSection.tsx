// src/components/sections/PortfolioSection.tsx

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeInWhenVisible from '../ui/FadeInWhenVisible';
import { urlForImage } from '@/sanity/image';

import FsLightbox from 'fslightbox-react';

const getFileUrl = (fileRef: string) => {
    if (!fileRef) return '#';
    const ref = fileRef.replace('file-', '').replace('-pdf', '.pdf');
    return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${ref}`;
}

const PortfolioSection = ({ data, settings }: { data: any, settings: any }) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    sources: [] as string[],
  });

  if (!data) return null;
  
  const pdfUrl = data.portfolio_pdf_file?.asset?._ref ? getFileUrl(data.portfolio_pdf_file.asset._ref) : '#';

  // --- FUNGSI DIPERBAIKI DENGAN DEBUGGING ---
  function openLightbox(galleryImages: any[]) {
    console.log("Mencoba membuka lightbox untuk galeri:", galleryImages);

    if (!galleryImages || galleryImages.length === 0) {
      console.log("Batal: Galeri kosong atau tidak ada.");
      return;
    }

    const imageSources = galleryImages
      .map(img => {
        const url = urlForImage(img)?.url();
        console.log("Memproses gambar:", img, "-> URL:", url);
        return url;
      })
      .filter((url): url is string => {
        const isValid = typeof url === 'string' && url.length > 0;
        if (!isValid) {
          console.log("Memfilter keluar URL tidak valid:", url);
        }
        return isValid;
      });

    console.log("Sumber gambar yang valid:", imageSources);

    if (imageSources.length > 0) {
      console.log("Membuka lightbox...");
      setLightboxController({
        toggler: !lightboxController.toggler,
        sources: imageSources,
      });
    } else {
      console.log("Batal: Tidak ada sumber gambar yang valid untuk ditampilkan.");
    }
  }

  return (
    <>
      <section id="portfolio" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <FadeInWhenVisible yOffset={30} duration={0.6}>
            <h2 className="text-3xl uppercase sm:text-4xl font-quartenary italic text-textCharcoal mb-6">
              {data.main_title}
            </h2>
          </FadeInWhenVisible>
          <div className="mb-12 lg:mb-16">
            <Link
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-primary text-white px-8 py-3 rounded-3xl text-sm tracking-wider font-tertiary italic hover:bg-brand-primary-hover transition duration-300"
            >
              {data.button_text}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {data.portfolio_items?.map((item: any, index: number) => {
              const itemImageUrl = urlForImage(item.image)?.url();
              const hasGallery = item.gallery_images && item.gallery_images.length > 0;
              return (
                <FadeInWhenVisible key={index} yOffset={50} delay={index * 0.1}>
                  <div
                    className={`flex flex-col items-center text-center ${hasGallery ? 'cursor-pointer group' : ''}`}
                    onClick={() => openLightbox(item.gallery_images)}
                  >
                    <div className="mb-4 overflow-hidden rounded-3xl shadow-md w-full relative h-[450px] sm:h-[380px] md:h-[320px] lg:h-[400px] xl:h-[450px] group-hover:brightness-90 transition-all duration-300">
                      {itemImageUrl && (
                        <Image
                          src={itemImageUrl}
                          alt={item.description}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="transform group-hover:scale-105 transition duration-500 ease-in-out"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      )}
                    </div>
                    <h1 className="text-3xl sm:text-3xl font-semibold mb-3">
                      <span className="font-primary text-textCharcoal">{item.title_bold}</span>
                      <span className="font-primary text-brandbg2-primary">{item.title_regular}</span>
                    </h1>
                    <p className="font-secondary italic text-md text-brandbg2-primary leading-relaxed max-w-xs mx-auto px-1">
                      {item.description}
                    </p>
                  </div>
                </FadeInWhenVisible>
              );
            })}
          </div>
        </div>
      </section>

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={lightboxController.sources}
      />
    </>
  );
};

export default PortfolioSection;