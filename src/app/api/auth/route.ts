// src/app/api/auth/[...path]/route.ts

import { NextRequest, NextResponse } from 'next/server';

// Eksplisit memberitahu Next.js bahwa route ini DINAMIS
export const dynamic = 'force-dynamic';

// Fungsi handler utama
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/');
  const provider = pathParts[3]; // 'auth' atau 'callback'

  const clientID = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  const oauthHost = process.env.OAUTH_HOST;

  const headers = { 'Cache-Control': 'no-cache, no-store, must-revalidate' };

  // Bagian 1: Mengarahkan pengguna ke halaman otorisasi GitHub
  if (provider === 'auth') {
    const scope = 'repo,user';
    const redirectUri = `${oauthHost}/api/auth/callback`;
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scope}`;
    
    return NextResponse.redirect(authUrl);
  }

  // Bagian 2: Menangani callback dari GitHub setelah otorisasi
  if (provider === 'callback') {
    const code = url.searchParams.get('code');

    if (!code) {
      return new NextResponse('No code provided', { status: 400 });
    }

    try {
      // Tukarkan 'code' dengan 'access_token'
      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          client_id: clientID,
          client_secret: clientSecret,
          code: code,
        }),
      });

      const tokenData = await tokenResponse.json();

      if (tokenData.error) {
        console.error('GitHub OAuth Error:', tokenData.error_description);
        return new NextResponse(tokenData.error_description, { status: 400 });
      }

      const token = tokenData.access_token;
      
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
      console.error('Access Token Fetch Error', error);
      return new NextResponse(error.message, { status: 500 });
    }
  }

  return new NextResponse('Invalid auth route', { status: 404, headers });
}