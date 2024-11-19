import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IButtonProps } from '../types';

import GithubIcon from '../../../public/icons/github-icon.svg';
import LinkedinIcon from '../../../public/icons/linkedin-icon.svg';
import MailIcon from '../../../public/icons/mail-icon.svg';
import DownloadIcon from '../../../public/icons/download-icon.svg';
import ResumeIcon from '../../../public/icons/resume.svg';
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
import NextIcon from '../../../public/icons/nextjs-icon.svg';
import PuppeteerIcon from '../../../public/icons/puppeteer.svg';
import SoccerIcon from '../../../public/icons/soccerball.svg';
import TennisIcon from '../../../public/icons/tennis.svg';
import GolfIcon from '../../../public/icons/golf.svg';
import GaelicIcon from '../../../public/icons/gaelic-football.svg';
import HurlingIcon from '../../../public/icons/hurling.svg';
import WoodworkingIcon from '../../../public/icons/woodwork.svg';
import GuitarIcon from '../../../public/icons/guitar.svg';
import PianoIcon from '../../../public/icons/piano.svg';
import SaxophoneIcon from '../../../public/icons/saxophone.svg';
import FishingIcon from '../../../public/icons/fishing.svg';
import gRPCIcon from '../../../public/icons/grpc.svg';
import GolangIcon from '../../../public/icons/go-8.svg';
import PostgreSQLIcon from '../../../public/icons/postgresql.svg';
import KubernetesIcon from '../../../public/icons/kubernetes.svg';
import DockerIcon from '../../../public/icons/docker.svg';

const svgIcons: { [Name: string]: IButtonProps } = {
    GitHub: { text: 'GitHub', icon: GithubIcon },
    LinkedIn: { text: 'LinkedIn', icon: LinkedinIcon },
    Mail: { text: 'Email me', icon: MailIcon, iconInvert: true },
    Download: { text: 'Download', icon: DownloadIcon, iconInvert: true },
    Resume: { text: 'Resume', icon: ResumeIcon, iconInvert: true },
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
    Firebase: { text: 'Firebase', icon: FirebaseIcon },
    Heroku: { text: 'Heroku', icon: HerokuIcon },
    Netlify: { text: 'Netlify', icon: NetlifyIcon },
    Vercel: { text: 'Vercel', icon: VercelIcon, iconInvert: true },
    Salesforce: { text: 'Salesforce', icon: SalesforceIcon },
    Postman: { text: 'Postman', icon: PostmanIcon },
    Markdown: { text: 'Markdown', icon: MarkdownIcon, iconInvert: true },
    Next: { text: 'Next.js', icon: NextIcon, iconInvert: true },
    Puppeteer: { text: 'Puppeteer', icon: PuppeteerIcon },
    Soccer: { text: 'Soccer', icon: SoccerIcon, iconInvert: true },
    Tennis: { text: 'Tennis', icon: TennisIcon, iconInvert: true },
    Golf: { text: 'Golf', icon: GolfIcon, iconInvert: true },
    Pickleball: { text: 'Pickleball', icon: TennisIcon, iconInvert: true },
    Gaelic: { text: 'Gaelic Football', icon: GaelicIcon, iconInvert: true },
    Hurling: { text: 'Hurling', icon: HurlingIcon, iconInvert: true },
    Woodworking: { text: 'Woodworking', icon: WoodworkingIcon, iconInvert: true },
    Fishing: { text: 'Fishing', icon: FishingIcon, iconInvert: true },
    Guitar: { text: 'Guitar', icon: GuitarIcon, iconInvert: true },
    Piano: { text: 'Piano', icon: PianoIcon, iconInvert: true },
    Saxophone: { text: 'Saxophone', icon: SaxophoneIcon, iconInvert: true },
    gRPC: { text: 'gRPC', icon: gRPCIcon },
    Golang: { text: 'Golang', icon: GolangIcon },
    PostgreSQL: { text: 'PostgreSQL', icon: PostgreSQLIcon },
    Kubernetes: { text: 'Kubernetes', icon: KubernetesIcon },
    Docker: { text: 'Docker', icon: DockerIcon },
};

const Button = ({ text, link, target, border, roundedness, icon }: IButtonProps) => {
    if (!text && icon && svgIcons[icon] && svgIcons[icon].text) {
        text = svgIcons[icon].text;
    } else if (!text && icon && !svgIcons[icon]) {
        text = icon;
    }

    return (
        <div className={`flex mr-1 my-1 text-white ${border} ${roundedness}`}>
            {link ? (
                <Link href={link} target={target ? target : ''}>
                    <ButtonInnerText text={text} link={link} roundedness={roundedness} icon={icon} />
                </Link>
            ) : (
                <ButtonInnerText text={text} link={link} roundedness={roundedness} icon={icon} />
            )}
        </div>
    );
};

const ButtonInnerText = ({ text, icon, link, roundedness }: IButtonProps) => {
    const svgIcon = icon && svgIcons[icon] ? svgIcons[icon].icon : undefined;
    const iconInvert = icon && svgIcons[icon] ? svgIcons[icon].iconInvert : false;
    return (
        <span
            className={`flex px-2 py-1 md:px-3 md:py-2 bg-neutral-900 ${link && 'hover:bg-slate-800'} ${roundedness}`}
        >
            {svgIcon ? (
                <Image
                    className={`self-center h-4 w-auto md:h-6 md:w-auto mr-1 ${iconInvert && 'invert'}`}
                    src={svgIcon}
                    alt={`${text}`}
                />
            ) : null}
            <p className={`self-center text-sm md:text-base ${svgIcon && 'pl-1'}`}>{text}</p>
        </span>
    );
};

export default Button;
