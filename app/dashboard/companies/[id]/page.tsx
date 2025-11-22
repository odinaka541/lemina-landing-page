'use client';

import Link from 'next/link';
import { ArrowLeft, Star, MoreHorizontal, Wallet, Users, MapPin, Building2, Calendar, Clock, ExternalLink } from 'lucide-react';
import ConfidenceBadge, { ConfidenceTier } from '@/components/company/ConfidenceBadge';

export default function CompanyProfilePage({ params }: { params: { id: string } }) {
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
                </div>
            </div>
        </div>
    );
}
