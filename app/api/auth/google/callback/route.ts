import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/db'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'
import {
  createSession,
  generateFakePassword,
  generateRandomId,
} from '@/lib/auth'

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')

  if (!code) {
    return NextResponse.json({ error: 'Missing code' }, { status: 400 })
  }

  // Getting token from Google
  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI!,
      grant_type: 'authorization_code',
      code,
    }),
  })

  const tokenData = await tokenRes.json()

  if (!tokenData.access_token) {
    console.error('Token exchange failed:', tokenData)
    return NextResponse.json(
      { error: 'Failed to get access token' },
      { status: 400 }
    )
  }

  // Getting user profile from token
  const profileRes = await fetch(
    'https://www.googleapis.com/oauth2/v2/userinfo',
    {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    }
  )
  const profile = await profileRes.json()

  const { email } = profile

  if (!email) {
    return NextResponse.json(
      { error: 'Email not provided by Google' },
      { status: 400 }
    )
  }

  // Checking the user in the db
  let user = await db.query.users.findFirst({ where: eq(users.email, email) })

  // If no user - creating a user and issuing a session
  if (!user) {
    const fakePassword = await generateFakePassword()
    const newId = generateRandomId()
    const [newUser] = await db
      .insert(users)
      .values({ id: newId, email, password: fakePassword })
      .returning()

    user = newUser
  }

  await createSession(user.id)

  // Redirecting to the dashboard
  return NextResponse.redirect(new URL('/dashboard', request.url))
}
