export default function Header() {
	return (
		<header className='h-screen flex flex-col items-center justify-center text-center px-4'>
			<h1 className='text-5xl mt-auto text-muted-foreground shadow-inner'>
				Olaleye Blessing
			</h1>
			<p>
				I&apos;m a software developer dedicated to creating{' '}
				<span className='text-primary font-bold'>interactive</span>,{' '}
				<span className='text-primary font-bold'>accessible</span>, and{' '}
				<span className='text-primary font-bold'>responsive</span>{' '}
				websites.
			</p>
			<p className='mt-auto mb-8'>Scroll down</p>
		</header>
	);
}
