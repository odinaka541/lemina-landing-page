'use client'

import { useState } from 'react'
import { Check, ChevronRight, Globe, Target, Wallet, Bell, Search, BarChart2, ShieldCheck, Zap } from 'lucide-react'

interface StepProps {
    onNext: (data?: any) => void
    onBack?: () => void
    data?: any
}

export function WelcomeStep({ onNext }: StepProps) {
    return (
        <div className="text-center max-w-2xl mx-auto animate-fade-in">
            <div className="w-20 h-20 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <span className="text-4xl">👋</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Welcome to Lemina</h1>
            <p className="text-xl text-gray-400 mb-12">
                We're building the definitive intelligence platform for African tech.
                Let's personalize your experience to help you find the best opportunities.
            </p>
            <button onClick={() => onNext()} className="btn btn-primary w-full md:w-auto px-12 py-4 text-lg">
                Get Started <ChevronRight className="w-5 h-5 ml-2" />
            </button>
        </div>
    )
}

export function ThesisStep({ onNext, onBack, data }: StepProps) {
    const [sectors, setSectors] = useState<string[]>(data?.sectors || [])
    const [stages, setStages] = useState<string[]>(data?.stages || [])
    const [regions, setRegions] = useState<string[]>(data?.regions || [])

    const toggleSelection = (list: string[], setList: any, item: string) => {
        if (list.includes(item)) {
            setList(list.filter(i => i !== item))
        } else {
            setList([...list, item])
        }
    }

    const SECTORS = ['Fintech', 'Healthtech', 'AgriTech', 'Logistics', 'Cleantech', 'Edtech', 'E-commerce', 'SaaS']
    const STAGES = ['Pre-Seed', 'Seed', 'Series A', 'Series B+']
    const REGIONS = ['West Africa', 'East Africa', 'North Africa', 'Southern Africa', 'Central Africa']

    return (
        <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-2">Investment Thesis</h2>
            <p className="text-gray-400 mb-8">Select your preferences to get tailored deal flow.</p>

            <div className="space-y-8">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-emerald-500" /> Sectors of Interest
                    </label>
                    <div className="flex flex-wrap gap-3">
                        {SECTORS.map(sector => (
                            <button
                                key={sector}
                                onClick={() => toggleSelection(sectors, setSectors, sector)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${sectors.includes(sector)
                                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20'
                                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-700'
                                    }`}
                            >
                                {sector}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                        <BarChart2 className="w-4 h-4 text-emerald-500" /> Investment Stage
                    </label>
                    <div className="flex flex-wrap gap-3">
                        {STAGES.map(stage => (
                            <button
                                key={stage}
                                onClick={() => toggleSelection(stages, setStages, stage)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${stages.includes(stage)
                                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20'
                                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-700'
                                    }`}
                            >
                                {stage}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-emerald-500" /> Geographic Focus
                    </label>
                    <div className="flex flex-wrap gap-3">
                        {REGIONS.map(region => (
                            <button
                                key={region}
                                onClick={() => toggleSelection(regions, setRegions, region)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${regions.includes(region)
                                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20'
                                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-700'
                                    }`}
                            >
                                {region}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-between mt-12">
                <button onClick={onBack} className="text-gray-400 hover:text-white font-medium px-6 py-3">
                    Back
                </button>
                <button
                    onClick={() => onNext({ sectors, stages, regions })}
                    className="btn btn-primary px-8 py-3"
                >
                    Continue
                </button>
            </div>
        </div>
    )
}

export function AlertStep({ onNext, onBack }: StepProps) {
    const [alerts, setAlerts] = useState({
        newDeals: true,
        marketReports: true,
        portfolioUpdates: true,
        competitorActivity: false
    })

    return (
        <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-2">Stay Updated</h2>
            <p className="text-gray-400 mb-8">Configure your real-time notifications.</p>

            <div className="space-y-4">
                {[
                    { id: 'newDeals', label: 'New Deal Matches', desc: 'Get notified when a startup matches your thesis', icon: Zap },
                    { id: 'marketReports', label: 'Market Intelligence', desc: 'Weekly summaries of African tech ecosystem', icon: BarChart2 },
                    { id: 'portfolioUpdates', label: 'Portfolio Updates', desc: 'News and metric changes from your portfolio', icon: Wallet },
                    { id: 'competitorActivity', label: 'Competitor Activity', desc: 'Track moves from competing startups', icon: Search },
                ].map((item) => (
                    <div
                        key={item.id}
                        className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${alerts[item.id as keyof typeof alerts]
                                ? 'bg-emerald-900/10 border-emerald-500/50'
                                : 'bg-gray-800/30 border-gray-800 hover:border-gray-700'
                            }`}
                        onClick={() => setAlerts({ ...alerts, [item.id]: !alerts[item.id as keyof typeof alerts] })}
                    >
                        <div className={`mt-1 p-2 rounded-lg ${alerts[item.id as keyof typeof alerts] ? 'bg-emerald-500/20 text-emerald-500' : 'bg-gray-800 text-gray-400'}`}>
                            <item.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <h3 className={`font-semibold ${alerts[item.id as keyof typeof alerts] ? 'text-white' : 'text-gray-300'}`}>
                                    {item.label}
                                </h3>
                                {alerts[item.id as keyof typeof alerts] && <Check className="w-5 h-5 text-emerald-500" />}
                            </div>
                            <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-between mt-12">
                <button onClick={onBack} className="text-gray-400 hover:text-white font-medium px-6 py-3">
                    Back
                </button>
                <button
                    onClick={() => onNext({ alerts })}
                    className="btn btn-primary px-8 py-3"
                >
                    Continue
                </button>
            </div>
        </div>
    )
}

export function TourStep({ onNext, onBack }: StepProps) {
    return (
        <div className="max-w-4xl mx-auto animate-fade-in text-center">
            <h2 className="text-3xl font-bold text-white mb-2">You're All Set!</h2>
            <p className="text-gray-400 mb-12">Here's a quick overview of what you can do.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gray-800/30 border border-gray-700/50 p-6 rounded-2xl hover:border-emerald-500/30 transition-all group">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Search className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Discover</h3>
                    <p className="text-sm text-gray-400">Advanced search across 5,000+ verified African startups.</p>
                </div>

                <div className="bg-gray-800/30 border border-gray-700/50 p-6 rounded-2xl hover:border-emerald-500/30 transition-all group">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <ShieldCheck className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Verify</h3>
                    <p className="text-sm text-gray-400">Deep dive into metrics, team background, and funding history.</p>
                </div>

                <div className="bg-gray-800/30 border border-gray-700/50 p-6 rounded-2xl hover:border-emerald-500/30 transition-all group">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Wallet className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Track</h3>
                    <p className="text-sm text-gray-400">Manage your deal flow pipeline and portfolio performance.</p>
                </div>
            </div>

            <button
                onClick={() => onNext()}
                className="btn btn-primary px-12 py-4 text-lg shadow-xl shadow-emerald-900/20"
            >
                Go to Dashboard
            </button>
        </div>
    )
}
