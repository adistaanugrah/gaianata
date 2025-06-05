import React from 'react';
import FadeInWhenVisible from '../../components/ui/FadeInWhenVisible';

const AboutSection = () => {
  return (
    // Beri ID agar link header bisa mengarah ke sini
    // Atur padding vertikal (py-16 lg:py-24)
    // Ganti bg-gray-50 dengan warna/pola latar yang sesuai (misal bg-[#F5F0F5] - warna mauve muda)
    <section id="about-us" className="py-16 lg:py-24 bg-gray-50"> {/* Ganti background jika perlu */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Judul Section (Opsional - di PDF tidak eksplisit ada judul besar 'About Us' di bagian ini, tapi ada di atasnya) */}
        {/* Jika ingin menambahkan judul "about us" seperti di area abu-abu PDF: */}
        {/* <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-sm uppercase tracking-widest text-gray-500">about us</h2>
        </div> */}

        {/* Layout Dua Kolom */}
        {/* 'grid grid-cols-1 lg:grid-cols-5' -> 1 kolom di mobile, 5 kolom di lg */}
        {/* 'gap-8 lg:gap-16' -> Jarak antar kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-start">

          {/* Kolom Kiri (2/5 lebar di layar besar) */}
          {/* 'lg:col-span-2' -> Mengambil 2 dari 5 kolom di lg */}
          <div className="lg:col-span-2 space-y-4">
          <FadeInWhenVisible yOffset={30} duration={0.6}>
            <h3 className="text-3xl sm:text-4xl font-tertiary italic text-gray-800 leading-tight">
              HELLO, <br />
              WELCOME TO <br />
              GAIANATA
            </h3>
            </FadeInWhenVisible>
            <FadeInWhenVisible yOffset={30} duration={0.6} delay={0.2}>
            <p className="text-xl font-tertiary italic text-textCharcoal">
              We are designers, decorators, and florists dedicated to transforming spaces with bespoke styling and timeless elegance.
            </p>
              </FadeInWhenVisible>
          </div>

          {/* Kolom Kanan (3/5 lebar di layar besar) */}
          {/* 'lg:col-span-3' -> Mengambil 3 dari 5 kolom di lg */}
          <div className="text-lg md:text-xl lg:col-span-3 space-y-6 font-primary text-textCharcoal">
            <FadeInWhenVisible yOffset={20} duration={0.5} delay={0.3}>
            <p>
              At Gaianata, we believe a wedding is more than a ceremony—it is an expression of identity, heritage, and personal style. With over a decade of experience, we have helped hundreds of couples bring their wedding dreams to life, crafting bespoke designs that transform vision into extraordinary reality.
            </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible yOffset={20} duration={0.5} delay={0.4}>
            <p>
              Founded in 2013 by Ina Sophiaan and Aksara Sophiaan-Fauri, Gaianata was built on a passion for artistry, cultural richness, and impeccable craftsmanship. Every element of our work is intentional, a seamless blend of precision and creativity. We honor tradition while embracing innovation, striking a delicate balance between heritage and contemporary aesthetics. Our designs are deeply personal, refined, and curated to reflect the unique essence of each couple.
            </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible yOffset={20} duration={0.5} delay={0.5}>
            <p>
              Luxury is not just about grandeur—it is about harmony, refinement, and effortless execution. With a dedication to excellence and consistency, our team orchestrates every detail with precision, ensuring a seamless experience from concept to execution.
            </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible yOffset={20} duration={0.5} delay={0.6}>
            <p>
              For those who seek a wedding that is truly one of a kind, Gaianata offers a bespoke service, where every detail is designed exclusively for you.
            </p>
            </FadeInWhenVisible>

            {/* Bagian Penutup yang Menonjol */}
            <FadeInWhenVisible yOffset={20} duration={0.5} delay={0.7}>
            <p className="text-lg font-secondary italic text-brandPurple mt-8"> {/* Sesuaikan warna*/}
              Because your love story deserves nothing less than perfection.
            </p>
            </FadeInWhenVisible>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;