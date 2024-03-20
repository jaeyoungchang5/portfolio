import React from 'react'
import Button, { IButtonProps } from './Button';

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

const languages: Array<IButtonProps> = [
    {
        text: 'TypeScript',
        icon: TypeScriptIcon
    },
    {
        text: 'JavaScript',
        icon: JavaScriptIcon
    },
    {
        text: 'C#',
        icon: CSharpIcon
    },
    {
        text: 'Python',
        icon: PythonIcon
    },
    {
        text: 'C/C++',
        icon: CSharpIcon
    },
    {
        text: 'Java',
        icon: JavaIcon
    },
    {
        text: 'Bash',
        icon: BashIcon
    },
    {
        text: 'MUMPS'
    },
    {
        text: 'Arduino',
        icon: ArduinoIcon
    },
    {
        text: 'SQL',
        icon: SQLIcon
    },
    {
        text: 'Swift',
        icon: SwiftIcon
    },
    {
        text: 'Kotlin',
        icon: KotlinIcon
    }
]
const SkillsSection = () => {
    return (
        <section className='sm:py-2 lg:py-8' id='skills'>
            <div className="place-self-center text-center text-slate-200 lg:text-left justify-self-start">
                <h2 className="text-4xl font-bold text-white mt-10 mb-8 md:mb-12">
                    My Skills
                </h2>
                <div>
                    {languages.map((language, index) => {
                        return (
                            <Button
                                key={index}
                                text={language.text}
                                icon={language.icon}
                                roundedness='rounded-lg'
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection