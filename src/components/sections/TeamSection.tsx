import React from 'react';
import Image from 'next/image';

const TeamSection = () => {
  // Data anggota tim (bisa dari CMS nanti)
  const teamMembers = [
    {
      name: 'INA SOPHIAAN',
      role: 'FOUNDER\nMARKETING DIRECTOR', // Menggunakan \n untuk baris baru
      imageSrc: '/images/team-ina.jpg',    // Pastikan nama file benar
      altText: 'Photo of Ina Sophiaan',
    },
    {
      name: 'AKSARA SOPHIAAN-FAURI',
      role: 'CO-FOUNDER\nCREATIVE DIRECTOR', // Menggunakan \n untuk baris baru
      imageSrc: '/images/team-aksara.jpg',  // Pastikan nama file benar
      altText: 'Photo of Aksara Sophiaan-Fauri',
    },
    {
      name: 'NAYAKARA SATWIKATAMA', // Perhatikan typo 'SATWIKATAMA' di PDF, sesuaikan jika perlu
      role: 'CO-FOUNDER\nPRODUCTION DIRECTOR', // Menggunakan \n untuk baris baru
      imageSrc: '/images/team-nayakara.jpg', // Pastikan nama file benar
      altText: 'Photo of Nayakara Satwikatama',
    },
  ];

  return (
    // Section wrapper
    <section id="our-team" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Judul Section */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">our team</p>
          <h2 className="text-3xl sm:text-4xl font-serif text-gray-800">
            THE PEOPLE BEHIND GAIA NATA
          </h2>
        </div>

        {/* Layout Dua Kolom */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center md:items-start">

          {/* Kolom Kiri: Gambar Grup */}
          {/* Memberi sedikit lebar lebih pada gambar grup (3/5), bisa disesuaikan */}
          <div className="w-full md:w-3/5 lg:w-1/2">
            <Image
              src="/images/team-group.jpg" // Pastikan nama file benar
              alt="Gaia Nata Team Group Photo"
              width={800} // Rasio gambar
              height={1000} // Rasio gambar
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Kolom Kanan: Daftar Anggota Tim */}
          {/* Lebar kolom kanan (2/5) */}
          <div className="w-full md:w-2/5 lg:w-1/2 space-y-10">
            {teamMembers.map((member, index) => (
              // Anggota Tim Individual
              <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">

                {/* Foto Individu (Bulat & Hitam Putih) */}
                {/* 'flex-shrink-0' agar ukuran tetap */}
                <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-md relative"> {/* Ukuran foto, Bulat, Overflow Hidden */}
                  <Image
                    src={member.imageSrc}
                    alt={member.altText}
                    layout="fill" // Gunakan layout fill agar pas dengan div bulat
                    //objectFit="cover" // Pastikan gambar menutupi area
                    className="object-cover filter grayscale" // Efek hitam putih
                  />
                </div>

                {/* Nama & Jabatan */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 uppercase tracking-wider">
                    {member.name}
                  </h3>
                  {/* 'whitespace-pre-line' agar \n berfungsi sebagai baris baru */}
                  <p className="text-sm text-gray-600 uppercase tracking-wider whitespace-pre-line">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamSection;