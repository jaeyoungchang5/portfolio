import React from 'react';
import Anchor from './Anchor';
import type { RichText as RichTextSource } from '@/content';

// [label](href) or _emphasis_
const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|_([^_]+)_/g;
const SAFE_HREF = /^(https:\/\/|mailto:|\/(?!\/))/;

/** Renders a content string, turning [label](href) into links and _text_ into emphasis. See RichText in src/content/types.ts. */
const RichText = ({ text }: { text: RichTextSource }) => {
    const nodes: React.ReactNode[] = [];
    let last = 0;
    for (const match of Array.from(text.matchAll(TOKEN))) {
        const [whole, label, href, emphasis] = match;
        if (match.index > last) nodes.push(text.slice(last, match.index));
        if (emphasis) {
            nodes.push(<em key={match.index}>{emphasis}</em>);
        } else if (SAFE_HREF.test(href)) {
            nodes.push(
                <Anchor key={match.index} href={href} className='text-link'>
                    {label}
                </Anchor>,
            );
        } else {
            nodes.push(whole);
        }
        last = match.index + whole.length;
    }
    if (last < text.length) nodes.push(text.slice(last));
    return <>{nodes}</>;
};

export default RichText;
