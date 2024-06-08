'use client';

import { useState } from 'react';
import Section from '../section';
import { tabs, techs } from './data';
import { Button } from '@/components/ui/button';
import Tech from '../tech';

export default function Technologies() {
	const [currentCategory, setCurrentCategory] = useState<string>('all');

	let filteredTechs = [...techs];
	if (currentCategory !== 'all')
		filteredTechs = filteredTechs.filter((tech) =>
			tech.category.includes(currentCategory)
		);

	return (
		<Section
			id='technologies'
			title='Technologies'
			description='Languages/Frameworks/Tools I have worked with.'
		>
			<div>
				<header className='border-b border-border py-2'>
					<ul className='flex items-center justify-start'>
						{tabs.map((tab) => {
							return (
								<li key={tab}>
									<Button
										className='capitalize mr-1'
										variant={
											currentCategory === tab
												? 'default'
												: 'ghost'
										}
										type='button'
										onClick={() => setCurrentCategory(tab)}
									>
										{tab}
									</Button>
								</li>
							);
						})}
					</ul>
				</header>
				<ul className='flex items-center justify-start flex-wrap mt-2'>
					{filteredTechs.map((tech) => {
						return <Tech key={tech.name} name={tech.name} />;
					})}
				</ul>
			</div>
		</Section>
	);
}
