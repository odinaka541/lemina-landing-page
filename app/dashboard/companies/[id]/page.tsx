'use client';

import { useState } from 'react';
import { MapPin, Globe, Calendar, Users, ShieldCheck, ArrowUpRight, Copy, Share2, Bookmark, BarChart2, Briefcase, FileText, Newspaper } from 'lucide-react';
import Link from 'next/link';
import ConfidenceBadge, { ConfidenceTier } from '@/components/company/ConfidenceBadge';
import MetricsChart from '@/components/company/MetricsChart';
import TeamSection from '@/components/company/TeamSection';

// Mock Data
const COMPANY_DATA = {
    id: '1',
    name: 'Paystack',
    description: 'Modern online and offline payments for Africa.',
    longDescription: 'Paystack helps businesses in Africa get paid by anyone, anywhere in the world. They provide a seamless payment experience for customers and a powerful dashboard for merchants to manage their business. Acquired by Stripe in 2020 for $200M+, Paystack continues to expand across the continent.',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Paystack',
    location: 'Lagos, Nigeria',
    website: 'paystack.com',
    founded: '2015',
    employees: 250,
    stage: 'Acquired',
    verificationTier: ConfidenceTier.CACVerified,
    verificationScore: 98,
    sectors: ['Fintech', 'Payments', 'SaaS'],
    metrics: {
        revenue: [
            { name: 'Jan', value: 4000 },
            { name: 'Feb', value: 3000 },
            { name: 'Mar', value: 2000 },
            { name: 'Apr', value: 2780 },
            { name: 'May', value: 1890 },
            { name: 'Jun', value: 2390 },
            { name: 'Jul', value: 3490 },
        ],
        users: [
            { name: 'Jan', value: 2400 },
            { name: 'Feb', value: 1398 },
            { name: 'Mar', value: 9800 },
            { name: 'Apr', value: 3908 },
            { name: 'May', value: 4800 },
            { name: 'Jun', value: 3800 },
            { name: 'Jul', value: 4300 },
        ]
    },
    team: [
        {
            name: 'Shola Akinlade',
            role: 'Co-founder & CEO',
            bio: 'Software engineer turned entrepreneur. Previously worked at Heineken and banks in Nigeria. Y Combinator alumni.',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shola',
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com'
        },
        {
            name: 'Ezra Olubi',
            role: 'Co-founder & CTO',
            bio: 'Experienced software architect. Passionate about building scalable systems and solving complex problems.',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ezra',
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com'
        }
    ],
    funding: [
        { round: 'Acquisition', date: 'Oct 2020', amount: '$200M+', investors: ['Stripe'] },
        { round: 'Series A', date: 'Aug 2018', amount: '$8M', investors: ['Stripe', 'Visa', 'Tencent'] },
        { round: 'Seed', date: 'Dec 2016', amount: '$1.3M', investors: ['Y Combinator', 'Ventures Platform'] }
    ]
};

export default function CompanyProfilePage() {
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
        { id: 'overview', label: 'Overview', icon: FileText },
        { id: 'metrics', label: 'Metrics', icon: BarChart2 },
        { id: 'team', label: 'Team', icon: Users },
        { id: 'funding', label: 'Funding', icon: Briefcase },
        { id: 'news', label: 'News', icon: Newspaper },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="glass-panel p-8 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 flex gap-2">
                    <button className="p-2 text-[var(--color-text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.05)] rounded-lg transition-colors">
                        <Share2 size={20} />
                    </button>
                    <button className="p-2 text-[var(--color-text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.05)] rounded-lg transition-colors">
                        <Bookmark size={20} />
                    </button>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-24 h-24 rounded-2xl bg-white p-2 flex items-center justify-center shadow-lg shadow-emerald-900/20">
                        <img src={COMPANY_DATA.logo} alt={COMPANY_DATA.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-3xl font-bold text-white">{COMPANY_DATA.name}</h1>
                            <ConfidenceBadge tier={COMPANY_DATA.verificationTier} score={COMPANY_DATA.verificationScore} />
                        </div>
                        <p className="text-lg text-[var(--color-text-secondary)] mb-4 max-w-2xl">
                            {COMPANY_DATA.description}
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm text-[var(--color-text-secondary)] mb-6">
                            <div className="flex items-center gap-1.5">
                                <MapPin size={16} />
                                {COMPANY_DATA.location}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Globe size={16} />
                                <a href={`https://${COMPANY_DATA.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent-primary)] transition-colors">
                                    {COMPANY_DATA.website}
                                </a>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Calendar size={16} />
                                Founded {COMPANY_DATA.founded}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Users size={16} />
                                {COMPANY_DATA.employees} Employees
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {COMPANY_DATA.sectors.map(sector => (
                                <span key={sector} className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] border border-[var(--color-border)] text-xs font-medium text-white">
                                    {sector}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <button className="btn btn-primary px-6">
                                Add to Pipeline
                            </button>
                            <Link href="/dashboard/companies/compare" className="btn btn-secondary px-6">
                                Compare
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-[var(--color-border)] mb-8 overflow-x-auto">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.id
                                ? 'border-[var(--color-accent-primary)] text-[var(--color-accent-primary)]'
                                : 'border-transparent text-[var(--color-text-secondary)] hover:text-white hover:border-[rgba(255,255,255,0.1)]'
                            }`}
                    >
                        <tab.icon size={16} />
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="animate-fade-in">
                {activeTab === 'overview' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <section>
                                <h2 className="text-xl font-bold text-white mb-4">About</h2>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                    {COMPANY_DATA.longDescription}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-white mb-4">Key Highlights</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 rounded-xl bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)]">
                                        <h3 className="font-semibold text-white mb-1">Market Leader</h3>
                                        <p className="text-sm text-[var(--color-text-secondary)]">Dominant market share in Nigeria and expanding rapidly in Ghana and South Africa.</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)]">
                                        <h3 className="font-semibold text-white mb-1">Strong Unit Economics</h3>
                                        <p className="text-sm text-[var(--color-text-secondary)]">Profitable on a per-transaction basis with high retention rates.</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="space-y-6">
                            <div className="glass-panel p-5">
                                <h3 className="font-bold text-white mb-4">Quick Facts</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[var(--color-text-secondary)]">Stage</span>
                                        <span className="text-white font-medium">{COMPANY_DATA.stage}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[var(--color-text-secondary)]">Total Funding</span>
                                        <span className="text-white font-medium">$210M+</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[var(--color-text-secondary)]">Last Round</span>
                                        <span className="text-white font-medium">Acquisition</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'metrics' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="glass-panel p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-white">Monthly Revenue</h3>
                                <div className="text-sm text-emerald-500 font-medium">+12% MoM</div>
                            </div>
                            <MetricsChart
                                data={COMPANY_DATA.metrics.revenue}
                                dataKey="value"
                                color="#10b981"
                                label="Revenue"
                            />
                        </div>
                        <div className="glass-panel p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-white">Active Users</h3>
                                <div className="text-sm text-blue-500 font-medium">+8% MoM</div>
                            </div>
                            <MetricsChart
                                data={COMPANY_DATA.metrics.users}
                                dataKey="value"
                                color="#3b82f6"
                                label="Users"
                            />
                        </div>
                    </div>
                )}

                {activeTab === 'team' && (
                    <TeamSection members={COMPANY_DATA.team} />
                )}

                {activeTab === 'funding' && (
                    <div className="glass-panel overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[rgba(255,255,255,0.03)] border-b border-[var(--color-border)]">
                                    <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Round</th>
                                    <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Date</th>
                                    <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Amount</th>
                                    <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Investors</th>
                                </tr>
                            </thead>
                            <tbody>
                                {COMPANY_DATA.funding.map((round, i) => (
                                    <tr key={i} className="border-b border-[var(--color-border)] last:border-0 hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                                        <td className="p-4 font-medium text-white">{round.round}</td>
                                        <td className="p-4 text-sm text-[var(--color-text-secondary)]">{round.date}</td>
                                        <td className="p-4 text-sm text-white font-mono">{round.amount}</td>
                                        <td className="p-4 text-sm text-[var(--color-text-secondary)]">
                                            {round.investors.join(', ')}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'news' && (
                    <div className="text-center py-12 text-[var(--color-text-secondary)]">
                        News feed integration coming soon.
                    </div>
                )}
            </div>
        </div>
    );
}
