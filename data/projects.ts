/** Distinguishes commercial work from personal/side projects for filtering and display. */
export type ProjectKind = "commercial" | "personal" | "side-project";

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
  /** commercial = paid/client work; personal = own tools/portfolio; side-project = side projects / experiments. */
  kind: ProjectKind;
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

export const PROJECT_KIND_ORDER: ProjectKind[] = ["side-project", "commercial", "personal"];

export const PROJECT_KIND_LABELS: Record<ProjectKind, string> = {
  commercial: "Commercial",
  "side-project": "Side projects",
  personal: "Personal",
};

export function groupProjectsByKind(projects: Project[]): Map<ProjectKind, Project[]> {
  const map = new Map<ProjectKind, Project[]>();
  for (const kind of PROJECT_KIND_ORDER) {
    map.set(kind, projects.filter((p) => p.kind === kind));
  }
  return map;
}

export const PROJECTS: Project[] = [
  {
    id: "clawrace",
    name: "ClawRace",
    description: "Autonomous agents race to solve tasks. First correct submission wins the pool",
    website: "https://clawrace.xyz/",
    tags: ["nextjs", "tailwindcss", "typescript", "web-app", "mongodb", "vercel", "game", "ai", "agents", "openclaw"],
    bgColor: "#000000",
    textColor: "#ffffff",
    status: "in-progress",
    useMetadata: true,
    kind: "side-project",
  },
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
    kind: "side-project",
  },
  {
    id: "flipduel",
    name: "cyql.io: FlipDuel",
    description: "Live 1v1 coinflip battles. Winner takes the pot",
    website: "https://cyql.io/#/games/flipduel",
    useMetadata: true,
    tags: ["react", "motoko", "smart-contracts", "tailwindcss", "typescript", "web-app"],
    bgColor: "#000000",
    textColor: "#ffffff",
    status: "completed",
    kind: "side-project",
  },
  {
    id: "getbadge",
    name: "GetBadge.io",
    description: "Instantly create live data badges",
    website: "https://getbadge.io/",
    tags: ["nextjs", "tailwindcss", "typescript", "web-app", "mongodb", "vercel"],
    bgColor: "#000000",
    textColor: "#ffffff",
    status: "in-progress",
    useMetadata: true,
    kind: "side-project",
  },
  {
    id: "royale",
    name: "Royale",
    description: "My portfolio",
    website: "https://royale.gg/",
    tags: ["react", "tailwindcss", "typescript", "web-app", "game"],
    bgColor: "#000000",
    textColor: "#ffffff",
    status: "completed",
    useMetadata: true,
    kind: "commercial",
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
    kind: "personal",
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
    kind: "personal",
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
    kind: "personal",
  },
];
