'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

interface Company {
  id: string
  name: string
  website: string
  sector: string
  short_description: string
  founded_year: number
  team_size: number
  headquarters: string
  founders: string
  linkedin_url?: string
  twitter_url?: string
  verification_status: string
  data_quality_score: number
  funding_rounds: any[]
  metrics: any[]
  regulatory_info: any[]
}

export default function CompanyDetailPage() {
  const params = useParams()
  const [company, setCompany] = useState<Company | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const supabase = createClient()

  useEffect(() => {
    if (params.id) {
      fetchCompany(params.id as string)
    }
  }, [params.id])

  const fetchCompany = async (id: string) => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('companies')
        .select(`
          *,
          funding_rounds(*),
          metrics(*),
          regulatory_info(*)
        `)
        .eq('id', id)
        .single()

      if (error) throw error
      if (!data) throw new Error('company not found')

      setCompany(data)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const formatAmount = (amount: number) => {
    if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M`
    if (amount >= 1000) return `$${(amount / 1000).toFixed(0)}K`
    return `$${amount}`
  }

  if (loading) {
    return <div className="loading">loading company details...</div>
  }

  if (error) {
    return (
      <div className="error-state">
        <h2>error loading company</h2>
        <p>{error}</p>
        <Link href="/app/companies">← back to companies</Link>
      </div>
    )
  }

  if (!company) {
    return (
      <div className="error-state">
        <h2>company not found</h2>
        <Link href="/app/companies">← back to companies</Link>
      </div>
    )
  }

  return (
    <div className="company-detail">
      <div className="breadcrumb">
        <Link href="/app/companies">← companies</Link>
      </div>

      <div className="company-header">
        <div className="company-title">
          <h1>{company.name}</h1>
          <p>{company.short_description}</p>
          <div className="company-links">
            <a href={company.website} target="_blank" rel="noopener noreferrer">
              🌐 website
            </a>
            {company.linkedin_url && (
              <a href={company.linkedin_url} target="_blank" rel="noopener noreferrer">
                💼 linkedin
              </a>
            )}
            {company.twitter_url && (
              <a href={company.twitter_url} target="_blank" rel="noopener noreferrer">
                🐦 twitter
              </a>
            )}
          </div>
        </div>
        <div className="company-badges">
          <span className="sector-badge">{company.sector}</span>
          <span className={`verification-badge ${company.verification_status}`}>
            {company.verification_status.replace('_', ' ')}
          </span>
          <span className="quality-badge">
            {company.data_quality_score}% quality
          </span>
        </div>
      </div>

      <div className="company-content">
        <div className="section">
          <h3>company basics</h3>
          <div className="info-grid">
            <div className="info-item">
              <span className="label">founded year</span>
              <span className="value">{company.founded_year}</span>
            </div>
            <div className="info-item">
              <span className="label">team size</span>
              <span className="value">{company.team_size} people</span>
            </div>
            <div className="info-item">
              <span className="label">headquarters</span>
              <span className="value">{company.headquarters}</span>
            </div>
            <div className="info-item">
              <span className="label">founders</span>
              <span className="value">{company.founders}</span>
            </div>
          </div>
        </div>

        {company.funding_rounds && company.funding_rounds.length > 0 && (
          <div className="section">
            <h3>funding history</h3>
            <div className="funding-list">
              {company.funding_rounds
                .sort((a, b) => new Date(b.announced_date).getTime() - new Date(a.announced_date).getTime())
                .map((round, index) => (
                <div key={index} className="funding-round">
                  <div className="round-info">
                    <span className="round-type">{round.round_type}</span>
                    <span className="round-date">
                      {new Date(round.announced_date).getFullYear()}
                    </span>
                  </div>
                  <div className="round-details">
                    {round.amount_usd && (
                      <span className="amount">{formatAmount(round.amount_usd)}</span>
                    )}
                    {round.lead_investors && (
                      <span className="investors">{round.lead_investors}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {company.metrics && company.metrics.length > 0 && (
          <div className="section">
            <h3>key metrics</h3>
            <div className="metrics-list">
              {company.metrics.map((metric, index) => (
                <div key={index} className="metric-item">
                  <span className="metric-type">{metric.metric_type}</span>
                  <span className="metric-notes">{metric.notes}</span>
                  <span className="metric-source">source: {metric.source}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {company.regulatory_info && company.regulatory_info.length > 0 && (
          <div className="section">
            <h3>regulatory information</h3>
            <div className="regulatory-list">
              {company.regulatory_info.map((reg, index) => (
                <div key={index} className="regulatory-item">
                  <span className="license-name">{reg.license_name}</span>
                  <span className={`license-status ${reg.status}`}>
                    {reg.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .company-detail {
          max-width: 1000px;
          margin: 0 auto;
        }

        .breadcrumb {
          margin-bottom: 2rem;
        }

        .breadcrumb a {
          color: #10B981;
          text-decoration: none;
          font-size: 0.9rem;
        }

        .company-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 3rem;
          gap: 2rem;
        }

        .company-title h1 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #FAFAFA;
          margin-bottom: 0.5rem;
        }

        .company-title p {
          color: #D0D0D0;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .company-links {
          display: flex;
          gap: 1rem;
        }

        .company-links a {
          color: #10B981;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s;
        }

        .company-links a:hover {
          color: #FCD34D;
        }

        .company-badges {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-end;
        }

        .sector-badge {
          background: rgba(16, 185, 129, 0.1);
          color: #10B981;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .verification-badge {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .verification-badge.verified {
          background: rgba(34, 197, 94, 0.1);
          color: #22C55E;
        }

        .verification-badge.self_reported {
          background: rgba(251, 191, 36, 0.1);
          color: #FBB928;
        }

        .quality-badge {
          background: rgba(139, 92, 246, 0.1);
          color: #8B5CF6;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .section {
          background: rgba(16, 185, 129, 0.03);
          border: 1px solid rgba(16, 185, 129, 0.1);
          border-radius: 12px;
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .section h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #10B981;
          margin-bottom: 1.5rem;
          text-transform: lowercase;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .label {
          font-size: 0.9rem;
          color: #64748B;
          text-transform: lowercase;
        }

        .value {
          font-size: 1.1rem;
          color: #FAFAFA;
          font-weight: 500;
        }

        .funding-list,
        .metrics-list,
        .regulatory-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .funding-round {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          border: 1px solid rgba(16, 185, 129, 0.05);
        }

        .round-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .round-type {
          font-weight: 600;
          color: #FAFAFA;
          text-transform: capitalize;
        }

        .round-date {
          font-size: 0.9rem;
          color: #64748B;
        }

        .round-details {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          align-items: flex-end;
        }

        .amount {
          font-weight: 600;
          color: #10B981;
        }

        .investors {
          font-size: 0.9rem;
          color: #D0D0D0;
        }

        .metric-item,
        .regulatory-item {
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          border: 1px solid rgba(16, 185, 129, 0.05);
        }

        .metric-type {
          font-weight: 600;
          color: #FAFAFA;
          display: block;
          margin-bottom: 0.5rem;
        }

        .metric-notes {
          color: #D0D0D0;
          display: block;
          margin-bottom: 0.25rem;
        }

        .metric-source {
          font-size: 0.8rem;
          color: #64748B;
        }

        .license-name {
          font-weight: 600;
          color: #FAFAFA;
          margin-right: 1rem;
        }

        .license-status {
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .license-status.active {
          background: rgba(34, 197, 94, 0.1);
          color: #22C55E;
        }

        .license-status.unknown {
          background: rgba(251, 191, 36, 0.1);
          color: #FBB928;
        }

        .loading,
        .error-state {
          text-align: center;
          padding: 3rem;
          color: #D0D0D0;
        }

        .error-state h2 {
          color: #EF4444;
          margin-bottom: 1rem;
        }

        .error-state a {
          color: #10B981;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .company-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .company-badges {
            align-items: flex-start;
            flex-direction: row;
            flex-wrap: wrap;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }

          .funding-round {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .round-details {
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  )
}