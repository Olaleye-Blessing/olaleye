export interface IProject {
	sys: { id: string };
	name: string;
	slug: string;
	summary: string;
	youtubeUrl?: string;
	coverImage: {
		url: string;
	};
	technologies: Array<string>;
	live: string;
	sourceCode: string;
	details: {
		json: {
			data: Object;
			content: [
				{
					data: Object;
					content: [
						{
							data: Object;
							marks: Array<any>;
							value: string;
							nodeType: 'text';
						}
					];
					nodeType: 'paragraph';
				}
			];
			nodeType: 'document';
		};
		links: {
			assets: {
				block: Array<any>;
			};
		};
	};
	startDate?: string;
	hasDetail?: boolean;
}
