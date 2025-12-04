'use client';

import { useState } from 'react';
import { Search, Filter, ChevronDown, ChevronUp, Check } from 'lucide-react';

interface FilterSectionProps {
    title: string;
    options: string[];
    selected: string[];
    onToggle: (option: string) => void;
}

function FilterSection({ title, options, selected, onToggle }: FilterSectionProps) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="border-b border-[var(--color-border)] py-4 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full text-left mb-2 group"
            >
                <span className="font-semibold text-white group-hover:text-[var(--color-accent-primary)] transition-colors">{title}</span>
                {isOpen ? <ChevronUp size={16} className="text-[var(--color-text-secondary)]" /> : <ChevronDown size={16} className="text-[var(--color-text-secondary)]" />}
            </button>

            {isOpen && (
                <div className="space-y-2 mt-2 animate-fade-in">
                    {options.map(option => (
                        <label key={option} className="flex items-center gap-3 cursor-pointer group/item">
                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${selected.includes(option) ? 'bg-[var(--color-accent-primary)] border-[var(--color-accent-primary)]' : 'border-[var(--color-text-secondary)] bg-transparent group-hover/item:border-white'}`}>
                                {selected.includes(option) && <Check size={14} className="text-white" />}
                            </div>
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={selected.includes(option)}
                                onChange={() => onToggle(option)}
                            />
                            <span className={`text-sm ${selected.includes(option) ? 'text-white' : 'text-[var(--color-text-secondary)] group-hover/item:text-white'} transition-colors`}>
                                {option}
                            </span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function FilterSidebar() {
    const [sectors, setSectors] = useState<string[]>(['Fintech']);
    const [stages, setStages] = useState<string[]>([]);
    const [regions, setRegions] = useState<string[]>([]);

    const toggleSector = (s: string) => setSectors(prev => prev.includes(s) ? prev.filter(i => i !== s) : [...prev, s]);
    const toggleStage = (s: string) => setStages(prev => prev.includes(s) ? prev.filter(i => i !== s) : [...prev, s]);
    const toggleRegion = (s: string) => setRegions(prev => prev.includes(s) ? prev.filter(i => i !== s) : [...prev, s]);

    return (
        <div className="w-64 flex-shrink-0 hidden lg:block">
            <div className="glass-panel p-4 sticky top-24">
                <div className="flex items-center gap-2 mb-6 text-[var(--color-accent-primary)]">
                    <Filter size={20} />
                    <h2 className="font-bold text-lg">Filters</h2>
                </div>

                <FilterSection
                    title="Sectors"
                    options={['Fintech', 'Healthtech', 'AgriTech', 'Logistics', 'Cleantech', 'Edtech', 'E-commerce', 'SaaS']}
                    selected={sectors}
                    onToggle={toggleSector}
                />

                <FilterSection
                    title="Stage"
                    options={['Pre-Seed', 'Seed', 'Series A', 'Series B+']}
                    selected={stages}
                    onToggle={toggleStage}
                />

                <FilterSection
                    title="Region"
                    options={['West Africa', 'East Africa', 'North Africa', 'Southern Africa', 'Central Africa']}
                    selected={regions}
                    onToggle={toggleRegion}
                />

                <div className="pt-4 mt-4 border-t border-[var(--color-border)]">
                    <button className="w-full py-2 text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors">
                        Reset All Filters
                    </button>
                </div>
            </div>
        </div>
    );
}
