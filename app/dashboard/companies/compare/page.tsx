'use client';

import { useState } from 'react';
import { Plus, X, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ConfidenceBadge, { ConfidenceTier } from '@/components/company/ConfidenceBadge';

// Mock Data
const COMPANIES = [
    {
        id: '1',
        name: 'Paystack',
        logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Paystack',
        metrics: {
            revenue: '$100M+',
            users: '80,000+',
            valuation: '$200M+',
            employees: 250,
            founded: 2015,
            stage: 'Acquired'
        }
    },
    {
        id: '2',
        name: 'Flutterwave',
        logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Flutterwave',
        metrics: {
            revenue: '$250M+',
            users: '1M+',
            valuation: '$3B+',
            employees: 500,
            founded: 2016,
            stage: 'Series D'
        }
    },
    {
        id: '3',
        name: 'Chipper Cash',
        logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Chipper',
        metrics: {
            revenue: '$75M+',
            users: '5M+',
            valuation: '$2B',
            employees: 300,
            founded: 2018,
            stage: 'Series C'
        }
    }
];

export default function ComparisonPage() {
    const [selectedCompanies, setSelectedCompanies] = useState(COMPANIES);

    const removeCompany = (id: string) => {
        setSelectedCompanies(selectedCompanies.filter(c => c.id !== id));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/dashboard" className="p-2 text-[var(--color-text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.05)] rounded-lg transition-colors">
                    <ArrowLeft size={20} />
                </Link>
                <h1 className="text-3xl font-bold text-white">Competitive Analysis</h1>
            </div>

            <div className="glass-panel overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                        <tr className="border-b border-[var(--color-border)]">
                            <th className="p-6 w-48 bg-[rgba(255,255,255,0.02)]">
                                <span className="text-sm font-medium text-[var(--color-text-secondary)] uppercase">Metric</span>
                            </th>
                            {selectedCompanies.map(company => (
                                <th key={company.id} className="p-6 relative min-w-[200px]">
                                    <button
                                        onClick={() => removeCompany(company.id)}
                                        className="absolute top-2 right-2 p-1 text-[var(--color-text-secondary)] hover:text-red-400 rounded-full hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                                    >
                                        <X size={16} />
                                    </button>
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-16 h-16 rounded-xl bg-white p-1 flex items-center justify-center shadow-lg">
                                            <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
                                        </div>
                                        <h3 className="font-bold text-white text-lg">{company.name}</h3>
                                    </div>
                                </th>
                            ))}
                            {selectedCompanies.length < 4 && (
                                <th className="p-6 min-w-[200px]">
                                    <button className="w-full h-full min-h-[120px] border-2 border-dashed border-[var(--color-border)] rounded-xl flex flex-col items-center justify-center gap-2 text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-accent-primary)] hover:bg-[rgba(255,255,255,0.02)] transition-all">
                                        <Plus size={24} />
                                        <span className="font-medium">Add Company</span>
                                    </button>
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { label: 'Revenue (ARR)', key: 'revenue' },
                            { label: 'Valuation', key: 'valuation' },
                            { label: 'Users', key: 'users' },
                            { label: 'Employees', key: 'employees' },
                            { label: 'Founded', key: 'founded' },
                            { label: 'Stage', key: 'stage' },
                        ].map((row, i) => (
                            <tr key={row.key} className="border-b border-[var(--color-border)] last:border-0 hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                                <td className="p-6 font-medium text-[var(--color-text-secondary)] bg-[rgba(255,255,255,0.02)]">
                                    {row.label}
                                </td>
                                {selectedCompanies.map(company => (
                                    <td key={`${company.id}-${row.key}`} className="p-6 text-center">
                                        <span className="text-lg font-semibold text-white">
                                            {company.metrics[row.key as keyof typeof company.metrics]}
                                        </span>
                                    </td>
                                ))}
                                {selectedCompanies.length < 4 && <td className="p-6"></td>}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
