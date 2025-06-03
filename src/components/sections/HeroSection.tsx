// src/components/sections/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Kolom Kiri: Gambar */}
      <div className="w-full md:w-3/4 h-[60vh] md:h-screen relative order-1 md:order-1">
        <Image
          src="/images/couple-photo.jpg" // Pastikan nama file benar
          alt="Wedding couple"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority
        />
      </div>

      {/* Kolom Kanan: Teks */}
      {/* Parent 'justify-center' akan menengahkan grup anak-anaknya (quote block dan tombol) */}
      <div className="w-full md:w-1/4 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 order-2 md:order-2 relative">
        {/* 
          Wrapper untuk quote. HAPUS 'my-auto'.
          Pemusatan vertikal dari grup (quote + tombol) akan ditangani oleh 'justify-center' pada parent.
        */}
        <div className="relative px-2 w-full max-w-xs sm:max-w-sm md:max-w-[280px] lg:max-w-[320px] text-center"> 
          {/* ^^^ my-auto DIHAPUS dari sini */}
          {/* max-w-* disesuaikan agar lebar teks quote lebih terkontrol untuk pemenggalan baris */}
          
          {/* Tanda Kutip Pembuka (Background) */}
          <span
            aria-hidden="true"
            // Gunakan Didot (reguler) untuk simbol quote agar lebih stabil secara visual, 
            // atau font-tertiary italic jika ingin simbolnya juga italic
            className="absolute font-tertiary text-gray-200 z-0 pointer-events-none" 
            style={{
              // Ukuran sangat besar, sesuaikan nilai ini!
              fontSize: 'clamp(20rem, 30vw, 22rem)', 
              // Posisi: Anda perlu banyak trial-and-error dengan nilai ini!
              top: '3rem',      // Tarik ke atas, sesuaikan
              left: '0rem',     // Tarik ke kiri, sesuaikan
              lineHeight: '0.6', // Kompres tinggi karakter, sesuaikan
              // opacity: 0.8, // Sesuaikan opacity jika perlu
            }}
          >
            “
          </span>

          {/* Teks Utama Quotes */}
          <blockquote className="relative z-10"> {/* z-10 agar di atas quote latar */}
            <p className="text-3xl sm:text-4xl md:text-[1.2rem] lg:text-[2.8rem] font-quartenary italic text-neutral-700 leading-tight md:leading-snug">
              {/* text-[...] untuk fine-tuning ukuran font. */}
              {/* font-quartenary italic digunakan sesuai kode Anda */}
              {/* leading-tight atau leading-snug untuk kerapatan baris, sesuaikan */}
              BESPOKE<br />
              IN EVERY<br />
              BLOOM,<br />
              TAILORED TO <br />
              YOUR MOMENT
            </p>
          </blockquote>

          {/* Tanda Kutip Penutup (Background) */}
          <span
            aria-hidden="true"
            className="absolute font-tertiary text-gray-200 z-0 pointer-events-none"
            style={{
              fontSize: 'clamp(20rem, 30vw, 22rem)', // Sesuaikan!
              // Posisi: Anda perlu banyak trial-and-error dengan nilai ini!
              bottom: '-10rem',  // Tarik ke bawah, sesuaikan
              right: '2rem',   // Tarik ke kanan, sesuaikan
              lineHeight: '0.6',  // Sesuaikan!
              // opacity: 0.8,
            }}
          >
            ”
          </span>
        </div>

        {/* Tombol Enter */}
        {/* Margin atas dikurangi agar lebih dekat dengan quote */}
        <Link href="#our-service" className="relative z-20 mt-6 sm:mt-8 md:mt-10"> {/* z-20 untuk di atas segalanya */}
           {/* ^^^ Margin atas disesuaikan (sebelumnya mt-8 sm:mt-10 md:mt-12). Anda bisa sesuaikan lagi. */}
           <button
             className="bg-brand-primary text-white px-8 py-3 rounded-3xl text-sm tracking-wider font-quartenary hover:bg-brand-primary-hover transition duration-300"
           >
              enter
           </button>
        </Link>
      
      </div>
    </section>
  );
};

export default HeroSection;