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
        // {
        //     name: "Xara",
        //     stage: "Pre-seed",
        //     metrics: [
        //         { label: "Focus", value: "WhatsApp-first payment system" },
        //         { label: "Total Funding", value: "Bootstrapped" },
        //         { label: "Last Round", value: "F&F (Q1 2025)" },
        //         { label: "Valuation", value: "Less than $100k" },
        //         { label: "Transactions", value: "₦1B monthly" },
        //         { label: "Monthly Revenue", value: "Less than $40K" },
        //         { label: "Runway", value: "24 months" },
        //         { label: "Team Size", value: "10" },
        //         { label: "Why Promising", value: "Enables seamless payment solutions on Africa's most used app" }
        //     ]
        // }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % companies.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + companies.length) % companies.length);
    };

    return (
        <>
            <div className="gradient-bg"></div>
            <div className="grid-overlay"></div>
            <div className="container">
                <nav>
                    <div className="logo">
                        <img src="/assets/lemina.svg" alt="Lemina" style={{ width: '40px', height: '40px', borderRadius: '10px' }} />
                        <div className="logo-text">Lemina</div>
                    </div>
                    <a href="mailto:admin@lemina.co">Request Demo</a>
                </nav>

                <section className="hero">
                    <div className="tagline">Building the investment bank for African tech</div>
                    <h1>...starting with<br /><em>intelligence</em></h1>
                    <p className="subtitle">We're the bridge between capital and opportunity. Giving investors certainty. Giving founders access. Building the intelligence infrastructure African tech deserves.</p>
                </section>

                <section className="data-section">
                    <div className="carousel-container">
                        <div className="carousel-header">
                            <div className="carousel-title">Highlights on Who to Watch</div>
                            <div className="carousel-subtitle">Early-stage innovators driving change, verified traction, and market potential.</div>
                        </div>

                        <div className="company-card active">
                            <div className="company-header">
                                <span className="company-name">{companies[currentSlide].name}</span>
                                <span className="company-stage">{companies[currentSlide].stage}</span>
                            </div>
                            <div className="metric-list">
                                {companies[currentSlide].metrics.map((metric, index) => (
                                    <div key={index} className="metric-item">
                                        <span className="metric-label">{metric.label}</span>
                                        <span className="metric-value">{metric.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="carousel-nav prev" onClick={prevSlide}>&#8249;</button>
                        <button className="carousel-nav next" onClick={nextSlide}>&#8250;</button>

                        <div style={{ textAlign: 'center', marginTop: '32px' }}>
                            <a href="mailto:admin@lemina.co?subject=Request Full Profiles&body=Hi, I'd like full profiles on these Nigerian startups.%0D%0AName:%0D%0ACompany:%0D%0ARole:" className="chart-cta">Get Full Profiles</a>
                        </div>
                    </div>

                    <div className="insights">
                        <div className="insight-card">
                            <div className="insight-number">Invest with certainty</div>
                            <div className="insight-text">For Angels, VCs and Institutional Investors</div>
                            <div className="insight-action">→ Verified data on 80+ Nigerian startups. See who's building what and the data backing them, confidentially</div>
                        </div>
                        <div className="insight-card">
                            <div className="insight-number">Connect & Scale</div>
                            <div className="insight-text">For Founders</div>
                            <div className="insight-action">→ Get discovered by active investors actively listening for what you're building</div>
                        </div>
                    </div>
                </section>

                <section className="product-section">
                    <div className="section-label">What's available now</div>
                    <h2 className="section-title">Comprehensive Startup Intelligence Reports + Financial Models</h2>
                    <p className="section-description">Your team spends weeks per deal researching markets and building models off your thesis. We've done it for 80+ companies. Use Lemina to close deals faster and invest smarter.</p>

                    <div className="product-grid">
                        <div className="product-card">
                            <div className="product-problem">Problem: Blind spots in due diligence</div>
                            <div className="product-name">We tracked all 80+ Nigerian startups so you see the complete landscape</div>
                            <div className="product-description">A Google search gets you 10-20 simple company profiles. We found, verified, and built financial models for 80+. Complete market coverage with investment-grade analysis—burn rates, runway projections, unit economics, and valuation benchmarks across all sectors.</div>
                        </div>
                        <div className="product-card">
                            <div className="product-problem">Problem: One missing license buys you a legal case, and not an investment</div>
                            <div className="product-name">We verified and ensured companies comply with local regulations</div>
                            <div className="product-description">See license status, expiry countdown, regulatory compliance score, and red-flag alerts — all verified</div>
                        </div>
                        <div className="product-card">
                            <div className="product-problem">Problem: Valuation uncertainty</div>
                            <div className="product-name">We benchmarked valuations and sizings across the entire market</div>
                            <div className="product-description">Know sector-specific multiples. Make data-driven pricing decisions. We provide local context for your money</div>
                        </div>
                    </div>
                </section>

                {/* <section className="pillars-section">
                    <div className="section-label">Our Approach</div>
                    <h2 className="section-title">Four Pillars Solving Information Asymmetry</h2>
                    <p className="section-description">We've built a comprehensive framework that addresses every aspect of African startup intelligence, giving you the complete picture that individual research can't provide.</p>

                    <div className="pillars-grid">
                        <div className="pillar-card">
                            <div className="pillar-title">Company Profiling</div>
                            <div className="pillar-description">Deep-dive analysis of business models, traction metrics, and growth trajectories. We track burn rates, revenue models, user acquisition, and operational efficiency across all sectors.</div>
                        </div>

                        <div className="pillar-card">
                            <div className="pillar-title">Market Sizing & Landscaping</div>
                            <div className="pillar-description">Comprehensive market analysis with TAM/SAM calculations, competitive positioning, and sector dynamics. We map the entire African startup ecosystem by vertical and stage.</div>
                        </div>

                        <div className="pillar-card">
                            <div className="pillar-title">Data & Regulatory Verification</div>
                            <div className="pillar-description">License verification, compliance tracking, and regulatory risk assessment. We monitor permit status, legal standing, and regulatory changes that impact investment decisions.</div>
                        </div>

                        <div className="pillar-card">
                            <div className="pillar-title">Real-time Updates</div>
                            <div className="pillar-description">Continuous monitoring of funding rounds, team changes, product launches, and market shifts. Get alerts on material changes before they impact valuations.</div>
                        </div>
                    </div>
                </section> */}

                {/* everything pillars. */}
                <section className="clients-section">
                    <div className="section-label">Our Approach</div>
                    <h2 className="section-title">Lemina's Core Pillars</h2>
                    <p className="section-description">We've built a comprehensive framework that addresses every aspect of African startup intelligence, to give you the full picture. These principles are at the core of Lemina.</p>

                    <div className="clients-grid">
                        <div className="client-category">
                            <div className="client-title">Company Profiling</div>
                            <div className="client-description">Deep-dive analysis of every African startup worth tracking. From stealth-mode companies to series A leaders, we map the complete ecosystem with investment-grade detail.</div>
                        </div>
                        <div className="client-category">
                            <div className="client-title">Market Sizing & Landscaping</div>
                            <div className="client-description">Comprehensive sector analysis and competitive mapping. Understand market dynamics, identify white spaces, and spot emerging opportunities before the competition.</div>
                        </div>
                        <div className="client-category">
                            <div className="client-title">Data & Regulatory Verification</div>
                            <div className="client-description">Rigorous fact-checking and compliance monitoring. Every data point verified, every license tracked, every regulatory requirement confirmed for investor confidence.</div>
                        </div>
                        <div className="client-category">
                            <div className="client-title">Real-time Updates</div>
                            <div className="client-description">Live tracking of startups' and founders' milestones - product, traction, regulation, or otherwise, funding rounds, traction metrics, and market movements. Stay ahead of opportunities with intelligence that updates as fast as the ecosystem moves.</div>
                        </div>
                        {/* <div className="client-category">
                            <div className="client-title">Research Institutions</div>
                            <div className="client-description">AI training data, market analysis, benchmarking</div>
                        </div> */}
                    </div>
                </section>

                <section className="coming-soon-section">
                    <div className="section-label">Coming Soon</div>
                    <h2 className="section-title">Real-time Investor Dashboard</h2>
                    <p className="section-description">The complete command center for African startup intelligence. Track, analyze, and act on opportunities as they emerge. Step into our dealrooms, make deals or track portfolio companies from announcement, to funding, to exits.</p>

                    <div className="dashboard-preview">
                        <div className="dashboard-mock">
                            <div className="mock-header">
                                <div className="mock-nav">
                                    <div className="nav-item active">Overview</div>
                                    <div className="nav-item">Companies</div>
                                    <div className="nav-item">Analytics</div>
                                    <div className="nav-item">Reports</div>
                                </div>
                                <div className="mock-user">Welcome back, Alex</div>
                            </div>

                            <div className="mock-content">
                                <div className="mock-stats">
                                    <div className="stat-card">
                                        <div className="stat-number">127</div>
                                        <div className="stat-label">Companies Tracked</div>
                                    </div>
                                    <div className="stat-card">
                                        <div className="stat-number">₦2.4B</div>
                                        <div className="stat-label">Total Funding</div>
                                    </div>
                                    <div className="stat-card">
                                        <div className="stat-number">18</div>
                                        <div className="stat-label">New This Week</div>
                                    </div>
                                </div>

                                <div className="mock-chart">
                                    <div className="chart-header">Funding Trends</div>
                                    <div className="chart-visual"></div>
                                </div>
                            </div>

                            <div className="coming-soon-overlay">
                                <div className="overlay-content">
                                    <div className="overlay-title">Almost Ready!</div>
                                    <div className="overlay-text">Our team is putting the finishing touches on the most comprehensive African startup dashboard ever built</div>
                                    <div className="notify-btn">Get Notified When It Launches</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="clients-section">
                    <div className="section-label">Who we work with</div>
                    <h2 className="section-title">Built for decision-makers</h2>

                    <div className="clients-grid">
                        <div className="client-category">
                            <div className="client-title">Venture Capitalists and Angel Investors</div>
                            <div className="client-description">Deal sourcing, due diligence, portfolio monitoring</div>
                        </div>
                        <div className="client-category">
                            <div className="client-title">Founders and Startups</div>
                            <div className="client-description">Exposure to investors actively deploying capital</div>
                        </div>
                        <div className="client-category">
                            <div className="client-title">Banks & Financial Institutions</div>
                            <div className="client-description">Partnership evaluation, market entry strategy</div>
                        </div>
                        <div className="client-category">
                            <div className="client-title">Corporate Development</div>
                            <div className="client-description">M&A target identification, competitive intelligence</div>
                        </div>
                        {/* <div className="client-category">
                            <div className="client-title">Research Institutions</div>
                            <div className="client-description">AI training data, market analysis, benchmarking</div>
                        </div> */}
                    </div>
                </section>

                <section className="product-section" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                    <div className="section-label">See our analysis in action</div>
                    <h2 className="section-title">Free Sample Intelligence Report</h2>
                    <p className="section-description">We analyzed 3 emerging Nigerian startup companies with investment-grade financial analysis. Here's what we found.</p>

                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{ background: 'rgba(16, 185, 129, 0.03)', border: '1px solid rgba(16, 185, 129, 0.1)', borderRadius: '16px', padding: '40px', backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)', marginBottom: '32px' }}>
                            <img src="/assets/sample-report-preview.png" alt="Sample Report Preview" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 24px rgba(16, 185, 129, 0.2)' }} />
                        </div>

                        {/* <div style={{ background: 'rgba(16, 185, 129, 0.03)', border: '1px solid rgba(16, 185, 129, 0.1)', borderRadius: '16px', padding: '40px', backdropFilter: 'blur(10px)', marginBottom: '32px' }}>
                            <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px', color: '#FAFAFA' }}>What's Inside This Sample</h3>

                            <div className="sample-features-list">
                                <div className="sample-feature-item">
                                    <div className="feature-bullet"></div>
                                    <div className="feature-content">
                                        <div className="feature-title">3 Emerging Companies Analyzed</div>
                                        <div className="feature-description">Companies the market isn't tracking yet.</div>
                                    </div>
                                </div>

                                <div className="sample-feature-item">
                                    <div className="feature-bullet"></div>
                                    <div className="feature-content">
                                        <div className="feature-title">Investment-Grade Financial Analysis</div>
                                        <div className="feature-description">Traction metrics and investment implications for each company.</div>
                                    </div>
                                </div>

                                <div className="sample-feature-item">
                                    <div className="feature-bullet"></div>
                                    <div className="feature-content">
                                        <div className="feature-title">Key Market Insights</div>
                                        <div className="feature-description">WhatsApp is emerging as Nigeria's startup OS. AI is no longer experimental in Nigeria.</div>
                                    </div>
                                </div>

                                <div className="sample-feature-item">
                                    <div className="feature-bullet"></div>
                                    <div className="feature-content">
                                        <div className="feature-title">Our Analytical Framework</div>
                                        <div className="feature-description">Demonstrates how we analyze companies, calculate metrics, and identify investment opportunities you're missing.</div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div style={{ textAlign: 'center' }}>
                            <a href="mailto:admin@lemina.co,3odinaka@gmail.com?subject=Sample Report Request&body=Hi, I'd like to view the full sample intelligence report.%0D%0A%0D%0AName:%0D%0ACompany:%0D%0ARole:" className="chart-cta" style={{ fontSize: '16px', padding: '16px 40px' }}>
                                View Full Sample Report
                            </a>
                            <div style={{ marginTop: '16px', fontSize: '14px', color: '#A0A0A0' }}>
                                This sample = 3 companies. The full report = 80+ companies with comprehensive data.
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-box">
                        <div className="cta-title">Early Adopter Access</div>
                        <div className="cta-price">$149</div>
                        <div className="cta-note">Limited to 9 early adopters • Full year of quarterly updates • Lifetime early adopter fee</div>
                        <a href="mailto:admin@lemina.co,3odinaka@gmail.com?subject=Intelligence Report Request" className="cta-button">Request access</a>
                    </div>
                </section>

                <section className="product-section" style={{ background: 'rgba(16, 185, 129, 0.03)', borderTop: '1px solid rgba(16, 185, 129, 0.1)', padding: '100px 0' }}>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <h2 className="section-title">Are you building the future?</h2>
                        <p className="section-description" style={{ margin: '0 auto 60px' }}>
                            Get discovered by investors actively deploying capital; featured in our intelligence reports; connected to VCs looking for exactly what you're building.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginBottom: '60px', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
                            <div style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '12px', padding: '32px', textAlign: 'left' }}>
                                <div style={{ fontWeight: '600', fontSize: '18px', color: '#FAFAFA', marginBottom: '8px' }}>Investor Discovery</div>
                                <div style={{ color: '#A0A0A0', fontSize: '14px', lineHeight: '1.6' }}>Investors searching for companies in your sector will find you in our verified database</div>
                            </div>

                            <div style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '12px', padding: '32px', textAlign: 'left' }}>
                                <div style={{ fontWeight: '600', fontSize: '18px', color: '#FAFAFA', marginBottom: '8px' }}>Learn what investors need before they deploy capital</div>
                                <div style={{ color: '#A0A0A0', fontSize: '14px', lineHeight: '1.6' }}>Gain access to free tips and tools that get your idea funded</div>
                            </div>
                        </div>

                        <Link href="/founders" style={{ display: 'inline-block', padding: '18px 48px', background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', color: '#FAFAFA', textDecoration: 'none', borderRadius: '12px', fontWeight: '600', fontSize: '18px', transition: 'all 0.3s ease', border: '1px solid rgba(16, 185, 129, 0.3)', boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)' }}>
                            Add Your Company (5 min) →
                        </Link>

                        <div style={{ marginTop: '24px', fontSize: '14px', color: '#A0A0A0' }}>
                            100% free • Takes 5 minutes • No obligations
                        </div>
                    </div>
                </section>

                <footer>
                    <a href="mailto:admin@lemina.co">admin@lemina.co</a>
                    <section>
                        <p style={{ textAlign: 'center', color: '#3BA55C' }}>
                            Follow us on X: <a href="https://x.com/uselemina" target="_blank" rel="noopener noreferrer">@uselemina</a>
                        </p>
                    </section>
                    <div className="footer-text">© 2025 Lemina • Powering the investment bank for African tech</div>
                </footer>
            </div>
        </>
    );
}

export default function Home() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomeContent />
        </Suspense>
    );
}