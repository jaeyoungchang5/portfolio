import React from 'react';

type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/** Anchor that opens off-site links in a new tab without leaking window.opener or the referrer path. */
const ExternalLink = ({ href, children, ...rest }: ExternalLinkProps) => {
    const external = /^https?:\/\//.test(href) || href.endsWith('.pdf');
    return (
        <a href={href} {...(external && { target: '_blank', rel: 'noopener noreferrer' })} {...rest}>
            {children}
        </a>
    );
};

export default ExternalLink;
