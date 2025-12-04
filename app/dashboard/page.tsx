'use client';

import { ArrowRight, TrendingUp, Activity, Globe, Zap } from 'lucide-react';
import Link from 'next/link';
import CompanyCard from '@/components/company/CompanyCard';
import { ConfidenceTier } from '@/components/company/ConfidenceBadge';

// Mock Data (Reusing some from Search Page for consistency)
const RECOMMENDED_COMPANIES = [
    {
        id: '1',
        name: 'Paystack',
        description: 'Modern online and offline payments for Africa.',
        location: 'Lagos, Nigeria',
        employees: 250,
        funding: 'Acquired',
        lastUpdated: '2h ago',
        metrics: {
            revenue: { label: 'ARR', value: '$100M+', tier: ConfidenceTier.High, score: 0.95 },
            users: { label: 'Merchants', value: '80,000+', tier: ConfidenceTier.High, score: 0.98 },
            valuation: { label: 'Valuation', value: '$200M+', tier: ConfidenceTier.Medium, score: 0.75 }
        }
    },
    {
        id: '4',
        name: 'M-KOPA',
        description: 'Connected asset financing for underbanked customers.',
        location: 'Nairobi, Kenya',
        employees: 1000,
        funding: 'Debt Financing',
        lastUpdated: '3d ago',
        metrics: {
            revenue: { label: 'ARR', value: '$150M+', tier: ConfidenceTier.High, score: 0.96 },
            users: { label: 'Customers', value: '3M+', tier: ConfidenceTier.High, score: 0.94 },
            valuation: { label: 'Valuation', value: 'Undisclosed', tier: ConfidenceTier.Low, score: 0.40 }
        }
    }
];

const TRENDING_COMPANIES = [
    {
        id: '2',
        name: 'Flutterwave',
        description: 'Simplifying payments for endless possibilities.',
        location: 'Lagos, Nigeria',
        employees: 500,
        funding: 'Series D',
        lastUpdated: '5h ago',
        metrics: {
            revenue: { label: 'ARR', value: '$250M+', tier: ConfidenceTier.High, score: 0.92 },
            users: { label: 'Customers', value: '1M+', tier: ConfidenceTier.Medium, score: 0.65 },
            valuation: { label: 'Valuation', value: '$3B+', tier: ConfidenceTier.High, score: 0.90 }
        }
    },
    {
        id: '6',
        name: 'Wasoko',
        description: 'Transforming informal retail supply chains in Africa.',
        location: 'Nairobi, Kenya',
        employees: 800,
        funding: 'Series B',
        lastUpdated: '2d ago',
        metrics: {
            revenue: { label: 'GMV', value: '$300M+', tier: ConfidenceTier.High, score: 0.89 },
            users: { label: 'Merchants', value: '50,000+', tier: ConfidenceTier.Medium, score: 0.68 },
            valuation: { label: 'Valuation', value: '$625M', tier: ConfidenceTier.Medium, score: 0.78 }
        }
    }
];

function StatWidget({ icon: Icon, label, value, trend, color }: any) {
    return (
        <div className="glass-panel p-5 flex items-center gap-4">
            <div className={`p-3 rounded-xl bg-${color}-500/10 text-${color}-500`}>
                <Icon size={24} />
            </div>
            <div>
                <p className="text-sm text-[var(--color-text-secondary)]">{label}</p>
                <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-bold text-white">{value}</h3>
                    <span className="text-xs text-emerald-500 font-medium">{trend}</span>
                </div>
            </div>
        </div>
    );
}

export default function DashboardPage() {
    return (
        <div className="container mx-auto px-4 py-8 space-y-8">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
                    <p className="text-[var(--color-text-secondary)]">Welcome back, here's what's happening in your network.</p>
                </div>
                <div className="text-sm text-[var(--color-text-secondary)]">
                    Last updated: <span className="text-white font-mono">Just now</span>
                </div>
            </div>

            {/* Market Snapshot */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatWidget
                    icon={TrendingUp}
                    label="Total Deal Flow"
                    value="1,248"
                    trend="+12% this week"
                    color="emerald"
                />
                <StatWidget
                    icon={Activity}
                    label="Active Due Diligence"
                    value="8"
                    trend="2 closing soon"
                    color="blue"
                />
                <StatWidget
                    icon={Globe}
                    label="Market Cap Tracked"
                    value="$14.2B"
                    trend="+5% MoM"
                    color="purple"
                />
                <StatWidget
                    icon={Zap}
                    label="New Opportunities"
                    value="24"
                    trend="Matches your thesis"
                    color="amber"
                />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Feeds */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Recommended Section */}
                    <section>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <Zap size={20} className="text-amber-500" />
                                Recommended for You
                            </h2>
                            <Link href="/search" className="text-sm text-[var(--color-accent-primary)] hover:text-white transition-colors flex items-center gap-1">
                                View all <ArrowRight size={14} />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {RECOMMENDED_COMPANIES.map(company => (
                                <CompanyCard key={company.id} {...company} />
                            ))}
                        </div>
                    </section>

                    {/* Trending Section */}
                    <section>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <TrendingUp size={20} className="text-emerald-500" />
                                Trending in Network
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {TRENDING_COMPANIES.map(company => (
                                <CompanyCard key={company.id} {...company} />
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Column - Activity & Quick Actions */}
                <div className="space-y-6">
                    {/* Recent Activity */}
                    <div className="glass-panel p-5">
                        <h3 className="font-bold text-white mb-4">Recent Activity</h3>
                        <div className="space-y-4">
                            {[
                                { text: "Paystack released 2024 report", time: "2h ago", type: "report" },
                                { text: "Flutterwave raised Series E", time: "5h ago", type: "funding" },
                                { text: "New competitor for Chipper Cash", time: "1d ago", type: "alert" },
                                { text: "M-KOPA expanded to Ghana", time: "2d ago", type: "news" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 items-start pb-4 border-b border-[var(--color-border)] last:border-0 last:pb-0">
                                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent-primary)] mt-2 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-gray-300">{item.text}</p>
                                        <span className="text-xs text-gray-500">{item.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-4 py-2 text-sm text-[var(--color-text-secondary)] hover:text-white border border-[var(--color-border)] rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-all">
                            View All Activity
                        </button>
                    </div>

                    {/* Quick Actions */}
                    <div className="glass-panel p-5">
                        <h3 className="font-bold text-white mb-4">Quick Actions</h3>
                        <div className="space-y-2">
                            <Link href="/search" className="block w-full py-2 px-4 bg-[var(--color-accent-primary)] text-white text-center rounded-lg hover:bg-emerald-600 transition-colors font-medium">
                                Find Companies
                            </Link>
                            <button className="block w-full py-2 px-4 bg-[rgba(255,255,255,0.05)] text-white text-center rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors border border-[var(--color-border)]">
                                Add Portfolio Company
                            </button>
                            <button className="block w-full py-2 px-4 bg-[rgba(255,255,255,0.05)] text-white text-center rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors border border-[var(--color-border)]">
                                Create New Deal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
