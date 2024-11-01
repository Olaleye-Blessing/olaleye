'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function Hamburger() {
	const pathname = usePathname();
	const toggleRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const closeHamburger = () => {
			const button = toggleRef.current;
			if (!button) return;

			button.classList.remove('active');
		};

		closeHamburger();
	}, [pathname]);

	return (
		<button
			ref={toggleRef}
			className='hamburger'
			onClick={(e) => {
				e.currentTarget.classList.toggle('active');
			}}
		>
			<span className='bar'></span>
			<span className='bar'></span>
			<span className='bar'></span>
		</button>
	);
}
