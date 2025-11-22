'use client';

import { Search, Filter, ChevronDown, X } from 'lucide-react';

export default function FilterBar() {
    return (
        <div className="sticky top-0 z-40 h-16 bg-[var(--color-bg-primary)]/80 backdrop-blur-md border-b border-[var(--color-border)] flex items-center px-6 gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]" size={18} />
                <input
                    type="text"
                    placeholder="Search companies, investors, or sectors..."
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[var(--color-border)] rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:border-[var(--color-accent-primary)] focus:ring-1 focus:ring-[var(--color-accent-primary)] transition-all placeholder:text-[var(--color-text-secondary)]"
                />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2 ml-auto">
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--color-border)] bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] text-sm text-[var(--color-text-secondary)] hover:text-white transition-all">
                    <span>Sector</span>
                    <ChevronDown size={14} />
                </button>

                <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--color-border)] bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] text-sm text-[var(--color-text-secondary)] hover:text-white transition-all">
                    <span>Country</span>
                    <ChevronDown size={14} />
                </button>

                <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--color-border)] bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] text-sm text-[var(--color-text-secondary)] hover:text-white transition-all">
                    <span>Funding</span>
                    <ChevronDown size={14} />
                </button>

                <div className="h-6 w-px bg-[var(--color-border)] mx-2"></div>

                <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[var(--color-text-secondary)] hover:text-white transition-all">
                    <Filter size={16} />
                    <span>More Filters</span>
                </button>
            </div>

            {/* Active Filters (Mock) */}
            {/* <div className="hidden xl:flex items-center gap-2">
        <span className="px-2 py-1 rounded bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)] text-xs text-[var(--color-accent-primary)] flex items-center gap-1">
          Fintech <X size={12} className="cursor-pointer hover:text-white" />
        </span>
      </div> */}
        </div>
    );
}
