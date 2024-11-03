'use client';

import Link from 'next/link';

const pages = [
	{ href: '/', label: 'Home' },
	{ href: '/#experience', label: 'Experience' },
	{ href: '/#projects', label: 'Projects' },
	{ href: '/articles', label: 'Articles' },
];

interface PagesProps {
	closeHamburger: () => void;
}

export default function Pages({ closeHamburger }: PagesProps) {
	return (
		<ul>
			{pages.map((page) => (
				<li key={page.label}>
					<Link
						href={page.href}
						className='mr-2 hover:underline'
						onClick={closeHamburger}
					>
						{page.label}
					</Link>
				</li>
			))}
		</ul>
	);
}
