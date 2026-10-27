import React from 'react';
import Pill from './Pill';
import { profile, type SocialLink } from '@/content';

const icons: Record<SocialLink['kind'], { icon: string; invert?: boolean }> = {
    email: { icon: 'mail-icon.svg', invert: true },
    github: { icon: 'github-icon.svg' },
    linkedin: { icon: 'linkedin-icon.svg' },
    resume: { icon: 'resume.svg', invert: true },
};

const SocialLinks = () => (
    <div className='justify-center lg:justify-start flex flex-row flex-wrap'>
        {profile.links.map((link) => (
            <Pill
                key={link.kind}
                label={link.label}
                href={link.href}
                variant='thick'
                rounded='rounded-full'
                {...icons[link.kind]}
            />
        ))}
    </div>
);

export default SocialLinks;
