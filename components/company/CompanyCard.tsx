'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ConfidenceBadge, { ConfidenceTier } from './ConfidenceBadge';

interface CompanyMetric {
    label: string;
    value: string;
    tier: ConfidenceTier;
    score: number;
}

interface CompanyCardProps {
    id: string;
    name: string;
    description: string;
    logo?: string;
    location: string;
    employees: number;
    funding: string;
    lastUpdated: string;
    metrics: {
        revenue: CompanyMetric;
        users: CompanyMetric;
        valuation?: CompanyMetric;
    };
    isSaved?: boolean;
}

export default function CompanyCard({
    id,
    name,
    description,
    logo,
    location,
    employees,
    funding,
    lastUpdated,
    metrics,
    isSaved = false
}: CompanyCardProps) {
    // Map props to a list of metrics for the grid
    const displayMetrics = [
        { label: "Location", value: location },
        { label: "Team Size", value: employees.toString() },
        { label: metrics.revenue.label, value: metrics.revenue.value, tier: metrics.revenue.tier, score: metrics.revenue.score },
        { label: metrics.users.label, value: metrics.users.value, tier: metrics.users.tier, score: metrics.users.score },
        ...(metrics.valuation ? [{ label: metrics.valuation.label, value: metrics.valuation.value, tier: metrics.valuation.tier, score: metrics.valuation.score }] : []),
        { label: "Last Updated", value: lastUpdated },
    ];

    return (
        <div className="glass-panel p-4 relative overflow-hidden group hover:border-[var(--color-accent-primary)]/30 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6">
                {/* Left Column */}
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            {/* Placeholder Logo if no logo prop, or use name initial */}
                            <div className="w-8 h-8 bg-[var(--color-bg-secondary)] rounded-lg flex items-center justify-center text-lg">
                                {logo ? <img src={logo} alt={name} className="w-5 h-5" /> : "🟠"}
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-white leading-none mb-1">{name}</h2>
                                <span className="inline-block text-[10px] font-medium text-[var(--color-accent-primary)] bg-[rgba(16,185,129,0.1)] px-2 py-0.5 rounded-full">
                                    {funding}
                                </span>
                            </div>
                        </div>
                        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4 line-clamp-3">
                            {description}
                        </p>
                    </div>
                    <Link href={`/dashboard/companies/${id}`} className="w-full py-2 px-3 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-[var(--color-border)] rounded-lg text-xs font-medium text-white text-center transition-colors flex items-center justify-center gap-1.5 group/btn">
                        Request Full Profile
                        <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                </div>

                {/* Right Column - Metrics Grid */}
                <div className="grid grid-cols-2 gap-2">
                    {displayMetrics.map((metric, index) => (
                        <div key={index} className="bg-[rgba(255,255,255,0.02)] p-2.5 rounded-lg border border-[rgba(255,255,255,0.05)] flex flex-col justify-center">
                            <div className="text-[9px] uppercase tracking-wider text-[var(--color-text-secondary)] mb-0.5">
                                {metric.label}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="text-xs font-medium text-white">{metric.value}</span>
                                {(metric as any).tier && (
                                    <ConfidenceBadge tier={(metric as any).tier} score={(metric as any).score} showLabel={false} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
