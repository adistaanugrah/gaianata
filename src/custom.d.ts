// src/custom.d.ts

declare module 'simple-oauth2' {
    // Kita hanya perlu mendeklarasikan bagian yang kita gunakan.
    // 'any' di sini sudah cukup untuk memuaskan TypeScript tanpa harus menulis semua tipe secara manual.
    const create: any;
    const AuthorizationCode: any;
    export { create, AuthorizationCode };
  }