'use client';
import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IMenuOverlayProps, INavLinkProps } from '../types';
import GithubIcon from "../../../public/icons/github-icon.svg";
import LinkedinIcon from "../../../public/icons/linkedin-icon.svg";
import MenuIcon from '../../../public/icons/menu-icon.svg';
import CloseIcon from '../../../public/icons/close-icon.svg';

const navLinks = [
	{ title: '🏠', path: '/'},
    { title: 'About', path: '#about' },
    { title: 'Skills', path: '#skills'},
    { title: 'Experiences', path: '#experiences'},
    { title: 'Projects', path: '#projects' },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
	const [scrollY, setScrollY] = useState(0);
	const onScroll = useCallback(() => {
		const { scrollY } = window;
		console.log(scrollY);
		setScrollY(scrollY);
	}, []);

	function closeNavBar() {
		setNavbarOpen(false);
	}
  
	useEffect(() => {
		//add eventlistener to window
		window.addEventListener("scroll", onScroll, { passive: true });
		// remove event on unmount to prevent a memory leak with the cleanup
		return () => {
			window.removeEventListener("scroll", onScroll);
		}
	}, [onScroll]);

    return (
		<nav id='navbar' className={`fixed mx-auto top-0 left-0 right-0 z-10 ${(scrollY > 0 || navbarOpen) && 'bg-gray-800 border-gray-400 border-b'} border-white border-b-1 opacity-100`}>
			<div className='flex container lg:py-4 items-center justify-between mx-auto px-4 py-2'>
				<div className='flex justify-left'>
					<div className='mobile-menu block md:hidden'>
						{!navbarOpen ? (
								<button
									onClick={() => setNavbarOpen(true)}
									className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
								>
									<Image className='h-5 w-5 invert' src={MenuIcon} alt='Menu Icon' />
								</button>
							) : (
								<button
									onClick={() => setNavbarOpen(false)}
									className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
								>
									<Image className='h-5 w-5 invert' src={CloseIcon} alt='Close Icon' />
								</button>
						)}
					</div>
					<div className='hidden md:block md:w-auto'>
						<ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
							{navLinks.map((link, index) => (
								<li key={index}>
									<NavLink href={link.path} title={link.title} navbarOpen={navbarOpen} navbarCloseCallback={closeNavBar} />
								</li>
							))}
						</ul>
					</div>

					{navbarOpen ? <MenuOverlay links={navLinks} navbarOpen={navbarOpen} navbarCloseCallback={closeNavBar} /> : null}
				</div>
				<div className='flex flex-row justify-end'>
					<div className='rounded-lg hover:bg-[#ADB7BE]'>
						<Link href='https://github.com/jaeyoungchang5' target='_blank'>
							<Image className='h-10' src={GithubIcon} alt="Icon" />
						</Link>
					</div>
					<div className='rounded-lg hover:bg-[#ADB7BE]'>
						<Link href='https://www.linkedin.com/in/jaeyoungchang5/' target='_blank'>
							<Image className='h-10' src={LinkedinIcon} alt="Icon" />
						</Link></div>
				</div>
			
			</div>
    	</nav>
    );
};

const NavLink = ({ href, title, navbarOpen, navbarCloseCallback }: INavLinkProps) => {
	const isBrowser = () => typeof window !== 'undefined';

	function handleClick() {
		if (!isBrowser()) return;

		if (href === '/') {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}

		if (navbarOpen) navbarCloseCallback();
	}

	return (
		<Link
			href={href}
			onClick={handleClick}
			className='block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-[#ADB7BE]'
		>
			{title}
		</Link>
	);
};

const MenuOverlay = ({ links, navbarOpen, navbarCloseCallback }: IMenuOverlayProps) => {
    return (
		<ul className='flex flex-col py-4 items-center'>
			{links.map((link, index) => (
				<li key={index}>
					<NavLink href={link.path} title={link.title} navbarOpen={navbarOpen} navbarCloseCallback={navbarCloseCallback} />
				</li>
			))}
		</ul>
    );
  };

export default Navbar;