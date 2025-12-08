'use client';

import { CheckCircle2, AlertCircle, TrendingUp, Lightbulb, Target, ArrowUpRight } from 'lucide-react';

export default function OverviewTab() {
    return (
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
            {/* 1. About Section */}
            <section className="glass-panel p-6">
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-lg font-bold text-[var(--color-text-primary)] flex items-center gap-2">
                        <Target className="text-[var(--color-accent-primary)]" size={20} />
                        About
                    </h2>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Strong Buy
                    </span>
                </div>
                <div className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                    <p>
                        Paystack is a technology company solving payments problems for ambitious businesses in Africa. Its mission is to help businesses in Africa become profitable, envied, and loved. Paystack builds technology to help the best businesses grow - from new startups, to market leaders launching new business models, to global companies attempting to reach the African audience. They provide a unified API that allows businesses to accept payments via credit card, debit card, money transfer, and mobile money on their websites or mobile apps.
                    </p>
                </div>
            </section>

            {/* 2. Traction & Honest Signals */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="glass-panel p-5 flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                        <TrendingUp size={48} />
                    </div>
                    <div>
                        <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider font-semibold mb-1">Growth</p>
                        <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">15% MoM</h3>
                    </div>
                    <div className="mt-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-100 text-emerald-700 border border-emerald-200">
                            Tier 1 Growth
                        </span>
                    </div>
                </div>
                <div className="glass-panel p-5 flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                        <CheckCircle2 size={48} />
                    </div>
                    <div>
                        <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider font-semibold mb-1">Market Share</p>
                        <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">50%+</h3>
                    </div>
                    <div className="mt-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-purple-100 text-purple-700 border border-purple-200">
                            Dominant Player
                        </span>
                    </div>
                </div>
                <div className="glass-panel p-5 flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Lightbulb size={48} />
                    </div>
                    <div>
                        <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider font-semibold mb-1">Retention</p>
                        <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">120% NRR</h3>
                    </div>
                    <div className="mt-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-blue-700 border border-blue-200">
                            Best in Class
                        </span>
                    </div>
                </div>
            </section>

            {/* 3. Funding Snapshot */}
            <section className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 shadow-sm relative overflow-hidden">
                <div className="relative z-10 flex items-center justify-between">
                    <div>
                        <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wide mb-1">Funding Snapshot</h3>
                        <p className="text-2xl font-bold text-blue-950">Series A • <span className="text-lg font-medium opacity-80">$200M+ Exit</span></p>
                        <p className="text-xs text-blue-700 mt-1 max-w-lg">
                            Backed by Y Combinator, Stripe, Visa, Tencent. Acquired by Stripe in 2020.
                        </p>
                    </div>
                    <div className="bg-white/50 backdrop-blur-sm p-3 rounded-lg border border-white/60">
                        <div className="text-xs font-medium text-blue-800 text-center leading-tight">
                            Total Raised<br />
                            <span className="text-lg font-bold">$10.3M</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Risks vs Signals */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* What makes it special */}
                <div className="glass-panel p-6 border-l-4 border-l-emerald-500">
                    <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                        <TrendingUp className="text-emerald-500" size={18} />
                        The Bull Case (Signals)
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex gap-2 text-sm text-[var(--color-text-secondary)]">
                            <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span>First-mover advantage in a massive, untapped market.</span>
                        </li>
                        <li className="flex gap-2 text-sm text-[var(--color-text-secondary)]">
                            <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span>Superior developer experience creates high switching costs.</span>
                        </li>
                        <li className="flex gap-2 text-sm text-[var(--color-text-secondary)]">
                            <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span>Deep integration with global platforms like Shopify & Wix.</span>
                        </li>
                    </ul>
                </div>

                {/* What could kill it */}
                <div className="glass-panel p-6 border-l-4 border-l-amber-500">
                    <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                        <AlertCircle className="text-amber-500" size={18} />
                        The Bear Case (Risks)
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex gap-2 text-sm text-[var(--color-text-secondary)]">
                            <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                            <span>Regulatory crackdowns by CBN could freeze operations / FX.</span>
                        </li>
                        <li className="flex gap-2 text-sm text-[var(--color-text-secondary)]">
                            <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                            <span>Intense margin pressure from new entrants like Flutterwave.</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* 5. Team Credibility */}
            <section className="glass-panel p-6">
                <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                    <Lightbulb className="text-indigo-500" size={20} />
                    Team Credibility
                </h2>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden shrink-0 border border-gray-300">
                            {/* Placeholder Avatar */}
                            <div className="w-full h-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">SA</div>
                        </div>
                        <div>
                            <h4 className="font-bold text-[var(--color-text-primary)]">Shola Akinlade</h4>
                            <p className="text-xs text-[var(--color-accent-primary)] font-medium mb-1">Co-founder & CEO</p>
                            <p className="text-xs text-[var(--color-text-secondary)] leading-snug">
                                Ex-Heineken. Experieced software engineer. Obsessed with payment primitives.
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:block w-px bg-[var(--color-border)] opacity-50"></div>
                    <div className="flex-1 flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden shrink-0 border border-gray-300">
                            <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">EO</div>
                        </div>
                        <div>
                            <h4 className="font-bold text-[var(--color-text-primary)]">Ezra Olubi</h4>
                            <p className="text-xs text-[var(--color-accent-primary)] font-medium mb-1">Co-founder & CTO</p>
                            <p className="text-xs text-[var(--color-text-secondary)] leading-snug">
                                Ex-Delivery Science. System architecture expert. Known for scaling high-load systems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
