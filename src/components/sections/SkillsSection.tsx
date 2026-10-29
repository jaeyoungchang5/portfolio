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
            {/* Scrolls sideways on phones when the tabs don't fit. */}
            <div className='no-scrollbar -mx-4 mb-8 overflow-x-auto px-4 sm:mx-0 sm:px-0'>
                <div className='flex gap-6 whitespace-nowrap border-b border-rule-soft text-detail'>
                    {filters.map(f => (
                        <button
                            key={f.value}
                            type='button'
                            aria-pressed={filter === f.value}
                            onClick={() => setFilter(f.value)}
                            className={`-mb-px border-b-2 pb-2.5 transition-colors ${
                                filter === f.value
                                    ? 'border-accent text-ink'
                                    : 'border-transparent text-muted hover:text-ink'
                            }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>
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
