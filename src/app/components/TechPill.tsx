import React from 'react';
import Pill from './Pill';
import { getTech, type TechId } from '@/content';

const TechPill = ({ id, rounded }: { id: TechId; rounded?: string }) => {
    const { label, icon, invert } = getTech(id);
    return <Pill label={label} icon={icon} invert={invert} rounded={rounded} />;
};

export default TechPill;
