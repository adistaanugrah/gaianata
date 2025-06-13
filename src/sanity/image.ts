// sanity/image.ts

import createImageUrlBuilder from '@sanity/image-url'

// Ambil projectId dan dataset dari environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

// Buat image builder
const imageBuilder = createImageUrlBuilder({ projectId, dataset })

// Fungsi helper untuk mengubah source gambar dari Sanity menjadi URL yang bisa digunakan
export const urlForImage = (source: any) => {
  // Pastikan source tidak kosong sebelum membuat URL
  if (!source || !source.asset) {
    return null;
  }
  return imageBuilder.image(source)
}