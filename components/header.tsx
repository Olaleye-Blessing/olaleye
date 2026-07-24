import { cn } from "@/lib/utils";
import {
	CloudDownload,
	FileIcon,
	GithubIcon,
	LinkedinIcon,
	MailIcon,
} from "lucide-react";

const _socials = [
	{
		link: "https://docs.google.com/document/d/19T6VqzeZRWtSu9V9oUIXGVP7MPJUKgTyKyl0AvAzzBo/preview",
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
	{
		link: "https://docs.google.com/document/d/19T6VqzeZRWtSu9V9oUIXGVP7MPJUKgTyKyl0AvAzzBo/export?format=pdf",
		label: "Download Resume",
		icon: CloudDownload,
		className: "hover:text-[#D32F2F]",
	},
];

const Header = () => {
	return (
		<header className="flex flex-col items-center justify-center sm:flex-row sm:justify-start">
			{/* <figure className="w-[10.5365591049rem] h-[10.5365591049rem] rounded-full overflow-hidden flex items-center justify-center mb-[3.499375rem] sm:mb-0 sm:mr-14 sm:shrink-0 sm:grow-0">
				<img src="/blessing.jpeg" alt="" width={400} height={400} />
			</figure> */}
			<div className="flex flex-col items-center justify-center text-center sm:text-left sm:items-start">
				<h1 className="font-normal text-3xl mb-5">
					<span className="text-black-1">Hi, I&apos;m </span>Blessing{" "}
					Olaleye
				</h1>
				<p className="font-light text-sm">
					Frontend Developer with{" "}
					<span className="font-bold text-black-1">
						{new Date().getFullYear() - 2021} years of experience
					</span>{" "}
					building performant, user-focused interfaces and products
					from idea to launch.
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
