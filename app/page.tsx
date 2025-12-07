'use client';

import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Menu, X } from 'lucide-react';

function HomeContent() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const code = searchParams?.get('code');

    useEffect(() => {
        if (code) {
            const supabase = createClient();
            supabase.auth.exchangeCodeForSession(code).then(({ data, error }) => {
                if (!error && data.session) {
                    router.push('/app/companies');
                } else {
                    console.error('Auth error:', error);
                }
            });
        }
    }, [code, router]);

    const companies = [
        {
            name: "SerenDPT AI",
            stage: "Pre-seed",
            metrics: [
                { label: "Focus", value: "AI that reads your uploaded books aloud and provides real-time answers to your questions using voice technology" },
                { label: "Total Funding", value: "F&F, Less than $5K" },
                { label: "Last Round", value: "None (Q4, 2025)" },
                { label: "Valuation", value: "NA" },
                { label: "Active Users", value: "400+" },
                { label: "Monthly Revenue", value: "Less than $1k" },
                { label: "Runway", value: "12 months" },
                { label: "Team Size", value: "4" },
                { label: "Why Promising", value: "First player on the scene solving a multi-billion dollar industry need" }
            ]
        },
        {
            name: "TikiAnaly",
            stage: "Pre-seed",
            metrics: [
                { label: "Focus", value: "Social sports platform connecting fans, athletes, analysts, and clubs via banter, data, and community engagement" },
                { label: "Total Funding", value: "F&F, Pre-seed | $500k (Seed Ask)" },
                { label: "Last Round", value: "None (Bootstrapped)" },
                { label: "Valuation", value: "NA" },
                { label: "Active Users", value: "1001+ (Waitlist)" },
                { label: "Monthly Revenue", value: "Pre-revenue" },
                { label: "Runway", value: "18 months" },
                { label: "Team Size", value: "15" },
                { label: "Why Promising", value: "Monopolist in its niche: Sports-only, healthy banter space, no noise, no distractions" }
            ]
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % companies.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + companies.length) % companies.length);
    };

    return (
        <div className="container">
            <nav className="flex justify-between items-center h-16 sticky top-4 z-50 backdrop-blur-xl border border-[var(--glass-border-color)] px-6 mx-4 rounded-2xl bg-[var(--nav-bg)] shadow-lg relative">
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <img src="/assets/lemina.svg" alt="Lemina" className="w-8 h-8 rounded-lg" />
                        <div className="font-semibold text-xl tracking-tight text-[var(--color-text-primary)] hidden md:block">Lemina</div>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    <Link href="/founders" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                        For Founders
                    </Link>
                    <a href="#how-it-works" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                        How it Works
                    </a>
                    <Link href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                        Investors
                    </Link>
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={() => {
                            const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
                            document.documentElement.setAttribute('data-theme', newTheme);
                        }}
                        className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden [html[data-theme='light']_&]:block">
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="block [html[data-theme='light']_&]:hidden">
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2" />
                            <path d="M12 20v2" />
                            <path d="m4.93 4.93 1.41 1.41" />
                            <path d="m17.66 17.66 1.41 1.41" />
                            <path d="M2 12h2" />
                            <path d="M20 12h2" />
                            <path d="m6.34 17.66-1.41 1.41" />
                            <path d="m19.07 4.93-1.41 1.41" />
                        </svg>
                    </button>
                    <Link href="#" className="text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] transition-colors">
                        Log In
                    </Link>
                    <a href="mailto:odinaka@lemina.co" className="text-xs font-medium py-2 px-4 bg-[var(--glass-bg)] hover:bg-[var(--glass-border-color)] border border-[var(--glass-border-color)] backdrop-blur-md text-[var(--color-text-primary)] rounded-full transition-all shadow-sm">
                        Request Demo
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-[var(--color-text-primary)] p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-[var(--color-bg-secondary)] border border-[var(--glass-border-color)] rounded-2xl shadow-xl flex flex-col gap-4 md:hidden animate-in fade-in slide-in-from-top-2">
                        <Link href="/founders" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] p-2" onClick={() => setIsMobileMenuOpen(false)}>
                            For Founders
                        </Link>
                        <a href="#how-it-works" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] p-2" onClick={() => setIsMobileMenuOpen(false)}>
                            How it Works
                        </a>
                        <div className="h-px bg-[var(--glass-border-color)] my-1" />
                        <Link href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] p-2" onClick={() => setIsMobileMenuOpen(false)}>
                            Log In
                        </Link>
                    </div>
                )}
            </nav>

            <section style={{
                padding: '120px 0 80px',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto'
            }} className="animate-fade-in">
                <div style={{
                    display: 'inline-block',
                    padding: '6px 16px',
                    borderRadius: '100px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    color: 'var(--color-accent-primary)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    marginBottom: '24px'
                }}>
                    Building the investment infrastructure for African tech
                </div>
                <h1 style={{ marginBottom: '24px', fontSize: '3.5rem', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
                    ...starting with <br />
                    <span className="text-gradient">intelligence</span>
                </h1>
                <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 48px', color: 'var(--color-text-secondary)' }}>
                    We're the bridge between capital and opportunity. Giving investors certainty. Giving founders access. Building the intelligence infrastructure African tech deserves.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                    <a href="mailto:odinaka@lemina.co" className="btn btn-primary">Get Early Access</a>
                    <a href="#how-it-works" className="btn btn-secondary">How it works</a>
                </div>
            </section>

            <section style={{ padding: '80px 0' }}>
                <div className="glass-panel" style={{ padding: '24px', position: 'relative', overflow: 'hidden', maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        marginBottom: '20px',
                        borderBottom: '1px solid var(--color-border)',
                        paddingBottom: '16px'
                    }}>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>Highlights on Who to Watch</h3>
                            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>Early-stage innovators driving change.</p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button onClick={prevSlide} className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.875rem' }}>←</button>
                            <button onClick={nextSlide} className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.875rem' }}>→</button>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '32px' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ width: '40px', height: '40px', background: 'var(--color-bg-secondary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>🟠</div>
                                <div>
                                    <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{companies[currentSlide].name}</h2>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        color: 'var(--color-accent-primary)',
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        padding: '2px 10px',
                                        borderRadius: '100px'
                                    }}>{companies[currentSlide].stage}</span>
                                </div>
                            </div>
                            <p style={{ fontSize: '0.9375rem', marginBottom: '20px', color: 'var(--color-text-primary)', lineHeight: '1.5' }}>
                                {companies[currentSlide].metrics.find(m => m.label === "Focus")?.value}
                            </p>
                            <a href="mailto:odinaka@lemina.co" className="btn btn-secondary" style={{ width: '100%', padding: '10px', fontSize: '0.875rem' }}>Request Full Profile</a>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                            {companies[currentSlide].metrics.filter(m => m.label !== "Focus").map((metric, index) => (
                                <div key={index} style={{
                                    background: 'var(--card-bg)',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    border: '1px solid var(--glass-border-color)'
                                }}>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{metric.label}</div>
                                    <div style={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: '1.2' }}>{metric.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '80px 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }} id="how-it-works">
                <div className="glass-panel" style={{ padding: '32px' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '16px', opacity: 0.2 }}>01</div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Invest with certainty</h3>
                    <p style={{ fontSize: '1rem' }}>For Angels, VCs and Institutional Investors. Verified data on 80+ Nigerian startups. See who's building what and the data backing them, confidentially.</p>
                </div>
                <div className="glass-panel" style={{ padding: '32px' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '16px', opacity: 0.2 }}>02</div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Connect & Scale</h3>
                    <p style={{ fontSize: '1rem' }}>For Founders. Get discovered by active investors actively listening for what you're building.</p>
                </div>
            </section>

            <section style={{ padding: '100px 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Comprehensive Intelligence</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>Your team spends weeks per deal researching markets. We've done it for 80+ companies.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                    {[
                        {
                            title: "Blind spots in due diligence",
                            solution: "Complete Landscape",
                            desc: "A Google search gets you 10-20 simple profiles. We found, verified, and built company profiles for 80+."
                        },
                        {
                            title: "Regulatory Risk",
                            solution: "Verified Compliance",
                            desc: "See license status, expiry countdown, regulatory compliance score, and red-flag alerts — all verified."
                        },
                        {
                            title: "Valuation Uncertainty",
                            solution: "Market Benchmarks",
                            desc: "Know sector-specific multiples. Make data-driven pricing decisions. We provide local context for your money."
                        }
                    ].map((item, i) => (
                        <div key={i} className="glass-panel" style={{ padding: '32px' }}>
                            <div style={{ fontSize: '0.875rem', color: '#ef4444', marginBottom: '8px' }}>Problem: {item.title}</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-accent-primary)' }}>{item.solution}</h3>
                            <p style={{ fontSize: '0.875rem' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ padding: '100px 0', textAlign: 'center' }}>
                <div style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Lemina's Core Pillars</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-secondary)' }}>We've built a comprehensive framework that addresses every aspect of African startup intelligence.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                    {[
                        { title: "Company Profiling", desc: "Deep-dive analysis of every African startup worth tracking. From stealth-mode to series A." },
                        { title: "Market Sizing", desc: "Comprehensive sector analysis and competitive mapping. Identify white spaces and emerging opportunities." },
                        { title: "Data & Regulatory Verification", desc: "Rigorous fact-checking. Every data point verified, every license tracked for investor confidence." },
                        { title: "Real-time Updates", desc: "Live tracking of funding rounds, traction metrics, and market movements." }
                    ].map((item, i) => (
                        <div key={i} className="glass-panel" style={{ padding: '32px', textAlign: 'left' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-accent-primary)' }}>{item.title}</h3>
                            <p style={{ fontSize: '0.875rem' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ padding: '100px 0' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                    <div>
                        <div style={{ color: 'var(--color-accent-primary)', fontWeight: 600, marginBottom: '16px' }}>COMING SOON</div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Real-time Investor Dashboard</h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '32px', color: 'var(--color-text-secondary)' }}>
                            The complete command centre for African startup intelligence. Track, analyze, and act on opportunities as they emerge. Step into our dealrooms, make deals or track portfolio companies Solo or with your Network, from announcement, to funding, to exits.
                        </p>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <div style={{ padding: '12px 24px', background: 'var(--input-bg)', borderRadius: '8px' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>1</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>Platform</div>
                            </div>
                            <div style={{ padding: '12px 24px', background: 'var(--input-bg)', borderRadius: '8px' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>Everything</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>For your Investment Career</div>
                            </div>
                        </div>
                    </div>
                    <div className="glass-panel" style={{ padding: '40px', position: 'relative', minHeight: '400px' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', zIndex: 10 }}>
                            <div style={{ textAlign: 'center', padding: '20px' }}>
                                <div style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '8px', color: '#fff' }}>Almost Ready</div>
                                <p style={{ marginBottom: '24px', color: 'rgba(255,255,255,0.8)' }}>We're putting the finishing touches on the dashboard.</p>
                                <a href="mailto:odinaka@lemina.co?subject=Notify me when dashboard is ready" className="btn btn-primary">Get Notified</a>
                            </div>
                        </div>
                        {/* Mock UI Background */}
                        <div style={{ opacity: 0.3 }}>
                            <div style={{ display: 'flex', gap: '20px', marginBottom: '24px' }}>
                                <div style={{ width: '100px', height: '20px', background: 'white', borderRadius: '4px' }}></div>
                                <div style={{ width: '100px', height: '20px', background: 'white', borderRadius: '4px' }}></div>
                            </div>
                            <div style={{ height: '200px', background: 'var(--input-bg)', borderRadius: '8px' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '100px 0' }}>
                <div className="glass-panel" style={{ padding: '60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Free Sample Intelligence Report</h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '32px', color: 'var(--color-text-secondary)' }}>
                            We analyzed 3 emerging Nigerian startup companies with investment-grade financial analysis. See exactly what our platform delivers.
                        </p>
                        <a href="mailto:odinaka@lemina.co" className="btn btn-secondary">View Full Sample Report</a>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '20px', border: '1px solid var(--color-border)' }}>
                        <img src="/assets/sample-report-preview.png" alt="Report Preview" style={{ width: '100%', borderRadius: '8px', opacity: 0.8 }} />
                    </div>
                </div>
            </section>

            <section style={{ padding: '100px 0', textAlign: 'center' }}>
                <div className="glass-panel" style={{ padding: '60px', maxWidth: '800px', margin: '0 auto', background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.05) 0%, rgba(3, 7, 18, 0) 100%)' }}>
                    <h2 style={{ marginBottom: '24px' }}>Are you building the future?</h2>
                    <p style={{ marginBottom: '40px', fontSize: '1.125rem', color: 'var(--color-text-secondary)' }}>
                        Get discovered by investors actively deploying capital; featured in our intelligence reports; connected to VCs looking for exactly what you're building.
                    </p>
                    <Link href="/founders" className="btn btn-primary" style={{ padding: '16px 48px', fontSize: '1.125rem' }}>
                        Add Your Company (5 min) →
                    </Link>
                    <p style={{ marginTop: '16px', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>100% free • No obligations</p>
                </div>
            </section>

            <section style={{ padding: '100px 0', textAlign: 'center' }}>
                <div className="glass-panel" style={{ padding: '60px', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ marginBottom: '24px' }}>Early Adopter Access</h2>
                    <div style={{ fontSize: '3.5rem', fontWeight: 700, color: 'var(--color-accent-primary)', marginBottom: '16px' }}>$149</div>
                    <p style={{ marginBottom: '32px' }}>Limited to 9 early adopters • Full year of quarterly updates • Lifetime early adopter fee</p>
                    <a href="mailto:odinaka@lemina.co" className="btn btn-primary" style={{ padding: '16px 48px', fontSize: '1.125rem' }}>Request Access</a>
                </div>
            </section>

            <footer style={{ padding: '60px 0', borderTop: '1px solid var(--color-border)', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
                <div style={{ marginBottom: '24px' }}>
                    <a href="mailto:odinaka@lemina.co" style={{ color: 'inherit', textDecoration: 'none', marginRight: '24px' }}>Contact</a>
                    <a href="https://x.com/uselemina" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Twitter</a>
                </div>
                <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
                    <button
                        onClick={() => {
                            const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
                            document.documentElement.setAttribute('data-theme', newTheme);
                        }}
                        className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden [html[data-theme='light']_&]:block">
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="block [html[data-theme='light']_&]:hidden">
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2" />
                            <path d="M12 20v2" />
                            <path d="m4.93 4.93 1.41 1.41" />
                            <path d="m17.66 17.66 1.41 1.41" />
                            <path d="M2 12h2" />
                            <path d="M20 12h2" />
                            <path d="m6.34 17.66-1.41 1.41" />
                            <path d="m19.07 4.93-1.41 1.41" />
                        </svg>
                        <span>Toggle Theme</span>
                    </button>
                </div>
                <p>© 2025 Lemina • Powering the investment bank for African tech</p>
            </footer>
        </div>
    );
}

export default function Home() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomeContent />
        </Suspense>
    );
}