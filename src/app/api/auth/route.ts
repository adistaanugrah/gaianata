// src/app/api/auth/[...path]/route.ts

import { NextRequest, NextResponse } from 'next/server';
const { create } = require('simple-oauth2');

// --- PERBAIKAN FINAL: Eksplisit memberitahu Next.js bahwa route ini DINAMIS ---
// Ini akan mencegah Next.js mencoba melakukan prerender atau export statis pada API route ini.
export const dynamic = 'force-dynamic';

// Fungsi handler utama
export async function GET(request: NextRequest) {
  
  // Inisialisasi oauth2 di dalam handler untuk memastikan env vars tersedia
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

  const headers = { 'Cache-Control': 'no-cache, no-store, must-revalidate' };

  if (provider === 'auth') {
    const authorizationUri = oauth2.authorizationCode.getUri({
      redirect_uri: `${process.env.OAUTH_HOST}/api/auth/callback`,
      scope: 'repo,user',
    });
    return NextResponse.redirect(authorizationUri);
  }

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

  return new NextResponse('Invalid auth route', { status: 404, headers });
}