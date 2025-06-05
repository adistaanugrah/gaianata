// src/components/sections/ContactSection.tsx
import React from 'react';
import FadeInWhenVisible from '../../components/ui/FadeInWhenVisible';
// Impor ikon DIBIARKAN TERKOMENTAR atau DIHAPUS jika Anda tidak jadi menggunakannya
// import { FaInstagram, FaWhatsapp, FaEnvelope, FaPinterestP } from 'react-icons/fa';

const ContactSection = () => {
  // HAPUS definisi variabel ini karena tidak terpakai menurut ESLint
  // const iconColor = "text-brandPurple";
  // const iconSize = 18;

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">

        <FadeInWhenVisible yOffset={30} duration={0.6}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quartenary italic text-gray-800 mb-12 lg:mb-16 leading-tight">
            {/* PERBAIKAN: Ubah ' menjadi ' */}
            LET&apos;S CREATE SOMETHING EXTRAORDINARY, <br />
            JUST FOR YOU!
          </h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible yOffset={30} duration={0.6} delay={0.2}>
          <div className="space-y-8 text-lg text-gray-700">

            {/* Instagram */}
            <div>
              {/* Struktur ini jika tidak menggunakan ikon */}
              <span className="font-bold uppercase tracking-wider text-sm block mb-1">INSTAGRAM</span>
              <a
                href="https://www.instagram.com/gaianata"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brandPurpleHover hover:underline transition duration-300"
              >
                @gaianata
              </a>
            </div>
        
            {/* WhatsApp */}
            <div>
              <span className="font-bold uppercase tracking-wider text-sm block mb-1">WHATSAPP</span>
              <a
                href="https://wa.me/6287785739449"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brandPurpleHover hover:underline transition duration-300"
              >
                0877 8573 9449
              </a>
            </div>

            {/* Email */}
            <div>
              <span className="font-bold uppercase tracking-wider text-sm block mb-1">EMAIL</span>
              <a
                href="mailto:hello@gaianata.id"
                className="hover:text-brandPurpleHover hover:underline transition duration-300"
              >
                hello@gaianata.id
              </a>
            </div>

            {/* Pinterest */}
            <div>
              <span className="font-bold uppercase tracking-wider text-sm block mb-1">PINTEREST</span>
              <a
                href="https://id.pinterest.com/gainataslaras/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brandPurpleHover hover:underline transition duration-300"
              >
                gaianata
              </a>
            </div>

          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default ContactSection;