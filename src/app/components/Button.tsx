import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IButtonProps } from '../types';

import GithubIcon from "../../../public/icons/github-icon.svg";
import LinkedinIcon from "../../../public/icons/linkedin-icon.svg";
import MailIcon from "../../../public/icons/mail-icon.svg"
import DownloadIcon from "../../../public/icons/download-icon.svg"
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

const svgIcons: { [Name: string]: IButtonProps } = {
    GitHub: { text: 'GitHub', icon: GithubIcon },
    LinkedIn: { text: 'LinkedIn', icon: LinkedinIcon },
    Mail: { text: 'Email me', icon: MailIcon },
    Download: { text: 'Download', icon: DownloadIcon },
    TypeScript: { text: 'TypeScript', icon: TypeScriptIcon },
    JavaScript: { text: 'JavaScript', icon: JavaScriptIcon },
    CSharp: { text: 'C#', icon: CSharpIcon },
    Python: { text: 'Python', icon: PythonIcon },
    CPlusPlus: { text: 'C/C++', icon: CPlusPlusIcon },
    Java: { text: 'Java', icon: JavaIcon },
    Bash: { text: 'Bash', icon: BashIcon },
    MUMPS: { text: 'MUMPS', icon: EpicIcon },
    Arduino: { text: 'Arduino', icon: ArduinoIcon },
    SQL: { text: 'SQL', icon: SQLIcon },
    Swift: { text: 'Swift', icon: SwiftIcon },
    Kotlin: { text: 'Kotlin', icon: KotlinIcon },
    React: { text: 'React', icon: ReactIcon },
    ReactNative: { text: 'React Native', icon: ReactIcon },
    Dotnet: { text: '.NET', icon: DotnetIcon },
    Express: { text: 'Express.js', icon: NodeIcon },
    MongoDB: { text: 'MongoDB', icon: MongoDBIcon },
    jQuery: { text: 'jQuery', icon: jQueryIcon },
    Redux: { text: 'Redux', icon: ReduxIcon },
    Cache: { text: 'Caché', icon: EpicIcon },
    Git: { text: 'Git', icon: GitIcon }
}

const Button = ({text, link, target, border, roundedness, icon, iconInvert}: IButtonProps) => {
    if (!text && icon && svgIcons[icon] && svgIcons[icon].text) {
        text = svgIcons[icon].text
    } else if (!text && icon && !svgIcons[icon]){
        text = icon;
    }

    return (
        <div className={`flex mr-1 my-1 text-white ${border} ${roundedness}`}>
            {link ? 
                <Link
                    href={link}
                    target={target ? target : ''}
                >
                    <ButtonInnerText
                        text={text}
                        link={link}
                        roundedness={roundedness}
                        icon={icon}
                        iconInvert={iconInvert}
                    />
                </Link>
            :
                <ButtonInnerText
                    text={text}
                    link={link}
                    roundedness={roundedness}
                    icon={icon}
                    iconInvert={iconInvert}
                />}
        </div>
    );
};

const ButtonInnerText = ({text, icon, link, roundedness, iconInvert}: IButtonProps) => {
    const svgIcon = (icon && svgIcons[icon]) ? svgIcons[icon].icon : undefined;
    return (
        <span className={`flex px-2 py-1 md:px-3 md:py-2 bg-[#121212] ${link && 'hover:bg-slate-800'} ${roundedness}`}>
            { svgIcon ? 
                <Image className={`self-center w-4 h-5 md:w-7 md:h-7 mr-1 ${iconInvert && 'invert'}`} src={svgIcon} alt='Icon' />
            : 
                null
            }
            <p className="self-center text-sm md:text-base pl-1">{text}</p>
        </span>
    )
}

export default Button