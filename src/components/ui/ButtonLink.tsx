import React from 'react';
import Anchor from './Anchor';

const variants = {
    primary: 'bg-accent font-medium text-accent-contrast hover:bg-accent-hover',
    outline: 'border border-outline text-ink hover:border-ink',
};

type ButtonLinkProps = {
    href: string;
    variant?: keyof typeof variants;
    className?: string;
    children: React.ReactNode;
};

/** A link styled as a button. */
const ButtonLink = ({ href, variant = 'outline', className = '', children }: ButtonLinkProps) => (
    <Anchor
        href={href}
        className={`inline-flex min-h-11 items-center justify-center gap-2 rounded px-5 transition-colors ${variants[variant]} ${className}`}
    >
        {children}
    </Anchor>
);

export default ButtonLink;
