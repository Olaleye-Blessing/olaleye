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
		title: 'How to Simplify Your React Components with Derived State',
		summary:
			"React simplifies building user interfaces with hooks like useState for managing dynamic values. But it's common to overuse useState. This often leads to duplicated data and unnecessary complexity.\n\nIn this tutorial, you'll learn how to use derived state to improve your components. By the end, you'll know when to derive state instead of storing it, making your React code cleaner and more maintainable.",
		href: 'https://www.freecodecamp.org/news/simplify-react-components-with-derived-state/',
		website: 'FreeCodeCamp',
		techs: ['Frontend', 'React.js'],
		date: '2025-11-24',
	},
	{
		title: 'How to Fix Memory Leaks in React Applications',
		summary:
			'Have you ever noticed your React application getting slower the longer you use it? This could be a result of memory leaks. Memory leaks are a common performance issue in React applications. They can slow down your application, crash your browser, and frustrate users.\n\nIn this tutorial, you’ll learn what causes memory leaks and how to fix them.',
		href: 'https://www.freecodecamp.org/news/fix-memory-leaks-in-react-apps/',
		website: 'FreeCodeCamp',
		techs: ['Frontend', 'React.js'],
		date: '2025-09-24',
	},
	{
		title: 'Securing Your Single Page Application',
		summary:
			'Single-page Applications (SPAs) are web apps that load a single HTML page. They update content dynamically with JavaScript, eliminating full-page reloads for a smoother experience. This provides smooth navigation and a more responsive feel. Because SPAs don’t reload, traditional login methods need adjustments to stay secure, and this article will show you what to do.\n\nIn this article, we will learn how to protect our SPAs from CSRF and XSS attacks while persisting user details.',
		href: 'https://blog.openreplay.com/securing-your-single-page-application/',
		website: 'Openreplay',
		techs: ['Backend', 'Express.js', 'Frontend', 'React.js'],
		date: '2024-10-04',
	},
	{
		title: 'Implementing Optimistic UI in React.js/Next.js',
		summary:
			'A smooth and responsive user experience(UX) is important for any modern web application. Users expect quick interactions and immediate feedback after performing an action, even when data needs to be updated on a server.\n\nThis article talks about how to implement optimistic UI (especially in React.js/Next.js).',
		href: 'https://dev.to/olaleyeblessing/implementing-optimistic-ui-in-reactjsnextjs-4nkk',
		website: 'Dev.to',
		techs: ['Frontend', 'React.js', 'Next.js'],
		date: '2024-08-02',
	},
	{
		title: 'Mastering Pattern-Matching in Elixir',
		summary:
			'Elixir is a functional programming language that is great for building scalable applications. Pattern matching is a powerful feature in Elixir. At its core, pattern matching allows developers to destructure data and make decisions based on its structure. You can use pattern matching in many ways.\n\nThis article talks about how to use pattern-matching to write clean and readable code.',
		href: 'https://dev.to/olaleyeblessing/mastering-pattern-matching-in-elixir-5hb1',
		website: 'Dev.to',
		techs: ['Elixir'],
		date: '2024-01-08',
	},
	{
		title: 'Improving Form Performance in React',
		summary:
			'Forms are fundamental to web applications, enabling user interaction and data submission. They’re tools for online actions, from basic search bars to complex sign-up forms.\n\nThis article will show you techniques to optimize their performance in React websites so you can enhance the performance of your apps.',
		href: 'https://blog.openreplay.com/improving-form-performance-in-react/',
		website: 'Openreplay',
		techs: ['Frontend', 'React.js'],
		date: '2023-12-29',
	},
	{
		title: 'The CSS Cascade, Inheritance, and Specificity',
		summary: `As a beginner diving into the world of web development, one of the fundamental technologies you'll encounter is Cascading Style Sheets (CSS). CSS is the magic behind the beautiful and responsive designs that make websites visually appealing. To become a proficient web developer, it's crucial to understand three key concepts: the CSS cascade, inheritance, and specificity.\n\nThis article helps understand these 3 key concepts.`,
		href: 'https://dev.to/olaleyeblessing/the-css-cascade-inheritance-and-specificity-o7m',
		website: 'Dev.to',
		techs: ['Frontend', 'CSS'],
		date: '2023-08-17',
	},
	{
		title: 'Create Dynamic URLs with URL Constructor in JavaScript',
		summary:
			'In web development, one of the essential components of building a frontend web application is constructing URLs dynamically. Creating clean and consistent URLs is crucial for both search engine optimization and user experience. JavaScript provides the URL constructor as a built-in class, to create and maintain dynamic URLs without having to hard-code them every time.\n\nIn this article, we explore what a URL constructor is, different components/parts of a URL, and how to use a URL constructor to build dynamic URLs.',
		href: 'https://dev.to/olaleyeblessing/create-dynamic-urls-with-url-constructor-in-javascript-2o9l',
		website: 'Dev.to',
		techs: ['JavaScript'],
		date: '2023-04-18',
	},
];
