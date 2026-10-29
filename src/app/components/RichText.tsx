import React from 'react';
import ExternalLink from './ExternalLink';
import type { RichText as RichTextSource } from '@/content';

// [label](href) or _emphasis_
const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|_([^_]+)_/g;
const SAFE_HREF = /^(https:\/\/|mailto:|\/(?!\/))/;

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
                <ExternalLink key={match.index} href={href} className='funderline'>
                    {label}
                </ExternalLink>,
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
