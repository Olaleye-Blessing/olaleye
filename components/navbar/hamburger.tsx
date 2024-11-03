'use client';

import { RefObject } from 'react';

interface HamburgerProps {
	btnRef: RefObject<HTMLButtonElement>;
}

export default function Hamburger({ btnRef }: HamburgerProps) {
	return (
		<button
			ref={btnRef}
			className='hamburger'
			onClick={() => btnRef.current?.classList.toggle('active')}
		>
			<span className='bar'></span>
			<span className='bar'></span>
			<span className='bar'></span>
		</button>
	);
}
