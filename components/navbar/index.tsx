"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const _pages = ["projects", "experience", "articles", "throwbacks"];

export default function Navbar() {
	const pathname = usePathname();
	return (
		<nav className="overflow-x-auto no-scrollbar py-6 sticky top-0 left-0 right-0 bg-transparent backdrop-blur-[1.3rem] pl-8">
			<ul className="flex items-center justify-start gap-7">
				{[..._pages].map((page, i) => {
					const path = page === "projects" ? "/" : `/${page}`;
					const active = path === pathname;

					return (
						<li key={page}>
							<Link
								href={path}
								className={cn(
									"uppercase text-xs leading-[1.375rem] font-medium transition-all",
									active
										? "text-white"
										: "text-black-1 hover:text-white-1 hover:opacity-30",
								)}
							>
								{page}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
