import { ArrowUpRight } from 'lucide-react';
import { articles } from './utils/articles';
import { generateMetadata } from "@/lib/site-metadata";

const formatDate = (dateString: string) =>
	new Date(dateString).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

export const metadata = generateMetadata({
	title: "Olaleye Blessing | Articles",
	description:
		"Thoughts, discoveries, and lessons from my journey as a software developer — written to share, inspire, and spark conversations.",
});

export default function Page() {
	return (
		<main>
			<ul className="[&>li]:mb-5 [&>li:last]:mb-0">
				{articles.map((article) => {
					return (
						<li key={article.title} className='cardboard'>
							<header>
								<h2 className='cardboard-link-head'>
									<a
										href={article.href}
										target='_blank'
										rel='noopener noreferrer'
										className='cardboard-link'
									>
										<span>{article.title}</span>
										<ArrowUpRight className="cardboard-link-arrow" />
									</a>
								</h2>
							</header>
							<p className='cardboard-para mt-5 mb-14'>{article.summary}</p>
							<p className='text-sm text-white-1'>
								<time dateTime={article.date}>
									{formatDate(article.date)}
								</time>
							</p>
						</li>
					);
				})}
			</ul>
		</main>
	);
}
