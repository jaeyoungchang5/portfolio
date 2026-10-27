import React from 'react';
import RichText from './RichText';
import TechPill from './TechPill';
import type { RichText as RichTextSource, TechId } from '@/content';

export type CardEntry = {
    title: string;
    subtitle?: React.ReactNode;
    highlights: RichTextSource[];
};

const BulletList = ({ highlights }: { highlights: RichTextSource[] }) => (
    <ul className={`text-left ${highlights.length > 1 ? 'list-disc list-inside' : ''}`}>
        {highlights.map((text, index) => (
            <li key={index} className='mb-2 text-white text-lg'>
                <RichText text={text} />
            </li>
        ))}
    </ul>
);

const CardHeading = ({ title, subtitle }: Omit<CardEntry, 'highlights'>) => (
    <>
        <h3 className='mb-1 text-2xl font-bold tracking-tight text-white'>{title}</h3>
        {subtitle && <p className='mb-3 text-gray-400'>{subtitle}</p>}
    </>
);

/** One entry renders flat; several render as a vertical timeline (e.g. promotions at one company). */
const Card = ({ entries, tech }: { entries: CardEntry[]; tech: TechId[] }) => (
    <div className='mb-4 p-4 md:p-6 bg-gray-800 border border-gray-700 rounded-lg shadow'>
        {entries.length > 1 ? (
            <ol className='ml-1.5'>
                {entries.map((entry, index) => (
                    <li key={index} className={`relative pl-5 ${index < entries.length - 1 ? 'pb-2' : ''}`}>
                        <span
                            className={`absolute left-0 bottom-0 w-0.5 bg-gray-600 ${index === 0 ? 'top-4' : 'top-0'}`}
                        />
                        <span className='absolute -left-[5px] top-2.5 h-3 w-3 rounded-full bg-blue-400' />
                        <CardHeading title={entry.title} subtitle={entry.subtitle} />
                        <BulletList highlights={entry.highlights} />
                    </li>
                ))}
            </ol>
        ) : (
            entries.map((entry, index) => (
                <React.Fragment key={index}>
                    <CardHeading title={entry.title} subtitle={entry.subtitle} />
                    {entry.highlights.length > 0 && <BulletList highlights={entry.highlights} />}
                </React.Fragment>
            ))
        )}

        <div className='justify-start flex flex-row flex-wrap'>
            {tech.map((id) => (
                <TechPill key={id} id={id} rounded='rounded-lg' />
            ))}
        </div>
    </div>
);

export default Card;
