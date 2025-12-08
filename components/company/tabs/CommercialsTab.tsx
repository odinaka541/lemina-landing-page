'use client';

import { DollarSign, TrendingUp, Briefcase } from 'lucide-react';

export default function CommercialsTab() {
    return (
        <div className="space-y-8">

            {/* Top Level Metrics */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-[rgba(255,255,255,0.02)] border border-[var(--color-border)] rounded-2xl p-6">
                    <span className="text-sm text-[var(--color-text-secondary)] block mb-1">Total Processed Vol (TPV)</span>
                    <div className="text-2xl font-bold text-white">$1B+ <span className="text-xs font-normal text-[var(--color-text-secondary)]">/ mo</span></div>
                </div>
                <div className="bg-[rgba(255,255,255,0.02)] border border-[var(--color-border)] rounded-2xl p-6">
                    <span className="text-sm text-[var(--color-text-secondary)] block mb-1">Active Merchants</span>
                    <div className="text-2xl font-bold text-white">60,000+</div>
                </div>
                <div className="bg-[rgba(255,255,255,0.02)] border border-[var(--color-border)] rounded-2xl p-6">
                    <span className="text-sm text-[var(--color-text-secondary)] block mb-1">Take Rate</span>
                    <div className="text-2xl font-bold text-white">1.5%</div>
                </div>
                <div className="bg-[rgba(255,255,255,0.02)] border border-[var(--color-border)] rounded-2xl p-6">
                    <span className="text-sm text-[var(--color-text-secondary)] block mb-1">Success Rate</span>
                    <div className="text-2xl font-bold text-white">~94%</div>
                </div>
            </section>

            {/* Revenue & Unit Economics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <section className="bg-[rgba(255,255,255,0.02)] border border-[var(--color-border)] rounded-2xl p-6">
                    <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <DollarSign className="text-emerald-500" size={20} />
                        Funding History
                    </h2>
                    <div className="relative border-l border-[rgba(255,255,255,0.1)] ml-3 space-y-8 pb-4">
                        {/* Event 1 */}
                        <div className="pl-6 relative">
                            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-emerald-500 box-content border-4 border-[#030712]" />
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                                <span className="text-lg font-bold text-white">Acquisition ($200M+)</span>
                                <span className="text-xs text-[var(--color-text-secondary)]">Oct 2020</span>
                            </div>
                            <p className="text-sm text-[var(--color-text-secondary)] mt-1">Acquired by Stripe. Largest tech exit in Nigeria at the time.</p>
                        </div>
                        {/* Event 2 */}
                        <div className="pl-6 relative">
                            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[var(--color-accent-primary)] box-content border-4 border-[#030712]" />
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                                <span className="text-lg font-bold text-white">Series A ($8M)</span>
                                <span className="text-xs text-[var(--color-text-secondary)]">Aug 2018</span>
                            </div>
                            <p className="text-sm text-[var(--color-text-secondary)] mt-1">Led by Stripe. First Stripe investment in Africa.</p>
                        </div>
                        {/* Event 3 */}
                        <div className="pl-6 relative">
                            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-500 box-content border-4 border-[#030712]" />
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                                <span className="text-lg font-bold text-white">Seed ($1.3M)</span>
                                <span className="text-xs text-[var(--color-text-secondary)]">Dec 2016</span>
                            </div>
                            <p className="text-sm text-[var(--color-text-secondary)] mt-1">Tencent, Comcast Ventures, Singularity.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-[rgba(255,255,255,0.02)] border border-[var(--color-border)] rounded-2xl p-6">
                    <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <TrendingUp className="text-blue-500" size={20} />
                        Unit Economics
                    </h2>
                    <ul className="space-y-4">
                        <li className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.05)]">
                            <span className="text-sm text-[var(--color-text-secondary)]">Customer Acquisition Cost (CAC)</span>
                            <span className="text-sm font-medium text-white">~$50 (Blend)</span>
                        </li>
                        <li className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.05)]">
                            <span className="text-sm text-[var(--color-text-secondary)]">Lifetime Value (LTV)</span>
                            <span className="text-sm font-medium text-white">&gt;$2,500</span>
                        </li>
                        <li className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.05)]">
                            <span className="text-sm text-[var(--color-text-secondary)]">LTV:CAC Ratio</span>
                            <span className="text-sm font-medium text-emerald-400">~50:1</span>
                        </li>
                        <li className="flex justify-between items-center py-2 border-b border-[rgba(255,255,255,0.05)]">
                            <span className="text-sm text-[var(--color-text-secondary)]">Gross Margin</span>
                            <span className="text-sm font-medium text-white">~65%</span>
                        </li>
                    </ul>
                </section>
            </div>

        </div>
    );
}
