import { IProject } from '@/app/projects/[project]/_types/project';

const PROJECT_GRAPHQL_FIELDS = `
  sys {
    id
  }
  name
  slug
  summary
	youtubeUrl
	coverImage {
    url
  }
	technologies
	live
	sourceCode
  details {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
	startDate
	hasDetail
	priority
`;

const fetchGraphQL = async (query: string, preview = false) => {
	return fetch(
		`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${
					preview
						? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
						: process.env.CONTENTFUL_ACCESS_TOKEN
				}`,
			},
			body: JSON.stringify({ query }),
			next: { tags: ['projects'] },
		}
	).then((response) => response.json());
};

function extractProjectEntries(fetchResponse: any) {
	return fetchResponse?.data?.portfolioProjectsCollection?.items;
}

export interface TGetAllProjects {
	limit?: number;
	isDraftMode?: boolean;
	type?: 'all' | 'detail-only';
}

export const getAllProjects = async ({
	limit = 10,
	isDraftMode = false,
	type = 'all',
}: TGetAllProjects) => {
	const query =
		type === 'all'
			? `query {
        portfolioProjectsCollection(where:{slug_exists: true}, order: priority_DESC, limit: ${limit}, preview: ${
					isDraftMode ? 'true' : 'false'
			  }) {
          items {
            ${PROJECT_GRAPHQL_FIELDS}
          }
        }
      }`
			: `query {
        portfolioProjectsCollection(where:{slug_exists: true, hasDetail: true}, order: priority_DESC, limit: ${limit}, preview: ${
					isDraftMode ? 'true' : 'false'
			  }) {
          items {
            ${PROJECT_GRAPHQL_FIELDS}
          }
        }
      }`;
	const projects = await fetchGraphQL(query, isDraftMode);

	return extractProjectEntries(projects) as IProject[];
};

export const getProject = async (slug: string, isDraftMode = false) => {
	const project = await fetchGraphQL(
		`query {
        portfolioProjectsCollection(where:{slug: "${slug}", hasDetail: true}, limit: 1, preview: ${
			isDraftMode ? 'true' : 'false'
		}) {
          items {
            ${PROJECT_GRAPHQL_FIELDS}
          }
        }
      }`,
		isDraftMode
	);

	return extractProjectEntries(project)[0] as IProject;
};
