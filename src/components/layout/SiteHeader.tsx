'use client';
import React, { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { profile } from '@/content';

// Each href must match a Section id.
const nav = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
];

const MenuIcon = ({ open }: { open: boolean }) => (
    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' aria-hidden='true' className='h-6 w-6'>
        {open ? <path d='M6 6l12 12M18 6L6 18' /> : <path d='M4 8h16M4 16h16' />}
    </svg>
);

/**
 * Sticky header with the theme switch. Phones get a menu button that opens a full-width list of links; from `sm` up
 * the links are inline.
 * If you change its height (padding or font size), update --header-height in globals.css.
 */
const SiteHeader = () => {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [open]);

    return (
        <header className='sticky top-0 z-20 border-b border-rule bg-paper'>
            <div className='mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-2.5 sm:px-8 sm:py-5'>
                <a href='#top' className='font-serif text-brand text-ink' onClick={close}>
                    {profile.name}
                </a>

                <div className='flex items-center gap-1 sm:gap-6'>
                    <nav aria-label='Primary' className='hidden sm:block'>
                        <ul className='flex gap-7 text-detail'>
                            {nav.map(item => (
                                <li key={item.href}>
                                    <a href={item.href} className='text-body hover:text-ink'>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <ThemeToggle />

                    <button
                        type='button'
                        className='-mr-2.5 flex h-11 w-11 items-center justify-center text-ink sm:hidden'
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        aria-expanded={open}
                        aria-controls='mobile-menu'
                        onClick={() => setOpen(!open)}
                    >
                        <MenuIcon open={open} />
                    </button>
                </div>
            </div>

            {open && (
                <nav id='mobile-menu' aria-label='Primary' className='border-t border-rule sm:hidden'>
                    <ul className='px-4 pb-4 pt-2'>
                        {nav.map(item => (
                            <li key={item.href} className='border-b border-rule-soft last:border-0'>
                                <a
                                    href={item.href}
                                    className='block py-3.5 font-serif text-2xl text-ink'
                                    onClick={close}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default SiteHeader;
