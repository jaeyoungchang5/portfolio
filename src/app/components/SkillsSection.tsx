'use client'
import React, { useState, useTransition } from 'react'
import Button from './Button';
import Tabs from './Tabs';
import { BorderRoundness, BorderType, ITabProps, SkillType } from '../types';
import { skills } from '../content';

const SkillsSection = () => {
    const [tab, setTab] = useState(SkillType.All);
    const [isPending, startTransition] = useTransition();
    const tabs: ITabProps[] = [
        { tab: SkillType.All, text: 'All' },
        { tab: SkillType.Languages, text: 'Languages' },
        { tab: SkillType.Frameworks, text: 'Frameworks' },
        { tab: SkillType.Web, text: 'Web' },
        { tab: SkillType.Tools, text: 'Tools' },
    ];

    const handleTabChange = (skillType: SkillType) => {
        startTransition(() => {
            setTab(skillType);
        });
    };

    return (
        <section className='' id='skills'>
            <div className="text-left text-slate-200 place-self-center  justify-self-start">
                <h2 className="text-4xl font-bold text-blue-400 mb-4">
                    Skills
                </h2>

                <div className="justify-start mt-8 flex flex-row">
                    <Tabs tabs={tabs} currentTab={tab} updateTabCallback={handleTabChange} />
                </div>
                
                <div className='justify-center lg:justify-start flex flex-row flex-wrap bg-gray-800 border border-gray-700 rounded-lg p-2'>
                    {skills.map((skill, index) => {
                        if (tab === SkillType.All || skill.skillType.includes(tab)) {
                            return (
                                <Button
                                    key={index}
                                    icon={skill.icon}
                                    border={BorderType.thin}
                                    roundedness={BorderRoundness.normal}
                                />
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection