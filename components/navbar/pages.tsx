import Link from 'next/link';

const pages = [
	{ href: '/', label: 'Home' },
	{ href: '/#experience', label: 'Experience' },
	{ href: '/#projects', label: 'Projects' },
	{ href: '/articles', label: 'Articles' },
];

export default function Pages() {
	return (
		<ul>
			{pages.map((page) => (
				<li key={page.label}>
					<Link href={page.href} className='mr-2 hover:underline'>
						{page.label}
					</Link>
				</li>
			))}
		</ul>
	);
}
