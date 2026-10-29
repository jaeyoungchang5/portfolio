import type { TechId } from './tech';

/**
 * Inline rich text. Supports two pieces of markup and nothing else:
 *   [label](https://url)   -> link (https:, mailto:, or site-relative / only)
 *   _text_                 -> emphasis
 * Rendered by <RichText>, which builds React nodes instead of injecting HTML.
 */
export type RichText = string;

/** Month precision, e.g. '2024-07'. */
export type YearMonth = `${number}-${number}`;

export type DateRange = {
    start: YearMonth;
    /** Omit for a current position. */
    end?: YearMonth;
    /** Overrides the formatted range, e.g. 'Summer 2021'. */
    label?: string;
};

export type Organization = {
    name: string;
    url?: string;
};

export type Role = {
    title: string;
    dates: DateRange;
    highlights: RichText[];
};

export type Experience = {
    org: Organization;
    /** Most recent first. More than one role renders as a promotion timeline. */
    roles: Role[];
    tech: TechId[];
};

export type ProjectCategory = 'full-stack' | 'web' | 'mobile' | 'hardware';

export type Project = {
    name: string;
    tagline?: string;
    status?: string;
    highlights: RichText[];
    tech: TechId[];
    categories: ProjectCategory[];
    repo?: string;
    live?: string;
};

export type Education = {
    school: Organization;
    degree: string;
    dates: DateRange;
    gpa?: string;
    highlights: RichText[];
    coursework?: string[];
};

export type SocialLink = {
    kind: 'email' | 'github' | 'linkedin' | 'resume';
    label: string;
    href: string;
};

export type Hobby = {
    label: string;
    icon: string;
};
