import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    // Gunakan Flexbox untuk membuat layout 2 kolom
    // 'min-h-screen' agar setidaknya setinggi layar
    // 'flex-col md:flex-row' -> tumpuk di mobile, berdampingan di layar medium ke atas
    <section id="home" className="flex flex-col md:flex-row min-h-screen bg-white">

      {/* Kolom Kiri: Gambar */}
      {/* 'w-full md:w-1/2' -> lebar penuh di mobile, setengah di medium+ */}
      {/* 'h-[60vh] md:h-screen' -> atur tinggi spesifik di mobile, tinggi penuh di medium+ */}
      {/* 'relative' agar Image bisa 'fill' */}
      <div className="w-full md:w-3/2 h-[60vh] md:h-screen relative order-1 md:order-1"> {/* order-1 memastikan urutan visual */}
        <Image
          src="/images/couple-photo.jpg" // Pastikan nama file benar
          alt="Wedding couple"
          layout="fill" // Mengisi div container kolom kiri
          objectFit="cover" // Menjaga rasio aspek gambar
          quality={85}
          priority
        />
      </div>

      {/* Kolom Kanan: Teks */}
      {/* 'w-full md:w-1/4' -> lebar */}
      {/* 'flex items-center justify-center' -> menengahkan konten di dalam kolom */}
      {/* 'p-8 sm:p-12 md:p-16' -> padding */}
      {/* 'relative' untuk positioning quotes */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 sm:p-6 md:p-8 lg:p-12 relative order-2 md:order-2">
        {/* Container untuk konten teks agar mudah ditengahkan jika perlu */}
        <div className="text-center max-w-md relative"> {/* max-w-md membatasi lebar teks */}

          {/* Tanda Kutip Atas */}
          {/* Sesuaikan posisi (top/left) dan warna (text-purple-200) */}
          <span
            aria-hidden="true"
            className="absolute -top-8 -left-8 text-8xl font-serif text-purple-200 opacity-50 z-0"
          >
            “
          </span>

          {/* Judul Utama */}
          {/* Gunakan font-serif, ukuran teks responsif, warna teks */}
          <h1 className="relative z-10 text-2xl sm:text-4xl md:text-5xl font-serif leading-tight mb-8 sm:mb-10 text-gray-800">
            BESPOKE <br />
            IN EVERY <br />
            BLOOM, <br />
            TAILORED TO <br />
            YOUR <br />
            MOMENT
          </h1>

          {/* Tombol Enter */}
          {/* Arahkan href ke section berikutnya yang sesuai, misal #our-service atau #about-us */}
          <Link href="#our-service" className="relative z-10">
             <button
               // Ganti warna bg-purple-800 dg warna brand Anda
               className="bg-purple-800 text-white px-8 py-3 rounded uppercase text-sm tracking-wider font-semibold hover:bg-purple-900 transition duration-300"
             >
                enter
             </button>
          </Link>

          {/* Tanda Kutip Bawah */}
          {/* Sesuaikan posisi (bottom/right) dan warna */}
          <span
            aria-hidden="true"
            className="absolute -bottom-8 -right-8 text-8xl font-serif text-purple-200 opacity-50 z-0"
          >
            ”
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;