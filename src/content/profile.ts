import type { Hobby, RichText, SocialLink } from './types';

const email = 'jaeyoungchang5@gmail.com';

export const profile = {
    name: 'JaeYoung Chang',
    /** Search engine and link-preview description. */
    description: 'JaeYoung Chang is a full-stack software engineer in Chicago, currently at Apex Fintech Solutions.',
    portrait: { src: '/images/hero_image.JPG', alt: 'Portrait of JaeYoung Chang' },
    /** Hero: big headline, then the intro line under it. */
    headline: 'Curious by nature, people-first by heart',
    lede: "I'm a lifelong learner and a driven problem-solver. My greatest passion is people, so let's connect and get to know one another!" satisfies RichText,
    /** About section, one string per paragraph. */
    about: [
        "I do my best work close to the people using the software. At Apex, that meant working directly with securities lending traders to find friction in their daily workflows. At Epic, it meant shadowing and talking with dermatologists across the country to see how they document patients' skin conditions. From first conversation to launch and beyond, I build with the end user in mind.",
        "Today I'm a senior software engineer and team lead at [Apex Fintech Solutions](https://apexfintechsolutions.com) in Chicago, and a 2022 [Notre Dame](https://www.nd.edu) grad.",
        "I love playing, watching, and talking sports! I've been playing soccer, tennis, and golf since I was a kid, and more recently picked up gaelic football and hurling in college. I'm an avid fan of the Detroit Lions, Detroit Red Wings, Korean National Football Team, and all Notre Dame sports. In my free time, I like to [read](https://www.goodreads.com/user/show/126699611-jaeyoung-chang), play the guitar, woodwork, and eat delicious foods.",
    ] satisfies RichText[],
    /** Contact links. `label` is the button text. */
    links: [
        { kind: 'email', label: 'Get in touch', href: `mailto:${email}` },
        { kind: 'github', label: 'GitHub', href: 'https://github.com/jaeyoungchang5' },
        { kind: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/jaeyoungchang/' },
    ] satisfies SocialLink[],
    email,
    /** Shown under Skills. Icons are files in /public/icons; all are single-color, so they're inverted in dark mode (see SkillsSection). */
    hobbies: [
        { label: 'Soccer', icon: 'soccerball.svg' },
        { label: 'Tennis', icon: 'tennis.svg' },
        { label: 'Golf', icon: 'golf.svg' },
        { label: 'Pickleball', icon: 'tennis.svg' },
        { label: 'Gaelic Football', icon: 'gaelic-football.svg' },
        { label: 'Hurling', icon: 'hurling.svg' },
        { label: 'Woodworking', icon: 'woodwork.svg' },
        { label: 'Fishing', icon: 'fishing.svg' },
        { label: 'Guitar', icon: 'guitar.svg' },
        { label: 'Piano', icon: 'piano.svg' },
        { label: 'Saxophone', icon: 'saxophone.svg' },
    ] satisfies Hobby[],
};

/** Look up a contact link by kind, e.g. linkOf('github').href. */
export const linkOf = (kind: SocialLink['kind']) => profile.links.find(l => l.kind === kind)!;
