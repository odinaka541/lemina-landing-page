'use client';

import Link from 'next/link';
import { Star, MoreHorizontal, ArrowRight, MapPin, Users, Wallet, Clock } from 'lucide-react';
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
    location,
    employees,
    funding,
    lastUpdated,
    metrics,
    isSaved = false
}: CompanyCardProps) {
    return (
        <div className="glass-panel p-5 flex flex-col h-full group hover:border-[var(--color-accent-primary)]/30 transition-all duration-300">
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
                <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[var(--color-accent-primary)] transition-colors">
                        {name}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] line-clamp-1 mt-0.5">
                        {description}
                    </p>
                </div>
                <div className="flex gap-1">
                    <button className="p-1.5 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] rounded-md hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                        <Star size={16} className={isSaved ? "fill-[var(--color-accent-primary)] text-[var(--color-accent-primary)]" : ""} />
                    </button>
                    <button className="p-1.5 text-[var(--color-text-secondary)] hover:text-white rounded-md hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                        <MoreHorizontal size={16} />
                    </button>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-3 mb-4 text-xs text-[var(--color-text-secondary)]">
                <div className="flex items-center gap-1">
                    <Wallet size={12} />
                    <span>{funding}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Users size={12} />
                    <span>{employees}</span>
                </div>
                <div className="flex items-center gap-1">
                    <MapPin size={12} />
                    <span>{location}</span>
                </div>
                <div className="flex items-center gap-1 ml-auto">
                    <Clock size={12} />
                    <span>{lastUpdated}</span>
                </div>
            </div>

            {/* Metrics Table */}
            <div className="space-y-2 mb-4 bg-[rgba(0,0,0,0.2)] rounded-lg p-3 border border-[var(--color-border)]">
                <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-[var(--color-text-secondary)]">Monthly Revenue</span>
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-mono font-semibold text-white">{metrics.revenue.value}</span>
                        <ConfidenceBadge tier={metrics.revenue.tier} score={metrics.revenue.score} showLabel={false} />
                    </div>
                </div>
                <div className="w-full h-px bg-[var(--color-border)] opacity-50"></div>
                <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-[var(--color-text-secondary)]">Total Users</span>
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-mono font-semibold text-white">{metrics.users.value}</span>
                        <ConfidenceBadge tier={metrics.users.tier} score={metrics.users.score} showLabel={false} />
                    </div>
                </div>
                {metrics.valuation && (
                    <>
                        <div className="w-full h-px bg-[var(--color-border)] opacity-50"></div>
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-medium text-[var(--color-text-secondary)]">Valuation</span>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-mono font-semibold text-white">{metrics.valuation.value}</span>
                                <ConfidenceBadge tier={metrics.valuation.tier} score={metrics.valuation.score} showLabel={false} />
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Footer */}
            <div className="mt-auto pt-2">
                <Link
                    href={`/dashboard/companies/${id}`}
                    className="inline-flex items-center text-sm font-medium text-[var(--color-accent-primary)] hover:text-white transition-colors group/link"
                >
                    View Full Profile
                    <ArrowRight size={16} className="ml-1 transition-transform group-hover/link:translate-x-1" />
                </Link>
            </div>
        </div>
    );
}
