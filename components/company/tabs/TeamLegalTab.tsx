'use client';

import { Linkedin, Twitter, FileText, CheckCircle, ShieldCheck } from 'lucide-react';

export default function TeamLegalTab() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Team Section */}
            <div className="lg:col-span-2 space-y-8">
                <section>
                    <h2 className="text-lg font-bold text-white mb-6">Founding Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Shola */}
                        <div className="bg-[rgba(255,255,255,0.02)] border border-[var(--color-border)] rounded-2xl p-6 flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full bg-gray-700 mb-4 overflow-hidden">
                                {/* Placeholder for avatar */}
                            </div>
                            <h3 className="text-lg font-bold text-white">Shola Akinlade</h3>
                            <p className="text-sm text-[var(--color-accent-primary)] mb-2">Co-founder & CEO</p>
                            <p className="text-xs text-[var(--color-text-secondary)] mb-4">
                                Ex-Precurio. Software Engineer. YC Alumnus.
                            </p>
                            <div className="flex gap-3">
                                <button className="text-[var(--color-text-secondary)] hover:text-white transition-colors">
                                    <Linkedin size={16} />
                                </button>
                                <button className="text-[var(--color-text-secondary)] hover:text-white transition-colors">
                                    <Twitter size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Ezra */}
                        <div className="bg-[rgba(255,255,255,0.02)] border border-[var(--color-border)] rounded-2xl p-6 flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full bg-gray-700 mb-4 overflow-hidden">
                                {/* Placeholder for avatar */}
                            </div>
                            <h3 className="text-lg font-bold text-white">Ezra Olubi</h3>
                            <p className="text-sm text-[var(--color-accent-primary)] mb-2">Co-founder & CTO</p>
                            <p className="text-xs text-[var(--color-text-secondary)] mb-4">
                                Software Architect. Ex-Jobberman. YC Alumnus.
                            </p>
                            <div className="flex gap-3">
                                <button className="text-[var(--color-text-secondary)] hover:text-white transition-colors">
                                    <Linkedin size={16} />
                                </button>
                                <button className="text-[var(--color-text-secondary)] hover:text-white transition-colors">
                                    <Twitter size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-white mb-4">Cap Table Summary (Pre-Acquisition)</h2>
                    <div className="bg-[rgba(255,255,255,0.02)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-[rgba(255,255,255,0.03)] border-b border-[var(--color-border)]">
                                <tr>
                                    <th className="py-3 px-4 font-medium text-[var(--color-text-secondary)]">Shareholder</th>
                                    <th className="py-3 px-4 font-medium text-[var(--color-text-secondary)]">Role</th>
                                    <th className="py-3 px-4 font-medium text-[var(--color-text-secondary)] text-right">Equity %</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[rgba(255,255,255,0.05)]">
                                <tr>
                                    <td className="py-3 px-4 text-white">Founders</td>
                                    <td className="py-3 px-4 text-[var(--color-text-secondary)]">Management</td>
                                    <td className="py-3 px-4 text-white text-right">35%</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 text-white">Stripe</td>
                                    <td className="py-3 px-4 text-[var(--color-text-secondary)]">Strategic Investor</td>
                                    <td className="py-3 px-4 text-white text-right">Series A Lead</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 text-white">Visa</td>
                                    <td className="py-3 px-4 text-[var(--color-text-secondary)]">Strategic Investor</td>
                                    <td className="py-3 px-4 text-white text-right">Series A</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 text-white">YC & Early Angels</td>
                                    <td className="py-3 px-4 text-[var(--color-text-secondary)]">Seed Investors</td>
                                    <td className="py-3 px-4 text-white text-right">Mixed</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 text-white">ESOP Pool</td>
                                    <td className="py-3 px-4 text-[var(--color-text-secondary)]">Employees</td>
                                    <td className="py-3 px-4 text-white text-right">10%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>

            {/* Compliance Sidebar */}
            <div className="space-y-6">
                <div className="bg-[rgba(255,255,255,0.02)] border border-[var(--color-border)] rounded-2xl p-6">
                    <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                        <ShieldCheck className="text-emerald-500" size={18} />
                        Legal & Compliance
                    </h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-[rgba(255,255,255,0.03)] rounded-lg border border-[var(--color-border)]">
                            <div className="flex items-center gap-2">
                                <FileText size={16} className="text-[var(--color-accent-primary)]" />
                                <span className="text-sm text-white">CBN PSSP License</span>
                            </div>
                            <CheckCircle size={14} className="text-emerald-500" />
                        </div>
                        <div className="flex justify-between items-center p-3 bg-[rgba(255,255,255,0.03)] rounded-lg border border-[var(--color-border)]">
                            <div className="flex items-center gap-2">
                                <FileText size={16} className="text-[var(--color-accent-primary)]" />
                                <span className="text-sm text-white">PCI-DSS Level 1</span>
                            </div>
                            <CheckCircle size={14} className="text-emerald-500" />
                        </div>
                        <div className="flex justify-between items-center p-3 bg-[rgba(255,255,255,0.03)] rounded-lg border border-[var(--color-border)]">
                            <div className="flex items-center gap-2">
                                <FileText size={16} className="text-[var(--color-accent-primary)]" />
                                <span className="text-sm text-white">CAC Incorporation</span>
                            </div>
                            <CheckCircle size={14} className="text-emerald-500" />
                        </div>
                        <div className="flex justify-between items-center p-3 bg-[rgba(255,255,255,0.03)] rounded-lg border border-[var(--color-border)]">
                            <div className="flex items-center gap-2">
                                <FileText size={16} className="text-[var(--color-accent-primary)]" />
                                <span className="text-sm text-white">Data Protection (NDPR)</span>
                            </div>
                            <CheckCircle size={14} className="text-emerald-500" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
