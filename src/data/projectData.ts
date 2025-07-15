// src/data/projectData.ts
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url?: string;
}

const projectData: Project[] = [
  {
    id: 1,
    title: "Movvie",
    description:
      "A movie database website, similar to IMDB, for finding film information.",
    image: "/images/movvie.png",
    url: "https://movvie-jade.vercel.app/",
  },
  {
    id: 2,
    title: "Pokemon Database",
    description:
      "A website displaying a database of various Pokémon, with data fetched from an API.",
    image: "/images/pokemon.png",
    url: "https://pokemon-database-teal.vercel.app/",
  },
  {
    id: 3,
    title: "Iphone 15 Pro Clone Website",
    description:
      "A clone of the Apple website showcasing the iPhone 15 Pro product.",
    image: "/images/iphone.png",
    url: "https://iphone-15-pro-clone-ten.vercel.app/",
  },
  {
    id: 4,
    title: "Web Animation Showcase",
    description:
      "A showcase featuring a variety of advanced website animations using GSAP.",
    image: "/images/image.png",
  },
];

export default projectData;
