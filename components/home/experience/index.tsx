import { MoveUpRight } from 'lucide-react';
import Section from '../section';
import Tech from '../tech';
import { experiences } from './data';
import './index.css';

export default function Experience() {
	return (
		<Section id='experience' title='Experience' description=''>
			<ul>
				{experiences.map((exp, i) => {
					return (
						<li
							key={i}
							className='experience mb-0 p-2 pl-4 pb-4 last:pb-0 rounded-md relative md:transition-colors md:hover:bg-primary/5 md:pl-2 md:mb-4 md:last:mb-0 md:pb-0 last:[&>div:first]:bg-purple-700'
						>
							<div
								aria-hidden
								className='absolute top-[1rem] left-0 h-full w-8 flex flex-col items-start md:hidden'
							>
								<span className='w-2 h-2 flex-shrink-0 flex-grow-0 block rounded-full bg-primary' />
								<span className='w-[0.1rem] h-full bg-primary ml-[0.2rem] mt-[-0.1rem]' />
							</div>
							<div>
								<p
									aria-label={exp.duration.replace(/-/, 'to')}
									className='text-muted-foreground'
								>
									{exp.duration}
								</p>
								<p className='text-primary'>{exp.location}</p>
							</div>
							<div>
								<h3>
									<a
										href={exp.website}
										className='flex items-center justify-start'
									>
										<span>{exp.title}</span>
										<span className='ml-[0.1rem]'>
											<MoveUpRight className='w-3 h-3' />
										</span>
									</a>
								</h3>
								<div>
									{exp.descriptions.map((des) => {
										return (
											<p
												key={des}
												className='text-muted-foreground mb-1 last:mb-0'
											>
												{des}
											</p>
										);
									})}
								</div>
								<ul className='flex items-center justify-start flex-wrap mt-2'>
									{exp.techs.map((tec) => (
										<Tech key={tec} name={tec} />
									))}
								</ul>
							</div>
						</li>
					);
				})}
			</ul>
		</Section>
	);
}
