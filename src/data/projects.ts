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
    slug: "daily-brifer",
    title: "BERC Daily Briefer",
    tagline: "Automated economic intelligence & daily reporting system",
    description:
      "A fully automated pipeline that collects, analyzes, and delivers daily economic insights for Middle Tennessee. The system transforms raw macroeconomic data into structured signals and distributes them through a reliable reporting workflow.",
    year: 2026,
    category: "Automation",
    status: "In Progress",
    progress: 70,
    team: "Solo",
    stack: [
    "Python",
    "GitHub Actions",
    "HTML/CSS",
    "SMTP",
  ],
    highlights: [
    "End-to-end automated daily reporting pipeline",
    "Rule-based economic risk scoring system",
    "Scheduled CI/CD workflow with GitHub Actions",
    "Zero-cost infrastructure using GitHub Pages",
    "Dynamic email delivery with generated reports",
    "Custom signal classification (Stable / Moderate / Elevated)"
  ],
    liveUrl: "https://nowynreal.github.io/daily-brief/index.html",
    repoUrl: "https://github.com/nowynreal/daily-brief",
    featured: true,
    context:
    "The Business and Economic Research Center (BERC) needed a consistent and scalable way to monitor key economic indicators and produce daily insights without relying on manual reporting workflows.",

  goal:
    "Design and implement a fully automated system that collects economic data, evaluates risk signals, generates readable summaries, and distributes them daily with minimal operational cost.",

  outcome:
    "Delivered a production-ready data system that runs daily without human intervention. The pipeline continuously transforms raw economic indicators into structured insights and distributes them through a streamlined reporting and email delivery process.",
    metrics: [
    { label: "Automation", value: "100%" },
    { label: "Execution", value: "Daily (Scheduled)" },
    { label: "Manual Work Reduced", value: "100%" },
    { label: "Infrastructure Cost", value: "$0" },
  ],
    timeline: [
  {
    stage: "Problem Discovery",
    detail:
      "Identified inefficiencies in manual economic reporting and the lack of a consistent daily briefing system.",
  },
  {
    stage: "Data Collection",
    detail:
      "Integrated external data sources to collect daily economic indicators relevant to Tennessee and the U.S.",
  },
  {
    stage: "Signal Detection",
    detail:
      "Designed a rule-based scoring system to flag abnormal economic movements and classify overall risk levels.",
  },
  {
    stage: "Report Generation",
    detail:
      "Generated structured daily briefs by converting processed data and signals into readable summaries and HTML reports.",
  },
  {
    stage: "Automation",
    detail:
      "Implemented scheduled execution using GitHub Actions to run the pipeline daily without manual intervention.",
  },
  {
    stage: "Delivery",
    detail:
      "Built an email delivery system to distribute daily briefs with dynamic content and hosted review pages.",
  },
  {
    stage: "Iteration",
    detail:
      "Continuously refined signal thresholds, improved formatting, and optimized pipeline reliability.",
  },
],
    media: [
      {
        id: "dailybriefer-image-2",
        type: "gif",
        src: new URL("../assets/dailybriefer-image-2.gif", import.meta.url).href,
        title: "Desktop Briefing Preview",
        caption: "A structured view of daily economic signals, designed for fast scanning and decision-making. Each card highlights key indicators, trends, and risk signals in a clean hierarchy.",
      },
      {
        id: "dailybriefer-image-1",
        type: "image",
        src: new URL("../assets/dailybriefer-image-1.png", import.meta.url).href,
        title: "Main Menu Dashboard",
        caption:
          "A central dashboard for reviewing generated briefs, monitoring signal trends, and accessing historical reports. The interface provides a clear overview of recent economic movements and allows users to dive into detailed insights with ease.",
      },
      {
        id: "dailybriefer-image-3",
        type: "image",
        src: new URL("../assets/dailybriefer-image-3.png", import.meta.url).href,
        title: "Automated Delivery",
        caption: "Daily briefs are generated and delivered via email with zero manual intervention, ensuring consistent and reliable reporting every morning.",
      },
    ],
  },
  {
    id: 2,
    slug: "nowy-portfolio",
    title: "Portfolio",
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
    id: 3,
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
  id: 4,
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
    id: 5,
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
        type: "image",
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
    id: 6,
    slug: "palm-reader",
    title: "Palm Reader App",
    tagline: "AI-powered palm reading and personality insights",
    description:
      "A mobile application that analyzes palm images and generates personalized readings using AI, combining image processing with interpretive insights.",
    year: 2026,
    category: "AI",
    status: "In Progress",
    progress: 82,
    team: "Team",
    stack: ["React Native", "Expo", "Python", "AI APIs"],
    highlights: [
  "Palm image processing and analysis",
  "AI-generated personalized readings",
  "Multi-profile support system",
],
    // repoUrl: "https://github.com/nowynreal",
    context:
  "Many apps in this space feel limited either in depth, consistency, or overall product experience. I wanted to explore how a stronger product, better design, and more structured interpretation could create something more engaging.",

goal:
  "Build an AI-powered mobile app that offers palm-based interpretations, personality insights, and related systems such as numerology in a more polished and structured experience.",

outcome:
  "The project is currently in development, with work focused on shaping the product experience, improving interpretation quality, and building the technical foundation for image analysis and insight generation.",
    metrics: [
      { label: "Platform", value: "Mobile" },
      { label: "Data Contributers", value: "44" },
      { label: "Status", value: "Collecting Data" },
    ],
    timeline: [
  {
    stage: "Concept",
    detail: "Defined core idea, user flow, and feature set for palm reading experience.",
  },
  {
    stage: "Design",
    detail: "Designed mobile UI/UX and structured the app flow and interactions.",
  },
  {
    stage: "Data",
    detail: "Collected and prepared palm image data to support model training and improve analysis accuracy.",
  },
  {
    stage: "Build",
    detail: "Developing image processing, AI integration, and backend systems.",
  },
],
    media: [
      {
        id: "palmreader-image-1",
        type: "image",
        src: new URL("../assets/palmreader-image-1.png", import.meta.url).href, 
        title: "Main User Interface",
        caption: "A user profile selection at the top, along with a credit balance display and an option to add more credits. The main screen features a clear call-to-action button to start a palm reading.",
      },
      {
        id: "palmreader-image-2",
        type: "image",
        src: new URL("../assets/palmreader-image-2.png", import.meta.url).href,
        title: "Reading Results Concept",
        caption: "The results screen is to present the generated reading in a visually engaging way, with clear sections for different insights and interpretations based on the user's palm analysis.",
      },
      
      ],
  },
  {
    id: 7,
    slug: "transcript-article-automation",
    title: "Transcript Article Automation",
    tagline: "Turning raw transcripts into structured, publishable research content",
    description:
      "An automation system that transforms raw transcripts into structured, readable articles using AI-powered processing and custom formatting pipelines.",
    year: 2026,
    category: "Automation",
    status: "Concept",
    progress: 10,
    team: "Solo",
    stack: ["Python", "OpenAI API", "n8n", "Markdown", "GitHub Actions"],
    highlights: [
  "End-to-end transcript → article generation pipeline",
  "Human-in-the-loop system for collecting high-quality training data",
  "Custom prompt engineering for consistent, structured outputs",
  "Automated formatting into publication-ready research articles",
  "Designed for scalability with cost-aware AI usage",
],
    // repoUrl: "https://github.com/nowynreal",
    context:
      "At BERC, transcripts from interviews, forums, and research discussions require manual conversion into structured written content. This process is time-consuming, repetitive, and inconsistent.",
    goal:
      "Build a system that converts transcripts into clean, structured, and publishable articles while minimizing manual editing and maintaining content quality.",
    outcome:
      "Developed a working pipeline that processes transcripts, extracts key ideas, and formats them into article-ready outputs. The system significantly reduces manual workload and standardizes content structure.",
    metrics: [
      { label: "Manual Work Reduction", value: "90%" },
      { label: "Status", value: "System Design" },

    ],
    timeline: [
      {
        stage: "Problem Discovery",
        detail: "Identified inefficiencies in converting transcripts into written content.",
      },
      {
        stage: "System Design",
        detail: "Designed a pipeline combining AI processing, prompt structuring, and formatting layers to generate article-ready outputs.",
      },
      {
        stage: "Implementation",
        detail: "Built automation workflows that process transcripts and generate article-ready outputs.",
    },   {
        stage: "Training Loop",
        detail: "Integrated human-reviewed outputs into a dataset for future model fine-tuning and prompt improvement.",
      },
      {
      stage: "Optimization",
      detail:
        "Improving output quality, reducing token costs, and preparing for scalable deployment.",
    },
    ],
    media: [
      // {
      //   id: "articleautomation-image-1",
      //   type: "image",
      //   src: "",
      //   title: "Mobile Feed Concept",
      //   caption: "Event feed and contextual recommendation blocks.",
      // },
      // {
      //   id: "articleautomation-image-2",
      //   type: "image",
      //   src: "",
      //   title: "Resource Hub",
      //   caption: "",
      // },
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