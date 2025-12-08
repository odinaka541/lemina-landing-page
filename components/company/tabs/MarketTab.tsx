'use client';

import { Globe, Users, PieChart, BarChart3 } from 'lucide-react';

export default function MarketTab() {
    return (
        <div className="space-y-8">

            {/* Market Sizing */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="glass-panel p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                            <Globe size={20} />
                        </div>
                        <span className="text-sm text-[var(--color-text-secondary)]">TAM (Serviceable Market)</span>
                    </div>
                    <div className="text-2xl font-bold text-[var(--color-text-primary)]">$40B+</div>
                    <p className="text-xs text-[var(--color-text-secondary)] mt-1">Digital payments volume in key African markets (NG, KE, ZA, GH).</p>
                </div>
                <div className="glass-panel p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                            <Users size={20} />
                        </div>
                        <span className="text-sm text-[var(--color-text-secondary)]">Target Customer Base</span>
                    </div>
                    <div className="text-2xl font-bold text-[var(--color-text-primary)]">40M+</div>
                    <p className="text-xs text-[var(--color-text-secondary)] mt-1">MSME businesses in Nigeria alone.</p>
                </div>
                <div className="glass-panel p-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
                            <PieChart size={20} />
                        </div>
                        <span className="text-sm text-[var(--color-text-secondary)]">CAGR</span>
                    </div>
                    <div className="text-2xl font-bold text-[var(--color-text-primary)]">35%</div>
                    <p className="text-xs text-[var(--color-text-secondary)] mt-1">Projected annual growth of electronic payments in Africa.</p>
                </div>
            </section>

            {/* Competitive Landscape */}
            <section className="glass-panel p-6">
                <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
                    <BarChart3 className="text-[var(--color-accent-primary)]" size={20} />
                    Competitive Landscape
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">
                                <th className="pb-3 font-medium">Competitor</th>
                                <th className="pb-3 font-medium">Type</th>
                                <th className="pb-3 font-medium">Focus</th>
                                <th className="pb-3 font-medium">Key Differentiator</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            <tr className="border-b border-[var(--color-border)]">
                                <td className="py-4 text-[var(--color-text-primary)] font-medium">Flutterwave</td>
                                <td className="py-4 text-[var(--color-text-secondary)]">Direct Competitor</td>
                                <td className="py-4 text-[var(--color-text-secondary)]">Enterprise / Cross-border</td>
                                <td className="py-4 text-[var(--color-text-secondary)]">Global reach, remittance focus.</td>
                            </tr>
                            <tr className="border-b border-[var(--color-border)]">
                                <td className="py-4 text-[var(--color-text-primary)] font-medium">Interswitch</td>
                                <td className="py-4 text-[var(--color-text-secondary)]">Incumbent</td>
                                <td className="py-4 text-[var(--color-text-secondary)]">Corporate / Gov / ATM</td>
                                <td className="py-4 text-[var(--color-text-secondary)]">Deep infrastructure ownership.</td>
                            </tr>
                            <tr className="border-b border-[var(--color-border)]">
                                <td className="py-4 text-[var(--color-text-primary)] font-medium">Remita</td>
                                <td className="py-4 text-[var(--color-text-secondary)]">Incumbent</td>
                                <td className="py-4 text-[var(--color-text-secondary)]">Gov / Salary</td>
                                <td className="py-4 text-[var(--color-text-secondary)]">TSA (Treasury Single Account) monopoly.</td>
                            </tr>
                            <tr>
                                <td className="py-4 text-[var(--color-text-primary)] font-medium">Monnify</td>
                                <td className="py-4 text-[var(--color-text-secondary)]">Challenger</td>
                                <td className="py-4 text-[var(--color-text-secondary)]">Account-based payments</td>
                                <td className="py-4 text-[var(--color-text-secondary)]">Lower fees for bank transfers.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
