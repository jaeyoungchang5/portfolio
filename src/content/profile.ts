import type { Hobby, RichText, SocialLink } from './types';

export const profile = {
    name: 'JaeYoung Chang',
    firstName: 'JaeYoung',
    description: 'JaeYoung Chang is a full-stack software engineer in Chicago, currently at Apex Fintech Solutions.',
    portrait: { src: '/images/hero_image.JPG', alt: 'JaeYoung Chang headshot' },
    about: [
        "I'm a full-stack software engineer in Chicago, currently at [Apex Fintech Solutions](https://apexfintechsolutions.com).",
        "I do my best work close to the people using the software. At Apex, that meant working directly with securities lending traders to find friction in their daily workflows. At Epic, it meant shadowing and talking with dermatologists across the country to see how they document patients' skin conditions. From first conversation to launch and beyond, I build with the end user in mind.",
        'I graduated from the [University of Notre Dame](https://www.nd.edu) in 2022 with a BS in Computer Science and a Minor in Engineering Corporate Practice.',
        "I love playing, watching, and talking sports! I've been playing soccer, tennis, and golf since I was a kid, and more recently picked up gaelic football and hurling in college. I'm an avid fan of the Detroit Lions, Detroit Red Wings, Korean National Football Team, and all Notre Dame sports. In my free time, I like to [read](https://www.goodreads.com/user/show/126699611-jaeyoung-chang), play the guitar, woodwork, and eat delicious foods.",
        "My greatest passion is people, so let's connect and get to know one another!",
    ] satisfies RichText[],
    links: [
        { kind: 'email', label: 'Email me', href: 'mailto:jaeyoungchang5@gmail.com' },
        { kind: 'github', label: 'GitHub', href: 'https://github.com/jaeyoungchang5' },
        { kind: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/jaeyoungchang/' },
        { kind: 'resume', label: 'Resume', href: '/files/resume.pdf' },
    ] satisfies SocialLink[],
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

export const linkOf = (kind: SocialLink['kind']) => profile.links.find((l) => l.kind === kind)!;
