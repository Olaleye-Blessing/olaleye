import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import ScrollDownArrow from './scroll-down';

export default function Header() {
	return (
		<header className='h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:h-[93vh]'>
			<h1 className='text-5xl mt-auto text-muted-foreground shadow-inner'>
				Olaleye Blessing
			</h1>
			<p>
				A Frontend Developer with over{' '}
				<Link
					href='/#experience'
					className='font-bold text-primary italic'
				>
					{new Date().getFullYear() - 2021} years of experience
				</Link>{' '}
				creating modern, optimized, responsive and user-friendly web
				applications. I was born to turn complex problems into beautiful
				and intuitive designs.
			</p>
			<div className='mt-6 flex flex-col gap-4 sm:flex-row'>
				<Link
					href='/#projects'
					className={buttonVariants({ size: 'sm' })}
				>
					View My Work
				</Link>
				<a
					className={buttonVariants({
						variant: 'outline',
						size: 'sm',
					})}
					href='mailto:olaleyedev@gmail.com'
				>
					Get In Touch
				</a>
			</div>
			<div className='mt-auto mb-8'>
				<ScrollDownArrow />
			</div>
		</header>
	);
}
