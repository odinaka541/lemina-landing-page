import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server-simple'
import { 
  mapSectorToDatabase, 
  mapTeamSizeToNumber, 
  mapFundingStatusToRoundType, 
  mapFundingRangeToUSD, 
  inferBusinessModel 
} from '@/lib/utils'

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    const supabase = createClient()
    
    // validate required fields
    if (!formData.companyName || !formData.website || !formData.founderEmail) {
      return NextResponse.json(
        { error: 'missing required fields' },
        { status: 400 }
      )
    }
    
    // insert company
    const { data: company, error: companyError } = await supabase
      .from('companies')
      .insert({
        name: formData.companyName,
        website: formData.website,
        sector: mapSectorToDatabase(formData.sector),
        sub_sector: formData.sector,
        short_description: formData.description,
        founded_year: parseInt(formData.foundedYear),
        team_size: mapTeamSizeToNumber(formData.teamSize),
        headquarters: formData.hqCity,
        founders: formData.founderName,
        linkedin_url: formData.founderLinkedIn || null,
        twitter_url: formData.founderTwitter || null,
        verification_status: 'self_reported',
        created_by: formData.founderEmail,
        data_quality_score: 40,
        business_model: inferBusinessModel(formData.sector)
      })
      .select()
      .single()
    
    if (companyError) throw companyError
    
    const companyId = company.id
    
    console.log('✅ company inserted with id:', companyId)
    
    // insert metrics if has traction
    if (formData.hasTraction === 'yes' && formData.keyMetric) {
      const metricData = {
        company_id: companyId,
        metric_type: 'key_metric',
        value: 0, // we'll parse this better later
        unit: 'mixed',
        period_type: 'current',
        period_date: new Date().toISOString().split('T')[0],
        source: 'self_reported',
        confidence_level: 'low',
        notes: formData.keyMetric // store full text for manual parsing
      }

      await supabase.from('metrics').insert(metricData)
      console.log('✅ metric inserted')
    }
    
    // insert funding round (if applicable)
    const fundingStatus = formData.fundingStatus
    if (fundingStatus && fundingStatus !== 'bootstrapped') {
      const fundingData = {
        company_id: companyId,
        round_type: mapFundingStatusToRoundType(fundingStatus),
        amount_usd: mapFundingRangeToUSD(formData.totalFunding),
        is_disclosed: formData.totalFunding ? true : false,
        lead_investors: formData.investors || null,
        source: 'self_reported',
        verified: false,
        announced_date: new Date().toISOString().split('T')[0]
      }

      await supabase.from('funding_rounds').insert(fundingData)
      console.log('✅ funding round inserted')
    }
    
    // insert regulatory info
    const registered = formData.registered
    if (registered === 'yes') {
      const regulatoryData = {
        company_id: companyId,
        license_type: 'cac',
        license_name: 'CAC Registration',
        status: 'active',
        verified: false
      }

      await supabase.from('regulatory_info').insert(regulatoryData)
      console.log('✅ cac registration inserted')
    }

    // insert cbn license if checked
    if (formData.license_cbn) {
      await supabase.from('regulatory_info').insert({
        company_id: companyId,
        license_type: 'cbn_payment_service',
        license_name: 'CBN Payment Service Provider License',
        status: 'unknown',
        verified: false
      })
    }

    // insert sec license if checked
    if (formData.license_sec) {
      await supabase.from('regulatory_info').insert({
        company_id: companyId,
        license_type: 'sec_investment_advisor',
        license_name: 'SEC License',
        status: 'unknown',
        verified: false
      })
    }

    // insert naicom license if checked
    if (formData.license_naicom) {
      await supabase.from('regulatory_info').insert({
        company_id: companyId,
        license_type: 'naicom_insurance',
        license_name: 'NAICOM Insurance License',
        status: 'unknown',
        verified: false
      })
    }
    
    return NextResponse.json({ 
      success: true, 
      companyId: companyId,
      message: 'company successfully added to database'
    })
    
  } catch (error: any) {
    console.error('❌ submission error:', error)
    return NextResponse.json(
      { error: error.message || 'failed to submit company' },
      { status: 500 }
    )
  }
}