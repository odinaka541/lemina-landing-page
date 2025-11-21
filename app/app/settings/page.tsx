'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function SettingsPage() {
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState({
    full_name: '',
    organization: '',
    role: '',
    investment_focus: ''
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  const supabase = createClient()

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = async () => {
    try {
      setLoading(true)
      const { data: { session } } = await supabase.auth.getSession()

      if (session?.user) {
        setUser(session.user)

        // try to get existing profile from investor_users table
        const { data } = await supabase
          .from('investor_users')
          .select('*')
          .eq('email', session.user.email)
          .single()

        if (data) {
          setProfile({
            full_name: data.full_name || '',
            organization: data.organization || '',
            role: data.role || '',
            investment_focus: data.investment_focus || ''
          })
        }
      }
    } catch (error) {
      console.error('error loading profile:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setMessage('')

    try {
      if (!user) throw new Error('no user found')

      const updates = {
        email: user.email,
        full_name: profile.full_name,
        organization: profile.organization,
        role: profile.role,
        investment_focus: profile.investment_focus,
        updated_at: new Date().toISOString()
      }

      const { error } = await supabase
        .from('investor_users')
        .upsert(updates)

      if (error) throw error

      setMessage('Profile updated successfully!')
    } catch (error: any) {
      setMessage(`Error: ${error.message}`)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-text-secondary)' }}>Loading profile...</div>
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          color: 'var(--color-accent-primary)',
          marginBottom: '0.5rem'
        }}>
          Account Settings
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.125rem' }}>
          Manage your investor profile and preferences
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '2rem' }}>
        <form onSubmit={updateProfile}>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: 'var(--color-accent-primary)',
              marginBottom: '1.5rem',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid rgba(16, 185, 129, 0.2)'
            }}>
              Profile Information
            </h3>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                value={user?.email || ''}
                disabled
                style={{ opacity: 0.6, cursor: 'not-allowed' }}
              />
              <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem', display: 'block' }}>
                Email cannot be changed
              </span>
            </div>

            <div className="form-group">
              <label htmlFor="full_name">Full Name</label>
              <input
                id="full_name"
                type="text"
                value={profile.full_name}
                onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="organization">Organization</label>
              <input
                id="organization"
                type="text"
                value={profile.organization}
                onChange={(e) => setProfile({ ...profile, organization: e.target.value })}
                placeholder="Venture Capital Firm"
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">Role</label>
              <input
                id="role"
                type="text"
                value={profile.role}
                onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                placeholder="Partner, Analyst, etc."
              />
            </div>

            <div className="form-group">
              <label htmlFor="investment_focus">Investment Focus</label>
              <input
                id="investment_focus"
                type="text"
                value={profile.investment_focus}
                onChange={(e) => setProfile({ ...profile, investment_focus: e.target.value })}
                placeholder="Fintech, Healthtech, etc."
              />
            </div>
          </div>

          {message && (
            <div style={{
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '1.5rem',
              fontSize: '0.875rem',
              background: message.includes('Error') ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)',
              border: `1px solid ${message.includes('Error') ? 'rgba(239, 68, 68, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`,
              color: message.includes('Error') ? '#FCA5A5' : '#10B981'
            }}>
              {message}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            disabled={saving}
            style={{
              width: '100%',
              padding: '14px',
              fontSize: '1rem',
              opacity: saving ? 0.7 : 1,
              cursor: saving ? 'not-allowed' : 'pointer'
            }}
          >
            {saving ? 'Saving...' : 'Save Profile'}
          </button>
        </form>
      </div>
    </div>
  )
}