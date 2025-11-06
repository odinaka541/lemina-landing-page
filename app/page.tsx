'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
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
        //     stage: "Pre-Seed",
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
        // },
        // {
        //     name: "Rivy",
        //     stage: "Seed",
        //     metrics: [
        //         { label: "Focus", value: "Clean energy financing platform" },
        //         { label: "Total Funding", value: "$4M" },
        //         { label: "Last Round", value: "Seed (Q2 2025)" },
        //         { label: "Valuation", value: "$20M" },
        //         { label: "Active Loans", value: "2K+ solar kits financed" },
        //         { label: "Monthly Revenue", value: "$60K" },
        //         { label: "Runway", value: "24 months" },
        //         { label: "Team Size", value: "20" },
        //         { label: "Why Promising", value: "Addresses Nigeria's energy access crisis" }
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
                        <img src="/assets/lemina.svg" alt="Lemina" style={{width: '40px', height: '40px', borderRadius: '10px'}} />
                        <div className="logo-text">Lemina</div>
                    </div>
                    <a href="mailto:admin@lemina.co">Get Sample Report</a>
                </nav>
                
                <section className="hero">
                    <div className="tagline">Building the investment bank for African tech</div>
                    <h1>Starting with<br/>intelligence</h1>
                    <p className="subtitle">We're the bridge between capital and opportunity. Giving investors certainty. Giving founders access. Building the infrastructure African tech deserves.</p>
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
                        
                        <div style={{textAlign: 'center', marginTop: '32px'}}>
                            <a href="mailto:admin@lemina.co?subject=Request Full Profiles&body=Hi, I'd like full profiles on these Nigerian startups.%0D%0AName:%0D%0ACompany:%0D%0ARole:" className="chart-cta">Get Full Profiles</a>
                        </div>
                    </div>
                    
                    <div className="insights">
                        <div className="insight-card">
                            <div className="insight-number">Invest with certainty</div>
                            <div className="insight-text">For Angels, VCs and Institutional Investors</div>
                            <div className="insight-action">→ Verified data on 200+ Nigerian startups. See who's building what and the data backing them, confidentially</div>
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
                    <p className="section-description">Your team spends 100+ hours per deal building financial models and researching markets. 
            We've done it for 200+ companies. Use our analysis to close deals faster and invest smarter.</p>
                    
                    <div className="product-grid">
                        <div className="product-card">
                            <div className="product-problem">Problem: Blind spots in due diligence</div>
                            <div className="product-name">We tracked all 200+ Nigerian startups so you see the complete landscape</div>
                            <div className="product-description">A Google search gets you 10-20 simple company profiles. We found, verified, and built financial models for 200+. Complete market coverage with investment-grade analysis—burn rates, runway projections, unit economics, and valuation benchmarks across all sectors.</div>
                        </div>
                        <div className="product-card">
                            <div className="product-problem">Problem: Can't assess capital efficiency</div>
                            <div className="product-name">We built financial models with burn multiples and runway for every company</div>
                            <div className="product-description">Know which portfolio companies will run out of cash in 6 months. Know which companies are capital efficient vs. burning unsustainably. All the due diligence you'd build yourself, already done - with verified data.</div>
                        </div>
                        <div className="product-card">
                            <div className="product-problem">Problem: Valuation uncertainty</div>
                            <div className="product-name">We benchmarked valuations and sizings across the entire market</div>
                            <div className="product-description">Know sector-specific multiples. Make data-driven pricing decisions.</div>
                        </div>
                    </div>
                </section>
                
                <section className="clients-section">
                    <div className="section-label">Who we work with</div>
                    <h2 className="section-title">Built for decision-makers</h2>
                    
                    <div className="clients-grid">
                        <div className="client-category">
                            <div className="client-title">Venture Capital and Angel Investors</div>
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
                        <div className="client-category">
                            <div className="client-title">Research Institutions</div>
                            <div className="client-description">AI training data, market analysis, benchmarking</div>
                        </div>
                    </div>
                </section>

                {/* SAMPLE REPORT SECTION */}
                <section className="product-section" style={{paddingTop: '80px', paddingBottom: '80px'}}>
                    <div className="section-label">See our analysis in action</div>
                    <h2 className="section-title">Free Sample Intelligence Report</h2>
                    <p className="section-description">We analyzed 4 emerging Nigerian startup companies with investment-grade financial analysis. Here's what we found.</p>
                    
                    <div style={{maxWidth: '900px', margin: '0 auto'}}>
                        {/* Sample Report Preview Image */}
                        <div style={{background: 'rgba(16, 185, 129, 0.03)', border: '1px solid rgba(16, 185, 129, 0.1)', borderRadius: '16px', padding: '40px', backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)', marginBottom: '32px'}}>
                            <img src="/assets/sample-report-preview.png" alt="Sample Report Preview" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 24px rgba(16, 185, 129, 0.2)'}} />
                        </div>
                        
                        {/* Sample Report Description */}
                        <div style={{background: 'rgba(16, 185, 129, 0.03)', border: '1px solid rgba(16, 185, 129, 0.1)', borderRadius: '16px', padding: '40px', backdropFilter: 'blur(10px)', marginBottom: '32px'}}>
                            <h3 style={{fontSize: '24px', fontWeight: '600', marginBottom: '20px', color: '#FAFAFA'}}>What's Inside This Sample</h3>
                            
                            <div style={{display: 'grid', gap: '16px'}}>
                                <div style={{display: 'flex', gap: '12px', alignItems: 'start'}}>
                                    <div style={{width: '24px', height: '24px', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', marginTop: '2px'}}>
                                        <div style={{width: '8px', height: '8px', background: '#10B981', borderRadius: '50%'}}></div>
                                    </div>
                                    <div>
                                        <div style={{fontWeight: '600', color: '#FAFAFA', marginBottom: '4px'}}>4 Emerging Companies Analyzed</div>
                                        <div style={{color: '#A0A0A0', fontSize: '14px', lineHeight: '1.5'}}>Companies the market isn't tracking yet.</div>
                                    </div>
                                </div>
                                
                                <div style={{display: 'flex', gap: '12px', alignItems: 'start'}}>
                                    <div style={{width: '24px', height: '24px', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', marginTop: '2px'}}>
                                        <div style={{width: '8px', height: '8px', background: '#10B981', borderRadius: '50%'}}></div>
                                    </div>
                                    <div>
                                        <div style={{fontWeight: '600', color: '#FAFAFA', marginBottom: '4px'}}>Investment-Grade Financial Analysis</div>
                                        <div style={{color: '#A0A0A0', fontSize: '14px', lineHeight: '1.5'}}>Traction metrics and investment implications for each company.</div>
                                    </div>
                                </div>
                                
                                <div style={{display: 'flex', gap: '12px', alignItems: 'start'}}>
                                    <div style={{width: '24px', height: '24px', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', marginTop: '2px'}}>
                                        <div style={{width: '8px', height: '8px', background: '#10B981', borderRadius: '50%'}}></div>
                                    </div>
                                    <div>
                                        <div style={{fontWeight: '600', color: '#FAFAFA', marginBottom: '4px'}}>Key Market Insights</div>
                                        <div style={{color: '#A0A0A0', fontSize: '14px', lineHeight: '1.5'}}>WhatsApp is emerging as Nigeria's startup OS. AI is no longer experimental in Nigeria.</div>
                                    </div>
                                </div>
                                
                                <div style={{display: 'flex', gap: '12px', alignItems: 'start'}}>
                                    <div style={{width: '24px', height: '24px', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', marginTop: '2px'}}>
                                        <div style={{width: '8px', height: '8px', background: '#10B981', borderRadius: '50%'}}></div>
                                    </div>
                                    <div>
                                        <div style={{fontWeight: '600', color: '#FAFAFA', marginBottom: '4px'}}>Our Analytical Framework</div>
                                        <div style={{color: '#A0A0A0', fontSize: '14px', lineHeight: '1.5'}}>Demonstrates how we analyze companies, calculate metrics, and identify investment opportunities you're missing.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* CTA to Download/View */}
                        <div style={{textAlign: 'center'}}>
                            <a href="mailto:admin@lemina.co,3odinaka@gmail.com?subject=Sample Report Request&body=Hi, I'd like to view the full sample intelligence report.%0D%0A%0D%0AName:%0D%0ACompany:%0D%0ARole:" className="chart-cta" style={{fontSize: '16px', padding: '16px 40px'}}>
                                View Full Sample Report
                            </a>
                            <div style={{marginTop: '16px', fontSize: '14px', color: '#A0A0A0'}}>
                                This sample = 4 companies. The full report = 200+ companies with comprehensive data.
                            </div>
                        </div>
                    </div>
                </section>
                {/* END SAMPLE REPORT SECTION */}
                
                <section className="cta-section">
                    <div className="cta-box">
                        <div className="cta-title">Early Adopter Access</div>
                        <div className="cta-price">$149</div>
                        <div className="cta-note">Limited to 10 early adopters • Full year of quarterly updates • Lifetime early adopter fee</div>
                        <a href="mailto:admin@lemina.co,3odinaka@gmail.com?subject=Intelligence Report Request" className="cta-button">Request access</a>
                    </div>
                </section>
                
                {/* pay attention */}
                <section className="product-section" style={{background: 'rgba(16, 185, 129, 0.03)', borderTop: '1px solid rgba(16, 185, 129, 0.1)', padding: '100px 0'}}>
                    <div className="container" style={{textAlign: 'center'}}>
                        <h2 className="section-title">Are you building the future?</h2>
                        <p className="section-description" style={{margin: '0 auto 60px'}}>
                            Get discovered by investors actively deploying capital; featured in our intelligence reports; connected to VCs looking for exactly what you're building.
                        </p>
                        
                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginBottom: '60px', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto'}}>
                            <div style={{background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '12px', padding: '32px', textAlign: 'left'}}>
                                <div style={{fontWeight: '600', fontSize: '18px', color: '#FAFAFA', marginBottom: '8px'}}>Investor Discovery</div>
                                <div style={{color: '#A0A0A0', fontSize: '14px', lineHeight: '1.6'}}>Investors searching for companies in your sector will find you in our verified database</div>
                            </div>
                            
                            <div style={{background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '12px', padding: '32px', textAlign: 'left'}}>
                                <div style={{fontWeight: '600', fontSize: '18px', color: '#FAFAFA', marginBottom: '8px'}}>Learn what investors need before they deploy capital</div>
                                <div style={{color: '#A0A0A0', fontSize: '14px', lineHeight: '1.6'}}>Gain access to free tips and tools that get your idea funded</div>
                            </div>
                        </div>
                        
                        <Link href="/founders" style={{display: 'inline-block', padding: '18px 48px', background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', color: '#FAFAFA', textDecoration: 'none', borderRadius: '12px', fontWeight: '600', fontSize: '18px', transition: 'all 0.3s ease', border: '1px solid rgba(16, 185, 129, 0.3)', boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)'}}>
                            Add Your Company (5 min) →
                        </Link>
                        
                        <div style={{marginTop: '24px', fontSize: '14px', color: '#A0A0A0'}}>
                            100% free • Takes 5 minutes • No obligations
                        </div>
                    </div>
                </section>

                <footer>
                    <a href="mailto:admin@lemina.co">admin@lemina.co</a>
                    <section>
                        <p style={{textAlign: 'center', color: '#3BA55C'}}>
                            Follow us on X: <a href="https://x.com/uselemina" target="_blank" rel="noopener noreferrer">@uselemina</a>
                        </p>
                    </section>
                    <div className="footer-text">© 2025 Lemina • Powering the investment bank for African tech</div>
                </footer>
            </div>
        </>
    );
}