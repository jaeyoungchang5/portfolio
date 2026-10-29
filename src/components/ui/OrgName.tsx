import React from 'react';
import Anchor from './Anchor';
import type { Organization } from '@/content';

/** Organization name, linked when it has a URL. */
const OrgName = ({ org }: { org: Organization }) =>
    org.url ? (
        <Anchor href={org.url} className='text-link'>
            {org.name}
        </Anchor>
    ) : (
        <>{org.name}</>
    );

export default OrgName;
