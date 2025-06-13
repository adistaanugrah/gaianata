// src/components/sections/TeamSection.tsx
import React from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/image';

const TeamSection = ({ data }: { data: any }) => {
  if (!data) return null;
  const groupImageUrl = urlForImage(data.group_image)?.url();

  return (
    <section id="our-team" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-textCharcoal mb-2">{data.title}</p>
          <h2 className="text-3xl sm:text-4xl font-quartenary italic text-textCharcoal">{data.subtitle}</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center md:items-start">
          <div className="w-full md:w-3/5 lg:w-1/2">
            {groupImageUrl && <Image src={groupImageUrl} alt="Gaia Nata Team Group Photo" width={800} height={1000} className="w-full h-auto object-cover rounded-lg shadow-md" />}
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 space-y-10">
            {data.team_members?.map((member: any, index: number) => {
              const memberPhotoUrl = urlForImage(member.photo)?.url();
              return (
                <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
                  <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-md relative">
                    {memberPhotoUrl && <Image src={memberPhotoUrl} alt={`Photo of ${member.name}`} fill className="object-cover filter grayscale" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-textCharcoal uppercase tracking-wider">{member.name}</h3>
                    {/* --- PERBAIKAN DI SINI --- */}
                    <p className="text-sm font-quartenary italic text-textCharcoal tracking-wider">
                      {member.role?.split('\n').map((line: string, i: number) => (
                        <React.Fragment key={i}>{line}{i < member.role.split('\n').length - 1 && <br />}</React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TeamSection;