'use client';

import { Users, DollarSign, UserPlus, Mail } from 'lucide-react';

// Mock Data
const SYNDICATE_MEMBERS = [
    { id: 1, name: 'Odinaka Eze', role: 'Lead', joined: 'Jan 2024', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Odinaka' },
    { id: 2, name: 'Sarah Johnson', role: 'Member', joined: 'Feb 2024', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
    { id: 3, name: 'Michael Chen', role: 'Member', joined: 'Mar 2024', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael' },
    { id: 4, name: 'Amara Okafor', role: 'Member', joined: 'Mar 2024', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amara' },
];

export default function SyndicatePage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">My Syndicate</h1>
                    <p className="text-[var(--color-text-secondary)]">Manage your investment network and members.</p>
                </div>
                <button className="btn btn-primary gap-2">
                    <UserPlus size={18} /> Invite Member
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="glass-panel p-5">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-[rgba(59,130,246,0.1)] rounded-lg text-blue-500">
                            <Users size={20} />
                        </div>
                        <span className="text-sm text-[var(--color-text-secondary)]">Total Members</span>
                    </div>
                    <h3 className="text-3xl font-bold text-[var(--color-text-primary)]">12</h3>
                </div>
                <div className="glass-panel p-5">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-[rgba(16,185,129,0.1)] rounded-lg text-emerald-500">
                            <DollarSign size={20} />
                        </div>
                        <span className="text-sm text-[var(--color-text-secondary)]">Capital Deployed</span>
                    </div>
                    <h3 className="text-3xl font-bold text-[var(--color-text-primary)]">$2.4M</h3>
                </div>
                <div className="glass-panel p-5">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-[rgba(245,158,11,0.1)] rounded-lg text-amber-500">
                            <Mail size={20} />
                        </div>
                        <span className="text-sm text-[var(--color-text-secondary)]">Pending Invites</span>
                    </div>
                    <h3 className="text-3xl font-bold text-[var(--color-text-primary)]">3</h3>
                </div>
            </div>

            {/* Members Table */}
            <div className="glass-panel overflow-hidden">
                <div className="p-6 border-b border-[var(--color-border)]">
                    <h3 className="font-bold text-[var(--color-text-primary)]">Syndicate Members</h3>
                </div>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[rgba(255,255,255,0.03)] border-b border-[var(--color-border)]">
                            <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Member</th>
                            <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Role</th>
                            <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Joined</th>
                            <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {SYNDICATE_MEMBERS.map((member) => (
                            <tr key={member.id} className="border-b border-[var(--color-border)] last:border-0 hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <img src={member.avatar} alt={member.name} className="w-8 h-8 rounded-full bg-[var(--color-bg-secondary)]" />
                                        <span className="font-medium text-[var(--color-text-primary)]">{member.name}</span>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${member.role === 'Lead'
                                        ? 'bg-[rgba(139,92,246,0.1)] text-purple-400 border-purple-500/20'
                                        : 'bg-[rgba(255,255,255,0.05)] text-[var(--color-text-secondary)] border-[var(--color-border)]'
                                        }`}>
                                        {member.role}
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-[var(--color-text-secondary)]">{member.joined}</td>
                                <td className="p-4 text-right">
                                    <button className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                                        Manage
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
