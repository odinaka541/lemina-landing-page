import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // protect /app/* routes
  if (request.nextUrl.pathname.startsWith('/app')) {
    const response = NextResponse.next()
    
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value
          },
          set(name: string, value: string, options: any) {
            response.cookies.set({ name, value, ...options })
          },
          remove(name: string, options: any) {
            response.cookies.set({ name, value: '', ...options })
          },
        },
      }
    )

    const { data: { session } } = await supabase.auth.getSession()

    if (!session && request.nextUrl.pathname !== '/app/login') {
      return NextResponse.redirect(new URL('/app/login', request.url))
    }

    if (session && request.nextUrl.pathname === '/app/login') {
      return NextResponse.redirect(new URL('/app/companies', request.url))
    }

    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/app/:path*']
}