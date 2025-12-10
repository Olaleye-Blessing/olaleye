import { TArticle } from '../utils/articles';

const formatDate = (dateString: string) =>
	new Date(dateString).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

export default function Article(article: TArticle) {
	return (
		<>
			<header className='mb-2'>
				<h2 className='flex items-start justify-between flex-wrap sm:flex-nowrap'>
					<a
						href={article.href}
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-primary'
					>
						{article.title}
					</a>
					<span className='text-xs border rounded-md border-primary px-2 pt-[0.2rem] pb-[0.3rem] sm:mt-[0.5rem]'>
						{article.website}
					</span>
				</h2>
			</header>
			<p className='sub_title mb-4 !text-base whitespace-pre-line'>
				{article.summary}
			</p>
			<ul className='mt-auto flex items-center justify-start'>
				{article.techs.map((tech) => (
					<li
						key={tech}
						className='bg-primary/10 text-primary font-semibold mr-3 last:mr-0 rounded-md px-2 pt-[0.35rem] pb-2 text-sm mb-2'
					>
						{tech}
					</li>
				))}
			</ul>
			<div className='flex items-center justify-between'>
				<p className='text-muted-foreground text-sm'>
					<time dateTime={article.date}>
						{formatDate(article.date)}
					</time>
				</p>
				<p className=''>
					<a
						href={article.href}
						target='_blank'
						rel='noopener noreferrer'
						className='text-primary-foreground hover:text-primary'
					>
						Read
					</a>
				</p>
			</div>
		</>
	);
}
