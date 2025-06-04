import React from 'react';
import FadeInWhenVisible from '../../components/ui/FadeInWhenVisible';

const ContactSection = () => {
  const iconColor = "text-brandPurple"; // Definisikan warna ikon di sini, misalnya warna brand Anda
  const iconSize = 18; // Ukuran ikon

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">

        <FadeInWhenVisible yOffset={30} duration={0.6}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quartenary italic text-gray-800 mb-12 lg:mb-16 leading-tight">
            LET'S CREATE SOMETHING EXTRAORDINARY, <br />
            JUST FOR YOU
          </h2>
        </FadeInWhenVisible>

        {/* Menggunakan FadeInWhenVisible untuk blok kontak dengan sedikit delay */}
        <FadeInWhenVisible yOffset={30} duration={0.6} delay={0.2}>
          {/* Menambah space-y menjadi space-y-8 untuk jarak vertikal lebih besar antar item */}
          <div className="space-y-8 text-lg text-gray-700">

            {/* Instagram */}
            <div>
              <div className="flex items-center justify-center mb-2"> {/* mb-2 untuk jarak antara label+icon dan link */}
                <span className="font-bold uppercase tracking-wider text-sm">INSTAGRAM</span>
              </div>
              <a
                href="https://www.instagram.com/gaianata"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brandPurpleHover font-primary italic hover:underline transition duration-300"
              >
                @gaianata
              </a>
            </div>
        
            {/* WhatsApp */}
            <div>
              <div className="flex items-center justify-center mb-2">
                <span className="font-bold uppercase tracking-wider text-sm">WHATSAPP</span>
              </div>
              <a
                href="https://wa.me/6287785739449"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brandPurpleHover font-primary italic hover:underline transition duration-300"
              >
                0877 8573 9449
              </a>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center justify-center mb-2">
                <span className="font-bold uppercase tracking-wider text-sm">EMAIL</span> {/* Dihapus spasi ekstra */}
              </div>
              <a
                href="mailto:hello@gaianata.id"
                className="hover:text-brandPurpleHover font-primary italic hover:underline transition duration-300"
              >
                hello@gaianata.id
              </a>
            </div>

            {/* Pinterest */}
            <div>
              <div className="flex items-center justify-center mb-2">
                <span className="font-bold uppercase tracking-wider text-sm">PINTEREST</span>
              </div>
              <a
                href="https://id.pinterest.com/gainataslaras/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brandPurpleHover font-primary italic hover:underline transition duration-300"
              >
                gaianataslaras
              </a>
            </div>

          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default ContactSection;