import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export type IButtonProps = {
    text: string,
    link?: string,
    icon?: any,
    iconClasses?: string[],
    target?: string,
}

const Button = ({text, link, icon, iconClasses, target}: IButtonProps) => {
    const additionalIconClasses: string | undefined = iconClasses?.join(' ');
    const iconClassString = 'self-center w-7 h-7 mr-1 ' + additionalIconClasses;
    return (
        <Link
            href={link ? link : ''}
            target={target ? target : ''}
            className="px-1 mr-3 inline-block py-1 w-full sm:w-fit align-middle rounded-full bg-gradient-to-br from-blue-400 to-blue-700 hover:bg-slate-800 text-white mt-3"
        >
            <span className="flex bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2">
                { icon ? 
                    <Image className={iconClassString} src={icon} alt="Mail Icon" />
                : 
                    null
                }
                <p className="self-center pl-1">{text}</p>
            </span>
        </Link>
    );
};

export default Button