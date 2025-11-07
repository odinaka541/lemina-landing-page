'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    try {
      const supabase = createClient()

      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `https://lemina.co/auth/confirm`
        }
      })

      if (error) {
        setError(error.message)
      } else {
        setMessage('Check your email for the magic link!')
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      zIndex: 2
    }}>
      <div style={{
        background: 'rgba(16, 185, 129, 0.03)',
        border: '1px solid rgba(16, 185, 129, 0.1)',
        borderRadius: '16px',
        padding: '3rem',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Link href="/">
            <img 
              src="/assets/lemina.svg" 
              alt="Lemina" 
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                marginBottom: '1rem'
              }}
            />
          </Link>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 700,
            marginBottom: '0.5rem',
            color: '#10B981'
          }}>
            investor dashboard
          </h1>
          <p style={{ color: '#D0D0D0', fontSize: '14px' }}>
            access detailed company data and intelligence reports
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label 
              htmlFor="email"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 600,
                color: '#FAFAFA',
                fontSize: '14px'
              }}
            >
              email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="investor@firm.com"
              required
              disabled={loading}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: '8px',
                fontSize: '15px',
                color: '#FAFAFA'
              }}
            />
          </div>

          {error && (
            <div style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#FCA5A5',
              padding: '12px',
              borderRadius: '6px',
              marginBottom: '1rem',
              fontSize: '14px'
            }}>
              {error}
            </div>
          )}

          {message && (
            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#10B981',
              padding: '12px',
              borderRadius: '6px',
              marginBottom: '1rem',
              fontSize: '14px'
            }}>
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !email}
            style={{
              width: '100%',
              padding: '14px',
              background: loading ? '#374151' : 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              color: '#FAFAFA',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              marginBottom: '1.5rem'
            }}
          >
            {loading ? 'sending link...' : 'send magic link'}
          </button>
        </form>

        <div style={{ textAlign: 'center' }}>
          <Link 
            href="/"
            style={{
              color: '#10B981',
              textDecoration: 'none',
              fontSize: '14px'
            }}
          >
            ← back to homepage
          </Link>
        </div>
      </div>
    </div>
  )
}