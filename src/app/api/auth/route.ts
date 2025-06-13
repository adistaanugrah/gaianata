// src/app/api/auth/[...path]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { simpleOauth2 } from 'simple-oauth2';
import cookie from 'cookie';

// Konfigurasi GitHub OAuth dari Environment Variables
const githubConfig = {
  clientID: process.env.GITHUB_CLIENT_ID!,
  clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  tokenHost: 'https://github.com',
  tokenPath: '/login/oauth/access_token',
  authorizePath: '/login/oauth/authorize',
};

// Helper untuk membuat klien OAuth2
const oauth2 = new simpleOauth2.AuthorizationCode({
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
    const authorizationUri = oauth2.authorizeURL({
      redirect_uri: `${process.env.OAUTH_HOST}/api/auth/callback`, // URL callback kita sendiri
      scope: 'repo,user', // Scope izin yang diminta
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
      const accessToken = await oauth2.getToken({
        code: code,
        redirect_uri: `${process.env.OAUTH_HOST}/api/auth/callback`,
      });

      const { token } = oauth2.createToken(accessToken);

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
              token: "${token.access_token}"
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
      console.error('Access Token Error', error.message);
      return new NextResponse(error.message, { status: 500 });
    }
  }

  // Jika rute tidak dikenali
  return new NextResponse('Invalid auth route', { status: 404, headers });
}