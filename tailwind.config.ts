import type { Config } from 'tailwindcss';

// Design tokens. Change a size or spacing here and it updates everywhere it's used.
// Colors point at CSS variables so they can switch with the theme: set their light and dark values in globals.css.
// (Because they're variables, opacity modifiers like `bg-paper/50` don't work on them.)
const config: Config = {
    content: ['./src/**/*.{ts,tsx}'],
    darkMode: 'class', // `dark` on <html>, set by the theme switch
    theme: {
        extend: {
            colors: {
                paper: 'var(--color-paper)', // page background
                surface: 'var(--color-surface)', // raised elements, e.g. skill chips
                ink: 'var(--color-ink)', // headings and primary text
                body: 'var(--color-body)', // paragraph text
                muted: 'var(--color-muted)', // labels, dates, secondary text
                rule: 'var(--color-rule)', // section dividers and borders
                'rule-soft': 'var(--color-rule-soft)', // lighter dividers inside a section
                outline: 'var(--color-outline)', // outlined button borders
                accent: {
                    DEFAULT: 'var(--color-accent)', // links and primary button
                    hover: 'var(--color-accent-hover)',
                    contrast: 'var(--color-accent-contrast)', // text on an accent background
                },
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
