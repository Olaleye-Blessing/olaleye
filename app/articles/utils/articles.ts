export type TArticle = {
	title: string;
	summary: string;
	href: string;
	website: string;
	techs: string[];
	date: string; // YYYY-MM-DD
};

export const articles: TArticle[] = [
	{
		title: 'Implementing Optimistic UI in React.js/Next.js',
		summary:
			'A smooth and responsive user experience(UX) is important for any modern web application. Users expect quick interactions and immediate feedback after performing an action, even when data needs to be updated on a server. This article talks about how to implement optimistic UI (especially in React.js/Next.js).',
		href: 'https://blog.blessingolaleye.xyz/implementing-optimistic-ui-in-reactjsnextjs',
		website: 'Hashnode',
		techs: ['Frontend', 'React.js', 'Next.js'],
		date: '2024-08-02',
	},
	{
		title: 'Mastering Pattern-Matching in Elixir',
		summary:
			'Elixir is a functional programming language that is great for building scalable applications. Pattern matching is a powerful feature in Elixir. At its core, pattern matching allows developers to destructure data and make decisions based on its structure. You can use pattern matching in many ways. This article talks about how to use pattern-matching to write clean and readable code.',
		href: 'https://blog.blessingolaleye.xyz/mastering-pattern-matching-in-elixir',
		website: 'Hashnode',
		techs: ['Elixir'],
		date: '2024-01-08',
	},
	{
		title: 'Improving Form Performance in React',
		summary:
			'Forms are fundamental to web applications, enabling user interaction and data submission. They’re tools for online actions, from basic search bars to complex sign-up forms. This article will show you techniques to optimize their performance in React websites so you can enhance the performance of your apps.',
		href: 'https://blog.openreplay.com/improving-form-performance-in-react/',
		website: 'Openreplay',
		techs: ['Frontend', 'React.js'],
		date: '2023-12-29',
	},
	{
		title: 'The CSS Cascade, Inheritance, and Specificity',
		summary: `As a beginner diving into the world of web development, one of the fundamental technologies you'll encounter is Cascading Style Sheets (CSS). CSS is the magic behind the beautiful and responsive designs that make websites visually appealing. To become a proficient web developer, it's crucial to understand three key concepts: the CSS cascade, inheritance, and specificity. This article helps understand these 3 key concepts.`,
		href: 'https://blog.blessingolaleye.xyz/the-css-cascade-inheritance-and-specificity',
		website: 'Hashnode',
		techs: ['Frontend', 'CSS'],
		date: '2023-08-17',
	},
	{
		title: 'Create Dynamic URLs with URL Constructor in JavaScript',
		summary:
			'In web development, one of the essential components of building a frontend web application is constructing URLs dynamically. Creating clean and consistent URLs is crucial for both search engine optimization and user experience. JavaScript provides the URL constructor as a built-in class, to create and maintain dynamic URLs without having to hard-code them every time. In this article, we explore what a URL constructor is, different components/parts of a URL, and how to use a URL constructor to build dynamic URLs.',
		href: 'https://blog.blessingolaleye.xyz/create-dynamic-urls-with-url-constructor-in-javascript',
		website: 'Hashnode',
		techs: ['JavaScript'],
		date: '2023-04-18',
	},
];
