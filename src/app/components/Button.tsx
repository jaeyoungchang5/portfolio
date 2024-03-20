import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export type IButtonProps = {
    text: string,
    link?: string,
    icon?: any,
    iconClasses?: string[],
    target?: string,
    roundedness?: string,
}

const Button = ({text, link, icon, iconClasses, target, roundedness}: IButtonProps) => {
    roundedness = roundedness || 'rounded';
    return (
        <div className={`px-1 mr-1.5 inline-block py-1 w-full sm:w-fit align-middle ${roundedness} bg-gradient-to-br from-blue-400 to-blue-700 hover:bg-slate-800 text-white mt-3`}>
            {link ? 
                <Link
                    href={link ? link : ''}
                    target={target ? target : ''}
                >
                    <ButtonInnerText
                        text={text}
                        icon={icon}
                        iconClasses={iconClasses}
                        roundedness={roundedness}
                    />
                </Link>
            :
                <ButtonInnerText
                    text={text}
                    icon={icon}
                    iconClasses={iconClasses}
                    roundedness={roundedness}
                />}
        </div>
    );
};

const ButtonInnerText = ({text, icon, iconClasses, roundedness}: IButtonProps) => {
    const additionalIconClasses: string | undefined = iconClasses?.join(' ');
    return (
        <span className={`flex bg-[#121212] hover:bg-slate-800 ${roundedness} px-4 py-2`}>
            { icon ? 
                <Image className={`self-center w-7 h-7 mr-1 ${additionalIconClasses}`} src={icon} alt="Mail Icon" />
            : 
                null
            }
            <p className="self-center pl-1">{text}</p>
        </span>
    )
}

export default Button