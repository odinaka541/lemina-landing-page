'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Share2, Download, MessageSquare, Globe, MapPin, Calendar, Building2, Briefcase, Send } from 'lucide-react';

// Tab Components (Imports will be active once files are created)
import OverviewTab from '@/components/company/tabs/OverviewTab';
import MarketTab from '@/components/company/tabs/MarketTab';
import TeamLegalTab from '@/components/company/tabs/TeamLegalTab';
import CommercialsTab from '@/components/company/tabs/CommercialsTab';
import NewsTab from '@/components/company/tabs/NewsTab';

const TABS = [
    { id: 'overview', label: 'Overview' },
    { id: 'market', label: 'Market' },
    { id: 'team-legal', label: 'Team & Legal' },
    { id: 'commercials', label: 'Commercials & Financials' },
    { id: 'news', label: 'News' },
];

export default function CompanyPage() {
    const params = useParams();
    const [activeTab, setActiveTab] = useState('overview');

    // Mock header data (using Paystack for now)
    const company = {
        name: 'Paystack',
        description: 'Modern online and offline payments for Africa.',
        location: 'Lagos, Nigeria',
        founded: '2015',
        stage: 'Acquired',
        website: 'paystack.com',
        logo: null, // Placeholder
        tags: ['Fintech', 'B2B', 'Payments', 'Infrastructure'],
        lastUpdated: 'Dec 8, 2025'
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview': return <OverviewTab />;
            case 'market': return <MarketTab />;
            case 'team-legal': return <TeamLegalTab />;
            case 'commercials': return <CommercialsTab />;
            case 'news': return <NewsTab />;
            default: return <OverviewTab />;
        }
    };

    return (
        <div className="min-h-screen bg-transparent pb-32">
            {/* Header / Sticky Top */}
            <div className="sticky top-16 z-20 bg-[var(--card-bg)]/80 backdrop-blur-xl border-b border-[var(--color-border)]">
                <div className="container mx-auto px-4 py-4">
                    {/* Navigation Actions */}
                    <div className="flex items-center justify-between mb-4">
                        <Link href="/dashboard" className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors text-sm">
                            <ArrowLeft size={16} />
                            Back to Dashboard
                        </Link>
                        <div className="flex items-center gap-2">
                            <button className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] rounded-lg transition-colors">
                                <Share2 size={18} />
                            </button>
                            <button className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] rounded-lg transition-colors">
                                <Download size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Company Identity */}
                    <div className="flex items-start justify-between gap-6 mb-6">
                        <div className="flex gap-4">
                            <div className="w-16 h-16 rounded-xl bg-white shadow-sm border border-[var(--color-border)] flex items-center justify-center text-2xl font-bold text-gray-900 overflow-hidden relative">
                                {/* Placeholder Logo or Initial */}
                                P
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-[var(--color-text-primary)] mb-1">{company.name}</h1>
                                <p className="text-[var(--color-text-secondary)] text-sm mb-2 max-w-xl">{company.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {company.tags.map((tag, index) => (
                                        <span key={index} className="px-2 py-0.5 rounded text-[10px] font-medium bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 text-xs text-[var(--color-text-secondary)] mb-2">
                                    <div className="flex items-center gap-1.5">
                                        <MapPin size={12} />
                                        {company.location}
                                        {/* Flags */}
                                        <div className="flex items-center gap-1 ml-1">
                                            <img
                                                src="https://flagcdn.com/w20/ng.png"
                                                alt="Nigeria"
                                                className="w-4 h-3 object-cover rounded-[1px]"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={12} />
                                        Founded {company.founded}
                                    </div>
                                    <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[var(--color-accent-primary)] hover:underline">
                                        <Globe size={12} />
                                        {company.website}
                                    </a>
                                </div>
                                <div className="text-[10px] text-[var(--color-text-secondary)] opacity-60 mb-4">
                                    Last updated: {company.lastUpdated}
                                </div>

                                <div className="flex items-center gap-3">
                                    <button className="py-2 px-4 bg-[var(--color-accent-primary)] hover:bg-[var(--color-accent-secondary)] text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-emerald-900/20 flex items-center gap-2">
                                        <Briefcase size={16} />
                                        Add to Pipeline
                                    </button>
                                    <span className="px-3 py-1.5 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200 shadow-sm">
                                        {company.stage}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:block w-full max-w-sm">
                            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm h-full min-h-[140px] flex flex-col relative">
                                <div className="flex items-center justify-between mb-3">
                                    <label className="text-xs font-bold text-slate-700 flex items-center gap-2 uppercase tracking-wide">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                        Private Notes
                                    </label>
                                </div>
                                <div className="relative flex-1 group">
                                    <textarea
                                        className="w-full h-full min-h-[80px] bg-white border border-emerald-500 rounded-lg text-sm text-slate-700 placeholder-slate-400 resize-none focus:outline-none focus:ring-1 focus:ring-emerald-500 p-3 pr-10 leading-relaxed transition-all"
                                        placeholder=""
                                    />
                                    <button className="absolute bottom-2 right-2 p-1.5 bg-white text-emerald-600 border border-emerald-100 rounded hover:bg-emerald-50 hover:text-emerald-700 transition-all shadow-sm flex items-center justify-center">
                                        <Send size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="flex gap-1 overflow-x-auto no-scrollbar border-b border-[var(--color-border)] pb-1">
                        {TABS.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                                    px-4 py-2 text-sm font-medium rounded-t-lg whitespace-nowrap transition-colors relative
                                    ${activeTab === tab.id
                                        ? 'text-[var(--color-accent-primary)] border-b-2 border-[var(--color-accent-primary)] bg-[var(--color-accent-primary)]/5'
                                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]'
                                    }
                                `}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            <div className="container mx-auto px-4 pt-40 pb-12">
                {renderTabContent()}
            </div>

            {/* Bottom Spacer */}
            <div className="h-32 w-full" aria-hidden="true" />
        </div>
    );
}
