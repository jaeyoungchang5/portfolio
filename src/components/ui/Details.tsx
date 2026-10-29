import React from 'react';
import RichText from './RichText';
import type { RichText as RichTextSource } from '@/content';

/** Collapsible bullet list behind a "+ Details" toggle. Native <details>, so it needs no JavaScript. */
const Details = ({ highlights }: { highlights: RichTextSource[] }) =>
    highlights.length > 0 && (
        <details className='group'>
            <summary className='mt-3 cursor-pointer list-none text-sm text-muted hover:text-ink [&::-webkit-details-marker]:hidden'>
                <span className='group-open:hidden'>+</span>
                <span className='hidden group-open:inline'>−</span> Details
            </summary>
            <ul className='mt-3 list-disc space-y-2 pl-5 text-detail text-body marker:text-outline'>
                {highlights.map((text, index) => (
                    <li key={index}>
                        <RichText text={text} />
                    </li>
                ))}
            </ul>
        </details>
    );

export default Details;
