import Article from './_components/article';
import Header from './_components/header';
import { articles } from './utils/articles';

export default function Page() {
	return (
		<>
			<Header />
			<main className='px-4 pb-8'>
				<ul className='grid gap-4 grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(24rem,_1fr))]'>
					{articles.map((article) => (
						<li
							key={article.title}
							className='border-b last:border-0 border-b-muted py-2 flex flex-col md:last:border-b'
						>
							<Article {...article} />
						</li>
					))}
				</ul>
			</main>
		</>
	);
}
