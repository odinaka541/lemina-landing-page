'use client';

import { Target, Clock, DollarSign, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ConfidenceBadge, { ConfidenceTier } from '@/components/company/ConfidenceBadge';

// Mock Data
const ACTIVE_DEALS = [
    {
        id: 1,
        company: 'Paystack',
        logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Paystack',
        description: 'Modern payments for Africa.',
        allocation: '$200,000',
        committed: '$150,000',
        minTicket: '$5,000',
        closingDate: '5 days left',
        tier: ConfidenceTier.CACVerified,
        score: 98
    },
    {
        id: 2,
        company: 'Flutterwave',
        logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Flutterwave',
        description: 'Payments infrastructure for the internet.',
        allocation: '$500,000',
        committed: '$120,000',
        minTicket: '$10,000',
        closingDate: '12 days left',
        tier: ConfidenceTier.DirectVerified,
        score: 92
    }
];

export default function SyndicateDealsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Syndicate Deal Flow</h1>
                <p className="text-[var(--color-text-secondary)]">Review and commit to deals shared with your syndicate.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ACTIVE_DEALS.map((deal) => {
                    const progress = (parseInt(deal.committed.replace(/\D/g, '')) / parseInt(deal.allocation.replace(/\D/g, ''))) * 100;

                    return (
                        <div key={deal.id} className="glass-panel p-6 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center">
                                        <img src={deal.logo} alt={deal.company} className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{deal.company}</h3>
                                        <ConfidenceBadge tier={deal.tier} score={deal.score} showLabel={false} className="mt-1 scale-90 origin-left" />
                                    </div>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-[rgba(245,158,11,0.1)] text-amber-500 text-xs font-medium flex items-center gap-1 border border-amber-500/20">
                                    <Clock size={12} /> {deal.closingDate}
                                </span>
                            </div>

                            <p className="text-[var(--color-text-secondary)] mb-6 flex-1">
                                {deal.description}
                            </p>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-[var(--color-text-secondary)]">Allocation</span>
                                    <span className="text-white font-mono">{deal.allocation}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-[var(--color-text-secondary)]">Min Ticket</span>
                                    <span className="text-white font-mono">{deal.minTicket}</span>
                                </div>

                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="text-[var(--color-text-secondary)]">Committed: {deal.committed}</span>
                                        <span className="text-white">{Math.round(progress)}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-[var(--color-accent-primary)] rounded-full transition-all duration-500"
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-auto">
                                <button className="flex-1 btn btn-secondary">Pass</button>
                                <Link href={`/dashboard/deals/${deal.id}`} className="flex-1 btn btn-primary flex items-center justify-center gap-2">
                                    View Deal <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
