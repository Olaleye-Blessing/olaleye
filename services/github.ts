import { Contribution } from "../interface";

export const getContributions = async (
  type: string,
  perPage: number,
  page: number
) => {
  try {
    const baseUrl = new URL("https://api.github.com/search/issues");
    let query = `author:olaleye-blessing -user:olaleye-blessing type:${type}`;
    baseUrl.searchParams.set("q", query);
    baseUrl.searchParams.set("per_page", `${perPage}`);
    baseUrl.searchParams.set("page", `${page}`);

    const response = await fetch(baseUrl.toString());
    const { items, total_count } = (await response.json()) as {
      items: Contribution[];
      total_count: number;
    };

    return { items, total_count };
  } catch (error: any) {
    throw new Error("Something went wrong");
  }
};
