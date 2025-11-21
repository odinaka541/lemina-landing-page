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
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          color: 'var(--color-accent-primary)',
          marginBottom: '0.5rem'
        }}>
          Nigerian Tech Companies
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.125rem' }}>
          Comprehensive database of verified tech companies
        </p>
      </div>

      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>
        <select
          value={filters.sector}
          onChange={(e) => setFilters({ ...filters, sector: e.target.value })}
          style={{
            padding: '0.75rem 1rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: '8px',
            color: 'var(--color-text-primary)',
            fontSize: '0.875rem',
            minWidth: '150px'
          }}
        >
          <option value="all">All Sectors</option>
          <option value="Fintech">Fintech</option>
          <option value="Healthtech">Healthtech</option>
          <option value="Edtech">Edtech</option>
          <option value="Agritech">Agritech</option>
          <option value="Logistics">Logistics</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Other">Other</option>
        </select>

        <select
          value={filters.verification}
          onChange={(e) => setFilters({ ...filters, verification: e.target.value })}
          style={{
            padding: '0.75rem 1rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: '8px',
            color: 'var(--color-text-primary)',
            fontSize: '0.875rem',
            minWidth: '150px'
          }}
        >
          <option value="all">All Companies</option>
          <option value="verified">Verified Only</option>
          <option value="self_reported">Self Reported</option>
          <option value="cross_referenced">Cross Referenced</option>
        </select>
      </div>

      {loading && (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--color-text-secondary)' }}>
          Loading companies...
        </div>
      )}

      {error && (
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          color: '#FCA5A5',
          borderRadius: '8px'
        }}>
          {error}
        </div>
      )}

      {!loading && !error && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '1.5rem'
        }}>
          {companies.map((company) => {
            const latestFunding = getLatestFunding(company.funding_rounds)

            return (
              <Link
                key={company.id}
                href={`/app/companies/${company.id}`}
                className="glass-panel"
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  padding: '1.5rem',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      marginBottom: '0.5rem'
                    }}>
                      {company.name}
                    </h3>
                    <p style={{
                      color: 'var(--color-text-secondary)',
                      fontSize: '0.875rem',
                      lineHeight: '1.5',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {company.short_description}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                    <span style={{
                      background: 'rgba(16, 185, 129, 0.1)',
                      color: 'var(--color-accent-primary)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: 500
                    }}>
                      {company.sector}
                    </span>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      background: company.verification_status === 'verified' ? 'rgba(34, 197, 94, 0.1)' :
                        company.verification_status === 'self_reported' ? 'rgba(251, 191, 36, 0.1)' :
                          'rgba(59, 130, 246, 0.1)',
                      color: company.verification_status === 'verified' ? '#22C55E' :
                        company.verification_status === 'self_reported' ? '#FBB928' :
                          '#3B82F6'
                    }}>
                      {company.verification_status.replace('_', ' ')}
                    </span>
                  </div>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  marginBottom: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Founded</span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-text-primary)', fontWeight: 500 }}>{company.founded_year}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Team Size</span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-text-primary)', fontWeight: 500 }}>{company.team_size}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Location</span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-text-primary)', fontWeight: 500 }}>{company.headquarters}</span>
                  </div>
                  {latestFunding && (
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Latest Funding</span>
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-text-primary)', fontWeight: 500 }}>
                        {latestFunding.amount_usd ? formatFunding(latestFunding.amount_usd) : latestFunding.round_type}
                      </span>
                    </div>
                  )}
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.75rem',
                  color: 'var(--color-text-secondary)',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <span>Quality Score: {company.data_quality_score}%</span>
                  {company.metrics && company.metrics.length > 0 && (
                    <span style={{ color: 'var(--color-accent-primary)' }}>📊 Has Metrics</span>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      )}

      {!loading && !error && companies.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--color-text-secondary)' }}>
          <p style={{ marginBottom: '1rem' }}>No companies found matching your filters</p>
          <button
            onClick={() => setFilters({ sector: 'all', verification: 'all' })}
            className="btn btn-primary"
            style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  )
}