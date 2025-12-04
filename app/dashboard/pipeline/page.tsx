'use client';

import { useState } from 'react';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import PipelineColumn from '@/components/crm/PipelineColumn';
import { ConfidenceTier } from '@/components/company/ConfidenceBadge';
import { Plus, Filter, Search } from 'lucide-react';

// Mock Data
const INITIAL_DATA = {
    columns: {
        'inbox': {
            id: 'inbox',
            title: 'Inbox',
            dealIds: ['deal-1', 'deal-4']
        },
        'diligence': {
            id: 'diligence',
            title: 'Due Diligence',
            dealIds: ['deal-2']
        },
        'negotiation': {
            id: 'negotiation',
            title: 'Negotiation',
            dealIds: ['deal-3']
        },
        'committed': {
            id: 'committed',
            title: 'Committed',
            dealIds: []
        },
        'passed': {
            id: 'passed',
            title: 'Passed',
            dealIds: []
        }
    },
    deals: {
        'deal-1': {
            id: 'deal-1',
            companyName: 'Paystack',
            amount: '$200k',
            stage: 'Inbox',
            probability: 20,
            closeDate: 'Dec 2025',
            logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Paystack',
            tier: ConfidenceTier.CACVerified,
            score: 98
        },
        'deal-2': {
            id: 'deal-2',
            companyName: 'Flutterwave',
            amount: '$500k',
            stage: 'Due Diligence',
            probability: 60,
            closeDate: 'Jan 2026',
            logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Flutterwave',
            tier: ConfidenceTier.DirectVerified,
            score: 92
        },
        'deal-3': {
            id: 'deal-3',
            companyName: 'Chipper Cash',
            amount: '$1M',
            stage: 'Negotiation',
            probability: 85,
            closeDate: 'Feb 2026',
            logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Chipper',
            tier: ConfidenceTier.ThirdParty,
            score: 75
        },
        'deal-4': {
            id: 'deal-4',
            companyName: 'M-KOPA',
            amount: '$150k',
            stage: 'Inbox',
            probability: 10,
            closeDate: 'Mar 2026',
            logo: 'https://api.dicebear.com/7.x/initials/svg?seed=MKOPA',
            tier: ConfidenceTier.NewsSource,
            score: 65
        }
    },
    columnOrder: ['inbox', 'diligence', 'negotiation', 'committed', 'passed']
};

export default function PipelinePage() {
    const [data, setData] = useState(INITIAL_DATA);

    const onDragEnd = (result: any) => {
        const { destination, source, draggableId } = result;

        if (!destination) return;

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const start = data.columns[source.droppableId as keyof typeof data.columns];
        const finish = data.columns[destination.droppableId as keyof typeof data.columns];

        if (start === finish) {
            const newDealIds = Array.from(start.dealIds);
            newDealIds.splice(source.index, 1);
            newDealIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                dealIds: newDealIds,
            };

            const newState = {
                ...data,
                columns: {
                    ...data.columns,
                    [newColumn.id]: newColumn,
                },
            };

            setData(newState);
            return;
        }

        // Moving from one list to another
        const startDealIds = Array.from(start.dealIds);
        startDealIds.splice(source.index, 1);
        const newStart = {
            ...start,
            dealIds: startDealIds,
        };

        const finishDealIds = Array.from(finish.dealIds);
        finishDealIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            dealIds: finishDealIds,
        };

        const newState = {
            ...data,
            columns: {
                ...data.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };

        setData(newState);
    };

    return (
        <div className="h-[calc(100vh-64px)] flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-[var(--color-border)] flex justify-between items-center bg-[var(--color-bg-primary)]">
                <div>
                    <h1 className="text-2xl font-bold text-white">Deal Pipeline</h1>
                    <p className="text-sm text-[var(--color-text-secondary)]">Manage your deal flow and track progress.</p>
                </div>
                <div className="flex gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search deals..."
                            className="bg-[rgba(255,255,255,0.05)] border border-[var(--color-border)] rounded-lg py-2 pl-9 pr-4 text-sm text-white focus:border-[var(--color-accent-primary)] outline-none"
                        />
                    </div>
                    <button className="btn btn-secondary gap-2 py-2 text-sm">
                        <Filter size={16} /> Filter
                    </button>
                    <button className="btn btn-primary gap-2 py-2 text-sm">
                        <Plus size={16} /> New Deal
                    </button>
                </div>
            </div>

            {/* Kanban Board */}
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex-1 overflow-x-auto overflow-y-hidden p-6">
                    <div className="flex gap-6 h-full min-w-max">
                        {data.columnOrder.map((columnId) => {
                            const column = data.columns[columnId as keyof typeof data.columns];
                            const deals = column.dealIds.map((dealId) => data.deals[dealId as keyof typeof data.deals]);

                            return <PipelineColumn key={column.id} column={{ ...column, deals }} />;
                        })}
                    </div>
                </div>
            </DragDropContext>
        </div>
    );
}
