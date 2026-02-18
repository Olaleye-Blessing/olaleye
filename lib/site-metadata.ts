import type { Metadata } from "next";

const startYear = 2021;
const yearsOfExperience = new Date().getFullYear() - startYear;

const defaultTitle = "Olaleye Blessing | Software Developer";
const defaultDescription = `A software developer, with ${yearsOfExperience} years of professional exprience, dedicated to creating interactive, accessible, and responsive websites.`;
const portfolio = "https://www.blessingolaleye.xyz";

export function generateMetadata({
	title = defaultTitle,
	description = defaultDescription,
}: {
	title?: string;
	description?: string;
} = {}): Metadata {
	return {
		title,
		description,
		keywords: ["Software developer", "Frontend developer"],
		authors: [
			{ name: "Olaleye Blessing" },
			{ name: "Olaleye Blessing", url: portfolio },
		],
		creator: "Olaleye Blessing",
		icons: {
			other: [
				{
					rel: "apple-touch-icon",
					sizes: "180x180",
					url: "/apple-touch-icon.png",
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					url: "/favicon-32x32.png",
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "16x16",
					url: "/favicon-16x16.png",
				},
			],
		},
		openGraph: {
			title,
			description,
			url: portfolio,
			siteName: "Blessing Portfolio",
			images: [],
			locale: "en_US",
			type: "website",
		},
		manifest: "/site.webmanifest",
	};
}
