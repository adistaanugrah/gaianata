// src/components/sections/TeamSection.tsx
import React from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/image';

const TeamSection = ({ data }: { data: any }) => {
  // Pastikan ada data dan array team_members sebelum rendering
  if (!data || !data.team_members) return null;

  return (
    <section id="our-team" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* === BAGIAN JUDUL YANG DIKEMBALIKAN === */}
        <div className="text-center mb-12 lg:mb-20">
          <p className="text-sm font-bold uppercase tracking-widest text-textCharcoal mb-2">{data.title}</p>
          <h2 className="text-3xl sm:text-4xl font-quartenary italic text-textCharcoal">{data.subtitle}</h2>
        </div>
        
        {/* 
          Kontainer untuk kartu anggota tim.
          Layout ini akan menempatkan kartu-kartu secara berjajar dan memusatkannya.
        */}
        <div className="flex flex-col sm:flex-row justify-center items-start flex-wrap gap-10 lg:gap-12">
          {data.team_members.map((member: any, index: number) => {
            const memberPhotoUrl = urlForImage(member.photo)?.url();
            return (
              // Kartu untuk setiap anggota tim
              <div key={index} className="flex flex-col items-center text-center w-full max-w-[280px] mx-auto sm:mx-0">
                
                {/* Foto Anggota Tim */}
                <div className="relative w-full aspect-[3/4] mb-5 rounded-lg overflow-hidden shadow-md">
                  {memberPhotoUrl && (
                    <Image
                      src={memberPhotoUrl}
                      alt={`Photo of ${member.name}`}
                      fill
                      className="object-cover filter grayscale"
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 30vw, 25vw"
                    />
                  )}
                </div>
                
                {/* Informasi Anggota Tim */}
                <div className="w-full px-2">
                  <h3 className="text-base font-bold text-textCharcoal uppercase tracking-wider mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-sans uppercase font-medium text-textCharcoal tracking-wider">
                    {member.role?.split('\n').map((line: string, i: number) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < member.role.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;