// src/components/sections/ContactSection.tsx
import React from 'react';
import FadeInWhenVisible from '../ui/FadeInWhenVisible';

const ContactSection = ({ data, settings }: { data: any, settings: any }) => {
  if (!data || !settings) return null;
  const social = settings.social_links || {};
  const waNumber = social.whatsapp?.replace('https://wa.me/62', '0') || '';

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <FadeInWhenVisible yOffset={30} duration={0.6}>
          {/* --- PERBAIKAN DI SINI --- */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-quartenary italic text-gray-800 mb-12 lg:mb-16 leading-tight">
            {data.main_title?.split('\n').map((line: string, i: number) => (
              <React.Fragment key={i}>{line}{i < data.main_title.split('\n').length - 1 && <br />}</React.Fragment>
            ))}
          </h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible yOffset={30} duration={0.6} delay={0.2}>
          <div className="space-y-8 text-lg text-gray-700">
            {/* ...sisa kode kontak tetap sama... */}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};
export default ContactSection;