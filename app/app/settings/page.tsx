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

      setMessage('profile updated successfully!')
    } catch (error: any) {
      setMessage(`error: ${error.message}`)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return <div className="loading">loading profile...</div>
  }

  return (
    <div className="settings-page">
      <div className="page-header">
        <h1>account settings</h1>
        <p>manage your investor profile and preferences</p>
      </div>

      <div className="settings-card">
        <form onSubmit={updateProfile}>
          <div className="form-section">
            <h3>profile information</h3>
            
            <div className="form-group">
              <label htmlFor="email">email address</label>
              <input
                id="email"
                type="email"
                value={user?.email || ''}
                disabled
              />
              <span className="helper-text">email cannot be changed</span>
            </div>

            <div className="form-group">
              <label htmlFor="full_name">full name</label>
              <input
                id="full_name"
                type="text"
                value={profile.full_name}
                onChange={(e) => setProfile({...profile, full_name: e.target.value})}
                placeholder="john doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="organization">organization</label>
              <input
                id="organization"
                type="text"
                value={profile.organization}
                onChange={(e) => setProfile({...profile, organization: e.target.value})}
                placeholder="venture capital firm"
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">role</label>
              <input
                id="role"
                type="text"
                value={profile.role}
                onChange={(e) => setProfile({...profile, role: e.target.value})}
                placeholder="partner, analyst, etc."
              />
            </div>

            <div className="form-group">
              <label htmlFor="investment_focus">investment focus</label>
              <input
                id="investment_focus"
                type="text"
                value={profile.investment_focus}
                onChange={(e) => setProfile({...profile, investment_focus: e.target.value})}
                placeholder="fintech, healthtech, etc."
              />
            </div>
          </div>

          {message && (
            <div className={`message ${message.includes('error') ? 'error' : 'success'}`}>
              {message}
            </div>
          )}

          <button 
            type="submit" 
            className="save-btn"
            disabled={saving}
          >
            {saving ? 'saving...' : 'save profile'}
          </button>
        </form>
      </div>

      <style jsx>{`
        .settings-page {
          max-width: 600px;
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

        .settings-card {
          background: rgba(16, 185, 129, 0.03);
          border: 1px solid rgba(16, 185, 129, 0.1);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }

        .form-section {
          margin-bottom: 2rem;
        }

        .form-section h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #10B981;
          margin-bottom: 1.5rem;
          text-transform: lowercase;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(16, 185, 129, 0.2);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #FAFAFA;
          font-size: 0.9rem;
          text-transform: lowercase;
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

        .helper-text {
          font-size: 0.8rem;
          color: #64748B;
          margin-top: 0.25rem;
          display: block;
        }

        .message {
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }

        .message.success {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10B981;
        }

        .message.error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #FCA5A5;
        }

        .save-btn {
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
        }

        .save-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.4);
        }

        .save-btn:disabled {
          background: #374151;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .loading {
          text-align: center;
          padding: 3rem;
          color: #D0D0D0;
        }

        @media (max-width: 768px) {
          .settings-card {
            padding: 1.5rem;
            margin: 1rem;
          }
        }
      `}</style>
    </div>
  )
}