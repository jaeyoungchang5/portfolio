import type { Config } from 'tailwindcss';

// Design tokens. Change a color, size, or spacing here and it updates everywhere it's used.
const config: Config = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                paper: '#F5F3EE', // page background
                ink: '#1C1B19', // headings and primary text
                body: '#45413A', // paragraph text
                muted: '#6B665C', // labels, dates, secondary text
                rule: '#D9D5CB', // section dividers and borders
                'rule-soft': '#E4E0D6', // lighter dividers inside a section
                outline: '#C9C4B8', // outlined button borders
                accent: { DEFAULT: '#1F4D3A', dark: '#123226' }, // links and primary button
            },
            fontFamily: {
                serif: ['var(--font-serif)', 'Georgia', 'serif'],
                sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                detail: '0.9375rem', // 15px: nav, chips, detail lists
                lede: '1.1875rem', // 19px: hero intro
                brand: '1.375rem', // 22px: name in the header
                'card-title': '1.625rem', // 26px: project names
                section: '2.25rem', // 36px: section headings
                'display-sm': '2.5rem', // 40px: hero headline on phones
                display: '3.75rem', // 60px: hero headline
            },
            spacing: {
                section: '4.5rem', // vertical padding of each section
            },
            maxWidth: {
                page: '1040px', // content width
                lede: '560px', // hero intro line length
            },
        },
    },
    plugins: [],
};

export default config;
