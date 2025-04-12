import React from 'react';

const ContactSection = () => {
  return (
    // Beri ID agar link header bisa mengarah ke sini
    // Atur padding vertikal
    // Ganti bg-gray-50 jika ingin background berbeda (sesuaikan dengan bg 'About Us')
    <section id="contact" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center"> {/* Max-w lebih kecil agar teks tidak terlalu lebar */}

        {/* Judul Utama */}
        {/* Sesuaikan ukuran, font, warna, dan spasi */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-800 mb-12 lg:mb-16 leading-tight">
          LET'S CREATE SOMETHING EXTRAORDINARY, <br />
          JUST FOR YOU
        </h2>

        {/* Detail Kontak */}
        {/* space-y-4 untuk jarak vertikal antar item */}
        <div className="space-y-4 text-lg text-gray-700">
          {/* Email */}
          <div>
            <span className="font-semibold uppercase tracking-wider text-sm block mb-1">EMAIL :</span>
            <a
              href="mailto:hello@gaianata.com"
              className="hover:text-purple-800 hover:underline transition duration-300"
            >
              hello@gaianata.com
            </a>
          </div>

          {/* Website */}
          <div>
            <span className="font-semibold uppercase tracking-wider text-sm block mb-1">WEBSITE:</span>
            <a
              href="https://www.gaianata.com" // Pastikan URL benar dan pakai https://
              target="_blank" // Buka di tab baru
              rel="noopener noreferrer" // Keamanan untuk target="_blank"
              className="hover:text-purple-800 hover:underline transition duration-300"
            >
              www.gaianata.com
            </a>
          </div>

          {/* Instagram */}
          <div>
            <span className="font-semibold uppercase tracking-wider text-sm block mb-1">INSTAGRAM:</span>
            <a
              href="https://www.instagram.com/gaianata" // Ganti dengan URL Instagram yang benar
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-800 hover:underline transition duration-300"
            >
              @gaianata
            </a>
          </div>

          {/* WhatsApp */}
          <div>
            <span className="font-semibold uppercase tracking-wider text-sm block mb-1">WHATSAPP:</span>
            {/* Anda bisa membuat link WhatsApp 'wa.me' */}
            {/* Format: https://wa.me/6287785739449 (ganti 0 dengan 62 untuk kode negara) */}
            <a
              href="https://wa.me/6287785739449" // Ganti dengan nomor WA yang benar (+62...)
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-800 hover:underline transition duration-300"
            >
              0877 8573 9449 {/* Tampilkan nomor seperti biasa */}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;