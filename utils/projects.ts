import { Project } from "../interface";
import Muvus from "./../public/static/images/projects/muvus.webp";
import Covid from "./../public/static/images/projects/covid.webp";
import Crypto from "./../public/static/images/projects/crypto.webp";
import FoodCheck from "./../public/static/images/projects/foodcheck.webp";

export const projects: Project[] = [
  {
    name: "muvus",
    heading:
      "MUVUS - All about movies, tv-series, people and community groups.",
    paragraphs: [
      "Muvus is a media project that lists some series of movies, tv-series, and people. All media have a set of a community(chat forum) that could be created by an authenticated user.",

      "Users can also search for a particular media.",
    ],
    tech: ["nextjs", "scss", "tailwindcss", "firebase", "API"],
    source: "https://github.com/Olaleye-Blessing/muvus",
    live: "https://muvus.netlify.app/",
    youtubeUrl: "https://www.youtube.com/watch?v=aorIddDX8B8",
    image: Muvus,
  },

  {
    name: "covid",
    heading:
      "NCOV - Covid details for countries, continents, and the world in general.",
    paragraphs: [
      "nCov gives short covid information of countries, continents, and the world in general. It is a 5-page project in which one of the pages compares data.",
      "Users can also save any compared data.",
    ],
    tech: ["nextjs", "scss", "tailwindcss", "API"],
    source: "https://github.com/Olaleye-Blessing/covidtracker",
    live: "https://covidtracker-umber.vercel.app/",
    youtubeUrl: "https://www.youtube.com/watch?v=K0kYdQSalbo",
    image: Covid,
  },

  {
    name: "crypto",
    heading:
      "CRYPTUS - Home of cryptocurrencies, NFTs, exchanges, and crypto news",
    paragraphs: [
      "Cryptus provides basic information about popular coins in the world, the latest crypto news, popular exchanges website, and NFTs.",
      "Users can filter out coins and check the coin's history in form of a simple graph.",
    ],
    tech: ["nextjs", "typescript", "scss", "tailwindcss", "API"],
    source: "https://github.com/Olaleye-Blessing/cryptus",
    live: "https://cryptus-nine.vercel.app/",
    youtubeUrl: "https://www.youtube.com/watch?v=Ec8DtBIMyfE",
    image: Crypto,
  },

  {
    name: "foodcheck",
    heading: "FoodCheck - Get your recipe for your favorite dish.",
    paragraphs: [
      "FoodCheck lists out recipes for preparing your favorite dish.",
      "The main purpose of this project is to learn about unit testing.",
    ],
    tech: ["reactjs", "styled-components", "API", "Testing"],
    source: "https://github.com/Olaleye-Blessing/foodcheck",
    live: "https://foodcheck.vercel.app/",
    image: FoodCheck,
  },
];
