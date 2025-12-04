'use client';

import { Linkedin, Twitter } from 'lucide-react';

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
    linkedin?: string;
    twitter?: string;
}

interface TeamSectionProps {
    members: TeamMember[];
}

export default function TeamSection({ members }: TeamSectionProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {members.map((member, index) => (
                <div key={index} className="glass-panel p-6 flex gap-4 items-start group hover:border-[var(--color-accent-primary)] transition-colors">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-[var(--color-border)] group-hover:border-[var(--color-accent-primary)] transition-colors"
                    />
                    <div>
                        <h3 className="font-bold text-white text-lg">{member.name}</h3>
                        <p className="text-[var(--color-accent-primary)] text-sm font-medium mb-2">{member.role}</p>
                        <p className="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-3">
                            {member.bio}
                        </p>
                        <div className="flex gap-3">
                            {member.linkedin && (
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[#0077b5] transition-colors">
                                    <Linkedin size={18} />
                                </a>
                            )}
                            {member.twitter && (
                                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[#1DA1F2] transition-colors">
                                    <Twitter size={18} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
