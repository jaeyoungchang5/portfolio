import React from 'react';

type SectionProps = {
    id: string;
    title: string;
    /** Put the title in a left column beside the content on wide screens (About). */
    aside?: boolean;
    children: React.ReactNode;
};

const titleClass = 'font-serif text-section font-normal leading-tight';

/** A top-level page section: divider, spacing, and heading. The `id` is the nav anchor. */
const Section = ({ id, title, aside, children }: SectionProps) =>
    aside ? (
        <section id={id} className='flex flex-wrap gap-12 border-t border-rule py-section'>
            <h2 className={`${titleClass} flex-[1_1_200px]`}>{title}</h2>
            <div className='min-w-0 flex-[999_1_520px]'>{children}</div>
        </section>
    ) : (
        <section id={id} className='border-t border-rule py-section'>
            <h2 className={`${titleClass} mb-10`}>{title}</h2>
            {children}
        </section>
    );

export default Section;
