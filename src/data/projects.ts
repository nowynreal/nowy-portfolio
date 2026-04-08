export type ProjectStatus = "Live" | "In Progress" | "Concept";
export type ProjectCategory =
  | "Frontend"
  | "Full Stack"
  | "AI"
  | "Data"
  | "Automation"
  | "Tools";

export interface ProjectMedia {
  id: string;
  type: "image" | "video" | "gif";
  src: string;
  title: string;
  caption: string;
  poster?: string;
}

export interface ProjectTimelineItem {
  stage: string;
  detail: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: number;
  category: ProjectCategory;
  status: ProjectStatus;
  progress: number;
  team: "Solo" | "Team";
  stack: string[];
  highlights: string[];
  liveUrl?: string;
  repoUrl?: string;
  customButtonLabel?: string;
  customButtonUrl?: string;
  featured?: boolean;
  context: string;
  goal: string;
  outcome: string;
  metrics: Array<{ label: string; value: string }>;
  timeline: ProjectTimelineItem[];
  media: ProjectMedia[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "nowy-portfolio-v3",
    title: "Nowy Portfolio v3",
    tagline: "Personal brand experience with modular architecture",
    description:
      "A fast portfolio crafted with reusable layout primitives, bold editorial sections, and intentional motion for smooth browsing.",
    year: 2026,
    category: "Frontend",
    status: "Live",
    progress: 100,
    team: "Solo",
    stack: ["React", "TypeScript", "Tailwind", "Vite"],
    highlights: [
      "Route-based page architecture",
      "Mobile-first responsive strategy",
      "Reusable card and section patterns",
    ],
    liveUrl: "https://semihyucekan.com",
    repoUrl: "https://github.com/nowynreal",
    featured: true,
    context:
      "The previous portfolio lacked narrative hierarchy for recruiters scanning quickly on mobile and desktop.",
    goal:
      "Create a premium-feeling showcase with fast interactions, strong typography, and clear project storytelling.",
    outcome:
      "Delivered a highly reusable page system where each section can be swapped or expanded without touching core layout logic.",
    metrics: [
      { label: "Build Time", value: "<2s" },
      { label: "Core Routes", value: "4" },
      { label: "Reusable Blocks", value: "18+" },
      { label: "Mobile Score", value: "A" },
    ],
    timeline: [
      {
        stage: "Discovery",
        detail: "Defined visual direction, section priorities, and navigation behaviors.",
      },
      {
        stage: "System Design",
        detail: "Built reusable card, section, and responsive layout primitives.",
      },
      {
        stage: "Polish",
        detail: "Refined transitions, spacing rhythm, and contrast for long-form readability.",
      },
    ],
    media: [
      {
        id: "portfolio-video",
        type: "video",
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        title: "Interactive Hero Walkthrough",
        caption:
          "Replace this video URL with your own product walkthrough recording.",
        poster:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "portfolio-shot-1",
        type: "image",
        src: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80",
        title: "Desktop Canvas",
        caption: "Main desktop composition and card hierarchy.",
      },
      {
        id: "portfolio-shot-2",
        type: "gif",
        src: "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
        title: "Motion Snapshot",
        caption: "Place micro-interaction GIFs here for hover/transition previews.",
      },
    ],
  },
  {
    id: 2,
    slug: "berc-library",
    title: "BERC Digital Library",
    tagline: "Transform your research archives into a discoverable digital experience.",
    description:
      "Built for the Business and Economic Research Center (BERC), this Digital Library is a secure web platform that digitizes and organizes academic journals and research publications for seamless discovery and access. Readers navigate content through an interactive flipbook viewer and built-in search, while editors and admins manage publications through a role-based control panel.",
    year: 2025,
    category: "Full Stack",
    status: "In Progress",
    progress: 76,
    team: "Solo",
    stack: ["React", "Node", "Express", "TypeScript", "TailwindCSS", "Vite", "SQLite"],
    highlights: [
    "Browse journals, articles, and author profiles in one place",
    "Secure role-based access for editors, managers, and admins",
    "Upload, organize, and manage publications from an admin panel",
    "Read journals in an interactive flipbook-style viewer",
    "Search and filter content for faster discovery",
    ],
    // repoUrl: "https://github.com/nowynreal",
    context:
      "BERC needs a modern, centralized digital platform to organize its journals, research articles, and related publications in a more accessible way than scattered files or static PDFs.",
    goal:
      "To provide a secure, role-based web application where users can browse, read, search, and manage academic content, while editors and admins can upload and maintain publications through a controlled panel.",
    outcome:
      "A full-stack digital library that lets readers discover content easily, opens journals in an interactive flipbook-style experience, and gives staff a structured workflow for publishing and managing content.",
    metrics: [
        { label: "MVP Status", value: "Beta" },
      { label: "Published Journals", value: "4" },
    ],
    timeline: [
    {
        stage: "Request",
        detail: "Identified need to digitize journal archives and research publications; gathered requirements from BERC staff for journal management, search, and reader experience.",      },
      {
        stage: "Research",
        detail: "Evaluated flipbook and PDF viewer technologies; designed role-based access model for editors, managers, and admins; planned metadata structure for journals and articles.",      },
      {
        stage: "Build",
        detail: "Developed React + TypeScript frontend with journal browser, interactive flipbook viewer, and admin panel; built Express backend with SQLite database, JWT auth, and file upload system.",      },
      {
        stage: "Validation",
        detail: "Will be tested with BERC team for content management workflows; refined search and filtering; validated role-based permissions and performance before library launch.",
      },
    ],
    media: [
      {
        id: "berclibrary-image-1",
        type: "image",
        src: "",
        title: "Image Coming Soon",
        caption: "no image here.",
      },
      {
        id: "berclibrary-image-2",
        type: "image",
        src: "",
        title: "Image Coming Soon",
        caption: "no image here.",
      },
    ],
  },
  {
  id: 3,
  slug: "subtitle-studio",
  title: "Subtitle Studio",
  tagline: "Generate, edit, and style subtitles locally with live preview.",
  description:
    "Open-source subtitle tool that converts video/audio into VTT and ASS formats using local processing. Includes a real-time editor, advanced styling controls, and live preview for production-ready subtitles.",
  year: 2026,
  category: "Tools",
  status: "Live",
  progress: 100,
  team: "Solo",
  stack: ["React", "TypeScript", "TailwindCSS", "Python", "Whisper"],
  highlights: [
    "Local transcription with Whisper",
    "VTT & ASS editing with live preview",
    "Advanced subtitle styling (font, outline, background, positioning)",
  ],
  // liveUrl: "https://example.com",
  repoUrl: "https://github.com/nowynreal/subtitle-studio",
  context:
    "Most subtitle tools are either paid, require sign-ups, or lack advanced styling and real-time editing capabilities.",
  goal:
    "Build a fully local, open-source subtitle tool that is fast, accessible, and production-ready without requiring subscriptions.",
  outcome:
    "Delivered a complete subtitle workflow: transcription, editing, styling, and export — all in one interface.",
  metrics: [
    { label: "Formats Supported", value: "VTT + ASS" },
    { label: "Processing Mode", value: "Local" },
    { label: "Editor", value: "Real-time" },
    { label: "Export Speed", value: "<1 min" },
  ],
  timeline: [
  {
    stage: "TRIGGER",
    detail: "While creating the introduction video for the MTSU 2026 Forum on Growth and Regional Challenges, discovered the importance of accessibility standards (captions/subtitles) and the lack of simple, reliable tools to implement them.",
  },
  {
    stage: "RESEARCH",
    detail: "Explored existing subtitle tools and workflows; found most solutions were paid, required sign-ups, or lacked trust and flexibility. Studied VTT/ASS formats, accessibility standards, and local transcription approaches.",
  },
  {
    stage: "BUILD",
    detail: "Built a full local pipeline using Whisper and FFmpeg for transcription; developed a React + TypeScript interface with real-time editing, live preview, and advanced subtitle styling.",
  },
  {
    stage: "VALIDATION",
    detail: "Tested subtitle outputs across different platforms and players; refined UX for editing and styling; ensured export compatibility (VTT/ASS) and usability for real-world content creation.",
  },
],
  media: [
    {
      id: "subtitle-demo",
      type: "gif",
      src: "https://raw.githubusercontent.com/nowynreal/subtitle-studio/refs/heads/main/demo.gif",
      title: "Subtitle Studio Demo",
      caption: "Upload media, edit subtitles, and export in real-time.",
    },
    {
      id: "subtitle-ui",
      type: "image",
      src: new URL("../assets/vtt-image-2.png", import.meta.url).href,
      title: "Example Output",
      caption: "",
    },
  ],
},
  {
    id: 4,
    slug: "spiq",
    title: "SpIQ",
    tagline: "AI-powered interview practice with real-time feedback.",
    description:
      "A video-based interview training platform that helps users practice speaking, track performance, and receive structured feedback through guided sessions.",
    year: 2026,
    category: "AI",
    status: "In Progress",
    progress: 68,
    team: "Team",
    stack: ["React", "TypeScript", "TailwindCSS", "Flask", "OpenAI API"],
    highlights: [
      "Segmented interview practice sessions",
      "Transcript + visual feedback system",
      "Performance tracking across sessions",
    ],
    // liveUrl: "SOON",
    customButtonLabel: "READ MORE",
    customButtonUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7425804951089528832/?originTrackingId=tsAhls3rssHTg4FFAOIIoA%3D%3D",
    // repoUrl: "https://github.com/nowynreal",
    context:
      "Interview preparation is often unstructured and lacks real feedback, making it difficult for users to improve their speaking and performance effectively.",
    goal:
      "Create an AI-powered interview practice platform that provides guided sessions, real-time feedback, and measurable progress tracking.",
    outcome:
      "Built a working prototype that enables structured interview practice with video recording, transcript analysis, and performance feedback, winning 1st Place and Hackers’ Choice at HackMT.",    metrics: [
      { label: "Hackathon Rank", value: "1st Place" },
      { label: "Awards", value: "Hackers’ Choice" },
      // { label: "", value: "1.2k" },
      // { label: "Latency", value: "Low" },
    ],
    timeline: [
  {
    stage: "TRIGGER",
    detail: "Interview preparation often feels vague and hard to practice alone, especially when feedback is limited. During HackMT, we saw an opportunity to turn mock interviews into structured, actionable feedback.",
  },
  {
    stage: "RESEARCH",
    detail: "Analyzed common interview prep workflows and identified key gaps: lack of realistic speaking practice, limited feedback, and no clear performance tracking. Defined segmented interview flows and feedback categories.",
  },
  {
    stage: "BUILD",
    detail: "Designed and developed SpIQ during HackMT using React, TailwindCSS, and Flask. Implemented timed interview segments, recording flow, transcript-based review, and a clean, intuitive interface.",
  },
  {
    stage: "VALIDATION",
    detail: "Tested the product during the hackathon, refined the UX based on feedback, and delivered a working prototype that won 1st Place and Hackers' Choice.",
  },
  {
    stage: "EVOLUTION",
    detail: "Currently continuing development by improving feedback accuracy, enhancing UI/UX, and expanding the system into a more complete interview preparation platform.",
  },
],
    media: [
      {
        id: "spiq-image-1",
        type: "image",
        src: new URL("../assets/spiq-image-1.png", import.meta.url).href,
        title: "Session Interface",
        caption: "A guided interview experience designed to simulate real-world practice. Users move through structured prompts with built-in timing, recording their responses in a focused, distraction-free environment. Each session is segmented into clear stages, allowing users to concentrate on one response at a time while maintaining a natural interview flow. The interface emphasizes simplicity and clarity, helping users stay engaged without overthinking the process.The goal is to make practice feel intentional and repeatable — not just answering questions, but building consistency in delivery, pacing, and confidence across sessions.",
      },
      {
        id: "spiq-image-2",
        type: "gif",
        src: new URL("../assets/spiq-image-2.png", import.meta.url).href,        
        title: "Results Interface",
        caption: "A feedback-driven interface that combines video playback, transcript analysis, and scoring to help users understand and improve their performance over time. Designed to turn subjective performance into structured, trackable data.",
      },
      {
        id: "spiq-image-3",
        type: "image",
        src: new URL("../assets/spiq-image-3.png", import.meta.url).href,        
        title: "Pricing Page Concept",
        caption: "",
      },
    ],
  },
  {
    id: 5,
    slug: "autoflow-scripts",
    title: "AutoFlow Scripts",
    tagline: "Automation recipes for repetitive workflows",
    description:
      "Set of automation scripts that remove repetitive daily operations in reporting, file handling, and notification pipelines.",
    year: 2024,
    category: "Automation",
    status: "Live",
    progress: 100,
    team: "Solo",
    stack: ["Python", "PowerShell", "GitHub Actions"],
    highlights: [
      "Cron-based routine triggers",
      "CLI-first workflow design",
      "Error reporting with retries",
    ],
    repoUrl: "https://github.com/nowynreal",
    context:
      "Manual report prep and repetitive file operations created avoidable daily overhead.",
    goal:
      "Automate recurring operations and provide auditable logs for each run.",
    outcome:
      "Shipped practical scripts that reduced repetitive manual effort across ops tasks.",
    metrics: [
      { label: "Tasks Automated", value: "16" },
      { label: "Weekly Hours Saved", value: "11h" },
      { label: "Retry Coverage", value: "100%" },
      { label: "Maintainers", value: "3" },
    ],
    timeline: [
      {
        stage: "Map",
        detail: "Identified high-frequency operations with low decision complexity.",
      },
      {
        stage: "Automate",
        detail: "Added script runners, argument safety checks, and logging.",
      },
      {
        stage: "Harden",
        detail: "Introduced fallback retries and lightweight monitoring alerts.",
      },
    ],
    media: [
      {
        id: "autoflow-image",
        type: "image",
        src: "",
        title: "Automation Control Panel",
        caption: "Execution snapshots and run-status summaries.",
      },
    ],
  },
  {
    id: 6,
    slug: "campus-connect",
    title: "Campus Connect",
    tagline: "Student event and resource mobile prototype",
    description:
      "A concept app to help students discover events, connect clubs, and access campus resources in one place.",
    year: 2024,
    category: "Frontend",
    status: "Concept",
    progress: 34,
    team: "Team",
    stack: ["React Native", "Expo", "Firebase"],
    highlights: [
      "Prototype-ready interaction flow",
      "Community event recommendation",
      "Role-specific onboarding paths",
    ],
    repoUrl: "https://github.com/nowynreal",
    context:
      "Students needed a single app for discoverability, events, and practical campus resources.",
    goal:
      "Prototype a social utility experience that can scale from concept to pilot rollout.",
    outcome:
      "Created the IA and flow prototypes, now preparing for validation interviews.",
    metrics: [
      { label: "Core Flows", value: "5" },
      { label: "Prototype Screens", value: "38" },
      { label: "Validation", value: "Pending" },
      { label: "Design State", value: "Concept" },
    ],
    timeline: [
      {
        stage: "Framing",
        detail: "Mapped event, club, and resource use cases by student journeys.",
      },
      {
        stage: "Prototype",
        detail: "Built key mobile flows with role-aware navigation states.",
      },
      {
        stage: "Test Plan",
        detail: "Scheduling user interviews and prioritizing usability checkpoints.",
      },
    ],
    media: [
      {
        id: "campus-image-1",
        type: "image",
        src: "",
        title: "Mobile Feed Concept",
        caption: "Event feed and contextual recommendation blocks.",
      },
      {
        id: "campus-image-2",
        type: "image",
        src: "",
        title: "Resource Hub",
        caption: "Academic and social resources grouped by urgency and type.",
      },
    ],
  },
];

export const categories: Array<"All" | ProjectCategory> = [
  "All",
  "Frontend",
  "Full Stack",
  "AI",
  "Data",
  "Automation",
];

export const statuses: Array<"All" | ProjectStatus> = [
  "All",
  "Live",
  "In Progress",
  "Concept",
];

export const statusStyle: Record<ProjectStatus, string> = {
  Live: "border-emerald-300/45 bg-emerald-300/15 text-emerald-100",
  "In Progress": "border-amber-300/45 bg-amber-300/15 text-amber-100",
  Concept: "border-sky-300/45 bg-sky-300/15 text-sky-100",
};

export const findProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);