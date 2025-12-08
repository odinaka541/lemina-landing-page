'use client';

import { CheckCircle2, AlertCircle, TrendingUp, Lightbulb, Target } from 'lucide-react';

export default function OverviewTab() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Left 2/3 */}
            <div className="lg:col-span-2 space-y-8">

                {/* Executive Summary */}
                <section className="bg-[rgba(255,255,255,0.02)] border border-[var(--color-border)] rounded-2xl p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Target className="text-[var(--color-accent-primary)]" size={20} />
                        Executive Summary
                    </h2>
                    <div className="space-y-4 text-[var(--color-text-secondary)] text-sm leading-relaxed">
                        <p>
                            <strong className="text-white">The Problem:</strong> Online payments in Africa are fragmented, unreliable, and difficult to integrate. Merchants struggle with high failure rates and multiple intermediaries.
                        </p>
                        <p>
                            <strong className="text-white">The Solution:</strong> Paystack builds modern payments infrastructure for Africa. They provide a unified API that allows businesses to accept payments via credit card, debit card, money transfer, and mobile money on their websites or mobile apps.
                        </p>
                        <p>
                            <strong className="text-white">Current Status:</strong> Acquired by Stripe for $200M+ (2020). Processing over 50% of all online transactions in Nigeria. Expanding rapidly into Ghana, South Africa, and Kenya.
                        </p>
                    </div>
                </section>

                {/* Product Highlights */}
                <section className="bg-[rgba(255,255,255,0.02)] border border-[var(--color-border)] rounded-2xl p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Lightbulb className="text-amber-500" size={20} />
                        Product & Technology
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-[rgba(255,255,255,0.03)] p-4 rounded-xl border border-[var(--color-border)]">
                            <h3 className="font-semibold text-white mb-2">Unified API</h3>
                            <p className="text-xs text-[var(--color-text-secondary)]">Single integration for Cards, Bank Accounts, GTB 737, Mobile Money, and Visa QR.</p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.03)] p-4 rounded-xl border border-[var(--color-border)]">
                            <h3 className="font-semibold text-white mb-2">Checkout Engine</h3>
                            <p className="text-xs text-[var(--color-text-secondary)]">Optimized for low-bandwidth environments. Smart routing to improve success rates.</p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.03)] p-4 rounded-xl border border-[var(--color-border)]">
                            <h3 className="font-semibold text-white mb-2">Detailed Analytics</h3>
                            <p className="text-xs text-[var(--color-text-secondary)]">Real-time insights into customer behavior, success rates, and payout reconciliation.</p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.03)] p-4 rounded-xl border border-[var(--color-border)]">
                            <h3 className="font-semibold text-white mb-2">Automated Disputes</h3>
                            <p className="text-xs text-[var(--color-text-secondary)]">Tools to manage and resolve chargebacks directly from the dashboard.</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Sidebar - Right 1/3 */}
            <div className="space-y-8">

                {/* Key Signals Card */}
                <div className="bg-[rgba(255,255,255,0.02)] border border-[var(--color-border)] rounded-2xl p-6">
                    <h3 className="font-semibold text-white mb-4">Investment Signals</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="mt-1">
                                <CheckCircle2 size={16} className="text-emerald-500" />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-white">Dominant Market Share</h4>
                                <p className="text-xs text-[var(--color-text-secondary)]">50%+ of online payments in Nigeria.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-1">
                                <TrendingUp size={16} className="text-blue-500" />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-white">Extremely Sticky</h4>
                                <p className="text-xs text-[var(--color-text-secondary)]">Negative net churn. Developers love it.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-1">
                                <CheckCircle2 size={16} className="text-emerald-500" />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-white">Strong Backing</h4>
                                <p className="text-xs text-[var(--color-text-secondary)]">YC, Stripe, Visa, Tencent.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Risk Factors */}
                <div className="bg-[rgba(255,255,255,0.02)] border border-[var(--color-border)] rounded-2xl p-6">
                    <h3 className="font-semibold text-white mb-4">Risk Assessment</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="mt-1">
                                <AlertCircle size={16} className="text-amber-500" />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-white">Regulatory Volatility</h4>
                                <p className="text-xs text-[var(--color-text-secondary)]">CBN policies can change abruptly affecting operations.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-1">
                                <AlertCircle size={16} className="text-amber-500" />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-white">Currency Fluctuation</h4>
                                <p className="text-xs text-[var(--color-text-secondary)]">Naira devaluation impacts USD revenue reporting.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
