'use client';

import { useState } from 'react';
import { User, Bell, Shield, Save, Camera } from 'lucide-react';

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Navigation */}
                <div className="w-full md:w-64 flex-shrink-0">
                    <div className="glass-panel p-2 space-y-1">
                        <button
                            onClick={() => setActiveTab('profile')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === 'profile'
                                    ? 'bg-[var(--color-accent-primary)] text-white'
                                    : 'text-[var(--color-text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                                }`}
                        >
                            <User size={18} /> Profile
                        </button>
                        <button
                            onClick={() => setActiveTab('notifications')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === 'notifications'
                                    ? 'bg-[var(--color-accent-primary)] text-white'
                                    : 'text-[var(--color-text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                                }`}
                        >
                            <Bell size={18} /> Notifications
                        </button>
                        <button
                            onClick={() => setActiveTab('security')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === 'security'
                                    ? 'bg-[var(--color-accent-primary)] text-white'
                                    : 'text-[var(--color-text-secondary)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                                }`}
                        >
                            <Shield size={18} /> Security
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1">
                    {activeTab === 'profile' && (
                        <div className="glass-panel p-8 animate-fade-in">
                            <h2 className="text-xl font-bold text-white mb-6">Public Profile</h2>

                            <div className="flex items-center gap-6 mb-8">
                                <div className="relative group cursor-pointer">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500" />
                                    <div className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Camera size={24} className="text-white" />
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-secondary text-sm mb-2">Change Avatar</button>
                                    <p className="text-xs text-[var(--color-text-secondary)]">JPG, GIF or PNG. Max size of 800K</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[var(--color-text-secondary)]">First Name</label>
                                        <input type="text" defaultValue="Odinaka" className="w-full bg-[rgba(255,255,255,0.05)] border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-white focus:border-[var(--color-accent-primary)] outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[var(--color-text-secondary)]">Last Name</label>
                                        <input type="text" defaultValue="Eze" className="w-full bg-[rgba(255,255,255,0.05)] border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-white focus:border-[var(--color-accent-primary)] outline-none" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[var(--color-text-secondary)]">Bio</label>
                                    <textarea rows={4} defaultValue="Angel investor focused on Fintech and Healthtech in West Africa." className="w-full bg-[rgba(255,255,255,0.05)] border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-white focus:border-[var(--color-accent-primary)] outline-none resize-none" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[var(--color-text-secondary)]">Investment Thesis</label>
                                    <textarea rows={3} defaultValue="Backing founders building infrastructure for the digital economy." className="w-full bg-[rgba(255,255,255,0.05)] border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-white focus:border-[var(--color-accent-primary)] outline-none resize-none" />
                                </div>

                                <div className="pt-4 border-t border-[var(--color-border)] flex justify-end">
                                    <button className="btn btn-primary gap-2">
                                        <Save size={18} /> Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'notifications' && (
                        <div className="glass-panel p-8 animate-fade-in">
                            <h2 className="text-xl font-bold text-white mb-6">Notification Preferences</h2>
                            <p className="text-[var(--color-text-secondary)] mb-6">Manage how you receive alerts and updates.</p>

                            <div className="space-y-6">
                                <div className="flex items-center justify-between py-4 border-b border-[var(--color-border)]">
                                    <div>
                                        <h3 className="font-medium text-white">Email Notifications</h3>
                                        <p className="text-sm text-[var(--color-text-secondary)]">Receive daily digests and critical alerts via email.</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" defaultChecked className="sr-only peer" />
                                        <div className="w-11 h-6 bg-[rgba(255,255,255,0.1)] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-accent-primary)]"></div>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between py-4 border-b border-[var(--color-border)]">
                                    <div>
                                        <h3 className="font-medium text-white">Push Notifications</h3>
                                        <p className="text-sm text-[var(--color-text-secondary)]">Real-time alerts on your mobile device.</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" defaultChecked className="sr-only peer" />
                                        <div className="w-11 h-6 bg-[rgba(255,255,255,0.1)] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-accent-primary)]"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'security' && (
                        <div className="glass-panel p-8 animate-fade-in">
                            <h2 className="text-xl font-bold text-white mb-6">Security Settings</h2>

                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <h3 className="font-medium text-white">Change Password</h3>
                                    <div className="grid grid-cols-1 gap-4">
                                        <input type="password" placeholder="Current Password" className="w-full bg-[rgba(255,255,255,0.05)] border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-white focus:border-[var(--color-accent-primary)] outline-none" />
                                        <input type="password" placeholder="New Password" className="w-full bg-[rgba(255,255,255,0.05)] border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-white focus:border-[var(--color-accent-primary)] outline-none" />
                                        <input type="password" placeholder="Confirm New Password" className="w-full bg-[rgba(255,255,255,0.05)] border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-white focus:border-[var(--color-accent-primary)] outline-none" />
                                    </div>
                                    <button className="btn btn-secondary">Update Password</button>
                                </div>

                                <div className="pt-6 border-t border-[var(--color-border)]">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-medium text-white">Two-Factor Authentication</h3>
                                            <p className="text-sm text-[var(--color-text-secondary)]">Add an extra layer of security to your account.</p>
                                        </div>
                                        <button className="btn btn-primary">Enable 2FA</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
