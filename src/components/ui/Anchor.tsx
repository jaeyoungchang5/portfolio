import React from 'react';

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/** Use for every link. Off-site (http/https) links open in a new tab without leaking window.opener or the referrer. */
const Anchor = ({ href, children, ...rest }: AnchorProps) => {
    const external = /^https?:\/\//.test(href);
    return (
        <a href={href} {...(external && { target: '_blank', rel: 'noopener noreferrer' })} {...rest}>
            {children}
        </a>
    );
};

export default Anchor;
