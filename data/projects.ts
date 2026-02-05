export interface Project {
  id: string;
  name: string;
  description: string;
  website: string;
  tags: string[];
  bgColor: string;
  textColor: string;
  status: "in-progress" | "completed" | "not-started";
  /** When true, project card uses metadata fetched from website (OG-style). When false, uses local name/description. */
  useMetadata?: boolean;
}

export type ProjectIntent =
  | "production"     // full product, real users, real stakes
  | "experimental"   // trying ideas, APIs, concepts
  | "educational"    // learning-focused, tutorials, explainers
  | "research"       // exploration, data analysis, experiments
  | "infographic";   // single-page visual / explanatory content

export type ProjectType =
  | "product"
  | "experiment"
  | "learning"
  | "infographic"
  | "commercial";

export const OPEN_CONTRIBUTIONS = [
  {
    id: "coins-treemap",
    github: "https://github.com/tomkoom/coins-treemap-chart",
    appLink: "https://tomkoom.github.io/coins-treemap-chart/"
  },
  {
    id: "matrix-bg",
    github: "https://github.com/tomkoom/matrix-bg",
    appLink: "https://tomkoom.github.io/matrix-bg/"
  },
  {
    id: "string-to-color",
    github: "https://github.com/tomkoom/string-to-color",
    appLink: "https://tomkoom.github.io/string-to-color/"
  }
]

export const PROJECTS: Project[] = [
  {
    id: "cyql-io",
    name: "cyql.io",
    description: "Internet Computer ecosystem directory",
    website: "https://cyql.io",
    tags: ["react", "motoko", "smart-contracts", "tailwindcss", "typescript", "web-app"],
    bgColor: "#000000",
    textColor: "#ffffff",
    status: "in-progress",
    useMetadata: true,
  },
  {
    id: "flipduel",
    name: "FlipDuel",
    description: "Live 1v1 coinflip battles. Winner takes the pot",
    website: "https://cyql.io/#/games/flipduel",
    useMetadata: true,
    tags: ["react", "motoko", "smart-contracts", "tailwindcss", "typescript", "web-app"],
    bgColor: "#000000",
    textColor: "#ffffff",
    status: "completed",
  },
  {
    id: "d4ys",
    name: "d4ys",
    description: "A lightweight countdown tracker for events",
    website: "https://d4ys.vercel.app",
    tags: ["nextjs", "tailwindcss", "typescript", "web-app"],
    bgColor: "#000000",
    textColor: "#ffffff",
    status: "in-progress",
    useMetadata: true,
  },
  {
    id: "mesh-gradient-wallpapers",
    name: "Mesh Gradient Wallpapers",
    description: "Craft beautiful gradient backgrounds with a few taps",
    website: "#",
    tags: ["nextjs", "tailwindcss", "typescript", "web-app"],
    bgColor: "#000000",
    textColor: "#ffffff",
    status: "in-progress",
    useMetadata: false,
  },
  {
    id: "cover-generator",
    name: "Cover Generator",
    description: "A cover generator",
    website: "#",
    tags: ["nextjs", "tailwindcss", "typescript", "web-app"],
    bgColor: "#000000",
    textColor: "#ffffff",
    status: "in-progress",
    useMetadata: false,
  },
];
