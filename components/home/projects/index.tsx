/* eslint-disable @next/next/no-img-element */
import { buttonVariants } from '@/components/ui/button';
import Section from '../section';
import Tech from '../tech';
import { projects } from './data';

export default function Projects() {
	return (
		<Section
			id='projects'
			title='Projects'
			description='These are some of the projects I have worked on over the years.'
		>
			<ul className='grid gap-4 grid-cols-1 sm:grid-cols-2'>
				{projects.map((project) => {
					return (
						<li
							key={project.name}
							className='border border-border rounded-md flex flex-col overflow-hidden'
						>
							<figure
								aria-hidden
								className='w-full overflow-hidden bg-primary h-96 bg-center bg-no-repeat bg-cover flex-shrink-0'
								style={{
									backgroundImage: `url(/static/projects/${project.name}.webp)`,
								}}
							/>
							<div className='mt-4 px-4 h-full flex flex-col'>
								<h3 className='capitalize mb-0'>
									{project.name}
								</h3>
								{project.paragraphs.map((par) => (
									<p
										key={par}
										className='text-muted-foreground mb-1'
									>
										{par}
									</p>
								))}
								<ul className='flex items-center justify-start flex-wrap mt-2 mb-3'>
									{project.tech.map((tec) => (
										<Tech key={tec} name={tec} />
									))}
								</ul>
								<div className='mt-auto'>
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
											href={project.source}
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
									{/* Preview and details */}
									<div></div>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</Section>
	);
}
