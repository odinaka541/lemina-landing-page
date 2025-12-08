'use client';

import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import FilterSidebar from '@/components/search/FilterSidebar';
import CompanyCard from '@/components/company/CompanyCard';
import { ConfidenceTier } from '@/components/company/ConfidenceBadge';

// Mock Data
const MOCK_COMPANIES = [
    {
        id: '1',
        name: 'Paystack',
        description: 'Modern online and offline payments for Africa.',
        location: 'Lagos, Nigeria',
        employees: 250,
        funding: 'Acquired',
        lastUpdated: '2h ago',
        metrics: [
            { label: "Funding Stage", value: "Acquired" },
            { label: "Business Model", value: "B2B Payment Gateway" },
            { label: "Traction Signals", value: "Processes 50% of Nigeria's online payments" },
            { label: "Market Opportunity", value: "Dominating African payment infrastructure" },
            { label: "Why Promising?", value: "Deep local bank integration and reliability" },
            { label: "Regulatory Status", value: "Fully Licensed (CBN)" }
        ]
    },
    {
        id: '2',
        name: 'Flutterwave',
        description: 'Simplifying payments for endless possibilities.',
        location: 'Lagos, Nigeria',
        employees: 500,
        funding: 'Series D',
        lastUpdated: '5h ago',
        metrics: [
            { label: "Funding Stage", value: "Series D" },
            { label: "Business Model", value: "Payment Infrastructure" },
            { label: "Traction Signals", value: "Unicorn status, broad Pan-African presence" },
            { label: "Market Opportunity", value: "Connecting Africa to global economy" },
            { label: "Why Promising?", value: "Extensive partnerships network" },
            { label: "Regulatory Status", value: "Various Licenses" }
        ]
    },
    {
        id: '3',
        name: 'Chipper Cash',
        description: 'Cross-border payments and crypto wallet.',
        location: 'Accra, Ghana',
        employees: 300,
        funding: 'Series C',
        lastUpdated: '1d ago',
        metrics: [
            { label: "Funding Stage", value: "Series C" },
            { label: "Business Model", value: "P2P & B2C Payments" },
            { label: "Traction Signals", value: "5M+ Verified Users" },
            { label: "Market Opportunity", value: "Cross-border African remittance" },
            { label: "Why Promising?", value: "Strong brand and user growth" },
            { label: "Regulatory Status", value: "Licensed in multiple markets" }
        ]
    },
    {
        id: '4',
        name: 'M-KOPA',
        description: 'Connected asset financing for underbanked customers.',
        location: 'Nairobi, Kenya',
        employees: 1000,
        funding: 'Debt Financing',
        lastUpdated: '3d ago',
        metrics: [
            { label: "Funding Stage", value: "Debt Financing" },
            { label: "Business Model", value: "Asset Financing / PAYG" },
            { label: "Traction Signals", value: "3M+ Customers, >$1B financing deployed" },
            { label: "Market Opportunity", value: "Credit for the underbanked millions" },
            { label: "Why Promising?", value: "Proprietary locking tech & repayment data" },
            { label: "Regulatory Status", value: "Compliant" }
        ]
    },
    {
        id: '5',
        name: 'Andela',
        description: 'Global talent network connecting engineers with companies.',
        location: 'Remote / Lagos',
        employees: 1500,
        funding: 'Series E',
        lastUpdated: '1w ago',
        metrics: [
            { label: "Funding Stage", value: "Series E" },
            { label: "Business Model", value: "Talent Marketplace" },
            { label: "Traction Signals", value: "100k+ Engineers, Global Clients" },
            { label: "Market Opportunity", value: "Remote work and global talent shortage" },
            { label: "Why Promising?", value: "High quality vetting process" },
            { label: "Regulatory Status", value: "N/A" }
        ]
    },
    {
        id: '6',
        name: 'Wasoko',
        description: 'Transforming informal retail supply chains in Africa.',
        location: 'Nairobi, Kenya',
        employees: 800,
        funding: 'Series B',
        lastUpdated: '2d ago',
        metrics: [
            { label: "Funding Stage", value: "Series B" },
            { label: "Business Model", value: "B2B E-commerce" },
            { label: "Traction Signals", value: "Huge network of informal retailers" },
            { label: "Market Opportunity", value: "Digitizing the informal economy" },
            { label: "Why Promising?", value: "Strong last-mile delivery infrastructure" },
            { label: "Regulatory Status", value: "Active" }
        ]
    }
];

export default function SearchPage() {
    return (
        <div className="container mx-auto px-4 pt-8 pb-8">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
                <FilterSidebar />

                {/* Main Content */}
                <div className="flex-1">
                    {/* Search Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-white mb-4">Discover Companies</h1>
                        <div className="flex gap-4">
                            <div className="flex-1 relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search by name, sector, or keyword..."
                                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[var(--color-border)] rounded-xl py-3 pl-12 pr-4 text-white focus:border-[var(--color-accent-primary)] focus:ring-1 focus:ring-[var(--color-accent-primary)] transition-all outline-none"
                                />
                            </div>
                            <button className="lg:hidden p-3 bg-[rgba(255,255,255,0.05)] border border-[var(--color-border)] rounded-xl text-white">
                                <SlidersHorizontal size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                        {MOCK_COMPANIES.map(company => (
                            <CompanyCard key={company.id} {...company} />
                        ))}
                    </div>
                </div>
            </div>
            {/* Bottom Spacer */}
            <div className="h-32 w-full" aria-hidden="true" />
        </div>
    );
}
