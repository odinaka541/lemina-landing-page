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
        <div className="glass-panel p-3 relative overflow-hidden group hover:border-[var(--color-accent-primary)]/30 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-3">
                {/* Left Column */}
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            {/* Placeholder Logo if no logo prop, or use name initial */}
                            <div className="w-7 h-7 bg-[var(--color-bg-secondary)] rounded-lg flex items-center justify-center text-base">
                                {logo ? <img src={logo} alt={name} className="w-4 h-4" /> : "🟠"}
                            </div>
                            <div className="min-w-0">
                                <h2 className="text-base font-bold text-[var(--color-text-primary)] leading-none mb-1 truncate">{name}</h2>
                                <span className="inline-block text-[9px] font-medium text-[var(--color-accent-primary)] bg-[rgba(16,185,129,0.1)] px-1.5 py-0.5 rounded-full">
                                    {funding}
                                </span>
                            </div>
                        </div>
                        <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed mb-3 line-clamp-2">
                            {description}
                        </p>
                    </div>
                    <Link href={`/dashboard/companies/${id}`} className="w-full py-1.5 px-3 bg-[var(--input-bg)] hover:bg-[var(--glass-border-color)] border border-[var(--color-border)] rounded-lg text-[11px] font-medium text-[var(--color-text-primary)] text-center transition-colors flex items-center justify-center gap-1.5 group/btn">
                        Request Full Profile
                        <ArrowRight size={12} className="transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                </div>

                {/* Right Column - Metrics Grid */}
                <div className="grid grid-cols-2 gap-1.5">
                    {displayMetrics.map((metric, index) => (
                        <div key={index} className="bg-[rgba(255,255,255,0.02)] p-2 rounded-lg border border-[rgba(255,255,255,0.05)] flex flex-col justify-center min-h-[42px]">
                            <div className="text-[8px] uppercase tracking-wider text-[var(--color-text-secondary)] mb-0.5 truncate">
                                {metric.label}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="text-[11px] font-medium text-[var(--color-text-primary)] truncate">{metric.value}</span>
                                {(metric as any).tier && (
                                    <ConfidenceBadge tier={(metric as any).tier} score={(metric as any).score} showLabel={false} className="scale-75 origin-left" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
