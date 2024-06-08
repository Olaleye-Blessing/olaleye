import Contacts from '@/components/home/contacts';
import Experience from '@/components/home/experience';
import Header from '@/components/home/header';
import Projects from '@/components/home/projects';
import Technologies from '@/components/home/technologies';

export default function Page() {
	return (
		<main>
			<Contacts />
			<Header />
			<Experience />
			<Projects />
			<Technologies />
		</main>
	);
}
