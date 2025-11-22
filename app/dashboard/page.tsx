'use client';

import FilterBar from '@/components/dashboard/FilterBar';
import CompanyCard from '@/components/company/CompanyCard';
import { ConfidenceTier } from '@/components/company/ConfidenceBadge';

// Mock Data
const companies = [
    {
        id: '1',
        name: 'Paystack',
        description: 'Payments infrastructure for African businesses',
        location: 'Lagos, Nigeria',
        employees: 450,
        funding: '$200M (Series C)',
        lastUpdated: '3 days ago',
        metrics: {
            revenue: { value: '$8.5M', tier: 4 as ConfidenceTier, score: 92, label: 'Monthly Revenue' },
            users: { value: '60,000', tier: 4 as ConfidenceTier, score: 90, label: 'Merchants' },
            valuation: { value: '$2B', tier: 5 as ConfidenceTier, score: 100, label: 'Valuation' }
        },
        isSaved: true
    },
    {
        id: '2',
        name: 'Flutterwave',
        description: 'Payment technology for merchants and banks',
        location: 'Lagos, Nigeria',
        employees: 750,
        funding: '$475M (Series D)',
        lastUpdated: '1 day ago',
        metrics: {
            revenue: { value: '$12M', tier: 3 as ConfidenceTier, score: 75, label: 'Monthly Revenue' },
            users: { value: '1M+', tier: 3 as ConfidenceTier, score: 78, label: 'Users' },
            valuation: { value: '$3B', tier: 4 as ConfidenceTier, score: 95, label: 'Valuation' }
        },
        isSaved: false
    },
    {
        id: '3',
        name: 'Kuda',
        description: 'The money app for Africans. Free banking.',
        location: 'London, UK',
        employees: 300,
        funding: '$91M (Series B)',
        lastUpdated: '5 days ago',
        metrics: {
            revenue: { value: '$4.2M', tier: 2 as ConfidenceTier, score: 60, label: 'Monthly Revenue' },
            users: { value: '5M', tier: 4 as ConfidenceTier, score: 92, label: 'Users' },
            valuation: { value: '$500M', tier: 2 as ConfidenceTier, score: 65, label: 'Valuation' }
        },
        isSaved: false
    },
    {
        id: '4',
        name: 'Moniepoint',
        description: 'All-in-one business banking platform',
        location: 'Lagos, Nigeria',
        employees: 1200,
        funding: '$110M (Series C)',
        lastUpdated: '2 days ago',
        metrics: {
            revenue: { value: '$15M', tier: 4 as ConfidenceTier, score: 94, label: 'Monthly Revenue' },
            users: { value: '600k', tier: 5 as ConfidenceTier, score: 98, label: 'Businesses' },
            valuation: { value: '$1B', tier: 3 as ConfidenceTier, score: 80, label: 'Valuation' }
        },
        isSaved: true
    },
    {
        id: '5',
        name: 'Bamboo',
        description: 'Real-time access to global markets',
        location: 'Lagos, Nigeria',
        employees: 80,
        funding: '$15M (Series A)',
        lastUpdated: '1 week ago',
        metrics: {
            revenue: { value: '$800k', tier: 2 as ConfidenceTier, score: 55, label: 'Monthly Revenue' },
            users: { value: '100k', tier: 3 as ConfidenceTier, score: 70, label: 'Users' },
            valuation: { value: '$80M', tier: 1 as ConfidenceTier, score: 45, label: 'Valuation' }
        },
        isSaved: false
    },
    {
        id: '6',
        name: 'Eden Life',
        description: 'Tech-enabled home services for Africa',
        location: 'Lagos, Nigeria',
        employees: 120,
        funding: '$1.4M (Seed)',
        lastUpdated: '4 days ago',
        metrics: {
            revenue: { value: '$250k', tier: 4 as ConfidenceTier, score: 88, label: 'Monthly Revenue' },
            users: { value: '5,000', tier: 4 as ConfidenceTier, score: 90, label: 'Subscribers' },
            valuation: { value: '$15M', tier: 2 as ConfidenceTier, score: 60, label: 'Valuation' }
        },
        isSaved: false
    }
];

export default function DashboardPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <FilterBar />

            <div className="p-6 space-y-6">
                {/* Results Header */}
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold text-white">
                        {companies.length} companies found
                    </h1>
                    <div className="flex items-center gap-3">
                        <select className="bg-[rgba(255,255,255,0.05)] border border-[var(--color-border)] rounded-lg px-3 py-1.5 text-sm text-[var(--color-text-secondary)] focus:border-[var(--color-accent-primary)] outline-none">
                            <option>Sort: Relevance</option>
                            <option>Sort: Quality Score</option>
                            <option>Sort: Funding</option>
                        </select>
                        <div className="flex bg-[rgba(255,255,255,0.05)] rounded-lg border border-[var(--color-border)] p-0.5">
                            <button className="px-3 py-1 rounded-md bg-[rgba(255,255,255,0.1)] text-white text-sm font-medium shadow-sm">Cards</button>
                            <button className="px-3 py-1 rounded-md text-[var(--color-text-secondary)] text-sm font-medium hover:text-white">Table</button>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {companies.map((company) => (
                        <CompanyCard key={company.id} {...company} />
                    ))}
                </div>

                {/* Load More */}
                <div className="flex justify-center pt-8 pb-12">
                    <button className="btn btn-secondary">
                        Load More Companies
                    </button>
                </div>
            </div>
        </div>
    );
}
