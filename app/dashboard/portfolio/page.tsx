'use client';

import { TrendingUp, TrendingDown, DollarSign, PieChart as PieChartIcon, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import AllocationChart from '@/components/portfolio/AllocationChart';
import ConfidenceBadge, { ConfidenceTier } from '@/components/company/ConfidenceBadge';

// Mock Data
const PORTFOLIO_STATS = {
    totalInvested: '$1.2M',
    currentValue: '$3.5M',
    moic: '2.9x',
    irr: '32%'
};

const SECTOR_ALLOCATION = [
    { name: 'Fintech', value: 45, color: '#10b981' },
    { name: 'Healthtech', value: 25, color: '#3b82f6' },
    { name: 'Logistics', value: 20, color: '#f59e0b' },
    { name: 'Edtech', value: 10, color: '#8b5cf6' },
];

const STAGE_ALLOCATION = [
    { name: 'Pre-Seed', value: 30, color: '#ec4899' },
    { name: 'Seed', value: 50, color: '#10b981' },
    { name: 'Series A', value: 20, color: '#3b82f6' },
];

const PORTFOLIO_COMPANIES = [
    {
        id: '1',
        name: 'Paystack',
        logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Paystack',
        investedDate: 'Dec 2016',
        amount: '$50k',
        ownership: '0.5%',
        currentValue: '$1M',
        moic: '20x',
        trend: 'up',
        tier: ConfidenceTier.CACVerified,
        score: 98
    },
    {
        id: '2',
        name: 'Flutterwave',
        logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Flutterwave',
        investedDate: 'Aug 2018',
        amount: '$100k',
        ownership: '0.1%',
        currentValue: '$1.5M',
        moic: '15x',
        trend: 'up',
        tier: ConfidenceTier.DirectVerified,
        score: 92
    },
    {
        id: '3',
        name: '54gene',
        logo: 'https://api.dicebear.com/7.x/initials/svg?seed=54gene',
        investedDate: 'Jan 2020',
        amount: '$75k',
        ownership: '0.8%',
        currentValue: '$25k',
        moic: '0.3x',
        trend: 'down',
        tier: ConfidenceTier.ThirdParty,
        score: 75
    }
];

export default function PortfolioPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">Portfolio Performance</h1>
                    <p className="text-[var(--color-text-secondary)]">Track your investments and returns.</p>
                </div>
                <button className="btn btn-primary">
                    Download Report
                </button>
            </div>

            {/* Aggregate Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="glass-panel p-5">
                    <p className="text-sm text-[var(--color-text-secondary)] mb-1">Total Invested</p>
                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">{PORTFOLIO_STATS.totalInvested}</h3>
                </div>
                <div className="glass-panel p-5">
                    <p className="text-sm text-[var(--color-text-secondary)] mb-1">Current Value</p>
                    <div className="flex items-baseline gap-2">
                        <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">{PORTFOLIO_STATS.currentValue}</h3>
                        <span className="text-xs text-emerald-500 font-medium flex items-center">
                            <TrendingUp size={12} className="mr-1" /> +191%
                        </span>
                    </div>
                </div>
                <div className="glass-panel p-5">
                    <p className="text-sm text-[var(--color-text-secondary)] mb-1">MOIC</p>
                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">{PORTFOLIO_STATS.moic}</h3>
                </div>
                <div className="glass-panel p-5">
                    <p className="text-sm text-[var(--color-text-secondary)] mb-1">IRR</p>
                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">{PORTFOLIO_STATS.irr}</h3>
                </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="glass-panel p-6">
                    <h3 className="font-bold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                        <PieChartIcon size={20} className="text-[var(--color-accent-primary)]" />
                        Sector Allocation
                    </h3>
                    <AllocationChart data={SECTOR_ALLOCATION} />
                </div>
                <div className="glass-panel p-6">
                    <h3 className="font-bold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                        <PieChartIcon size={20} className="text-blue-500" />
                        Stage Allocation
                    </h3>
                    <AllocationChart data={STAGE_ALLOCATION} />
                </div>
            </div>

            {/* Portfolio Table */}
            <div className="glass-panel overflow-hidden">
                <div className="p-6 border-b border-[var(--color-border)]">
                    <h3 className="font-bold text-[var(--color-text-primary)]">Portfolio Companies</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[rgba(255,255,255,0.02)] border-b border-[var(--color-border)]">
                                <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Company</th>
                                <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Invested</th>
                                <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Amount</th>
                                <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Ownership</th>
                                <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Current Value</th>
                                <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">MOIC</th>
                                <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {PORTFOLIO_COMPANIES.map((company) => (
                                <tr key={company.id} className="border-b border-[var(--color-border)] last:border-0 hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-[var(--color-bg-secondary)] p-1 flex items-center justify-center">
                                                <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-[var(--color-text-primary)] text-sm">{company.name}</div>
                                                <ConfidenceBadge tier={company.tier} score={company.score} showLabel={false} className="scale-75 origin-left" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm text-[var(--color-text-secondary)]">{company.investedDate}</td>
                                    <td className="p-4 text-sm text-[var(--color-text-primary)] font-mono">{company.amount}</td>
                                    <td className="p-4 text-sm text-[var(--color-text-secondary)]">{company.ownership}</td>
                                    <td className="p-4 text-sm text-[var(--color-text-primary)] font-bold font-mono">{company.currentValue}</td>
                                    <td className="p-4">
                                        <div className={`flex items-center gap-1 text-sm font-medium ${company.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
                                            {company.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                                            {company.moic}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <Link href={`/dashboard/companies/${company.id}`} className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[rgba(255,255,255,0.1)] rounded-lg transition-colors inline-block">
                                            <ArrowUpRight size={18} />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
