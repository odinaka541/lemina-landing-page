'use client';

import { Draggable } from '@hello-pangea/dnd';
import { Calendar, DollarSign, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import ConfidenceBadge, { ConfidenceTier } from '@/components/company/ConfidenceBadge';

interface DealCardProps {
    deal: {
        id: string;
        companyName: string;
        amount: string;
        stage: string;
        probability: number;
        closeDate: string;
        logo: string;
        tier: ConfidenceTier;
        score: number;
    };
    index: number;
}

export default function DealCard({ deal, index }: DealCardProps) {
    return (
        <Draggable draggableId={deal.id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`p-4 rounded-xl border mb-3 transition-all group ${snapshot.isDragging
                            ? 'bg-[var(--color-bg-secondary)] border-[var(--color-accent-primary)] shadow-2xl scale-105 z-50'
                            : 'bg-[rgba(255,255,255,0.03)] border-[var(--color-border)] hover:border-[rgba(255,255,255,0.2)]'
                        }`}
                    style={provided.draggableProps.style}
                >
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center">
                                <img src={deal.logo} alt={deal.companyName} className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm">{deal.companyName}</h4>
                                <div className="flex items-center gap-1 mt-0.5">
                                    <ConfidenceBadge tier={deal.tier} score={deal.score} showLabel={false} className="scale-75 origin-left" />
                                </div>
                            </div>
                        </div>
                        <button className="text-[var(--color-text-secondary)] hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            <MoreHorizontal size={16} />
                        </button>
                    </div>

                    <div className="space-y-2 mb-3">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-[var(--color-text-secondary)] flex items-center gap-1">
                                <DollarSign size={14} /> Amount
                            </span>
                            <span className="text-white font-mono">{deal.amount}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-[var(--color-text-secondary)] flex items-center gap-1">
                                <Calendar size={14} /> Close
                            </span>
                            <span className="text-white">{deal.closeDate}</span>
                        </div>
                    </div>

                    <div className="w-full bg-[rgba(255,255,255,0.1)] h-1.5 rounded-full overflow-hidden">
                        <div
                            className={`h-full rounded-full ${deal.probability > 75 ? 'bg-emerald-500' :
                                    deal.probability > 40 ? 'bg-amber-500' : 'bg-red-500'
                                }`}
                            style={{ width: `${deal.probability}%` }}
                        />
                    </div>
                    <div className="flex justify-between mt-1">
                        <span className="text-[10px] text-[var(--color-text-secondary)]">Probability</span>
                        <span className="text-[10px] font-medium text-white">{deal.probability}%</span>
                    </div>

                    <Link href={`/dashboard/deals/${deal.id}`} className="absolute inset-0" />
                </div>
            )}
        </Draggable>
    );
}
