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
  /** X (Twitter) URL - can be profile or post */
  xUrl?: string;
  /** Custom image URL - takes priority over metadata image */
  image?: string;
}

export type ProjectIntent =
  | "production" // full product, real users, real stakes
  | "experimental" // trying ideas, APIs, concepts
  | "educational" // learning-focused, tutorials, explainers
  | "research" // exploration, data analysis, experiments
  | "infographic"; // single-page visual / explanatory content

export type ProjectType =
  | "product"
  | "experiment"
  | "learning"
  | "infographic"
  | "commercial";

export const OPEN_CONTRIBUTIONS = [
  {
    id: "folio (this site)",
    github: "https://github.com/tomkoom/folio",
    appLink: "https://cr4ft.vercel.app/",
  },
  {
    id: "coins-treemap",
    github: "https://github.com/tomkoom/coins-treemap-chart",
    appLink: "https://tomkoom.github.io/coins-treemap-chart/",
  },
  {
    id: "matrix-bg",
    github: "https://github.com/tomkoom/matrix-bg",
    appLink: "https://tomkoom.github.io/matrix-bg/",
  },
  {
    id: "string-to-color",
    github: "https://github.com/tomkoom/string-to-color",
    appLink: "https://tomkoom.github.io/string-to-color/",
  },
];

export const PROJECT_KIND_ORDER: ProjectKind[] = [
  "side-project",
  "commercial",
  "personal",
];

export const PROJECT_KIND_LABELS: Record<ProjectKind, string> = {
  commercial: "Commercial",
  "side-project": "Side projects",
  personal: "Personal",
};

export function groupProjectsByKind(
  projects: Project[],
): Map<ProjectKind, Project[]> {
  const map = new Map<ProjectKind, Project[]>();
  for (const kind of PROJECT_KIND_ORDER) {
    map.set(
      kind,
      projects.filter((p) => p.kind === kind),
    );
  }
  return map;
}

/** Ensures project tags are sorted alphabetically */
function sortProjectTags(project: Project): Project {
  return {
    ...project,
    tags: [...project.tags].sort((a, b) => a.localeCompare(b)),
  };
}

/** Ensures all projects have sorted tags */
function ensureSortedTags(projects: Project[]): Project[] {
  return projects.map(sortProjectTags);
}

const PROJECTS_RAW: Project[] = [
  {
    id: "polyterm",
    name: "Polyterm",
    description:
      "Real-time trades & prices for Polymarket's fixed-timeframe Up/Down crypto markets. Streams live order book data and trade events via WebSockets through a Node.js backend connected to Polymarket's CLOB API, with a React + Vite frontend displaying price action and market depth as it happens.",
    website: "https://polyterm.vercel.app/",
    tags: [
      "clob",
      "crypto-trading",
      "fullstack",
      "nodejs",
      "polymarket",
      "react",
      "realtime",
      "trading",
      "typescript",
      "vercel",
      "vite",
      "web-app",
      "websockets",
    ],
    bgColor: "#000000",
    textColor: "#ffffff",
    status: "completed",
    useMetadata: true,
    kind: "side-project",
  },
  {
    id: "cyql-io",
    name: "cyql.io",
    description: "Internet Computer ecosystem directory.",
    website: "https://cyql.io",
    tags: [
      "motoko",
      "react",
      "smart-contracts",
      "tailwindcss",
      "typescript",
      "web-app",
    ],
    bgColor: "#000000",
    textColor: "#ffffff",
    status: "in-progress",
    useMetadata: true,
    kind: "side-project",
    xUrl: "https://x.com/cyqlio",
  },
  {
    id: "jackpot",
    name: "cyql.io: Jackpot",
    description:
      "Casino-grade jackpot game built as a Motoko smart contract on the Internet Computer. Implements casino-quality provably fair commit-reveal system for verifiable randomness, automated round lifecycle with timer-based draws, instant on-chain ICP payments with no intermediaries, and production-ready UX with seamless ticket purchasing and one-click prize claims.",
    website: "https://cyql.io/#/games/jackpot",
    tags: [
      "game",
      "motoko",
      "react",
      "smart-contracts",
      "tailwindcss",
      "typescript",
      "web-app",
    ],
    bgColor: "#000000",
    textColor: "#ffffff",
    status: "completed",
    useMetadata: true,
    kind: "side-project",
    xUrl: "https://x.com/cyqlio",
    image: "https://cyql.io/assets/icp-jackpot-1-480-BQaO62fG.webp",
  },
  {
    id: "flipduel",
    name: "cyql.io: FlipDuel",
    description:
      "Fully functional 1v1 coin-flip game implemented as a smart contract written in Motoko, the native programming language for canisters (smart contracts) on the Internet Computer blockchain. Players can create a duel or match an existing one — the winner receives 2× the total stake. The game is deployed directly on an Internet Computer canister and uses the ICP randomness library and tooling to generate provably fair random outcomes. All payments are processed instantly in ICP on-chain.",
    website: "https://cyql.io/#/games/flipduel",
    useMetadata: true,
    tags: [
      "game",
      "motoko",
      "react",
      "smart-contracts",
      "tailwindcss",
      "typescript",
      "web-app",
    ],
    bgColor: "#000000",
    textColor: "#ffffff",
    status: "completed",
    kind: "side-project",
    xUrl: "https://x.com/cyqlio",
    image: "https://cyql.io/assets/flipduel-1-480-KkQU2K2H.webp",
  },
  {
    id: "royale",
    name: "Royale",
    description:
      "Led frontend development for Royale.gg, a web-based case opening and battle platform. Architected and built interactive UI components, animated opening sequences, real-time game state management, and responsive layouts optimized for fast-paced gameplay. The platform enables users to open virtual mystery boxes and participate in competitive case battles with smooth, engaging user experiences.",
    website: "https://royale.gg/",
    tags: ["game", "react", "tailwindcss", "typescript", "web-app"],
    bgColor: "#000000",
    textColor: "#ffffff",
    status: "completed",
    useMetadata: true,
    kind: "commercial",
  },
  {
    id: "pump-monitor",
    name: "Pump Monitor",
    description:
      "Pump Monitor — an automated system that detects abnormal price movements across crypto markets. It identifies potential pump events, classifies them as manipulation or organic activity, and highlights high-volatility assets where reversals may occur.",
    website: "https://t.me/+0TT9yYbgWzAzMmNi",
    useMetadata: true,
    tags: [
      "automation",
      "crypto-trading",
      "grammy",
      "nodejs",
      "telegram-bot",
      "trading-bot",
      "typescript",
    ],
    bgColor: "#000000",
    textColor: "#ffffff",
    status: "completed",
    kind: "side-project",
    xUrl: "https://x.com/tmkm44/status/2031846024575402322",
  },
  {
    id: "clawrace",
    name: "ClawRace",
    description:
      "Autonomous agents race to solve tasks. First correct submission wins the pool",
    website: "https://clawrace.xyz/",
    tags: [
      "agents",
      "ai",
      "game",
      "mongodb",
      "nextjs",
      "openclaw",
      "tailwindcss",
      "typescript",
      "vercel",
      "web-app",
    ],
    bgColor: "#000000",
    textColor: "#ffffff",
    status: "in-progress",
    useMetadata: true,
    kind: "side-project",
  },
  {
    id: "g4mehub",
    name: "g4mehub.xyz",
    description:
      "A web app delivering cryptographically provably fair, casino-grade games with fully verifiable results and trustless gameplay.",
    website: "https://g4mehub.xyz/",
    tags: [
      "game",
      "mongodb",
      "nextjs",
      "solana",
      "tailwindcss",
      "typescript",
      "vercel",
      "web-app",
    ],
    bgColor: "#000000",
    textColor: "#ffffff",
    status: "in-progress",
    useMetadata: true,
    kind: "side-project",
  },
  {
    id: "getbadge",
    name: "GetBadge.io",
    description: "Instantly create live data badges.",
    website: "https://getbadge.io/",
    tags: [
      "mongodb",
      "nextjs",
      "tailwindcss",
      "typescript",
      "vercel",
      "web-app",
    ],
    bgColor: "#000000",
    textColor: "#ffffff",
    status: "in-progress",
    useMetadata: true,
    kind: "side-project",
  },
  {
    id: "d4ys",
    name: "d4ys",
    description: "A lightweight countdown tracker for events.",
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
    description: "Craft beautiful gradient backgrounds with a few taps.",
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
    description: "A cover generator.",
    website: "#",
    tags: ["nextjs", "tailwindcss", "typescript", "web-app"],
    bgColor: "#000000",
    textColor: "#ffffff",
    status: "in-progress",
    useMetadata: false,
    kind: "personal",
  },
];

export const PROJECTS: Project[] = ensureSortedTags(PROJECTS_RAW);
