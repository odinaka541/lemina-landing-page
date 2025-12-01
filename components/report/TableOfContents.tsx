'use client';

import React, { useEffect, useState } from 'react';

const sections = [
    { id: 'cover', label: 'Cover' },
    { id: 'intro', label: 'What is Lemina?' },
    { id: 'solution', label: 'The Solution' },
    { id: 'users', label: 'Who Uses Lemina?' },
    { id: 'dashboard', label: 'Dashboard Preview' },
    { id: 'profiles', label: 'Sample Profiles' },
    { id: 'pricing', label: 'Pricing / CTA' },
    { id: 'faq', label: 'FAQ' },
    { id: 'start', label: 'Get Started' },
];

export const TableOfContents = () => {
    const [activeSection, setActiveSection] = useState('cover');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.2, rootMargin: '-20% 0px -50% 0px' }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed left-8 top-1/2 -translate-y-1/2 hidden xl:block z-40 print:hidden">
            <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl">
                <div className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">Contents</div>
                <ul className="space-y-1">
                    {sections.map(({ id, label }) => (
                        <li key={id}>
                            <button
                                onClick={() => scrollToSection(id)}
                                className={`text-sm text-left w-full px-3 py-1.5 rounded-md transition-all duration-200 ${activeSection === id
                                    ? 'bg-emerald-500/20 text-emerald-400 font-medium'
                                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                                    }`}
                            >
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
