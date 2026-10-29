import React from 'react';
import ExternalLink from './ExternalLink';
import type { Organization } from '@/content';

const OrgName = ({ org }: { org: Organization }) =>
    org.url ? (
        <ExternalLink href={org.url} className='funderline'>
            {org.name}
        </ExternalLink>
    ) : (
        <>{org.name}</>
    );

export default OrgName;
