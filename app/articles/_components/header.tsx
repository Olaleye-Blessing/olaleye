export default function Header() {
	return (
		<header className='px-4'>
			<div className='border-b border-border pb-2'>
				<div>
					<h1>Articles</h1>
					<p className='sub_title'>
						These are some of the articles I have written.
					</p>
				</div>
				<div className='mt-2 flex items-center justify-start'>
					<p className='mr-2 mb-[0.1rem] font-bold'>Profiles:</p>
					<ul className='flex items-center justify-start'>
						<Profile
							website='Hashnode'
							href='https://blog.blessingolaleye.xyz/'
						/>
						<Profile
							website='Openreplay'
							href='https://blog.openreplay.com/authors/olaleye-blessing'
						/>
					</ul>
				</div>
			</div>
		</header>
	);
}

const Profile = ({ website, href }: { website: string; href: string }) => {
	return (
		<li className='mr-1 last:mr-0'>
			<a
				href={href}
				target='_blank'
				rel='noopener noreferrer'
				className='text-primary hover:text-foreground'
			>
				{website}
			</a>
		</li>
	);
};
