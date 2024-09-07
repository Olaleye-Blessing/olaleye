import { IProject } from '../_types/project';
import Summary from './summary';

export default function Header(project: IProject) {
	return (
		<header>
			<h1>{project.name}</h1>
			<Summary summary={project.summary} />
		</header>
	);
}
