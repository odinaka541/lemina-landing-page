'use client';

import { Shield, ShieldCheck, ShieldAlert, Info } from 'lucide-react';

export enum ConfidenceTier {
    Unknown = 0,
    SelfReported = 1,
    NewsSource = 2,
    ThirdParty = 3,
    DirectVerified = 4,
    CACVerified = 5,
    // Aliases for easier usage
    Low = 1,
    Medium = 3,
    High = 5
}

interface ConfidenceBadgeProps {
    tier: ConfidenceTier;
    score: number;
    source?: string;
    showLabel?: boolean;
    className?: string;
}

const tierConfig: Record<number, { color: string; label: string; icon: any }> = {
    5: { color: 'var(--color-tier-5)', label: 'CAC Verified', icon: ShieldCheck },
    4: { color: 'var(--color-tier-4)', label: 'Direct Verified', icon: ShieldCheck },
    3: { color: 'var(--color-tier-3)', label: '3rd Party', icon: Shield },
    2: { color: 'var(--color-tier-2)', label: 'News Source', icon: Info },
    1: { color: 'var(--color-tier-1)', label: 'Self Reported', icon: Info },
    0: { color: 'var(--color-tier-0)', label: 'Unknown', icon: ShieldAlert },
};

export default function ConfidenceBadge({
    tier,
    score,
    source,
    showLabel = true,
    className = ''
}: ConfidenceBadgeProps) {
    const config = tierConfig[tier];

    return (
        <div
            className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[11px] font-medium transition-all cursor-help group ${className}`}
            style={{
                borderColor: config.color,
                backgroundColor: `color-mix(in srgb, ${config.color}, transparent 90%)`,
                color: config.color
            }}
            title={`Confidence Score: ${score}/100\nSource: ${source || 'Unknown'}`}
        >
            <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: config.color }}
            />
            <span className="font-mono">{score}</span>
            {showLabel && (
                <span className="opacity-90 hidden sm:inline-block">
                    {config.label}
                </span>
            )}

            {/* Tooltip (Custom implementation for better control) */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 text-xs text-white hidden group-hover:block">
                <div className="font-bold mb-1" style={{ color: config.color }}>
                    Tier {tier}: {config.label}
                </div>
                <div className="text-[var(--color-text-secondary)]">
                    Score: {score}/100
                </div>
                {source && (
                    <div className="text-[var(--color-text-secondary)] mt-1 border-t border-[var(--color-border)] pt-1">
                        Source: {source}
                    </div>
                )}
            </div>
        </div>
    );
}
