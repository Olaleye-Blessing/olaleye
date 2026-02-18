import { getAllProjects } from "@/lib/contentful";
import { ArrowUpRight } from "lucide-react";

export default async function Page() {
	const projects = await getAllProjects({ isDraftMode: true });

	return (
		<main>
			<ul className="[&>li]:mb-5 [&>li:last]:mb-0">
				{projects.map((project) => {
					const totalTech = project.technologies.length;

					return (
						<li key={project.name} className="cardboard">
							<div className="flex items-center justify-start gap-4 mb-5">
								<header>
									<h2 className="cardboard-link-head">
										<a
											href={project.live}
											target="_blank"
											rel="noopener noreferrer"
											className="cardboard-link"
										>
											<span>{project.name}</span>
											<ArrowUpRight className="cardboard-link-arrow" />
										</a>
									</h2>
								</header>
							</div>
							<p className="cardboard-para mb-14">
								{project.summary}
							</p>
							<ul className="flex items-center justify-start flex-wrap gap-1">
								{project.technologies.map((tech, index) => {
									return (
										<li
											key={tech}
											className="text-white-1 text-xs inline-flex items-center justify-center gap-1"
										>
											<span>{tech}</span>
											{index < totalTech - 1 && (
												<span>•</span>
											)}
										</li>
									);
								})}
							</ul>
						</li>
					);
				})}
			</ul>
		</main>
	);
}
