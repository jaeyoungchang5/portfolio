import React from 'react';

type MetaLineProps = {
    /** Empty values are skipped, so optional fields can be passed directly. */
    items: (string | false | undefined)[];
    className?: string;
};

/** Small muted line of items separated by middots, e.g. "React · TypeScript · Git". */
const MetaLine = ({ items, className = '' }: MetaLineProps) => {
    const shown = items.filter(Boolean);
    return shown.length > 0 && <p className={`eyebrow ${className}`}>{shown.join(' · ')}</p>;
};

export default MetaLine;
