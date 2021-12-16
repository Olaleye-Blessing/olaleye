import { Project } from "../interface";

export const projects: Project[] = [
    {
        src: "muvus",
        heading:
            "MUVUS - All about movies, tv series, people and community groups.",
        paragraphs: [
            "Muvus is a media project that lists some series of movies, tv series and people. All media have a set of community(chat forum) that could be created by any authenticated user.",

            "Users can also search for a particular media.",
        ],
        tech: ["nextjs", "scss", "tailwindcss", "firebase", "API"],
        source: "https://github.com/Olaleye-Blessing/muvus",
        live: "https://muvus.herokuapp.com/",
        youtubeUrl: "https://www.youtube.com/watch?v=aorIddDX8B8",
    },

    {
        src: "covid",
        heading:
            "NCOV - Covid details for countries, continents and the world in general.",
        paragraphs: [
            "nCov gives short covid information of countries, continents and the world in general. It is a 5-page project in which one of the pages compare data",
            "Users can also save any compared data",
        ],
        tech: ["nextjs", "scss", "tailwindcss", "API"],
        source: "https://github.com/Olaleye-Blessing/covidtracker",
        live: "https://covidtracker-umber.vercel.app/",
        youtubeUrl: "https://www.youtube.com/watch?v=K0kYdQSalbo",
    },

    {
        src: "crypto",
        heading:
            "CRYPTUS - Home of crypturrencies, nfts, exchanges and crypto news",
        paragraphs: [
            "Cryptus provides basic information about popular coins in the world, latest crypto news, popular exchanges website and NFTS.",
            "Users can filter out coins and check coin's history in form of a simple graph.",
        ],
        tech: ["nextjs", "typescript", "scss", "tailwindcss", "API"],
        source: "https://github.com/Olaleye-Blessing/cryptus",
        live: "https://cryptus-nine.vercel.app/",
        youtubeUrl: "https://www.youtube.com/watch?v=Ec8DtBIMyfE",
    },
];
