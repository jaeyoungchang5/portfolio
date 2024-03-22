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
import ExpoIcon from '../../../public/icons/expo-icon.svg';
import SassIcon from '../../../public/icons/sass.svg';
import HTMLIcon from '../../../public/icons/html-5.svg';
import CSSIcon from '../../../public/icons/css-3.svg';
import TailwindIcon from '../../../public/icons/tailwindcss-icon.svg';
import FirebaseIcon from '../../../public/icons/firebase.svg';
import HerokuIcon from '../../../public/icons/heroku-icon.svg';
import NetlifyIcon from '../../../public/icons/netlify-icon.svg';
import VercelIcon from '../../../public/icons/vercel-icon.svg';
import SalesforceIcon from '../../../public/icons/salesforce.svg';
import PostmanIcon from '../../../public/icons/postman-icon.svg';
import MarkdownIcon from '../../../public/icons/markdown.svg';
import NextIcon from '../../../public/icons/nextjs-icon.svg'
import PuppeteerIcon from '../../../public/icons/puppeteer.svg';

const svgIcons: { [Name: string]: IButtonProps } = {
    GitHub: { text: 'GitHub', icon: GithubIcon },
    LinkedIn: { text: 'LinkedIn', icon: LinkedinIcon },
    Mail: { text: 'Email me', icon: MailIcon, iconInvert: true },
    Download: { text: 'Download', icon: DownloadIcon, iconInvert: true },
    TypeScript: { text: 'TypeScript', icon: TypeScriptIcon },
    JavaScript: { text: 'JavaScript', icon: JavaScriptIcon },
    CSharp: { text: 'C#', icon: CSharpIcon },
    Python: { text: 'Python', icon: PythonIcon },
    CPlusPlus: { text: 'C/C++', icon: CPlusPlusIcon },
    Java: { text: 'Java', icon: JavaIcon },
    Bash: { text: 'Bash', icon: BashIcon },
    Arduino: { text: 'Arduino', icon: ArduinoIcon },
    SQL: { text: 'SQL', icon: SQLIcon },
    Swift: { text: 'Swift', icon: SwiftIcon },
    Kotlin: { text: 'Kotlin', icon: KotlinIcon },
    React: { text: 'React', icon: ReactIcon },
    ReactNative: { text: 'React Native', icon: ReactIcon },
    Dotnet: { text: '.NET', icon: DotnetIcon },
    Node: { text: 'Node.js', icon: NodeIcon },
    Express: { text: 'Express.js', icon: NodeIcon },
    MongoDB: { text: 'MongoDB', icon: MongoDBIcon },
    jQuery: { text: 'jQuery', icon: jQueryIcon },
    Redux: { text: 'Redux', icon: ReduxIcon },
    Cache: { text: 'Caché', icon: EpicIcon },
    Git: { text: 'Git', icon: GitIcon },
    Expo: { text: 'Expo', icon: ExpoIcon, iconInvert: true },
    Sass: { text: 'Sass', icon: SassIcon },
    HTML: { text: 'HTML', icon: HTMLIcon },
    CSS: { text: 'CSS', icon: CSSIcon },
    Tailwind: { text: 'Tailwind CSS', icon: TailwindIcon },
    Firebase: { text:'Firebase', icon: FirebaseIcon },
    Heroku: { text: 'Heroku', icon: HerokuIcon },
    Netlify: { text: 'Netlify', icon: NetlifyIcon },
    Vercel: { text: 'Vercel', icon: VercelIcon, iconInvert: true },
    Salesforce: { text: 'Salesforce', icon: SalesforceIcon },
    Postman: { text: 'Postman', icon: PostmanIcon },
    Markdown: { text: 'Markdown', icon: MarkdownIcon, iconInvert: true },
    Next: { text: 'Next.js', icon: NextIcon, iconInvert: true },
    Puppeteer: { text: 'Puppeteer', icon: PuppeteerIcon },
}

const Button = ({text, link, target, border, roundedness, icon }: IButtonProps) => {
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
                    />
                </Link>
            :
                <ButtonInnerText
                    text={text}
                    link={link}
                    roundedness={roundedness}
                    icon={icon}
                />}
        </div>
    );
};

const ButtonInnerText = ({text, icon, link, roundedness }: IButtonProps) => {
    const svgIcon = (icon && svgIcons[icon]) ? svgIcons[icon].icon : undefined;
    const iconInvert = (icon && svgIcons[icon]) ? svgIcons[icon].iconInvert : false;
    return (
        <span className={`flex px-2 py-1 md:px-3 md:py-2 bg-neutral-900 ${link && 'hover:bg-slate-800'} ${roundedness}`}>
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