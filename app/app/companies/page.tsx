'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Company {
  id: string
  name: string
  website: string
  sector: string
  short_description: string
  founded_year: number
  team_size: number
  headquarters: string
  verification_status: string
  data_quality_score: number
  funding_rounds: any[]
  metrics: any[]
}

export default function CompaniesPage() {
  const [companies, setCompanies] = useState<Company[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filters, setFilters] = useState({
    sector: 'all',
    verification: 'all'
  })

  useEffect(() => {
    fetchCompanies()
  }, [filters])

  const fetchCompanies = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams({
        sector: filters.sector,
        verification: filters.verification,
        limit: '50'
      })

      const response = await fetch(`/api/companies?${params}`)
      const data = await response.json()

      if (!response.ok) throw new Error(data.error)

      setCompanies(data.companies)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const getLatestFunding = (fundingRounds: any[]) => {
    if (!fundingRounds || fundingRounds.length === 0) return null
    return fundingRounds.sort((a, b) => 
      new Date(b.announced_date).getTime() - new Date(a.announced_date).getTime()
    )[0]
  }

  const formatFunding = (amount: number) => {
    if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M`
    if (amount >= 1000) return `$${(amount / 1000).toFixed(0)}K`
    return `$${amount}`
  }

  return (
    <div className="companies-page">
      <div className="page-header">
        <h1>nigerian tech companies</h1>
        <p>comprehensive database of verified tech companies</p>
      </div>

      <div className="filters">
        <select 
          value={filters.sector} 
          onChange={(e) => setFilters({...filters, sector: e.target.value})}
        >
          <option value="all">all sectors</option>
          <option value="Fintech">fintech</option>
          <option value="Healthtech">healthtech</option>
          <option value="Edtech">edtech</option>
          <option value="Agritech">agritech</option>
          <option value="Logistics">logistics</option>
          <option value="E-commerce">e-commerce</option>
          <option value="Other">other</option>
        </select>

        <select 
          value={filters.verification} 
          onChange={(e) => setFilters({...filters, verification: e.target.value})}
        >
          <option value="all">all companies</option>
          <option value="verified">verified only</option>
          <option value="self_reported">self reported</option>
          <option value="cross_referenced">cross referenced</option>
        </select>
      </div>

      {loading && (
        <div className="loading">loading companies...</div>
      )}

      {error && (
        <div className="error-message">{error}</div>
      )}

      {!loading && !error && (
        <div className="companies-grid">
          {companies.map((company) => {
            const latestFunding = getLatestFunding(company.funding_rounds)
            
            return (
              <Link 
                key={company.id} 
                href={`/app/companies/${company.id}`}
                className="company-card"
              >
                <div className="company-header">
                  <div className="company-info">
                    <h3>{company.name}</h3>
                    <p className="company-description">
                      {company.short_description}
                    </p>
                  </div>
                  <div className="company-meta">
                    <span className="sector-tag">{company.sector}</span>
                    <span className={`verification-badge ${company.verification_status}`}>
                      {company.verification_status.replace('_', ' ')}
                    </span>
                  </div>
                </div>

                <div className="company-stats">
                  <div className="stat">
                    <span className="stat-label">founded</span>
                    <span className="stat-value">{company.founded_year}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">team size</span>
                    <span className="stat-value">{company.team_size}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">location</span>
                    <span className="stat-value">{company.headquarters}</span>
                  </div>
                  {latestFunding && (
                    <div className="stat">
                      <span className="stat-label">latest funding</span>
                      <span className="stat-value">
                        {latestFunding.amount_usd ? formatFunding(latestFunding.amount_usd) : latestFunding.round_type}
                      </span>
                    </div>
                  )}
                </div>

                <div className="company-footer">
                  <span className="quality-score">
                    quality score: {company.data_quality_score}%
                  </span>
                  {company.metrics && company.metrics.length > 0 && (
                    <span className="has-metrics">📊 has metrics</span>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      )}

      {!loading && !error && companies.length === 0 && (
        <div className="empty-state">
          <p>no companies found matching your filters</p>
          <button onClick={() => setFilters({sector: 'all', verification: 'all'})}>
            clear filters
          </button>
        </div>
      )}

      <style jsx>{`
        .companies-page {
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-header h1 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #10B981;
          margin-bottom: 0.5rem;
        }

        .page-header p {
          color: #D0D0D0;
          font-size: 1.1rem;
        }

        .filters {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .filters select {
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 8px;
          color: #FAFAFA;
          font-size: 14px;
        }

        .loading,
        .error-message {
          text-align: center;
          padding: 2rem;
          color: #D0D0D0;
        }

        .error-message {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #FCA5A5;
          border-radius: 8px;
        }

        .companies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        .company-card {
          background: rgba(16, 185, 129, 0.03);
          border: 1px solid rgba(16, 185, 129, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          display: block;
        }

        .company-card:hover {
          transform: translateY(-2px);
          border-color: #10B981;
          background: rgba(16, 185, 129, 0.05);
        }

        .company-header {
          margin-bottom: 1rem;
        }

        .company-info h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #FAFAFA;
          margin-bottom: 0.5rem;
        }

        .company-description {
          color: #D0D0D0;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .company-meta {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .sector-tag {
          background: rgba(16, 185, 129, 0.1);
          color: #10B981;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .verification-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
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

        .verification-badge.cross_referenced {
          background: rgba(59, 130, 246, 0.1);
          color: #3B82F6;
        }

        .company-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .stat {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .stat-label {
          font-size: 0.8rem;
          color: #64748B;
          text-transform: lowercase;
        }

        .stat-value {
          font-size: 0.9rem;
          color: #FAFAFA;
          font-weight: 500;
        }

        .company-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          color: #64748B;
          border-top: 1px solid rgba(16, 185, 129, 0.1);
          padding-top: 1rem;
        }

        .has-metrics {
          color: #10B981;
        }

        .empty-state {
          text-align: center;
          padding: 3rem;
          color: #D0D0D0;
        }

        .empty-state button {
          margin-top: 1rem;
          padding: 0.75rem 1.5rem;
          background: #10B981;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .companies-grid {
            grid-template-columns: 1fr;
          }

          .filters {
            flex-direction: column;
          }

          .company-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}