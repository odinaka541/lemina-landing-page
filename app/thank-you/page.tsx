'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function ThankYouPage() {
  const [companyName, setCompanyName] = useState('Your company')
  const searchParams = useSearchParams()

  useEffect(() => {
    const company = searchParams.get('company')
    if (company) {
      setCompanyName(company)
    }
  }, [searchParams])

  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <div className="checkmark">
          <svg viewBox="0 0 52 52">
            <polyline points="14 27 22 35 38 17" />
          </svg>
        </div>

        <h1>Thank You!</h1>
        <p>
          <span className="company-name">{companyName}</span> has been added to our database.
        </p>

        <div className="next-steps">
          <h2>What Happens Next?</h2>
          <ol>
            <li>
              <strong>Verification (1-3 business days):</strong> We'll verify your information and may reach out for additional details.
            </li>
            <li>
              <strong>Database Addition:</strong> Your company will be added to our intelligence platform.
            </li>
            <li>
              <strong>Investor Exposure:</strong> VCs using Lemina will be able to discover your company.
            </li>
            <li>
              <strong>Report Featuring:</strong> You'll be included in our next quarterly intelligence report.
            </li>
            <li>
              <strong>Updates:</strong> We'll email you quarterly to keep your profile current.
            </li>
          </ol>
        </div>

        <p>Check your email for confirmation. We typically respond within 48 hours.</p>

        <div className="cta-buttons">
          <Link href="/" className="btn btn-primary">
            Return to Homepage
          </Link>
          <Link href="/founders" className="btn btn-secondary">
            Add Another Company
          </Link>
        </div>
      </div>
    </div>
  )
}