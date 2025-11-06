'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user || null)
    }
    getUser()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (pathname === '/app/login') {
    return children
  }

  return (
    <div className="dashboard-layout">
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <Link href="/app/companies">
            <img src="/assets/lemina.svg" alt="Lemina" className="nav-logo" />
            <span>Lemina Dashboard</span>
          </Link>
        </div>
        
        <div className="nav-links">
          <Link 
            href="/app/companies" 
            className={pathname === '/app/companies' ? 'active' : ''}
          >
            Companies
          </Link>
          <Link 
            href="/app/settings" 
            className={pathname === '/app/settings' ? 'active' : ''}
          >
            Settings
          </Link>
        </div>

        <div className="nav-user">
          {user && (
            <div className="user-info">
              <span>{user.email}</span>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      <main className="dashboard-main">
        {children}
      </main>

      <style jsx>{`
        .dashboard-layout {
          min-height: 100vh;
          background: #0A0A0A;
        }

        .dashboard-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
          background: rgba(16, 185, 129, 0.03);
          border-bottom: 1px solid rgba(16, 185, 129, 0.1);
          backdrop-filter: blur(10px);
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-brand a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #FAFAFA;
          font-weight: 600;
          font-size: 1.2rem;
        }

        .nav-logo {
          width: 32px;
          height: 32px;
          border-radius: 8px;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          color: #D0D0D0;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: #10B981;
          background: rgba(16, 185, 129, 0.1);
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #D0D0D0;
        }

        .logout-btn {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #FCA5A5;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .logout-btn:hover {
          background: rgba(239, 68, 68, 0.2);
        }

        .dashboard-main {
          padding: 2rem;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 768px) {
          .dashboard-nav {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }

          .nav-links {
            gap: 1rem;
          }

          .dashboard-main {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  )
}