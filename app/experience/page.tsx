import { generateMetadata } from "@/lib/site-metadata";
import { experiences } from "@/utils/experience";
import { ArrowUpRight } from "lucide-react";

export const metadata = generateMetadata({
	title: "Olaleye Blessing | Experience",
	description:
		"A look at my professional journey — the roles, projects, and challenges that have shaped me into the developer I am today.",
});

const Page = () => {
	return (
		<main>
			<ul className="[&>li]:mb-5 [&>li:last]:mb-0">
				{experiences.map((exp, i) => {
					const totalTech = exp.techs.length;

					return (
						<li key={i} className="cardboard">
							<p
								aria-label={exp.duration.replace(/-/, "to")}
								className="text-sm text-black-1 mb-4"
							>
								{exp.duration}
							</p>
							<header>
								<h2 className="cardboard-link-head">
									<a
										href={exp.website}
										target="_blank"
										rel="noopener noreferrer"
										// className='flex items-center justify-start gap-3.5 hover:underline'
										className="cardboard-link"
									>
										<span>{exp.company}</span>
										<ArrowUpRight className="cardboard-link-arrow" />
									</a>
								</h2>
							</header>
							<p className="cardboard-para">{exp.summary}</p>
							<ul className="flex items-center justify-start flex-wrap gap-1 mt-14">
								{exp.techs.map((tech, index) => {
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
};

export default Page;
