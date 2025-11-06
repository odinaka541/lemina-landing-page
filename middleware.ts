import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // protect /app/* routes with basic check
  if (request.nextUrl.pathname.startsWith('/app')) {
    // for now, just allow access to login page
    if (request.nextUrl.pathname === '/app/login') {
      return NextResponse.next()
    }
    
    // redirect to login for other protected routes
    const authCookie = request.cookies.get('supabase-auth-token')
    if (!authCookie) {
      return NextResponse.redirect(new URL('/app/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/app/:path*']
}