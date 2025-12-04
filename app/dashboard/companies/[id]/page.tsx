'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, MoreHorizontal, Wallet, Users, MapPin, Building2, Calendar, Clock, ExternalLink } from 'lucide-react';
import ConfidenceBadge, { ConfidenceTier } from '@/components/company/ConfidenceBadge';

export default function CompanyProfilePage({ params }: { params: { id: string } }) {
    const [activeTab, setActiveTab] = useState('Overview');
    // Mock Data (would normally fetch based on params.id)
    const company = {
        name: 'Paystack',
        description: 'Payments infrastructure for African businesses',
        qualityScore: 92,
        about: 'Paystack is a payments infrastructure company that enables businesses in Africa to accept payments from anyone, anywhere in the world. They build technology to help Africa\'s best businesses grow - from new startups, to market leaders launching new business models.',
        quickFacts: [
            { icon: Wallet, label: 'Funding', value: '$200M' },
            { icon: Users, label: 'Team', value: '450 people' },
            { icon: MapPin, label: 'HQ', value: 'Lagos, Nigeria' },
            { icon: Building2, label: 'Status', value: 'CBN Licensed' },
            { icon: Calendar, label: 'Founded', value: '2015' },
            { icon: Clock, label: 'Updated', value: '3 days ago' },
        ],
        metrics: [
            { label: 'Monthly Revenue', value: '$8.5M', tier: 4, score: 92, source: 'Verified' },
            { label: 'Total Users', value: '60,000', tier: 4, score: 90, source: 'Verified' },
            { label: 'Transactions/Month', value: '2.5M', tier: 3, score: 75, source: '3rd-party' },
            { label: 'Payment Vol/Month', value: '$1.2B', tier: 4, score: 92, source: 'Verified' },
            { label: 'GMV (Annual)', value: '$15B', tier: 2, score: 60, source: 'News' },
            { label: 'Valuation', value: '$2B', tier: 5, score: 100, source: 'Public Filing' },
        ],
        funding: [
            { date: 'Oct 2020', stage: 'Series C', amount: '$200M', investor: 'Stripe', verification: { tier: 5, score: 100, label: 'Public Filing' } },
            { date: 'Sep 2018', stage: 'Series B', amount: '$8M', investor: 'Stripe', verification: { tier: 4, score: 92, label: 'Press Release' } },
            { date: 'May 2016', stage: 'Series A', amount: '$1.3M', investor: 'Tencent', verification: { tier: 4, score: 90, label: 'Verified' } },
        ]
    };

    return (
        <div className="min-h-screen pb-20">
            {/* Sticky Header */}
            <div className="sticky top-0 z-30 bg-[var(--color-bg-primary)]/80 backdrop-blur-md border-b border-[var(--color-border)] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="p-2 hover:bg-[rgba(255,255,255,0.05)] rounded-lg transition-colors text-[var(--color-text-secondary)] hover:text-white">
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="text-xl font-bold text-white leading-tight">{company.name}</h1>
                        <p className="text-xs text-[var(--color-text-secondary)]">Payments infrastructure</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)]">
                        <span className="text-xs text-[var(--color-text-secondary)]">Quality Score:</span>
                        <span className="text-sm font-bold text-[var(--color-accent-primary)]">{company.qualityScore}/100</span>
                    </div>
                    <button className="btn btn-secondary text-sm py-2 px-4 gap-2">
                        <Star size={16} /> <span className="hidden sm:inline">Save</span>
                    </button>
                    <button className="btn btn-primary text-sm py-2 px-4">
                        Add to Pipeline
                    </button>
                    <button className="p-2 hover:bg-[rgba(255,255,255,0.05)] rounded-lg transition-colors text-[var(--color-text-secondary)] hover:text-white">
                        <MoreHorizontal size={20} />
                    </button>
                </div>
            </div>

            <div className="container max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Quick Facts */}
                <div className="space-y-6">
                    <div className="glass-panel p-5">
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider opacity-70">Quick Facts</h3>
                        <div className="space-y-4">
                            {company.quickFacts.map((fact, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <fact.icon size={18} className="text-[var(--color-accent-primary)] mt-0.5" />
                                    <div>
                                        <div className="text-xs text-[var(--color-text-secondary)]">{fact.label}</div>
                                        <div className="text-sm font-medium text-white">{fact.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-[var(--color-border)]">
                            <a href="#" className="flex items-center gap-2 text-sm text-[var(--color-accent-primary)] hover:underline">
                                Visit Website <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Tabs */}
                    <div className="flex border-b border-[var(--color-border)] mb-6">
                        {['Overview', 'Financials', 'Network', 'Documents'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === tab
                                    ? 'border-[var(--color-accent-primary)] text-white'
                                    : 'border-transparent text-[var(--color-text-secondary)] hover:text-white'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {activeTab === 'Overview' && (
                        <>
                            {/* Key Metrics */}
                            <section>
                                <h2 className="text-lg font-semibold text-white mb-4">Key Metrics</h2>
                                <div className="glass-panel overflow-hidden">
                                    <table className="w-full text-left border-collapse">
                                        <tbody>
                                            {company.metrics.map((metric, i) => (
                                                <tr key={i} className="border-b border-[var(--color-border)] last:border-0 hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                                                    <td className="p-4 text-sm font-medium text-[var(--color-text-secondary)] w-1/3">{metric.label}</td>
                                                    <td className="p-4 text-base font-mono font-semibold text-white">{metric.value}</td>
                                                    <td className="p-4 text-right">
                                                        <ConfidenceBadge
                                                            tier={metric.tier as ConfidenceTier}
                                                            score={metric.score}
                                                            source={metric.source}
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* About */}
                            <section>
                                <h2 className="text-lg font-semibold text-white mb-4">About</h2>
                                <div className="glass-panel p-6">
                                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                        {company.about}
                                    </p>
                                </div>
                            </section>

                            {/* Funding History */}
                            <section>
                                <h2 className="text-lg font-semibold text-white mb-4">Funding History</h2>
                                <div className="glass-panel overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse min-w-[600px]">
                                            <thead>
                                                <tr className="bg-[rgba(255,255,255,0.03)] border-b border-[var(--color-border)]">
                                                    <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Date</th>
                                                    <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Stage</th>
                                                    <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Amount</th>
                                                    <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Lead Investor</th>
                                                    <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase text-right">Verification</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {company.funding.map((round, i) => (
                                                    <tr key={i} className="border-b border-[var(--color-border)] last:border-0 hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                                                        <td className="p-4 text-sm text-white">{round.date}</td>
                                                        <td className="p-4 text-sm text-white">{round.stage}</td>
                                                        <td className="p-4 text-sm font-mono text-white">{round.amount}</td>
                                                        <td className="p-4 text-sm text-[var(--color-text-secondary)]">{round.investor}</td>
                                                        <td className="p-4 text-right">
                                                            <ConfidenceBadge
                                                                tier={round.verification.tier as ConfidenceTier}
                                                                score={round.verification.score}
                                                                source={round.verification.label}
                                                                showLabel={true}
                                                            />
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>
                        </>
                    )}

                    {activeTab === 'Network' && (
                        <div className="space-y-8">
                            {/* Syndicate Interest */}
                            <section>
                                <h2 className="text-lg font-semibold text-white mb-4">Syndicate Interest</h2>
                                <div className="glass-panel p-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div key={i} className="w-10 h-10 rounded-full bg-[var(--color-bg-secondary)] border-2 border-[var(--color-bg-primary)] flex items-center justify-center overflow-hidden">
                                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="User" />
                                                </div>
                                            ))}
                                            <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] border-2 border-[var(--color-bg-primary)] flex items-center justify-center text-xs font-bold text-white">
                                                +3
                                            </div>
                                        </div>
                                        <div className="text-sm text-[var(--color-text-secondary)]">
                                            <span className="text-white font-medium">7 members</span> are tracking this deal
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3 p-4 bg-[rgba(255,255,255,0.03)] rounded-lg">
                                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-8 h-8 rounded-full" alt="User" />
                                            <div>
                                                <div className="text-sm font-medium text-white">Felix (Lead)</div>
                                                <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                                    "Strong unit economics. I'm scheduling a call with the founder next Tuesday. Anyone want to join?"
                                                </p>
                                                <div className="flex gap-4 mt-2 text-xs text-[var(--color-text-secondary)]">
                                                    <button className="hover:text-white">Reply</button>
                                                    <span>2h ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-4 bg-[rgba(255,255,255,0.03)] rounded-lg">
                                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" className="w-8 h-8 rounded-full" alt="User" />
                                            <div>
                                                <div className="text-sm font-medium text-white">Sarah</div>
                                                <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                                    "I'm concerned about the regulatory headwinds mentioned in the report. Has legal reviewed this?"
                                                </p>
                                                <div className="flex gap-4 mt-2 text-xs text-[var(--color-text-secondary)]">
                                                    <button className="hover:text-white">Reply</button>
                                                    <span>5h ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                                        <textarea
                                            placeholder="Add a comment for the syndicate..."
                                            className="w-full bg-[rgba(0,0,0,0.2)] border border-[var(--color-border)] rounded-lg p-3 text-sm text-white placeholder-[var(--color-text-secondary)] focus:border-[var(--color-accent-primary)] outline-none min-h-[100px]"
                                        ></textarea>
                                        <div className="flex justify-end mt-2">
                                            <button className="btn btn-primary text-sm">Post Comment</button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}

                    {(activeTab === 'Financials' || activeTab === 'Documents') && (
                        <div className="glass-panel p-12 text-center">
                            <div className="text-4xl mb-4 opacity-20">🔒</div>
                            <h3 className="text-lg font-semibold text-white mb-2">Access Restricted</h3>
                            <p className="text-[var(--color-text-secondary)] mb-6">
                                Please request full access to view detailed {activeTab.toLowerCase()}.
                            </p>
                            <button className="btn btn-secondary">Request Access</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
