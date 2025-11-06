import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server-simple'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')
    const sector = searchParams.get('sector')
    const verification = searchParams.get('verification') || 'verified'
    
    const supabase = createClient()
    
    let query = supabase
      .from('companies')
      .select(`
        *,
        funding_rounds(*),
        metrics(*),
        regulatory_info(*)
      `)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)
    
    // filter by verification status
    if (verification !== 'all') {
      query = query.eq('verification_status', verification)
    }
    
    // filter by sector if specified
    if (sector && sector !== 'all') {
      query = query.eq('sector', sector)
    }
    
    const { data: companies, error, count } = await query
    
    if (error) throw error
    
    return NextResponse.json({
      companies: companies || [],
      total: count || 0,
      limit,
      offset
    })
    
  } catch (error: any) {
    console.error('❌ companies fetch error:', error)
    return NextResponse.json(
      { error: error.message || 'failed to fetch companies' },
      { status: 500 }
    )
  }
}