import React from 'react';
import Image from 'next/image';
import ExternalLink from './ExternalLink';

type PillProps = {
    label: string;
    icon?: string;
    invert?: boolean;
    href?: string;
    variant?: 'thin' | 'thick';
    rounded?: string;
};

const variants = {
    thin: 'border border-blue-400 m-1',
    thick: 'p-1 mr-1.5 mb-3 bg-gradient-to-br from-blue-400 to-blue-700 hover:bg-slate-800',
};

const Pill = ({ label, icon, invert, href, variant = 'thin', rounded = 'rounded' }: PillProps) => {
    const inner = (
        <span className={`flex px-2 py-1 md:px-3 md:py-2 bg-neutral-900 ${href ? 'hover:bg-slate-800' : ''} ${rounded}`}>
            {icon && (
                <Image
                    className={`self-center h-4 w-auto md:h-6 mr-1 ${invert ? 'invert' : ''}`}
                    src={`/icons/${icon}`}
                    alt=''
                    width={24}
                    height={24}
                    unoptimized
                />
            )}
            <span className={`self-center text-sm md:text-base ${icon ? 'pl-1' : ''}`}>{label}</span>
        </span>
    );

    return (
        <div className={`flex mr-1 my-1 text-white ${variants[variant]} ${rounded}`}>
            {href ? <ExternalLink href={href}>{inner}</ExternalLink> : inner}
        </div>
    );
};

export default Pill;
