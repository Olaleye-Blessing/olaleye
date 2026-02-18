import { generateMetadata } from "@/lib/site-metadata";
import { ArrowUpRight } from "lucide-react";

const versions: (string | number)[] = Array.from(
	{ length: 3 },
	(_, i) => i + 1,
).sort((a, b) => b - a);

versions.push("genesis");

export const metadata = generateMetadata({
	title: "Olaleye Blessing | Throwbacks",
	description:
		"A trip down memory lane — older versions of my portfolio, each a snapshot of where I was as a developer.",
});

const Page = () => {
	return (
		<main>
			<ul className="[&>li]:mb-5 [&>li:last]:mb-0">
				{versions.map((v) => {
					const path = typeof v === "string" ? v : `v${v}`;

					return (
						<li key={v} className="cardboard">
							<a
								href={`https://${path}.blessingolaleye.xyz/`}
								target="_blank"
								rel="noopener noreferrer"
								className="cardboard-link"
							>
								<span className="capitalize">
									{typeof v !== "string" && "Version "}
									{v}
								</span>
								<ArrowUpRight className="cardboard-link-arrow" />
							</a>
						</li>
					);
				})}
			</ul>
		</main>
	);
};

export default Page;
