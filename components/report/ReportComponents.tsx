import React from 'react';

export const Page = ({ children, className = '', id = '' }: { children: React.ReactNode; className?: string; id?: string }) => (
    <div id={id} className="w-full flex justify-center my-8 print:my-0 print:block">
        <div className="w-[210mm] h-[297mm] relative print:w-full print:h-auto">
            <div className={`
                origin-top scale-[0.45] sm:scale-[0.6] md:scale-[0.8] lg:scale-100 
                bg-slate-900/50 backdrop-blur-xl border border-white/10 text-slate-50 
                w-[210mm] min-h-[297mm] p-[15mm] shadow-2xl 
                print:scale-100 print:shadow-none print:break-after-page print:bg-white print:text-black print:border-none 
                flex flex-col ${className}
            `}>
                {children}
            </div>
        </div>
    </div>
);

export const Footer = ({ pageNum, totalPages = 10 }: { pageNum: number; totalPages?: number }) => (
    <div className="absolute bottom-[20mm] left-[20mm] right-[20mm] pt-5 border-t-2 border-white/10 print:border-slate-200 text-xs text-slate-400 print:text-slate-500 flex justify-between">
        <div>© 2025 Lemina | Confidential Sample</div>
        <div>Page {pageNum} of {totalPages}</div>
    </div>
);

export const Badge = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`inline-block px-3 py-1.5 rounded-md text-sm font-semibold ${className}`}>
        {children}
    </div>
);

export const StatBox = ({ number, label, highlight = false }: { number: string; label: string; highlight?: boolean }) => (
    <div className={`p-6 rounded-xl border text-center ${highlight
        ? 'bg-amber-500/10 border-amber-500/30 print:bg-amber-50 print:border-amber-400'
        : 'bg-emerald-500/10 border-emerald-500/30 print:bg-emerald-50 print:border-emerald-500'
        }`}>
        <div className={`text-4xl font-extrabold mb-2 ${highlight ? 'text-amber-400 print:text-amber-500' : 'text-emerald-400 print:text-emerald-500'}`}>{number}</div>
        <div className={`text-sm font-semibold ${highlight ? 'text-amber-200 print:text-amber-800' : 'text-emerald-200 print:text-emerald-700'}`}>{label}</div>
    </div>
);

export const FeatureCard = ({ title, desc }: { title: string; desc: string }) => (
    <div className="bg-emerald-900/20 border border-emerald-500/30 print:bg-emerald-50 print:border-emerald-500 rounded-xl p-6">
        <div className="text-lg font-bold text-emerald-400 print:text-emerald-700 mb-2">{title}</div>
        <div className="text-sm text-slate-300 print:text-emerald-900 leading-relaxed">{desc}</div>
    </div>
);

export const WorkflowStep = ({ number, text }: { number: number; text: React.ReactNode }) => (
    <div className="bg-white/5 border border-white/10 print:bg-white print:border-slate-200 rounded-lg p-4 mb-3 flex items-center gap-4">
        <div className="bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shrink-0">
            {number}
        </div>
        <div className="text-[15px] text-slate-300 print:text-slate-700">{text}</div>
    </div>
);

export const ProfileMetric = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between py-2 border-b border-white/10 print:border-slate-200 text-[15px]">
        <span className="text-slate-400 print:text-slate-500 font-medium">{label}</span>
        <span className="font-semibold text-slate-200 print:text-slate-900 text-right">{value}</span>
    </div>
);
