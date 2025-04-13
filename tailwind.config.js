/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Anda bisa hapus "./src/pages/..." jika tidak menggunakan folder pages
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // <-- PASTIKAN PATH INI ADA
  ],
  theme: {
    extend: {
       // Konfigurasi Anda (font, warna)
       fontFamily: {
         sans: ['var(--font-poppins)', 'sans-serif'],
         serif: ['var(--font-playfair)', 'serif'],
       },
       colors: { /* ... warna Anda ... */ }
    },
  },
  plugins: [],
}