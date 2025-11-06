'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/app/companies`
        }
      })

      if (error) throw error

      setMessage('check your email for the login link!')
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <Link href="/">
            <img src="/assets/lemina.svg" alt="Lemina" className="logo" />
          </Link>
          <h1>investor dashboard</h1>
          <p>access detailed company data and intelligence reports</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">email address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="investor@firm.com"
              required
              disabled={loading}
            />
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {message && (
            <div className="success-message">
              {message}
            </div>
          )}

          <button 
            type="submit" 
            className="login-btn"
            disabled={loading || !email}
          >
            {loading ? 'sending link...' : 'send magic link'}
          </button>
        </form>

        <div className="login-footer">
          <p>
            <Link href="/">← back to homepage</Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
          z-index: 2;
        }

        .login-card {
          background: rgba(16, 185, 129, 0.03);
          border: 1px solid rgba(16, 185, 129, 0.1);
          border-radius: 16px;
          padding: 3rem;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          width: 100%;
          max-width: 400px;
        }

        .login-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .logo {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          margin-bottom: 1rem;
        }

        .login-header h1 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #10B981;
        }

        .login-header p {
          color: #D0D0D0;
          font-size: 14px;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #FAFAFA;
          font-size: 14px;
        }

        .form-group input {
          width: 100%;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 8px;
          font-size: 15px;
          color: #FAFAFA;
          transition: all 0.3s;
        }

        .form-group input:focus {
          outline: none;
          border-color: #10B981;
          background: rgba(16, 185, 129, 0.05);
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }

        .form-group input:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .login-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          color: #FAFAFA;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 1.5rem;
        }

        .login-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.4);
        }

        .login-btn:disabled {
          background: #374151;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .error-message {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #FCA5A5;
          padding: 12px;
          border-radius: 6px;
          margin-bottom: 1rem;
          font-size: 14px;
        }

        .success-message {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10B981;
          padding: 12px;
          border-radius: 6px;
          margin-bottom: 1rem;
          font-size: 14px;
        }

        .login-footer {
          text-align: center;
        }

        .login-footer a {
          color: #10B981;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s;
        }

        .login-footer a:hover {
          color: #FCD34D;
        }

        @media (max-width: 768px) {
          .login-card {
            padding: 2rem;
            margin: 1rem;
          }
        }
      `}</style>
    </div>
  )
}