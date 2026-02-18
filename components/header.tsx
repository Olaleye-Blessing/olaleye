import { cn } from "@/lib/utils";
import { FileIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

const _socials = [
	{
		link: "https://docs.google.com/document/d/1u8sv0wNbkGsq2eGa3yHVyOvfn5x294Xsn10QhtdxAOg/edit",
		label: "Resume",
		icon: FileIcon,
		className: "hover:text-[#D32F2F]",
	},
	{
		link: "https://www.linkedin.com/in/blessing-olaleye-139a22204/",
		label: "Linkedin",
		icon: LinkedinIcon,
		className: "hover:text-[#0077B5]",
	},
	{
		link: "mailto:olaleyedev@gmail.com",
		label: "Email",
		icon: MailIcon,
		className: "hover:text-[#EA4335]",
	},
	{
		link: "https://github.com/Olaleye-Blessing",
		label: "Github",
		icon: GithubIcon,
		className: "hover:text-[#4078c0]",
	},
];

const Header = () => {
	return (
		<header className="flex flex-col items-center justify-center sm:flex-row sm:justify-start">
			<figure className="w-[10.5365591049rem] h-[10.5365591049rem] rounded-full overflow-hidden flex items-center justify-center mb-[3.499375rem] sm:mb-0 sm:mr-14 sm:shrink-0 sm:grow-0">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src="/blessing.jpeg" alt="" width={400} height={400} />
			</figure>
			<div className="flex flex-col items-center justify-center text-center sm:text-left sm:items-start">
				<h1 className="font-normal text-3xl mb-5">
					<span className="text-black-1">Hi, I&apos;m </span>Blessing{" "}
					Olaleye
				</h1>
				<p className="font-light text-sm">
					I&apos;m a{" "}
					<span className="font-bold text-black-1">
						senior frontend developer
					</span>{" "}
					that loves building product from start to end. Bring the UI
					and watch magic{" "}
					<span className="font-thin text-black-1">unfolds</span>.
				</p>
				<ul className="flex items-center justify-center mt-6 mb-6 gap-2 flex-wrap">
					{_socials.map((s) => (
						<li key={s.label}>
							<a
								href={s.link}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									"flex items-center justify-center gap-2 border rounded-md text-sm px-[0.3rem] py-[0.2rem]",
									"border-black-2 text-black-1",
									"hover:bg-black-2",
									s.className,
								)}
							>
								<s.icon className="size-4" />
								{s.label}
							</a>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
};

export default Header;
