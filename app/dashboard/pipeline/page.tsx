'use client';

import Link from 'next/link';
import { MoreHorizontal, ArrowRight, Plus } from 'lucide-react';
import ConfidenceBadge, { ConfidenceTier } from '@/components/company/ConfidenceBadge';

// Mock Data
const pipeline = [
    {
        id: '1',
        name: 'Paystack',
        sector: 'Fintech',
        stage: 'Interested',
        funding: '$200M',
        lastActivity: 'Added 2 days ago',
        metrics: { revenue: '$8.5M', tier: 4, score: 92 }
    },
    {
        id: '2',
        name: 'Flutterwave',
        sector: 'Fintech',
        stage: 'Researching',
        funding: '$475M',
        lastActivity: 'Viewed yesterday',
        metrics: { revenue: '$12M', tier: 3, score: 75 }
    },
    {
        id: '3',
        name: 'Kuda',
        sector: 'Neobank',
        stage: 'Evaluating',
        funding: '$91M',
        lastActivity: 'Note added 5 days ago',
        metrics: { revenue: '$4.2M', tier: 2, score: 60 }
    },
    {
        id: '4',
        name: 'OPay',
        sector: 'Fintech',
        stage: 'Due Diligence',
        funding: '$570M',
        lastActivity: 'Report generated 1 week ago',
        metrics: { revenue: '$35M', tier: 4, score: 90 }
    },
];

const stages = ['Interested', 'Researching', 'Evaluating', 'Due Diligence', 'Invested'];

export default function PipelinePage() {
    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-white">My Pipeline</h1>
                <button className="btn btn-primary gap-2">
                    <Plus size={18} /> Add Company
                </button>
            </div>

            {/* Pipeline Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {stages.map((stage) => (
                    <div key={stage} className="glass-panel p-4 text-center">
                        <div className="text-2xl font-bold text-white mb-1">
                            {pipeline.filter(c => c.stage === stage).length}
                        </div>
                        <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">{stage}</div>
                    </div>
                ))}
            </div>

            {/* List View */}
            <div className="glass-panel overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[rgba(255,255,255,0.03)] border-b border-[var(--color-border)]">
                            <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Company</th>
                            <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Stage</th>
                            <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Funding</th>
                            <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Revenue</th>
                            <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Last Activity</th>
                            <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pipeline.map((company) => (
                            <tr key={company.id} className="border-b border-[var(--color-border)] last:border-0 hover:bg-[rgba(255,255,255,0.02)] transition-colors group">
                                <td className="p-4">
                                    <Link href={`/dashboard/companies/${company.id}`} className="font-medium text-white hover:text-[var(--color-accent-primary)] transition-colors">
                                        {company.name}
                                    </Link>
                                    <div className="text-xs text-[var(--color-text-secondary)]">{company.sector}</div>
                                </td>
                                <td className="p-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[rgba(255,255,255,0.1)] text-white border border-[rgba(255,255,255,0.1)]">
                                        {company.stage}
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-[var(--color-text-secondary)]">{company.funding}</td>
                                <td className="p-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-mono text-white">{company.metrics.revenue}</span>
                                        <ConfidenceBadge
                                            tier={company.metrics.tier as ConfidenceTier}
                                            score={company.metrics.score}
                                            showLabel={false}
                                        />
                                    </div>
                                </td>
                                <td className="p-4 text-sm text-[var(--color-text-secondary)]">{company.lastActivity}</td>
                                <td className="p-4 text-right">
                                    <button className="p-2 text-[var(--color-text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.05)] rounded-lg transition-colors">
                                        <MoreHorizontal size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
