'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import { getTech, profile, skillIds, type IconOnDark, type TechCategory } from '@/content';

type Filter = TechCategory | 'all' | 'hobbies';

// Order here is the order of the filter tabs.
const filters: { value: Filter; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'language', label: 'Languages' },
    { value: 'framework', label: 'Frameworks' },
    { value: 'web', label: 'Web' },
    { value: 'database', label: 'Data' },
    { value: 'tool', label: 'Tools' },
    { value: 'hobbies', label: 'Hobbies' },
];

const onDarkClass: Record<IconOnDark, string> = {
    invert: 'dark:invert',
    brighten: 'dark:brightness-[1.8]',
};

const Chip = ({ label, icon, onDark }: { label: string; icon?: string; onDark?: IconOnDark }) => (
    <li className='inline-flex items-center gap-2 rounded-full border border-rule bg-surface px-3 py-1.5 text-detail text-ink'>
        {icon && (
            <Image
                src={`/icons/${icon}`}
                alt=''
                width={18}
                height={18}
                unoptimized
                className={`h-[18px] w-[18px] ${onDark ? onDarkClass[onDark] : ''}`}
            />
        )}
        {label}
    </li>
);

const SkillsSection = () => {
    const [filter, setFilter] = useState<Filter>('all');
    const skills =
        filter === 'hobbies' ? [] : skillIds.filter(id => filter === 'all' || getTech(id).categories.includes(filter));
    const showHobbies = filter === 'all' || filter === 'hobbies';

    return (
        <Section id='skills' title='Skills'>
            {/* Wraps onto two lines on phones; the full-width rule only shows once it fits on one line. */}
            <div className='mb-8 flex flex-wrap gap-x-6 gap-y-3 text-detail sm:border-b sm:border-rule-soft'>
                {filters.map(f => (
                    <button
                        key={f.value}
                        type='button'
                        aria-pressed={filter === f.value}
                        onClick={() => setFilter(f.value)}
                        className={`border-b-2 pb-1.5 transition-colors sm:-mb-px sm:pb-2.5 ${
                            filter === f.value
                                ? 'border-accent text-ink'
                                : 'border-transparent text-muted hover:text-ink'
                        }`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            <ul className='flex flex-wrap gap-2'>
                {skills.map(id => (
                    <Chip key={id} {...getTech(id)} />
                ))}
                {showHobbies && profile.hobbies.map(hobby => <Chip key={hobby.label} {...hobby} onDark='invert' />)}
            </ul>
        </Section>
    );
};

export default SkillsSection;
