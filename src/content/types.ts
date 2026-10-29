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
    /** One or two sentences shown up front on featured experiences. */
    summary?: RichText;
    /** Full bullet list, shown under "Details". */
    highlights: RichText[];
};

export type Experience = {
    org: Organization;
    /** Most recent first. */
    roles: Role[];
    tech: TechId[];
    /** Featured entries get a full block; the rest are listed under "Earlier". */
    featured?: boolean;
};

export type Project = {
    name: string;
    /** Small line above the name, e.g. '2026 · In progress'. */
    label: string;
    summary: RichText;
    highlights: RichText[];
    tech: TechId[];
    repo?: string;
    live?: string;
};

export type Education = {
    school: Organization;
    degree: string;
    minor?: string;
    dates: DateRange;
    gpa?: string;
    coursework?: string[];
};

export type SocialLink = {
    kind: 'email' | 'github' | 'linkedin';
    label: string;
    href: string;
};

export type Hobby = {
    label: string;
    /** File in /public/icons. */
    icon: string;
};
