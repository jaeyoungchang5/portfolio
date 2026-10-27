'use client';
import React, { useState } from 'react';
import Pill from './Pill';
import TechPill from './TechPill';
import Tabs, { type Tab } from './Tabs';
import { getTech, profile, skillIds, type TechCategory } from '@/content';

type Filter = TechCategory | 'all' | 'hobbies';

const tabs: Tab<Filter>[] = [
    { value: 'all', label: 'All' },
    { value: 'language', label: 'Languages' },
    { value: 'framework', label: 'Frameworks' },
    { value: 'web', label: 'Web' },
    { value: 'tool', label: 'Tools' },
    { value: 'hobbies', label: 'Hobbies' },
];

const SkillsSection = () => {
    const [filter, setFilter] = useState<Filter>('all');
    const showHobbies = filter === 'all' || filter === 'hobbies';
    const visibleSkills =
        filter === 'hobbies'
            ? []
            : skillIds.filter((id) => filter === 'all' || getTech(id).categories.includes(filter));

    return (
        <section id='skills'>
            <div className='text-left text-slate-200 place-self-center justify-self-start'>
                <h2 className='text-4xl font-bold text-blue-400 mb-4'>Skills</h2>

                <div className='justify-start my-2 flex flex-row'>
                    <Tabs tabs={tabs} current={filter} onChange={setFilter} />
                </div>

                <div className='justify-center lg:justify-start flex flex-row flex-wrap bg-gray-800 border border-gray-700 rounded-lg p-2'>
                    {visibleSkills.map((id) => (
                        <TechPill key={id} id={id} />
                    ))}
                    {showHobbies &&
                        profile.hobbies.map((hobby) => (
                            <Pill key={hobby.label} label={hobby.label} icon={hobby.icon} invert />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
