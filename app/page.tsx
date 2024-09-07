import Experience from '@/components/home/experience';
import Header from '@/components/home/header';
import Projects from '@/components/projects';
import Technologies from '@/components/home/technologies';

export default function Page() {
	return (
		<main>
			<Header />
			<Experience />
			<Projects
				title='Projects'
				description='These are some of the projects I have worked on over the years.'
				isDraftMode
			/>
			<Technologies />
		</main>
	);
}
