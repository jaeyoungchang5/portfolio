'use client'
import React, { useState, useTransition } from 'react'
import Button, { IButtonProps } from './Button';
import TabButton from './TabButton';

import TypeScriptIcon from '../../../public/icons/typescript-icon.svg';
import JavaScriptIcon from '../../../public/icons/javascript.svg';
import CSharpIcon from '../../../public/icons/c-sharp.svg';
import PythonIcon from '../../../public/icons/python.svg';
import CPlusPlusIcon from '../../../public/icons/c-plusplus.svg';
import JavaIcon from '../../../public/icons/java.svg';
import BashIcon from '../../../public/icons/bash-icon.svg';
import ArduinoIcon from '../../../public/icons/arduino.svg';
import SQLIcon from '../../../public/icons/mysql-icon.svg';
import SwiftIcon from '../../../public/icons/swift.svg';
import KotlinIcon from '../../../public/icons/kotlin-icon.svg';
import ReactIcon from '../../../public/icons/react.svg';
import DotnetIcon from '../../../public/icons/dotnet.svg';
import NodeIcon from '../../../public/icons/nodejs-icon.svg';
import MongoDBIcon from '../../../public/icons/mongodb-icon.svg';
import jQueryIcon from '../../../public/icons/jquery.svg';
import ReduxIcon from '../../../public/icons/redux.svg';
import GitIcon from '../../../public/icons/git-icon.svg';
import EpicIcon from '../../../public/icons/epic.svg';

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
    { text: 'TypeScript', icon: TypeScriptIcon, skillType: [SkillType.Languages] },
    { text: 'JavaScript', icon: JavaScriptIcon, skillType: [SkillType.Languages] },
    { text: 'C#', icon: CSharpIcon, skillType: [SkillType.Languages] },
    { text: 'Python', icon: PythonIcon, skillType: [SkillType.Languages] },
    { text: 'C/C++', icon: CPlusPlusIcon, skillType: [SkillType.Languages] },
    { text: 'Java', icon: JavaIcon, skillType: [SkillType.Languages] },
    { text: 'Bash', icon: BashIcon, skillType: [SkillType.Languages] },
    { text: 'MUMPS', icon: EpicIcon, skillType: [SkillType.Languages] },
    { text: 'Arduino', icon: ArduinoIcon, skillType: [SkillType.Languages] },
    { text: 'SQL', icon: SQLIcon, skillType: [SkillType.Languages] },
    { text: 'Swift', icon: SwiftIcon, skillType: [SkillType.Languages] },
    { text: 'Kotlin', icon: KotlinIcon, skillType: [SkillType.Languages] },
    { text: 'React', icon: ReactIcon, skillType: [SkillType.Frameworks] },
    { text: 'React Native', icon: ReactIcon, skillType: [SkillType.Frameworks] },
    { text: '.NET', icon: DotnetIcon, skillType: [SkillType.Frameworks] },
    { text: 'Express.js', icon: NodeIcon, skillType: [SkillType.Frameworks] },
    { text: 'MongoDB', icon: MongoDBIcon, skillType: [SkillType.Frameworks] },
    { text: 'jQuery', icon: jQueryIcon, skillType: [SkillType.Frameworks] },
    { text: 'Redux', icon: ReduxIcon, skillType: [SkillType.Frameworks] },
    { text: 'Caché', icon: EpicIcon, skillType: [SkillType.Frameworks] },
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
        <section className='sm:py-4 lg:py-8' id='skills'>
            <div className="place-self-center text-center text-slate-200 lg:text-left justify-self-start">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Skills
                </h2>

                <div className="flex flex-row justify-start mt-8">
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
                    <div className='bg-gradient-to-br from-blue-400 to-blue-900 rounded-lg p-2'>
                        {skills.map((skill, index) => {
                            if (tab === SkillType.All || skill.skillType.includes(tab)) {
                                return (
                                    <Button
                                        key={index}
                                        text={skill.text}
                                        icon={skill.icon}
                                        roundedness='rounded-lg'
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