'use client';
import React, { useSyncExternalStore } from 'react';
import { THEME_STORAGE_KEY } from './theme';

// The `dark` class on <html> is the source of truth (set before paint by themeInitScript).
const subscribe = (onChange: () => void) => {
    const observer = new MutationObserver(onChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
};
const isDark = () => document.documentElement.classList.contains('dark');

const setTheme = (dark: boolean) => {
    document.documentElement.classList.toggle('dark', dark);
    try {
        localStorage.setItem(THEME_STORAGE_KEY, dark ? 'dark' : 'light');
    } catch {
        // Storage can be blocked (private mode); the button still works for this visit.
    }
};

// Solid icons: filled shapes, with the sun's rays as round-capped strokes.
const iconProps = {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    className: 'h-[18px] w-[18px]',
} as const;

const SunIcon = () => (
    <svg {...iconProps}>
        <circle cx='12' cy='12' r='4.5' stroke='none' />
        <path d='M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4' />
    </svg>
);

const MoonIcon = () => (
    <svg {...iconProps}>
        <path d='M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z' />
    </svg>
);

/** Light/dark button. It shows the theme you'd switch to: a moon in light mode, a sun in dark mode. */
const ThemeToggle = () => {
    // On the server there's no <html> class to read, so render light; the client corrects it right after hydration.
    const dark = useSyncExternalStore(subscribe, isDark, () => false);

    // The 44px button keeps the tap target large; the bordered circle inside is what you see, with the outline buttons' colors.
    return (
        <button
            type='button'
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setTheme(!dark)}
            className='group flex h-11 w-11 items-center justify-center sm:-mr-1'
        >
            <span className='flex h-9 w-9 items-center justify-center rounded-full border border-outline text-body transition-colors group-hover:border-ink group-hover:text-ink'>
                {dark ? <SunIcon /> : <MoonIcon />}
            </span>
        </button>
    );
};

export default ThemeToggle;
