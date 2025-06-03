/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       fontFamily: {
         secondary: ['var(--font-poppins)', 'sans-serif'],
         primary: ['var(--font-museo)', 'sans-serif'],
         tertiary: ['var(--font-didot)', 'serif'],
         quartenary: ['var(--font-simple-ask)', 'sans-serif'],
       },
       colors: {
        brandPurple: '#AC86A8', // Untuk #AC86A8, bisa juga tetap di bawah 'brand'
         brandPurpleHover: '#9A7095', // Hover untuk brandPurple
         textPurpleHover: '#9A7095',     
         textCharcoal: '#3A3A3A',     // Untuk #3A3A3A
         textDarkGray: '#838383',  // Untuk #838383
         textLightGray: '#AEAEAE',   // Untuk #AEAEAE
         brand: {
           primary: '#AC86A8',
           'primary-hover': '#9A7095',
         }, // <-- KOMA DIPERLUKAN JIKA ADA ENTRI BERIKUTNYA
         brandtext: {
           primary: '#3A3A3A'
         }, // <-- KOMA DIPERLUKAN JIKA ADA ENTRI BERIKUTNYA
         brandbg1: {
           primary: '#AEAEAE'
         }, // <-- KOMA DIPERLUKAN JIKA ADA ENTRI BERIKUTNYA
         brandbg2: {
           primary: '#838383'
         }
         // Tidak perlu koma di sini jika ini adalah properti terakhir dalam objek 'colors'
       }
       // Tidak perlu koma di sini jika 'colors' adalah properti terakhir dalam objek 'extend'
    },
  },
  plugins: [],
}