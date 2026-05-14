// src/data/projectData.ts

export interface ProjectStat {
  value: string; // max 20 characters
  label: string; // max 50 characters
}

export interface ExtendedProject {
  // Existing fields (preserved)
  id: number;
  title: string;
  description: string;
  image: string;
  url?: string;

  // New fields
  number: string; // Two-digit zero-padded, e.g. "01"
  company: string; // Max 100 characters
  year: string; // Format: "YYYY" or "YYYY - YYYY"
  headline: string; // Max 150 characters
  tags: string[]; // 1-10 items, each max 30 characters
  stats: ProjectStat[]; // 1-6 items
  bgColor?: string; // Valid CSS color value
}

const projectData: ExtendedProject[] = [
  {
    id: 1,
    number: "01",
    company: "Apple Clone",
    year: "2024",
    title: "Iphone 15 Pro Clone Website",
    headline: "Recreating Apple's premium product experience",
    description:
      "A clone of the Apple website showcasing the iPhone 15 Pro product.",
    image: "/images/iphone.png",
    url: "https://iphone-15-pro-clone-ten.vercel.app/",
    tags: ["ANIMATION", "THREE.JS", "GSAP"],
    stats: [
      { value: "3D", label: "Interactive models" },
      { value: "60fps", label: "Animation performance" },
    ],
    bgColor: "#0a0a0a",
  },
  {
    id: 2,
    number: "02",
    company: "MY SKRIPSI GWEH",
    year: "2025",
    title: "Maritime Small Object Detection using Enhanced YOLOv11",
    headline: "Maritime Small Object Detection using Enhanced YOLOv11",
    description:
      "Engineered an enhanced YOLOv11 architecture by integrating a Bidirectional Feature Pyramid Network (BiFPN) and Convolutional Block Attention Module (CBAM) for UAV-based maritime object detection",
    image: "/images/seadronesee.png",
    url: "https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/view/15767",
    tags: ["Computer Vision", "Artificial Intelligent"],
    stats: [
      { value: "mAP50-95 0.450", label: "9.2% increase from the baseline" },
      { value: "60.58 FPS", label: "Optimized the system" },
    ],
    bgColor: "#0a0a0a",
  },
  {
    id: 3,
    number: "03",
    company: "Movvie",
    year: "2024",
    title: "Movvie",
    headline: "Building a comprehensive movie discovery platform",
    description:
      "A movie database website, similar to IMDB, for finding film information.",
    image: "/images/movvie.png",
    url: "https://movvie-jade.vercel.app/",
    tags: ["WEB APP", "API", "REACT"],
    stats: [
      { value: "10K+", label: "Movies indexed" },
      { value: "< 1s", label: "Search response time" },
    ],
    bgColor: "#1a1a2e",
  },
  {
    id: 4,
    number: "04",
    company: "Pokemon Database",
    year: "2024",
    title: "Pokemon Database",
    headline: "Exploring the world of Pokemon through data",
    description:
      "A website displaying a database of various Pokémon, with data fetched from an API.",
    image: "/images/pokemon.png",
    url: "https://pokemon-database-teal.vercel.app/",
    tags: ["WEB APP", "API", "NEXT.JS"],
    stats: [
      { value: "800+", label: "Pokemon catalogued" },
      { value: "Real-time", label: "Data fetching" },
    ],
    bgColor: "#2d2d44",
  },
];

export default projectData;
