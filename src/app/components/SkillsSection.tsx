'use client'
import React, { useState, useTransition } from 'react'
import Button from './Button';
import TabButton from './TabButton';
import { IButtonProps } from '../types';

enum SkillType {
    All,
    Languages,
    Frameworks,
    Frontend,
    Backend,
    Web,
    Mobile,
    Database
}

type Skills = IButtonProps & { skillType: number[] }

const skills: Array<Skills> = [
    { icon: 'TypeScript', skillType: [SkillType.Languages] },
    { icon: 'JavaScript', skillType: [SkillType.Languages] },
    { icon: 'CSharp', skillType: [SkillType.Languages] },
    { icon: 'Python', skillType: [SkillType.Languages] },
    { icon: 'CPlusPlus', skillType: [SkillType.Languages] },
    { icon: 'Java', skillType: [SkillType.Languages] },
    { icon: 'Bash', skillType: [SkillType.Languages] },
    { icon: 'MUMPS', skillType: [SkillType.Languages] },
    { icon: 'Arduino', skillType: [SkillType.Languages] },
    { icon: 'SQL', skillType: [SkillType.Languages] },
    { icon: 'Swift', skillType: [SkillType.Languages] },
    { icon: 'Kotlin', skillType: [SkillType.Languages] },
    { icon: 'React', skillType: [SkillType.Frameworks] },
    { icon: 'ReactNative', skillType: [SkillType.Frameworks] },
    { icon: 'Dotnet', skillType: [SkillType.Frameworks] },
    { icon: 'Express', skillType: [SkillType.Frameworks] },
    { icon: 'MongoDB', skillType: [SkillType.Frameworks] },
    { icon: 'jQuery', skillType: [SkillType.Frameworks] },
    { icon: 'Redux', skillType: [SkillType.Frameworks] },
    { icon: 'Cache', skillType: [SkillType.Frameworks] },
];

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
            <div className="place-self-center text-center text-slate-200 lg:text-left justify-self-start">
                <h2 className="text-4xl font-bold text-blue-400 mb-4">
                    My Skills
                </h2>

                <div className="flex flex-row lg:justify-start justify-center mt-8">
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
                <div>
                    <div className='bg-gray-800 border border-gray-700 rounded-lg p-2'>
                        {skills.map((skill, index) => {
                            if (tab === SkillType.All || skill.skillType.includes(tab)) {
                                return (
                                    <Button
                                        key={index}
                                        icon={skill.icon}
                                        roundedness='rounded-lg'
                                        buttonClasses={['border border-blue-400', 'm-1']}
                                    />
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsSection