/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { getAllProjects, TGetAllProjects } from '@/lib/contentful';
import Section from '../home/section';
import Tech from '../home/tech';

interface ProjectsProps extends TGetAllProjects {
	title: string;
	description: string;
}

export default async function Projects({
	title,
	description,
	...contentFul
}: ProjectsProps) {
	const projects = await getAllProjects(contentFul);

	return (
		<Section id='projects' title={title} description={description}>
			<ul className='grid gap-4 grid-cols-1 sm:grid-cols-2'>
				{projects.map((project) => {
					return (
						<li
							key={project.name}
							className='border border-border rounded-md flex flex-col overflow-hidden'
						>
							<figure
								aria-hidden
								className='w-full overflow-hidden bg-primary/10 h-60 bg-center bg-no-repeat bg-cover flex-shrink-0'
								style={{
									backgroundImage: `url(${project.coverImage.url})`,
								}}
							/>
							<div className='mt-4 px-4 h-full flex flex-col'>
								<h3 className='capitalize mb-0'>
									{project.name}
								</h3>
								<p className='text-muted-foreground mb-1'>
									{project.summary}
								</p>
								<ul className='flex items-center justify-start flex-wrap mt-2 mb-3'>
									{project.technologies.map((tec) => (
										<Tech key={tec} name={tec} />
									))}
								</ul>
								<div className='mt-auto flex items-center justify-between'>
									<div className=''>
										<a
											href={project.live}
											target='_blank'
											rel='noopener noreferrer'
											className={buttonVariants({
												variant: 'link',
												className:
													'text-white hover:text-primary',
											})}
										>
											Live
										</a>
										<a
											href={project.sourceCode}
											target='_blank'
											rel='noopener noreferrer'
											className={buttonVariants({
												variant: 'link',
												className: '',
											})}
										>
											Source
										</a>
									</div>
									{project.hasDetail && (
										<Link
											className={buttonVariants({
												variant: 'link',
												className: 'underline',
											})}
											href={`/projects/${project.slug}`}
										>
											View Details
										</Link>
									)}
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</Section>
	);
}
