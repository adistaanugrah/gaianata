// src/components/sections/ContactSection.tsx
import React from 'react';
import FadeInWhenVisible from '../../components/ui/FadeInWhenVisible';

// --- PERUBAHAN: Terima 'data' dan 'settings' dari props ---
const ContactSection = ({ data, settings }) => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <FadeInWhenVisible yOffset={30} duration={0.6}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quartenary italic text-gray-800 mb-12 lg:mb-16 leading-tight">
            {/* PERUBAHAN: Gunakan main_title dari data */}
            {data.main_title.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
          </h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible yOffset={30} duration={0.6} delay={0.2}>
          <div className="space-y-8 text-lg text-gray-700">
            {/* PERUBAHAN: Ambil data kontak dari 'settings' untuk konsistensi */}
            <div>
              <span className="font-bold uppercase tracking-wider text-sm block mb-1">INSTAGRAM</span>
              <a href={settings.social_links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brandPurpleHover hover:underline transition duration-300">
                @gaianata
              </a>
            </div>
            <div>
              <span className="font-bold uppercase tracking-wider text-sm block mb-1">WHATSAPP</span>
              <a href={settings.social_links.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-brandPurpleHover hover:underline transition duration-300">
                {/* Tampilkan nomor saja */}
                {settings.social_links.whatsapp.replace('https://wa.me/62', '0')}
              </a>
            </div>
            <div>
              <span className="font-bold uppercase tracking-wider text-sm block mb-1">EMAIL</span>
              <a href={`mailto:${settings.contact_email}`} className="hover:text-brandPurpleHover hover:underline transition duration-300">
                {settings.contact_email}
              </a>
            </div>
            <div>
              <span className="font-bold uppercase tracking-wider text-sm block mb-1">PINTEREST</span>
              <a href={settings.social_links.pinterest} target="_blank" rel="noopener noreferrer" className="hover:text-brandPurpleHover hover:underline transition duration-300">
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