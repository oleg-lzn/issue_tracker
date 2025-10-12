// app/api/auth/google/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth'

  const options = {
    client_id:
      process.env.GOOGLE_CLIENT_ID! ||
      '8048014990-cb73uktlvg5t0576oitdj2f8s1bhthub.apps.googleusercontent.com',
    redirect_uri:
      process.env.GOOGLE_REDIRECT_URI! ||
      'http://localhost:3000/api/auth/google/callback',
    response_type: 'code',
    scope: 'openid email profile',
    access_type: 'offline',
    prompt: 'consent',
  }

  const qs = new URLSearchParams(options)
  const url = `${rootUrl}?${qs.toString()}`

  return NextResponse.redirect(url)
}
