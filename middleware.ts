import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Api routes protection
  const { pathname } = request.nextUrl
  const response = NextResponse.next()

  // Language middleware
  const lang = request.cookies.get('lang')?.value

  if (!lang) {
    response.cookies.set('lang', 'en', {
      path: '/',
      maxAge: 31536000,
    })
  }

  // Allowing Google Authentication
  if (pathname.startsWith('/api/auth')) {
    return NextResponse.next()
  }

  if (pathname.startsWith('/api')) {
    const authHeader = request.headers.get('Authorization')
    if (!authHeader) {
      return NextResponse.json(
        {
          success: false,
          message: 'Auth header is required',
        },
        { status: 401 }
      )
    }
  }

  // If trying to access a protected route and not authenticated
  const isAuthenticated = request.cookies.has('auth_token')

  if (
    (pathname.startsWith('/dashboard') || pathname.startsWith('/issues')) &&
    !isAuthenticated
  ) {
    // Redirect to login page
    return NextResponse.redirect(new URL('/signin', request.url))
  }

  return response
}

export const config = {
  matcher: [
    '/api/:path*',
    '/dashboard/:path*',
    '/issues/:path*',
    '/((?!_next|api|favicon.ico).*)',
  ],
}
