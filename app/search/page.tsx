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
        metrics: {
            revenue: { label: 'ARR', value: '$100M+', tier: ConfidenceTier.High, score: 0.95 },
            users: { label: 'Merchants', value: '80,000+', tier: ConfidenceTier.High, score: 0.98 },
            valuation: { label: 'Valuation', value: '$200M+', tier: ConfidenceTier.Medium, score: 0.75 }
        }
    },
    {
        id: '2',
        name: 'Flutterwave',
        description: 'Simplifying payments for endless possibilities.',
        location: 'Lagos, Nigeria',
        employees: 500,
        funding: 'Series D',
        lastUpdated: '5h ago',
        metrics: {
            revenue: { label: 'ARR', value: '$250M+', tier: ConfidenceTier.High, score: 0.92 },
            users: { label: 'Customers', value: '1M+', tier: ConfidenceTier.Medium, score: 0.65 },
            valuation: { label: 'Valuation', value: '$3B+', tier: ConfidenceTier.High, score: 0.90 }
        }
    },
    {
        id: '3',
        name: 'Chipper Cash',
        description: 'Cross-border payments and crypto wallet.',
        location: 'Accra, Ghana',
        employees: 300,
        funding: 'Series C',
        lastUpdated: '1d ago',
        metrics: {
            revenue: { label: 'ARR', value: '$75M+', tier: ConfidenceTier.Medium, score: 0.60 },
            users: { label: 'Users', value: '5M+', tier: ConfidenceTier.High, score: 0.85 },
            valuation: { label: 'Valuation', value: '$2B', tier: ConfidenceTier.Medium, score: 0.70 }
        }
    },
    {
        id: '4',
        name: 'M-KOPA',
        description: 'Connected asset financing for underbanked customers.',
        location: 'Nairobi, Kenya',
        employees: 1000,
        funding: 'Debt Financing',
        lastUpdated: '3d ago',
        metrics: {
            revenue: { label: 'ARR', value: '$150M+', tier: ConfidenceTier.High, score: 0.96 },
            users: { label: 'Customers', value: '3M+', tier: ConfidenceTier.High, score: 0.94 },
            valuation: { label: 'Valuation', value: 'Undisclosed', tier: ConfidenceTier.Low, score: 0.40 }
        }
    },
    {
        id: '5',
        name: 'Andela',
        description: 'Global talent network connecting engineers with companies.',
        location: 'Remote / Lagos',
        employees: 1500,
        funding: 'Series E',
        lastUpdated: '1w ago',
        metrics: {
            revenue: { label: 'ARR', value: '$100M+', tier: ConfidenceTier.Medium, score: 0.72 },
            users: { label: 'Engineers', value: '100,000+', tier: ConfidenceTier.High, score: 0.88 },
            valuation: { label: 'Valuation', value: '$1.5B', tier: ConfidenceTier.High, score: 0.91 }
        }
    },
    {
        id: '6',
        name: 'Wasoko',
        description: 'Transforming informal retail supply chains in Africa.',
        location: 'Nairobi, Kenya',
        employees: 800,
        funding: 'Series B',
        lastUpdated: '2d ago',
        metrics: {
            revenue: { label: 'GMV', value: '$300M+', tier: ConfidenceTier.High, score: 0.89 },
            users: { label: 'Merchants', value: '50,000+', tier: ConfidenceTier.Medium, score: 0.68 },
            valuation: { label: 'Valuation', value: '$625M', tier: ConfidenceTier.Medium, score: 0.78 }
        }
    }
];

export default function SearchPage() {
    return (
        <div className="container mx-auto px-4 py-8">
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
        </div>
    );
}
