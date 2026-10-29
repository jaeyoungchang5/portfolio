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
        // Storage can be blocked (private mode); the switch still works for this visit.
    }
};

const SunIcon = () => (
    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' aria-hidden='true' className='h-3 w-3'>
        <circle cx='12' cy='12' r='4' />
        <path d='M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4' />
    </svg>
);

const MoonIcon = () => (
    <svg viewBox='0 0 24 24' fill='currentColor' aria-hidden='true' className='h-3 w-3'>
        <path d='M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z' />
    </svg>
);

/** Small light/dark switch. The knob shows a sun in light mode and a moon in dark mode. */
const ThemeToggle = () => {
    // On the server there's no <html> class to read, so render light; the client corrects it right after hydration.
    const dark = useSyncExternalStore(subscribe, isDark, () => false);

    return (
        <button
            type='button'
            role='switch'
            aria-checked={dark}
            aria-label='Dark mode'
            onClick={() => setTheme(!dark)}
            className='flex h-11 items-center px-1'
        >
            <span className='flex h-6 w-11 items-center rounded-full border border-outline bg-surface p-0.5'>
                <span
                    className={`flex h-[18px] w-[18px] items-center justify-center rounded-full bg-ink text-paper transition-transform ${
                        dark ? 'translate-x-5' : ''
                    }`}
                >
                    {dark ? <MoonIcon /> : <SunIcon />}
                </span>
            </span>
        </button>
    );
};

export default ThemeToggle;
