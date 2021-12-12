import { Project } from "../interface";

export const projects: Project[] = [
    {
        image: "muvus.webp",
        video: true,
        heading:
            "MUVUS - All about movies, tv series, people and community groups.",
        paragraphs: [
            "Muvus is a media project that lists some series of movies, tv series and people. All media have a set of community(chat forum) that could be created by any authenticated user.",

            "Users can also search for a particular media.",
        ],
        tech: ["nextjs", "scss", "tailwindcss", "firebase"],
        source: "https://github.com/Olaleye-Blessing/muvus",
        live: "https://muvus.herokuapp.com/",
    },

    // {
    //     image: "muvus.webp",
    //     video: true,
    //     heading:
    //         "MUVUS - All about movies, tv series, people and community groups.",
    //     paragraphs: [
    //         "Muvus is a media project that lists some series of movies, tv series and people. All media have a set of community(chat forum) that could be created by anyone.",
    //     ],
    //     tech: ["nextjs", "scss", "tailwindcss", "firebase"],
    //     source: "https://github.com/Olaleye-Blessing/muvus",
    //     live: "https://muvus.herokuapp.com/",
    // },
];
