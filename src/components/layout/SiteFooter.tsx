import React from 'react';
import Anchor from '@/components/ui/Anchor';
import SocialIcon from '@/components/ui/SocialIcon';
import { linkOf, profile } from '@/content';

const SiteFooter = () => (
    <footer className='flex flex-wrap items-center justify-between gap-4 border-t border-rule pb-14 pt-10 text-sm text-muted'>
        <span>
            © {new Date().getFullYear()} {profile.name}
        </span>
        <ul className='flex flex-wrap gap-x-6 gap-y-2'>
            <li>
                <Anchor href={linkOf('email').href} className='text-link'>
                    {profile.email}
                </Anchor>
            </li>
            {(['github', 'linkedin'] as const).map(kind => (
                <li key={kind}>
                    <Anchor href={linkOf(kind).href} className='inline-flex items-center gap-1.5 hover:text-ink'>
                        <SocialIcon kind={kind} className='h-4 w-4' />
                        {linkOf(kind).label}
                    </Anchor>
                </li>
            ))}
        </ul>
    </footer>
);

export default SiteFooter;
