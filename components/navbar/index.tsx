'use client';

import { useRef } from 'react';
import Pages from './pages';
import Contacts from './Contacts';
import Hamburger from './hamburger';
import './index.css';

export default function Navbar() {
	const toggleRef = useRef<HTMLButtonElement>(null);
	const closeHamburger = () => {
		const button = toggleRef.current;
		if (!button) return;

		button.classList.remove('active');
	};

	return (
		<nav className='flex items-center justify-between flex-wrap sticky p-4 top-0 right-0 left-0 z-50 backdrop-blur-[1.3rem]'>
			<Hamburger btnRef={toggleRef} />
			<div className='nav__contents'>
				<Pages closeHamburger={closeHamburger} />
				<Contacts />
			</div>
		</nav>
	);
}
