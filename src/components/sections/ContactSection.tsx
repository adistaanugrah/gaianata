// src/components/sections/ContactSection.tsx
import React from 'react';
import FadeInWhenVisible from '../ui/FadeInWhenVisible';

const ContactSection = ({ data, settings }: { data: any, settings: any }) => {
  // Fallback jika data tidak ada untuk mencegah error
  if (!data || !settings) {
    return null;
  }

  const social = settings.social_links || {};
  // Menggunakan regex untuk mengekstrak nomor telepon
  const waNumber = social.whatsapp ? social.whatsapp.match(/\d+$/)?.[0] : '';
  const formattedWaNumber = waNumber ? `0${waNumber.substring(2)}` : '';


  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <FadeInWhenVisible yOffset={30} duration={0.6}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quartenary italic text-gray-800 mb-12 lg:mb-16 leading-tight">
            {/* Menggunakan metode split yang lebih aman */}
            {data.main_title?.split(/\\n|\n/).map((line: string, i: number, arr: string[]) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </FadeInWhenVisible>
        
        <FadeInWhenVisible yOffset={30} duration={0.6} delay={0.2}>
          <div className="space-y-8 text-lg text-gray-700">
            
            {/* INSTAGRAM */}
            {social.instagram && (
              <div>
                <span className="font-bold tracking-wider text-sm block mb-1">Instagram</span>
                <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brandPurpleHover hover:underline transition duration-300">
                  @gaianata
                </a>
              </div>
            )}

            {/* WHATSAPP */}
            {social.whatsapp && (
              <div>
                <span className="font-bold tracking-wider text-sm block mb-1">Whatsapp</span>
                <a href={social.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-brandPurpleHover hover:underline transition duration-300">
                  {formattedWaNumber || social.whatsapp}
                </a>
              </div>
            )}

            {/* EMAIL */}
            {settings.contact_email && (
              <div>
                <span className="font-bold tracking-wider text-sm block mb-1">Email</span>
                <a href={`mailto:${settings.contact_email}`} className="hover:text-brandPurpleHover hover:underline transition duration-300">
                  {settings.contact_email}
                </a>
              </div>
            )}
            
            {/* PINTEREST */}
            {social.pinterest && (
              <div>
                <span className="font-bold tracking-wider text-sm block mb-1">Pinterest</span>
                <a href={social.pinterest} target="_blank" rel="noopener noreferrer" className="hover:text-brandPurpleHover hover:underline transition duration-300">
                  gaianata
                </a>
              </div>
            )}
            
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default ContactSection;