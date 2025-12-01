'use client';

import { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import { Menu } from 'lucide-react';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] font-sans">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            {/* Mobile Header */}
            <div className="lg:hidden sticky top-0 z-30 bg-[var(--color-bg-primary)]/80 backdrop-blur-md border-b border-[var(--color-border)] px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="p-2 -ml-2 hover:bg-[rgba(255,255,255,0.05)] rounded-lg text-[var(--color-text-secondary)] hover:text-white transition-colors"
                    >
                        <Menu size={24} />
                    </button>
                    <span className="font-bold text-lg tracking-tight text-white">LEMINA</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent-primary)] flex items-center justify-center text-sm font-bold text-white">
                    L
                </div>
            </div>

            {/* Main Content */}
            <main className="lg:pl-64 min-h-screen flex flex-col">
                {children}
            </main>
        </div>
    );
}
