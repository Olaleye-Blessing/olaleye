import { experiences } from "@/utils/experience";
import { ArrowUpRight } from "lucide-react";

export default async function Page() {
	return (
		<main>
			<ul className="[&>li]:mb-5 [&>li:last]:mb-0">
				{experiences.map((exp, i) => {
					const totalTech = exp.techs.length;
					const meta = [exp.employmentType, exp.location]
						.filter(Boolean)
						.join(" · ");

					return (
						<li key={i} className="cardboard">
							<p
								aria-label={exp.duration.replace(/-/, "to")}
								className="text-sm text-black-1 mb-4"
							>
								{exp.duration}
							</p>
							<header className="flex items-center justify-start flex-wrap mb-2">
								<h2 className="cardboard-link-head m-0">
									{exp.title}
								</h2>
								<span className="inline-block mx-1 text-xs">
									{" "}
									at{" "}
								</span>
								<p className="flex items-center gap-2 text-sm m-0">
									<a
										href={exp.website}
										target="_blank"
										rel="noopener noreferrer"
										className="cardboard-link text-[#a9b1f5] gap-[0.1rem]"
									>
										<span>{exp.company}</span>
										<ArrowUpRight className="cardboard-link-arrow" />
									</a>
								</p>
							</header>
							<p className="cardboard-para">{exp.summary}</p>
							{exp.descriptions?.length > 0 && (
								<details className="animated-details group mt-3 border border-white px-3 py-2 rounded-lg">
									<summary
										className={
											"flex items-center gap-1 cursor-pointer select-none " +
											"text-sm text-black-1 hover:text-white-1 " +
											"list-none [&::-webkit-details-marker]:hidden"
										}
									>
										What I did
									</summary>
									<ul className="mt-2 space-y-1.5 text-sm">
										{exp.descriptions.map((d) => (
											<li
												key={d}
												className="relative pl-4 before:content-['–'] before:absolute before:left-0 before:text-black-1"
											>
												{d}
											</li>
										))}
									</ul>
								</details>
							)}
							<div className="flex items-center justify-between mt-8 flex-wrap">
								<ul className="flex items-center justify-start flex-wrap gap-1">
									{exp.techs.map((tech, index) => {
										return (
											<li
												key={tech}
												className="text-white-1 text-sm inline-flex items-center justify-center gap-1"
											>
												<span>{tech}</span>
												{index < totalTech - 1 && (
													<span>•</span>
												)}
											</li>
										);
									})}
								</ul>
								{meta && (
									<span className="text-black-1">{meta}</span>
								)}
							</div>
						</li>
					);
				})}
			</ul>
		</main>
	);
}
