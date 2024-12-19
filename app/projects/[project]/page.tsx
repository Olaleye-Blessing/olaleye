import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getAllProjects, getProject } from '@/lib/contentful';
// import Projects from '@/components/projects';
import Header from './_components/header';
import Video from './_components/video';
import './_components/index.css';
import './_components/detail.css';
import NotAvailable from './_components/not-available';

// type PageProps = { params: { project: string }; searchParams: {} };
type PageProps = { params: Promise<{ project: string }> };

export async function generateStaticParams() {
	const allProjects = await getAllProjects({ limit: 10, isDraftMode: true });
	const slugs = allProjects.map((project: any) => ({
		slug: project.slug,
	}));

	return slugs;
}

export default async function Page(props: PageProps) {
	const project = await getProject((await props.params).project);

	if (!project) return <NotAvailable />;

	return (
		<div className='px-4 mt-4 page'>
			<Header {...project} />
			<main>
				{project.youtubeUrl && <Video url={project.youtubeUrl} />}
				<section>
					{documentToReactComponents(project.details.json as any)}
				</section>
			</main>
			{/* TODO: Filter out current detail project */}
			{/* <aside className='[&>*]:px-0'>
				<Projects
					title='Other Projects With Details'
					description='These projects have a detailed explantion of what they do and what I learnt.'
				/>
			</aside> */}
		</div>
	);
}
