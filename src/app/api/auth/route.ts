// src/app/api/auth/[...path]/route.ts

import { NextRequest, NextResponse } from 'next/server';
// Kita tetap gunakan require untuk stabilitas impor
const { create } = require('simple-oauth2');

// Ini adalah fungsi handler utama untuk semua rute di bawah /api/auth
export async function GET(request: NextRequest) {
  
  // --- PERBAIKAN UTAMA: Inisialisasi oauth2 dipindahkan ke dalam handler ---
  // Kode ini sekarang hanya berjalan saat API di-request, bukan saat build.
  const oauth2 = create({
    client: {
      id: process.env.GITHUB_CLIENT_ID!,
      secret: process.env.GITHUB_CLIENT_SECRET!,
    },
    auth: {
      tokenHost: 'https://github.com',
      tokenPath: '/login/oauth/access_token',
      authorizePath: '/login/oauth/authorize',
    },
  });

  const url = new URL(request.url);
  const pathParts = url.pathname.split('/');
  const provider = pathParts[3]; // 'auth' atau 'callback'

  // Set header untuk mencegah caching oleh browser
  const headers = { 'Cache-Control': 'no-cache, no-store, must-revalidate' };

  // 1. Mengarahkan pengguna ke halaman login GitHub
  if (provider === 'auth') {
    const authorizationUri = oauth2.authorizationCode.getUri({
      redirect_uri: `${process.env.OAUTH_HOST}/api/auth/callback`,
      scope: 'repo,user',
    });
    return NextResponse.redirect(authorizationUri);
  }

  // 2. Menangani callback dari GitHub setelah login berhasil
  if (provider === 'callback') {
    const code = url.searchParams.get('code');
    if (!code) {
      return new NextResponse('No code provided', { status: 400 });
    }

    try {
      const tokenParams = {
        code: code,
        redirect_uri: `${process.env.OAUTH_HOST}/api/auth/callback`,
      };

      const accessToken = await oauth2.authorizationCode.getToken(tokenParams);
      const token = accessToken.token.access_token;

      // Kirim token kembali ke halaman callback Decap CMS
      const responseBody = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <title>Decap CMS Authentication</title>
          <script>
            window.opener.postMessage('authorization:github:success:${JSON.stringify({
              provider: "github",
              token: "${token}"
            })}', '*')
            window.close()
          </script>
        </head>
        <body></body>
        </html>`;

      return new NextResponse(responseBody, {
        status: 200,
        headers: { 'Content-Type': 'text/html', ...headers },
      });

    } catch (error: any) {
      console.error('Access Token Error', error);
      return new NextResponse(error.message, { status: 500 });
    }
  }

  // Jika rute tidak dikenali
  return new NextResponse('Invalid auth route', { status: 404, headers });
}