export default function Header() {
	return (
		<header className='h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:h-[93vh]'>
			<h1 className='text-5xl mt-auto text-muted-foreground shadow-inner'>
				Olaleye Blessing
			</h1>
			<p>
				I&apos;m a full-stack developer with a strong foundation in
				frontend development. With over{' '}
				<em className='font-bold text-muted-foreground'>
					3 years of experience
				</em>{' '}
				crafting engaging user interfaces, I&apos;ve developed my skills
				in building scalable web applications.
			</p>
			<p className='mt-auto mb-8'>Scroll down</p>
		</header>
	);
}
