import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import ScrollDownArrow from './scroll-down';

export default function Header() {
	const yearsOfExperience = new Date().getFullYear() - 2021;

	return (
		<header className='h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:h-[93vh] max-w-4xl mx-auto'>
			<div className='mt-auto'>
				<h1 className='text-5xl md:text-6xl font-bold mb-4 text-primary-foreground tracking-tight'>
					Olaleye Blessing
				</h1>
				<p className='text-xl md:text-2xl text-muted-foreground mb-3 font-medium'>
					Senior Frontend Developer
				</p>
				<p className='text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
					Specializing in building modern, scalable web applications with over{' '}
					<Link
						href='/#experience'
						className='font-semibold text-primary hover:underline underline-offset-4 transition-all'
					>
						{yearsOfExperience}+ years of experience
					</Link>
				</p>
			</div>
			
			<div className='mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4'>
				<Link
					href='/#projects'
					className={buttonVariants({ size: 'default' })}
				>
					View My Work
				</Link>
				<a
					className={buttonVariants({
						variant: 'outline',
						size: 'default',
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
