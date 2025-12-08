'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Share2, Download, MessageSquare, Globe, MapPin, Calendar, Building2 } from 'lucide-react';

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
        logo: null // Placeholder
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
        <div className="min-h-screen bg-[var(--color-bg-primary)] pb-32">
            {/* Header / Sticky Top */}
            <div className="sticky top-16 z-20 bg-[#030712]/95 backdrop-blur-xl border-b border-[var(--color-border)]">
                <div className="container mx-auto px-4 py-4">
                    {/* Navigation Actions */}
                    <div className="flex items-center justify-between mb-4">
                        <Link href="/dashboard" className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-white transition-colors text-sm">
                            <ArrowLeft size={16} />
                            Back to Dashboard
                        </Link>
                        <div className="flex items-center gap-2">
                            <button className="p-2 text-[var(--color-text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.05)] rounded-lg transition-colors">
                                <Share2 size={18} />
                            </button>
                            <button className="p-2 text-[var(--color-text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.05)] rounded-lg transition-colors">
                                <Download size={18} />
                            </button>
                            <button className="py-2 px-4 bg-[var(--color-accent-primary)] hover:bg-[var(--color-accent-secondary)] text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-emerald-900/20">
                                Invest / Contact
                            </button>
                        </div>
                    </div>

                    {/* Company Identity */}
                    <div className="flex items-start justify-between gap-6 mb-6">
                        <div className="flex gap-4">
                            <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-2xl font-bold text-gray-900">
                                P
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white mb-1">{company.name}</h1>
                                <p className="text-[var(--color-text-secondary)] text-sm mb-2 max-w-xl">{company.description}</p>
                                <div className="flex items-center gap-4 text-xs text-[var(--color-text-secondary)]">
                                    <div className="flex items-center gap-1.5">
                                        <MapPin size={12} />
                                        {company.location}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={12} />
                                        Founded {company.founded}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Building2 size={12} />
                                        {company.stage}
                                    </div>
                                    <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[var(--color-accent-primary)] hover:underline">
                                        <Globe size={12} />
                                        {company.website}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Stats / AI Prompt */}
                        <div className="hidden lg:block w-full max-w-sm">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MessageSquare size={16} className="text-[var(--color-accent-primary)]" />
                                </div>
                                <input
                                    type="text"
                                    placeholder={`Ask Lemina about ${company.name}...`}
                                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--color-border)] rounded-lg py-2 pl-10 pr-4 text-sm text-[var(--color-text-primary)] focus:border-[var(--color-accent-primary)] focus:ring-1 focus:ring-[var(--color-accent-primary)] outline-none transition-all placeholder:text-gray-600"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="flex gap-1 overflow-x-auto no-scrollbar">
                        {TABS.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                                    px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors
                                    ${activeTab === tab.id
                                        ? 'bg-[var(--color-accent-primary)] text-white'
                                        : 'text-[var(--color-text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
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
            <div className="container mx-auto px-4 py-8">
                {renderTabContent()}
            </div>

            {/* Bottom Spacer */}
            <div className="h-32 w-full" aria-hidden="true" />
        </div>
    );
}
