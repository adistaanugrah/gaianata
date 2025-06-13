// src/app/api/auth/[...path]/route.ts

import { NextRequest, NextResponse } from 'next/server';
// --- PERBAIKAN: Impor 'create' secara spesifik, bukan seluruh modul ---
import { create } from 'simple-oauth2';

// Konfigurasi GitHub OAuth dari Environment Variables
const githubConfig = {
  clientID: process.env.GITHUB_CLIENT_ID!,
  clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  tokenHost: 'https://github.com',
  tokenPath: '/login/oauth/access_token',
  authorizePath: '/login/oauth/authorize',
};

// --- PERBAIKAN: Panggil fungsi 'create' secara langsung ---
const oauth2 = create({
  client: {
    id: githubConfig.clientID,
    secret: githubConfig.clientSecret,
  },
  auth: {
    tokenHost: githubConfig.tokenHost,
    tokenPath: githubConfig.tokenPath,
    authorizePath: githubConfig.authorizePath,
  },
});

// Ini adalah fungsi handler utama untuk semua rute di bawah /api/auth
export async function GET(request: NextRequest) {
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