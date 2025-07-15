// src/data/projectData.ts
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projectData: Project[] = [
  {
    id: 1,
    title: "Movvie",
    description:
      "A movie database website, similar to IMDB, for finding film information.",
    image: "/images/download.jpeg",
  },
  {
    id: 2,
    title: "Pokemon Database",
    description:
      "A website displaying a database of various Pokémon, with data fetched from an API.",
    image: "/images/download.jpeg",
  },
  {
    id: 3,
    title: "Iphone 15 Pro Clone Website",
    description:
      "A clone of the Apple website showcasing the iPhone 15 Pro product.",
    image: "/images/me.JPG",
  },
  {
    id: 4,
    title: "Web Animation Showcase",
    description:
      "A showcase featuring a variety of advanced website animations using GSAP.",
    image: "/images/download.jpeg",
  },
];

export default projectData;
