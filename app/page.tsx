'use client';

import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

function HomeContent() {
    const [currentSlide, setCurrentSlide] = useState(0);
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
                { label: "Active Users", value: "Less than 100" },
                { label: "Monthly Revenue", value: "Less than $1k" },
                { label: "Runway", value: "12 months" },
                { label: "Team Size", value: "4" },
                { label: "Why Promising", value: "First player on the scene solving a multi-billion dollar industry need" }
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
            <nav style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 'var(--header-height)',
                position: 'sticky',
                top: 0,
                zIndex: 50,
                backdropFilter: 'blur(10px)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img src="/assets/lemina.svg" alt="Lemina" style={{ width: '32px', height: '32px', borderRadius: '8px' }} />
                    <div style={{ fontWeight: 600, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>Lemina</div>
                </div>
                <a href="mailto:admin@lemina.co" className="btn btn-secondary" style={{ fontSize: '0.875rem' }}>Request Demo</a>
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
                    Building the investment bank for African tech
                </div>
                <h1 style={{ marginBottom: '24px' }}>
                    ...starting with <br />
                    <span className="text-gradient">intelligence</span>
                </h1>
                <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 48px', color: 'var(--color-text-secondary)' }}>
                    We're the bridge between capital and opportunity. Giving investors certainty. Giving founders access. Building the intelligence infrastructure African tech deserves.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                    <a href="mailto:admin@lemina.co" className="btn btn-primary">Get Early Access</a>
                    <a href="#how-it-works" className="btn btn-secondary">How it works</a>
                </div>
            </section>

            <section style={{ padding: '80px 0' }}>
                <div className="glass-panel" style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        marginBottom: '40px',
                        borderBottom: '1px solid var(--color-border)',
                        paddingBottom: '24px'
                    }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Highlights on Who to Watch</h3>
                            <p style={{ fontSize: '0.875rem' }}>Early-stage innovators driving change, verified traction, and market potential.</p>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button onClick={prevSlide} className="btn btn-secondary" style={{ padding: '8px 16px' }}>←</button>
                            <button onClick={nextSlide} className="btn btn-secondary" style={{ padding: '8px 16px' }}>→</button>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                <div style={{ width: '48px', height: '48px', background: 'var(--color-bg-secondary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🚀</div>
                                <div>
                                    <h2 style={{ fontSize: '2rem', margin: 0 }}>{companies[currentSlide].name}</h2>
                                    <span style={{
                                        fontSize: '0.875rem',
                                        color: 'var(--color-accent-primary)',
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        padding: '4px 12px',
                                        borderRadius: '100px'
                                    }}>{companies[currentSlide].stage}</span>
                                </div>
                            </div>
                            <p style={{ fontSize: '1.125rem', marginBottom: '32px', color: 'var(--color-text-primary)' }}>
                                {companies[currentSlide].metrics.find(m => m.label === "Focus")?.value}
                            </p>
                            <a href="mailto:admin@lemina.co" className="btn btn-secondary" style={{ width: '100%' }}>Request Full Profile</a>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            {companies[currentSlide].metrics.filter(m => m.label !== "Focus").map((metric, index) => (
                                <div key={index} style={{
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    padding: '16px',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255, 255, 255, 0.05)'
                                }}>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{metric.label}</div>
                                    <div style={{ fontSize: '1rem', fontWeight: 500 }}>{metric.value}</div>
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
                            desc: "A Google search gets you 10-20 simple profiles. We found, verified, and built financial models for 80+."
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
                        { title: "Data Verification", desc: "Rigorous fact-checking. Every data point verified, every license tracked for investor confidence." },
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
                            The complete command center for African startup intelligence. Track, analyze, and act on opportunities as they emerge.
                        </p>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <div style={{ padding: '12px 24px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>127</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>Companies Tracked</div>
                            </div>
                            <div style={{ padding: '12px 24px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>₦2.4B</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>Total Funding</div>
                            </div>
                        </div>
                    </div>
                    <div className="glass-panel" style={{ padding: '40px', position: 'relative' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', zIndex: 10 }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '8px' }}>Almost Ready</div>
                                <button className="btn btn-primary">Get Notified</button>
                            </div>
                        </div>
                        {/* Mock UI Background */}
                        <div style={{ opacity: 0.3 }}>
                            <div style={{ display: 'flex', gap: '20px', marginBottom: '24px' }}>
                                <div style={{ width: '100px', height: '20px', background: 'white', borderRadius: '4px' }}></div>
                                <div style={{ width: '100px', height: '20px', background: 'white', borderRadius: '4px' }}></div>
                            </div>
                            <div style={{ height: '200px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '100px 0', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '60px' }}>Built for decision-makers</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                    {[
                        { title: "VCs & Angels", desc: "Deal sourcing, due diligence, portfolio monitoring" },
                        { title: "Founders", desc: "Exposure to investors actively deploying capital" },
                        { title: "Banks", desc: "Partnership evaluation, market entry strategy" },
                        { title: "Corporate Dev", desc: "M&A target identification, competitive intelligence" }
                    ].map((item, i) => (
                        <div key={i} className="glass-panel" style={{ padding: '32px' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{item.title}</h3>
                            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ padding: '100px 0' }}>
                <div className="glass-panel" style={{ padding: '60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Free Sample Intelligence Report</h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '32px', color: 'var(--color-text-secondary)' }}>
                            We analyzed 3 emerging Nigerian startup companies with investment-grade financial analysis. See exactly what our platform delivers.
                        </p>
                        <a href="mailto:admin@lemina.co" className="btn btn-secondary">View Full Sample Report</a>
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
                        Get discovered by investors actively deploying capital. Featured in our intelligence reports. Connected to VCs looking for you.
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
                    <a href="mailto:admin@lemina.co" className="btn btn-primary" style={{ padding: '16px 48px', fontSize: '1.125rem' }}>Request Access</a>
                </div>
            </section>

            <footer style={{ padding: '60px 0', borderTop: '1px solid var(--color-border)', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
                <div style={{ marginBottom: '24px' }}>
                    <a href="mailto:admin@lemina.co" style={{ color: 'inherit', textDecoration: 'none', marginRight: '24px' }}>Contact</a>
                    <a href="https://x.com/uselemina" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Twitter</a>
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