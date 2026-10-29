import React from 'react';
import ButtonLink from './ButtonLink';
import SocialIcon from './SocialIcon';
import { linkOf, type SocialLink } from '@/content';

/** Outlined button with the network's logo, e.g. GitHub or LinkedIn. */
const SocialButton = ({ kind, label }: { kind: SocialLink['kind']; label?: string }) => (
    <ButtonLink href={linkOf(kind).href}>
        <SocialIcon kind={kind} />
        {label ?? linkOf(kind).label}
    </ButtonLink>
);

export default SocialButton;
