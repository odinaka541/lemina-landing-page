'use client';

import { ExternalLink, CalendarDays } from 'lucide-react';

const NEWS_ITEMS = [
    {
        id: 1,
        title: "Stripe acquires Nigeria’s Paystack for $200M+ to expand into the African continent",
        source: "TechCrunch",
        date: "Oct 15, 2020",
        summary: "Stripe has acquired Paystack, a technology company based in Lagos that makes it easy for organizations of all sizes to collect payments from around the world.",
        url: "#"
    },
    {
        id: 2,
        title: "Paystack expands to South Africa, its third market on the continent",
        source: "Disrupt Africa",
        date: "May 6, 2021",
        summary: "After a successful pilot phase, Paystack has officially launched in South Africa, bringing its seamless payment services to one of the continent's largest economies.",
        url: "#"
    },
    {
        id: 3,
        title: "Paystack receives PSP licence from Central Bank of Kenya",
        source: "TechCabal",
        date: "Nov 12, 2022",
        summary: "Paystack has secured a Payment Service Provider license from the Central Bank of Kenya, enabling it to process payments for Kenyan businesses.",
        url: "#"
    }
];

export default function NewsTab() {
    return (
        <div className="space-y-6">
            <h2 className="text-lg font-bold text-white mb-4">Recent Coverage</h2>
            <div className="grid grid-cols-1 gap-4">
                {NEWS_ITEMS.map((item) => (
                    <a
                        key={item.id}
                        href={item.url}
                        className="block bg-[rgba(255,255,255,0.02)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-accent-primary)] hover:bg-[rgba(255,255,255,0.04)] transition-all group"
                    >
                        <div className="flex justify-between items-start">
                            <div className="flex-1 pr-8">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[rgba(255,255,255,0.1)] text-[var(--color-text-secondary)] uppercase tracking-wide">
                                        {item.source}
                                    </span>
                                    <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)]">
                                        <CalendarDays size={12} />
                                        {item.date}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--color-accent-primary)] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">
                                    {item.summary}
                                </p>
                            </div>
                            <div className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent-primary)] transition-colors">
                                <ExternalLink size={20} />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
