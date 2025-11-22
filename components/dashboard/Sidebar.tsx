'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutGrid,
    Target,
    LineChart,
    Bell,
    Settings,
    Search,
    ShieldCheck
} from 'lucide-react';

const navItems = [
    { name: 'Companies', href: '/dashboard', icon: LayoutGrid },
    { name: 'My Pipeline', href: '/dashboard/pipeline', icon: Target },
    { name: 'Portfolio', href: '/dashboard/portfolio', icon: LineChart },
    { name: 'Alerts', href: '/dashboard/alerts', icon: Bell },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-[var(--color-bg-secondary)] border-r border-[var(--color-border)] flex flex-col z-50 hidden lg:flex">
            {/* Logo */}
            <div className="h-20 flex items-center px-6 border-b border-[var(--color-border)]">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-accent-primary)] flex items-center justify-center">
                        <span className="text-white font-bold text-lg">L</span>
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">LEMINA</span>
                </div>
            </div>

            {/* Search Trigger */}
            <div className="p-4">
                <button className="w-full flex items-center gap-2 px-4 py-2.5 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-secondary)] text-sm transition-all group">
                    <Search size={16} className="group-hover:text-white" />
                    <span>Search...</span>
                    <kbd className="ml-auto text-xs bg-[rgba(255,255,255,0.1)] px-1.5 py-0.5 rounded text-[var(--color-text-secondary)]">⌘K</kbd>
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-2 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname?.startsWith(item.href));
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive
                                    ? 'bg-[rgba(16,185,129,0.1)] text-[var(--color-accent-primary)]'
                                    : 'text-[var(--color-text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                                }`}
                        >
                            <Icon size={18} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer / Health */}
            <div className="p-4 border-t border-[var(--color-border)]">
                <div className="bg-[rgba(16,185,129,0.05)] border border-[rgba(16,185,129,0.2)] rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                        <ShieldCheck size={16} className="text-[var(--color-accent-primary)]" />
                        <span className="text-xs font-medium text-[var(--color-accent-primary)]">Account Health</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white">92/100</span>
                        <span className="text-xs text-[var(--color-text-secondary)]">Excellent</span>
                    </div>
                    <div className="w-full h-1 bg-[rgba(255,255,255,0.1)] rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-[var(--color-accent-primary)] w-[92%]"></div>
                    </div>
                </div>

                <button className="w-full mt-4 text-xs text-[var(--color-text-secondary)] hover:text-white transition-colors">
                    Upgrade Plan
                </button>
            </div>
        </aside>
    );
}
