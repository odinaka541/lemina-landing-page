'use client';

import { Users, Scale, FileCheck, Shield, Award } from 'lucide-react';

export default function TeamLegalTab() {
    return (
        <div className="grid grid-cols-12 gap-6">

            {/* Founding Team Block - 8 Cols */}
            <div className="col-span-12 lg:col-span-8">
                <section className="glass-panel p-6 h-full">
                    <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
                        <Users className="text-[var(--color-accent-primary)]" size={20} />
                        Founding Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Founder 1 */}
                        <div className="bg-[var(--input-bg)] rounded-xl p-6 flex flex-col items-center text-center border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] transition-colors group">
                            <div className="w-20 h-20 rounded-full bg-[var(--color-bg-secondary)] mb-4 flex items-center justify-center text-xl font-bold text-[var(--color-text-secondary)] border border-[var(--color-border)] group-hover:border-[var(--color-accent-primary)] transition-colors">
                                SA
                            </div>
                            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Shola Akinlade</h3>
                            <span className="text-[var(--color-accent-primary)] text-sm font-medium mb-3">Co-founder & CEO</span>
                            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                                Ex-Precurio. Software Engineer. YC Alumnus. drove the company's expansion into 3 new markets.
                            </p>
                        </div>

                        {/* Founder 2 */}
                        <div className="bg-[var(--input-bg)] rounded-xl p-6 flex flex-col items-center text-center border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] transition-colors group">
                            <div className="w-20 h-20 rounded-full bg-[var(--color-bg-secondary)] mb-4 flex items-center justify-center text-xl font-bold text-[var(--color-text-secondary)] border border-[var(--color-border)] group-hover:border-[var(--color-accent-primary)] transition-colors">
                                EO
                            </div>
                            <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Ezra Olubi</h3>
                            <span className="text-[var(--color-accent-primary)] text-sm font-medium mb-3">Co-founder & CTO</span>
                            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                                Software Architect. Ex-Jobberman. YC Alumnus. Architected the core payments engine.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Legal & Compliance Block - 4 Cols */}
            <div className="col-span-12 lg:col-span-4">
                <section className="glass-panel p-6 h-full">
                    <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
                        <Shield className="text-emerald-500" size={20} />
                        Legal & Compliance
                    </h2>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-[var(--input-bg)] rounded-lg border border-[var(--color-border)]">
                            <div className="flex items-center gap-3">
                                <Award size={16} className="text-[var(--color-text-secondary)]" />
                                <span className="text-sm text-[var(--color-text-primary)]">CBN PSSP License</span>
                            </div>
                            <FileCheck size={16} className="text-emerald-500" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-[var(--input-bg)] rounded-lg border border-[var(--color-border)]">
                            <div className="flex items-center gap-3">
                                <Shield size={16} className="text-[var(--color-text-secondary)]" />
                                <span className="text-sm text-[var(--color-text-primary)]">PCI-DSS Level 1</span>
                            </div>
                            <FileCheck size={16} className="text-emerald-500" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-[var(--input-bg)] rounded-lg border border-[var(--color-border)]">
                            <div className="flex items-center gap-3">
                                <Scale size={16} className="text-[var(--color-text-secondary)]" />
                                <span className="text-sm text-[var(--color-text-primary)]">CAC Incorporation</span>
                            </div>
                            <FileCheck size={16} className="text-emerald-500" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-[var(--input-bg)] rounded-lg border border-[var(--color-border)]">
                            <div className="flex items-center gap-3">
                                <Shield size={16} className="text-[var(--color-text-secondary)]" />
                                <span className="text-sm text-[var(--color-text-primary)]">Data Protection (NDPR)</span>
                            </div>
                            <FileCheck size={16} className="text-emerald-500" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
