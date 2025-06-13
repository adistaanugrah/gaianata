// src/components/sections/AboutSection.tsx
import React from 'react';
import FadeInWhenVisible from '../ui/FadeInWhenVisible';
import { PortableText } from '@portabletext/react';

const AboutSection = ({ data }: { data: any }) => {
  if (!data) return null;

  return (
    <section id="about-us" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-2 space-y-4">
            <FadeInWhenVisible yOffset={30} duration={0.6}>
              {/* --- PERBAIKAN DI SINI --- */}
              <h3 className="text-3xl sm:text-4xl font-tertiary italic text-gray-800">
                {data.greeting_title?.split('\n').map((line: string, i: number) => (
                  <React.Fragment key={i}>{line}{i < data.greeting_title.split('\n').length - 1 && <br />}</React.Fragment>
                ))}
              </h3>
            </FadeInWhenVisible>
            <FadeInWhenVisible yOffset={30} duration={0.6} delay={0.2}>
              <p className="text-xl font-tertiary italic text-textCharcoal">{data.greeting_subtitle}</p>
            </FadeInWhenVisible>
          </div>
          <div className="text-lg md:text-xl lg:col-span-3 space-y-6 font-primary text-textCharcoal">
            {data.main_text && <PortableText value={data.main_text} />}
            <FadeInWhenVisible yOffset={20} duration={0.5} delay={0.7}>
              <p className="text-lg font-secondary italic text-brandPurple mt-8">{data.closing_quote}</p>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;