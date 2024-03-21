'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { IMenuOverlayProps, INavLinkProps } from '../types';
import Button from './Button';

const navLinks = [
	{ title: 'Home', path: '/'},
    { title: 'About', path: '#about' },
    { title: 'Skills', path: '#skills'},
    { title: 'Experiences', path: '#experiences'},
    { title: 'Projects', path: '#projects' },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
		<nav className='fixed mx-auto top-0 left-0 right-0 z-10 bg-neutral-600 opacity-100'>
			<div className='flex container lg:py-4 flex-wrap items-center justify-left mx-auto px-4 py-2'>
			{/* <div className='mobile-menu block md:hidden'>
				{!navbarOpen ? (
				<button
					onClick={() => setNavbarOpen(true)}
					className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
				>
					<Bars3Icon className='h-5 w-5' />
				</button>
				) : (
				<button
					onClick={() => setNavbarOpen(false)}
					className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
				>
					<XMarkIcon className='h-5 w-5' />
				</button>
				)}
			</div> */}
			<div className='hidden md:block md:w-auto' id='navbar'>
				<ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
				{navLinks.map((link, index) => (
					<li key={index}>
						<NavLink href={link.path} title={link.title} />
					</li>
				))}
				</ul>
			</div>
			</div>
			{navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    	</nav>
    );
};

const NavLink = ({ href, title }: INavLinkProps) => {
	const isBrowser = () => typeof window !== 'undefined';
	function scrollToTop() {
		if (!isBrowser()) return;
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<Link
			href={href}
			onClick={(href === '/') ? scrollToTop : undefined}
			className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'
		>
			{title}
		</Link>
	);
};

const MenuOverlay = ({ links }: IMenuOverlayProps) => {
    return (
		<ul className='flex flex-col py-4 items-center'>
			{links.map((link, index) => (
			<li key={index}>
				<NavLink href={link.path} title={link.title} />
			</li>
			))}
		</ul>
    );
  };

export default Navbar;