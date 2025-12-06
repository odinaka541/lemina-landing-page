'use client';

import { useState } from 'react';
import { Calendar, Download, TrendingUp, DollarSign, Activity, Globe } from 'lucide-react';
import TrendChart from '@/components/market/TrendChart';

// Mock Data
const FUNDING_TREND = [
    { month: 'Jan', amount: 120 },
    { month: 'Feb', amount: 150 },
    { month: 'Mar', amount: 180 },
    { month: 'Apr', amount: 140 },
    { month: 'May', amount: 210 },
    { month: 'Jun', amount: 250 },
];

const REGIONAL_SPLIT = [
    { region: 'West Africa', share: 45 },
    { region: 'East Africa', share: 25 },
    { region: 'North Africa', share: 20 },
    { region: 'Southern Africa', share: 10 },
];

const REPORTS = [
    { id: 1, title: 'Q3 2025 African Tech Funding Report', date: 'Oct 15, 2025', size: '4.2 MB' },
    { id: 2, title: 'Fintech Landscape: Nigeria vs Egypt', date: 'Sep 28, 2025', size: '2.8 MB' },
    { id: 3, title: 'Emerging Sectors: Healthtech & Logistics', date: 'Sep 10, 2025', size: '3.5 MB' },
];

export default function MarketPage() {
    const [dateRange, setDateRange] = useState('Last 6 Months');

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Market Intelligence</h1>
                    <p className="text-[var(--color-text-secondary)]">Macro-level insights into the African tech ecosystem.</p>
                </div>
                <div className="flex gap-3">
                    <button className="btn btn-secondary gap-2">
                        <Calendar size={16} /> {dateRange}
                    </button>
                    <button className="btn btn-primary gap-2">
                        <Download size={16} /> Export Data
                    </button>
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="glass-panel p-5">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-[rgba(16,185,129,0.1)] rounded-lg text-[var(--color-accent-primary)]">
                            <DollarSign size={20} />
                        </div>
                        <span className="text-sm text-[var(--color-text-secondary)]">Capital Deployed</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white">$1.2B</h3>
                    <p className="text-xs text-emerald-500 mt-1 flex items-center">
                        <TrendingUp size={12} className="mr-1" /> +15% vs last period
                    </p>
                </div>
                <div className="glass-panel p-5">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-[rgba(59,130,246,0.1)] rounded-lg text-blue-500">
                            <Activity size={20} />
                        </div>
                        <span className="text-sm text-[var(--color-text-secondary)]">Deal Count</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white">342</h3>
                    <p className="text-xs text-emerald-500 mt-1 flex items-center">
                        <TrendingUp size={12} className="mr-1" /> +8% vs last period
                    </p>
                </div>
                <div className="glass-panel p-5">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-[rgba(245,158,11,0.1)] rounded-lg text-amber-500">
                            <Globe size={20} />
                        </div>
                        <span className="text-sm text-[var(--color-text-secondary)]">Active Regions</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white">12</h3>
                    <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                        Top: Nigeria, Kenya, Egypt
                    </p>
                </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="glass-panel p-6">
                    <h3 className="font-bold text-white mb-4">Funding Trend (Capital Deployed)</h3>
                    <TrendChart
                        type="line"
                        data={FUNDING_TREND}
                        dataKey="amount"
                        xAxisKey="month"
                        color="var(--color-accent-primary)"
                        name="Capital ($M)"
                    />
                </div>
                <div className="glass-panel p-6">
                    <h3 className="font-bold text-white mb-4">Regional Deal Share</h3>
                    <TrendChart
                        type="bar"
                        data={REGIONAL_SPLIT}
                        dataKey="share"
                        xAxisKey="region"
                        color="#3b82f6"
                        name="Share (%)"
                    />
                </div>
            </div>

            {/* Recent Reports */}
            <div className="glass-panel">
                <div className="p-6 border-b border-[var(--color-border)] flex justify-between items-center">
                    <h3 className="font-bold text-white">Recent Market Reports</h3>
                    <button className="text-sm text-[var(--color-accent-primary)] hover:text-emerald-400">View All</button>
                </div>
                <div className="divide-y divide-[var(--color-border)]">
                    {REPORTS.map((report) => (
                        <div key={report.id} className="p-4 flex items-center justify-between hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[var(--color-text-secondary)]">
                                    <Activity size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">{report.title}</h4>
                                    <p className="text-xs text-[var(--color-text-secondary)]">{report.date} • {report.size}</p>
                                </div>
                            </div>
                            <button className="p-2 text-[var(--color-text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.05)] rounded-lg transition-colors">
                                <Download size={18} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
