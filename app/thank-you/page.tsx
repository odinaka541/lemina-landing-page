'use client'

import Link from 'next/link'
import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function ThankYouContent() {
  const [companyName, setCompanyName] = useState('Your company')
  const searchParams = useSearchParams()

  useEffect(() => {
    const company = searchParams.get('company')
    if (company) {
      setCompanyName(company)
    }
  }, [searchParams])

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 16px 40px'
    }}>
      <div style={{
        maxWidth: '700px',
        width: '100%'
      }}>
        {/* Success Icon */}
        <div style={{
          width: '64px',
          height: '64px',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.05))',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px auto',
          border: '2px solid rgba(16, 185, 129, 0.3)',
          boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)'
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        {/* Main Content */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 className="text-gradient" style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: '12px',
            fontWeight: 700,
            letterSpacing: '-0.02em'
          }}>
            Thank You!
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6
          }}>
            <span style={{ color: 'var(--color-accent-primary)', fontWeight: 600 }}>{companyName}</span> has been added to our database.
          </p>
        </div>

        {/* What Happens Next Card */}
        <div className="glass-panel" style={{
          padding: 'clamp(24px, 5vw, 40px)',
          marginBottom: '32px'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
            marginBottom: '24px',
            color: 'var(--color-accent-primary)',
            fontWeight: 600
          }}>
            What Happens Next?
          </h2>

          <div style={{ display: 'grid', gap: '20px' }}>
            {/* Step 1 */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
              <div style={{
                minWidth: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--color-accent-primary)',
                flexShrink: 0
              }}>
                1
              </div>
              <div>
                <h3 style={{
                  color: 'var(--color-text-primary)',
                  marginBottom: '4px',
                  fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                  fontWeight: 600
                }}>
                  Verification (1-3 business days)
                </h3>
                <p style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
                  lineHeight: 1.5,
                  margin: 0
                }}>
                  We'll verify your information and may reach out for additional details.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
              <div style={{
                minWidth: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--color-accent-primary)',
                flexShrink: 0
              }}>
                2
              </div>
              <div>
                <h3 style={{
                  color: 'var(--color-text-primary)',
                  marginBottom: '4px',
                  fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                  fontWeight: 600
                }}>
                  Database Addition
                </h3>
                <p style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
                  lineHeight: 1.5,
                  margin: 0
                }}>
                  Your company will be added to our intelligence platform.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
              <div style={{
                minWidth: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--color-accent-primary)',
                flexShrink: 0
              }}>
                3
              </div>
              <div>
                <h3 style={{
                  color: 'var(--color-text-primary)',
                  marginBottom: '4px',
                  fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                  fontWeight: 600
                }}>
                  Investor Exposure
                </h3>
                <p style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
                  lineHeight: 1.5,
                  margin: 0
                }}>
                  VCs using Lemina will be able to discover your company.
                </p>
              </div>
            </div>
          </div>

          {/* Email Notice */}
          <div style={{
            marginTop: '24px',
            padding: '16px',
            background: 'rgba(16, 185, 129, 0.05)',
            borderRadius: '8px',
            border: '1px solid rgba(16, 185, 129, 0.1)'
          }}>
            <p style={{
              fontSize: 'clamp(0.875rem, 2vw, 0.95rem)',
              color: 'var(--color-text-secondary)',
              margin: 0,
              textAlign: 'center'
            }}>
              Check your email for confirmation. We typically respond within 48 hours.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '20px'
        }}>
          <Link href="/" className="btn btn-primary" style={{
            padding: 'clamp(12px, 2vw, 14px) clamp(24px, 4vw, 32px)',
            fontSize: 'clamp(0.95rem, 2vw, 1rem)',
            whiteSpace: 'nowrap'
          }}>
            ← Return to Homepage
          </Link>
          <Link href="/founders" className="btn btn-secondary" style={{
            padding: 'clamp(12px, 2vw, 14px) clamp(24px, 4vw, 32px)',
            fontSize: 'clamp(0.95rem, 2vw, 1rem)',
            whiteSpace: 'nowrap'
          }}>
            Add Another Company
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-text-secondary)'
    }}>Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  )
}