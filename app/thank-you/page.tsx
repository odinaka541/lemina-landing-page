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
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .container {
          max-width: 600px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          padding: 60px 40px;
          text-align: center;
        }

        .checkmark {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #667eea;
          margin: 0 auto 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: scaleIn 0.5s ease-out;
        }

        .checkmark svg {
          width: 50px;
          height: 50px;
          stroke: white;
          stroke-width: 3;
          stroke-linecap: round;
          stroke-linejoin: round;
          fill: none;
          animation: drawCheck 0.5s ease-out 0.3s forwards;
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes drawCheck {
          to {
            stroke-dashoffset: 0;
          }
        }

        h1 {
          font-size: 2.5em;
          color: #333;
          margin-bottom: 20px;
        }

        .company-name {
          color: #667eea;
          font-weight: 700;
        }

        p {
          font-size: 1.1em;
          color: #666;
          margin-bottom: 15px;
          line-height: 1.8;
        }

        .next-steps {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 30px;
          margin: 30px 0;
          text-align: left;
        }

        .next-steps h2 {
          font-size: 1.3em;
          color: #333;
          margin-bottom: 15px;
        }

        .next-steps ol {
          padding-left: 20px;
        }

        .next-steps li {
          margin-bottom: 12px;
          color: #666;
        }

        .cta-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .btn {
          padding: 14px 28px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
          display: inline-block;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
          background: white;
          color: #667eea;
          border: 2px solid #667eea;
        }

        .btn-secondary:hover {
          background: #667eea;
          color: white;
        }

        @media (max-width: 768px) {
          .container {
            padding: 40px 20px;
          }

          h1 {
            font-size: 2em;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>

      <div className="page-container">
        <div className="container">
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

        <style jsx>{`
          .page-container {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }
        `}</style>
      </div>
    </>
  )
}