import { PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
	id: string;
	title: string;
	description?: string;
	className?: string;
}

export default function Section({
	id,
	title,
	description,
	children,
}: SectionProps) {
	return (
		<section id={id} className='px-4 mb-8 scroll-mt-10'>
			<header className='mb-4'>
				<h2>{title}</h2>
				{description && (
					<p className='text-muted-foreground -mt-2 text-sm'>
						{description}
					</p>
				)}
			</header>
			{children}
		</section>
	);
}
