'use client';

import { useState } from 'react';
import { Bell, Plus, Trash2, CheckCircle } from 'lucide-react';

export default function AlertsPage() {
    const [alerts, setAlerts] = useState([
        { id: 1, type: 'Deal Flow', condition: 'New Fintech company added', channel: 'Email', active: true },
        { id: 2, type: 'Syndicate', condition: 'Member commits to a deal', channel: 'In-app', active: true },
        { id: 3, type: 'Company', condition: 'Paystack valuation changes', channel: 'Email + Push', active: false },
    ]);

    const toggleAlert = (id: number) => {
        setAlerts(alerts.map(a => a.id === id ? { ...a, active: !a.active } : a));
    };

    const deleteAlert = (id: number) => {
        setAlerts(alerts.filter(a => a.id !== id));
    };

    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-white">Alerts Configuration</h1>
                <button className="btn btn-primary gap-2">
                    <Plus size={18} /> Create Alert
                </button>
            </div>

            <div className="glass-panel overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[rgba(255,255,255,0.03)] border-b border-[var(--color-border)]">
                            <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Type</th>
                            <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Condition</th>
                            <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Channel</th>
                            <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase">Status</th>
                            <th className="p-4 text-xs font-medium text-[var(--color-text-secondary)] uppercase text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alerts.map((alert) => (
                            <tr key={alert.id} className="border-b border-[var(--color-border)] last:border-0 hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                                <td className="p-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[rgba(255,255,255,0.1)] text-white border border-[rgba(255,255,255,0.1)]">
                                        {alert.type}
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-white font-medium">{alert.condition}</td>
                                <td className="p-4 text-sm text-[var(--color-text-secondary)]">{alert.channel}</td>
                                <td className="p-4">
                                    <button
                                        onClick={() => toggleAlert(alert.id)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${alert.active ? 'bg-[var(--color-accent-primary)]' : 'bg-[rgba(255,255,255,0.1)]'}`}
                                    >
                                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${alert.active ? 'translate-x-6' : 'translate-x-1'}`} />
                                    </button>
                                </td>
                                <td className="p-4 text-right">
                                    <button
                                        onClick={() => deleteAlert(alert.id)}
                                        className="p-2 text-[var(--color-text-secondary)] hover:text-red-400 hover:bg-[rgba(255,255,255,0.05)] rounded-lg transition-colors"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="glass-panel p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Recommended Alerts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border border-[var(--color-border)] rounded-lg bg-[rgba(255,255,255,0.02)] flex items-start gap-3 cursor-pointer hover:border-[var(--color-accent-primary)] transition-colors">
                        <div className="p-2 bg-[rgba(16,185,129,0.1)] rounded-lg text-[var(--color-accent-primary)]">
                            <Bell size={20} />
                        </div>
                        <div>
                            <div className="font-medium text-white">New Unicorn Alert</div>
                            <p className="text-sm text-[var(--color-text-secondary)] mt-1">Get notified when any company in your pipeline reaches $1B valuation.</p>
                        </div>
                        <Plus size={18} className="ml-auto text-[var(--color-text-secondary)]" />
                    </div>
                    <div className="p-4 border border-[var(--color-border)] rounded-lg bg-[rgba(255,255,255,0.02)] flex items-start gap-3 cursor-pointer hover:border-[var(--color-accent-primary)] transition-colors">
                        <div className="p-2 bg-[rgba(16,185,129,0.1)] rounded-lg text-[var(--color-accent-primary)]">
                            <Users size={20} />
                        </div>
                        <div>
                            <div className="font-medium text-white">Syndicate Activity</div>
                            <p className="text-sm text-[var(--color-text-secondary)] mt-1">Weekly digest of what your network is viewing and investing in.</p>
                        </div>
                        <Plus size={18} className="ml-auto text-[var(--color-text-secondary)]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
