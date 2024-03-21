'use client'
import React, { useState, useTransition } from 'react'
import Button from './Button';
import TabButton from './TabButton';
import { BorderRoundness, BorderType, SkillType } from '../types';
import { skills } from '../content';





const SkillsSection = () => {
    const [tab, setTab] = useState(SkillType.All);
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (skillType: SkillType) => {
        startTransition(() => {
            setTab(skillType);
        });
    };

    return (
        <section className='' id='skills'>
            <div className="text-left text-slate-200 place-self-center  justify-self-start">
                <h2 className="text-4xl font-bold text-blue-400 mb-4">
                    My Skills
                </h2>

                <div className="justify-start mt-8 flex flex-row">
                    <TabButton
                        selectTab={() => handleTabChange(SkillType.All)}
                        active={tab === SkillType.All}
                    >
                        {" "}
                        All{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange(SkillType.Languages)}
                        active={tab === SkillType.Languages}
                    >
                        {" "}
                        Languages{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange(SkillType.Frameworks)}
                        active={tab === SkillType.Frameworks}
                    >
                        {" "}
                        Frameworks{" "}
                    </TabButton>
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