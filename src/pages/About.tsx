import NavbarAlt from "../components/NavBarAlt";
import Footer from "../components/Footer";
import about_me_bg from "../assets/about_me_bg.png";
import { useState, useEffect } from "react";

function About() {
  const [activeSection, setActiveSection] = useState("intro");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const sections = [
    { id: "intro", label: "About Me" },
    { id: "experience", label: "Experience" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "what-sets-apart", label: "What Sets Me Apart" },
    { id: "achievements", label: "Awards" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const experiences = [
    {
      type: "project",
      title: "BERC Digital Library",
      subtitle: "Business & Economic Research Center",
      period: "2023 - Present",
      link: "",
      linkLabel: "View Project",
      description:
        "Developed a web platform to improve access to BERC’s research publications, focusing on usability, structured content, and a better overall user experience.",
      tags: ["React", "TypeScript", "TailwindCSS", "UI/UX"],
    },
    {
      type: "experience",
      title: "MTSU Business and Economic Research Center (BERC)",
      subtitle: "Undergraduate Research Assistant",
      period: "Sep 2025 - Present",
      link: "https://berc.mtsu.edu",
      linkLabel: "More Details",
      description:
        "Developed a web platform to modernize access to BERC's research publications. Assisted in editing and designing reports and journal publications, while also helping organize events such as forums and monthly panels, and creating media content to support the center’s activities.",
      tags: ["UI/UX", "Design", "Web Development", "Research"],
    },
    {
      type: "experience",
      title: "MTSU Soccer Club Leadership",
      subtitle: "Student Organization President",
      period: "May 2025 - Present",
      link: "https://linktr.ee/mt_msoccer",
      linkLabel: "More Details",
      description:
        "Led and grew a student organization, managing team coordination, events, and communication. Developed leadership, responsibility, and teamwork skills in a fast-paced environment.",
      tags: ["Leadership", "Operations", "Community"],
    },
    {
      type: "experience",
      title: "CodeM",
      subtitle: "Community Manager & Quality Assurance Coordinator",
      period: "2023 - 2024",
      link: "https://codemstore.com",
      linkLabel: "More Details",
      description:
        "Provided customer and technical support for an international FiveM asset platform serving over 6,000 users, where I diagnosed and resolved script-related issues, verified and documented bugs, and collaborated closely with developers to ensure timely fixes and improved product stability, while also acting as a bridge between users and the development team to streamline communication and enhance overall user experience.",
      tags: ["Leadership", "Operations", "Community"],
    },
  ];

  const cardTheme = {
    experience: {
      label: "Experience",
      badgeClass:
        "border-[#D7850C]/45 bg-[#D7850C]/16 text-[#f7c98a] shadow-[0_0_0_1px_rgba(215,133,12,0.12)]",
      containerClass:
        "border-[#D7850C]/28 bg-gradient-to-br from-[#D7850C]/8 via-[#131313]/82 to-[#131313]/72 hover:border-[#D7850C]/48",
      auraClass: "bg-[#D7850C]/18",
      tagClass: "border-[#D7850C]/30 bg-[#D7850C]/10 text-[#f7c98a]",
      linkClass:
        "border-[#D7850C]/35 bg-[#D7850C]/14 text-[#f7c98a] hover:bg-[#D7850C]/20",
    },
    project: {
      label: "Project",
      badgeClass:
        "border-[#69D8B6]/45 bg-[#69D8B6]/14 text-[#c9ffee] shadow-[0_0_0_1px_rgba(105,216,182,0.12)]",
      containerClass:
        "border-[#69D8B6]/28 bg-gradient-to-br from-[#69D8B6]/7 via-[#131313]/82 to-[#131313]/72 hover:border-[#69D8B6]/48",
      auraClass: "bg-[#69D8B6]/16",
      tagClass: "border-[#69D8B6]/30 bg-[#69D8B6]/10 text-[#c9ffee]",
      linkClass:
        "border-[#69D8B6]/35 bg-[#69D8B6]/12 text-[#c9ffee] hover:bg-[#69D8B6]/18",
    },
  } as const;

  const testimonials = [
    {
      quote:
        "Semih has a rare combination of technical skill and product thinking. He doesn't just build features—he builds experiences.",
      author: "BERC Research Director",
      role: "Project Mentor",
    },
    {
      quote:
        "What impressed me most was how quickly he could iterate from feedback. He genuinely cares about getting the details right.",
      author: "Team Member",
      role: "Peer Developer",
    },
    {
      quote:
        "Great UI instincts. His portfolio and design thinking clearly show he understands how to build things users actually enjoy using.",
      author: "Fellow Developer",
      role: "Tech Community",
    },
  ];

  const achievements = [
    {
      type: "Hackathon",
      title: "Hackathon Winner",
      organization: "XYZ Hackathon 2024",
      date: "2024",
      description: "1st place in web development track",
      icon: "🏆",
    },
    {
      type: "Certification",
      title: "Advanced React Mastery",
      organization: "Udemy",
      date: "2023",
      description: "Comprehensive React and TypeScript certification",
      icon: "📜",
    },
    {
      type: "Certification",
      title: "Full-Stack Web Development",
      organization: "Online Course",
      date: "2022",
      description: "Complete full-stack development course",
      icon: "📜",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#1d1d1d] text-[#f7f2e9]">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${about_me_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-[#1d1d1d]/75 via-[#1d1d1d]/88 to-[#1d1d1d]" />
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-20 left-16 h-60 w-60 rounded-full bg-[#D4C7B4]/10 blur-3xl" />
        <div className="absolute top-64 right-0 h-72 w-72 rounded-full bg-[#D7850C]/12 blur-3xl" />
        <div className="absolute bottom-32 left-1/2 h-80 w-80 rounded-full bg-[#D4C7B4]/8 blur-3xl" />
      </div>

      <NavbarAlt />

      {/* Left Sidebar Navigation */}
      <div className="fixed left-6 top-1/3 z-40 hidden xl:block">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4C7B4]/20 via-[#D4C7B4]/40 to-[#D4C7B4]/20" />

          {/* Dots & Labels */}
          <nav className="space-y-8">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(section.id);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center gap-4 transition"
              >
                {/* Dot */}
                <div
                  className={`relative z-10 w-6 h-6 rounded-full border-2 transition-all ${
                    activeSection === section.id
                      ? "border-[#D4C7B4] bg-[#D4C7B4] shadow-lg shadow-[#D4C7B4]/50"
                      : "border-[#D4C7B4]/40 bg-[#1d1d1d] group-hover:border-[#D4C7B4]/70"
                  }`}
                />

                {/* Label */}
                <span
                  className={`text-sm transition whitespace-nowrap ${
                    activeSection === section.id
                      ? "text-[#D4C7B4] poppins-semibold"
                      : "text-[#f1e8d9]/50 poppins-regular group-hover:text-[#f1e8d9]/80"
                  }`}
                >
                  {section.label}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Button */}
      <div className="fixed right-4 bottom-4 z-40 lg:hidden">
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="rounded-full border border-[#D4C7B4]/35 bg-[#D4C7B4]/90 p-3 text-[#1d1d1d] hover:bg-[#efe4d3] transition"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Navigation Menu */}
        {isNavOpen && (
          <div className="absolute bottom-16 right-0 rounded-2xl border border-[#D4C7B4]/20 bg-[#1d1d1d]/98 p-4 backdrop-blur-sm min-w-[180px]">
            <nav className="space-y-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(section.id);
                    element?.scrollIntoView({ behavior: "smooth" });
                    setIsNavOpen(false);
                  }}
                  className={`block text-sm px-3 py-2 rounded-lg transition ${
                    activeSection === section.id
                      ? "bg-[#D4C7B4]/20 text-[#D4C7B4] poppins-semibold"
                      : "text-[#f1e8d9]/70 hover:text-[#f1e8d9] poppins-regular"
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        {/* Hero Split Section */}
        <div
          id="intro"
          className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
        >
          {/* Left: Title & Intro */}
          <div className="flex flex-col justify-center">
            <p className="inline-block w-fit rounded-full border border-[#D4C7B4]/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#D4C7B4] poppins-semibold">
              About Me
            </p>
            <h1 className="mt-6 font-kalnia text-5xl leading-tight text-[#efe4d3] lg:text-6xl xl:text-7xl">
              Curious
              <br />
              <span className="text-[#D4C7B4]">builder.</span>
            </h1>
            <p className="mt-6 text-sm leading-8 text-[#f1e8d9]/85 poppins-regular md:text-base">
              I'm Semih—a developer & CS student who builds products that don't
              just work, but <em>feel right</em>. Product thinking meets clean
              code.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="/contact"
                className="rounded-xl border border-[#D4C7B4]/35 bg-[#D4C7B4]/90 px-6 py-3 text-xs uppercase tracking-[0.14em] text-[#1d1d1d] poppins-bold transition hover:bg-[#efe4d3]"
              >
                Get in Touch
              </a>
              <a
                href="/projects"
                className="rounded-xl border border-[#D4C7B4]/35 bg-transparent px-6 py-3 text-xs uppercase tracking-[0.14em] text-[#f7f2e9] poppins-bold transition hover:bg-[#D4C7B4]/10"
              >
                View Work
              </a>
            </div>
          </div>

          {/* Right: Key Stats (Bento) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl border border-[#D4C7B4]/20 bg-gradient-to-br from-[#D4C7B4]/14 to-[#1d1d1d]/80 p-6 backdrop-blur-sm md:col-span-2">
              <p className="text-xs uppercase tracking-[0.14em] text-[#D4C7B4]/80 poppins-semibold">
                Currently
              </p>
              <p className="mt-3 text-lg leading-6 text-[#f7f2e9] poppins-regular">
                Building digital library tools at{" "}
                <span className="font-kalnia text-[#D4C7B4]">BERC</span>,
                shipping fast, learning faster.
              </p>
            </div>
            <div className="rounded-2xl border border-[#D4C7B4]/25 bg-[#D4C7B4]/8 p-5">
              <p className="text-[10px] uppercase tracking-[0.14em] text-[#D4C7B4]/70 poppins-semibold">
                Projects
              </p>
              <p className="mt-2 text-3xl font-kalnia text-[#efe4d3]">10+</p>
            </div>
            <div className="rounded-2xl border border-[#D4C7B4]/25 bg-[#D4C7B4]/8 p-5">
              <p className="text-[10px] uppercase tracking-[0.14em] text-[#D4C7B4]/70 poppins-semibold">
                Experience
              </p>
              <p className="mt-2 text-3xl font-kalnia text-[#efe4d3]">3+ yrs</p>
            </div>
          </div>
        </div>

        {/* Career Objective - Full Width Highlight */}
        <section className="mb-16 rounded-3xl border border-[#D7850C]/30 bg-gradient-to-r from-[#D7850C]/12 via-[#D4C7B4]/8 to-[#D7850C]/5 p-8 backdrop-blur-sm">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D7850C] poppins-semibold">
              What I'm Seeking
            </p>
            <h2 className="mt-4 font-kalnia text-3xl text-[#efe4d3] lg:text-4xl">
              Teams & problems where I can combine technical excellence with
              product thinking.
            </h2>
            <p className="mt-5 leading-8 text-[#f1e8d9]/85 poppins-regular">
              I’m looking for opportunities where I can grow as a developer
              while contributing to real-world projects. I enjoy working in
              environments where I can learn fast, take responsibility, and
              improve both my technical and problem-solving skills. Whether it's
              internships, research, or startup environments, I’m driven by
              building things that have real impact.
            </p>
          </div>
        </section>

        {/* Alternating Content Sections */}
        {/* Section 1: Experience Left, Stats Right */}
        <div
          id="experience"
          className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8"
        >
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-kalnia text-2xl text-[#efe4d3] lg:text-3xl">
                Experience & Projects
              </h2>
              <span className="rounded-full border border-[#D7850C]/45 bg-[#D7850C]/16 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-[#f7c98a] poppins-semibold">
                Experience
              </span>
              <span className="rounded-full border border-[#69D8B6]/45 bg-[#69D8B6]/14 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-[#c9ffee] poppins-semibold">
                Projects
              </span>
            </div>
            <div className="mt-6 space-y-4">
              {experiences.map((exp, i) => {
                const theme =
                  exp.type === "project"
                    ? cardTheme.project
                    : cardTheme.experience;

                return (
                  <div
                    key={i}
                    className={`group relative overflow-hidden rounded-2xl border p-5 backdrop-blur-sm transition duration-300 ${theme.containerClass}`}
                  >
                    <div
                      className={`pointer-events-none absolute -right-10 -top-12 h-28 w-28 rounded-full blur-2xl transition duration-300 group-hover:scale-110 ${theme.auraClass}`}
                    />
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <span
                          className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] poppins-semibold ${theme.badgeClass}`}
                        >
                          {theme.label}
                        </span>
                        <h3 className="mt-3 font-kalnia text-xl leading-7 text-[#f6ede0]">
                          {exp.title}
                        </h3>
                        {exp.subtitle && (
                          <p className="mt-1 text-sm text-[#eadcc8] poppins-semibold">
                            {exp.subtitle}
                          </p>
                        )}
                      </div>
                      <p className="whitespace-nowrap rounded-full border border-[#f7f2e9]/16 bg-[#f7f2e9]/6 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-[#f7f2e9]/78 poppins-semibold">
                        {exp.period}
                      </p>
                    </div>
                    <p className="relative mt-4 text-[15px] leading-7 text-[#f7f2e9]/92 poppins-regular">
                      {exp.description}
                    </p>
                    <div className="relative mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full border px-2.5 py-1 text-xs poppins-medium ${theme.tagClass}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="relative mt-4 flex items-center justify-between border-t border-[#f7f2e9]/10 pt-3">
                      <p className="text-[11px] uppercase tracking-[0.14em] text-[#f7f2e9]/45 poppins-semibold">
                        Related Link
                      </p>
                      {exp.link ? (
                        <a
                          href={exp.link}
                          target={
                            exp.link.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            exp.link.startsWith("http")
                              ? "noreferrer"
                              : undefined
                          }
                          className={`rounded-full border px-3 py-1.5 text-xs poppins-semibold transition ${theme.linkClass}`}
                        >
                          {exp.linkLabel}
                        </a>
                      ) : (
                        <span className="rounded-full border border-[#f7f2e9]/15 bg-[#f7f2e9]/6 px-3 py-1.5 text-xs text-[#f7f2e9]/50 poppins-medium">
                          SOON
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Testimonials Vertical Stack */}
          <div className="flex flex-col gap-4">
            <h3 className="font-kalnia text-xl text-[#efe4d3]">Feedback</h3>
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[#D4C7B4]/15 bg-gradient-to-br from-[#D4C7B4]/10 to-[#1d1d1d]/70 p-4 backdrop-blur-sm"
              >
                <p className="text-xs italic leading-5 text-[#f7f2e9]/90 poppins-regular">
                  "{testimonial.quote.substring(0, 60)}…"
                </p>
                <p className="mt-2 text-xs font-kalnia text-[#D4C7B4]">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack - Clean Bento */}
        <div id="tech-stack" className="mb-16">
          <h2 className="font-kalnia text-2xl text-[#efe4d3] lg:text-3xl">
            Building With
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#f2e9da]/80 poppins-regular">
            The stack I use most, in a cleaner quick-scan layout.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            <div className="rounded-3xl border border-[#69D8B6]/28 bg-gradient-to-br from-[#69D8B6]/10 via-[#131313]/84 to-[#131313]/72 p-6 backdrop-blur-sm md:col-span-2">
              <p className="text-xs uppercase tracking-[0.16em] text-[#c9ffee] poppins-semibold">
                Core Engineering Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {[
                  "TypeScript",
                  "JavaScript",
                  "React",
                  "Tailwind CSS",
                  "Vite",
                  "REST API",
                  "Python",
                  "SQL",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#69D8B6]/35 bg-[#69D8B6]/12 px-3 py-1.5 text-xs text-[#c9ffee] poppins-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#D7850C]/26 bg-gradient-to-br from-[#D7850C]/10 via-[#131313]/84 to-[#131313]/72 p-6 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.16em] text-[#f7c98a] poppins-semibold">
                Tools & Programs
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-[#f7f2e9]/90 poppins-medium">
                <span className="rounded-xl bg-[#f7f2e9]/6 px-3 py-2">Git</span>
                <span className="rounded-xl bg-[#f7f2e9]/6 px-3 py-2">
                  GitHub
                </span>
                <span className="rounded-xl bg-[#f7f2e9]/6 px-3 py-2">
                  VS Code
                </span>
                <span className="rounded-xl bg-[#f7f2e9]/6 px-3 py-2">
                  Postman
                </span>
                <span className="rounded-xl bg-[#f7f2e9]/6 px-3 py-2">
                  Figma
                </span>
                <span className="rounded-xl bg-[#f7f2e9]/6 px-3 py-2">
                  Photoshop
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-[#D4C7B4]/24 bg-gradient-to-br from-[#D4C7B4]/10 via-[#131313]/84 to-[#131313]/72 p-6 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.16em] text-[#e9ddcc] poppins-semibold">
                Workflow & Skills
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-[#f7f2e9]/86 poppins-regular">
                <li>Product-focused development</li>
                <li>Clean and maintainable code</li>
                <li>Cross-team communication</li>
                <li>Fast iteration and ownership</li>
              </ul>
              <p className="mt-4 text-xs uppercase tracking-[0.14em] text-[#D4C7B4]/70 poppins-semibold">
                Current Focus: Next.js, Backend, Testing, CI/CD
              </p>
            </div>
          </div>
        </div>

        {/* Why Work With Me - Feature Cards */}
        <section id="what-sets-apart" className="mb-16">
          <h2 className="font-kalnia text-2xl text-[#efe4d3] lg:text-3xl">
            What Sets Me Apart
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#D4C7B4]/20 bg-[#131313]/60 p-6 backdrop-blur-sm">
              <h4 className="font-kalnia text-lg text-[#efe4d3]">
                🎯 Product First
              </h4>
              <p className="mt-2 leading-6 text-[#f1e8d9]/85 poppins-regular">
                I don't just build features—I think about why. Every line of
                code serves the user experience.
              </p>
            </div>
            <div className="rounded-2xl border border-[#D4C7B4]/20 bg-[#131313]/60 p-6 backdrop-blur-sm">
              <h4 className="font-kalnia text-lg text-[#efe4d3]">
                ⚡ Iteration Speed
              </h4>
              <p className="mt-2 leading-6 text-[#f1e8d9]/85 poppins-regular">
                Ship fast, validate with users, improve based on real
                feedback—not guesses or opinions.
              </p>
            </div>
            <div className="rounded-2xl border border-[#D4C7B4]/20 bg-[#131313]/60 p-6 backdrop-blur-sm">
              <h4 className="font-kalnia text-lg text-[#efe4d3]">
                📐 Quality Code
              </h4>
              <p className="mt-2 leading-6 text-[#f1e8d9]/85 poppins-regular">
                Clean, maintainable, well-documented—code that scales and
                doesn't slow down teams.
              </p>
            </div>
            <div className="rounded-2xl border border-[#D4C7B4]/20 bg-[#131313]/60 p-6 backdrop-blur-sm">
              <h4 className="font-kalnia text-lg text-[#efe4d3]">
                🤝 Full Ownership
              </h4>
              <p className="mt-2 leading-6 text-[#f1e8d9]/85 poppins-regular">
                I take responsibility for my work and collaborate openly to
                solve harder problems together.
              </p>
            </div>
          </div>
        </section>

        {/* Awards & Certifications */}
        <section id="achievements" className="mb-16">
          <h2 className="font-kalnia text-2xl text-[#efe4d3] lg:text-3xl">
            Awards & Certifications
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {achievements.map((achievement, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[#D4C7B4]/20 bg-gradient-to-br from-[#D4C7B4]/8 to-[#1d1d1d]/70 p-6 backdrop-blur-sm transition hover:border-[#D7850C]/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-2xl">{achievement.icon}</p>
                    <h3 className="mt-2 font-kalnia text-lg text-[#efe4d3]">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-[#D4C7B4] poppins-semibold">
                      {achievement.organization}
                    </p>
                  </div>
                  <p className="whitespace-nowrap text-xs uppercase tracking-[0.14em] text-[#D4C7B4]/60 poppins-semibold">
                    {achievement.date}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#f1e8d9]/80 poppins-regular">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="rounded-3xl border border-[#D4C7B4]/30 bg-gradient-to-r from-[#D4C7B4]/14 via-[#D7850C]/8 to-[#D4C7B4]/10 p-8 backdrop-blur-sm md:p-12">
          <div className="max-w-2xl">
            <h2 className="font-kalnia text-3xl text-[#efe4d3] lg:text-4xl">
              Let's build something that matters.
            </h2>
            <p className="mt-4 leading-7 text-[#f1e8d9]/85 poppins-regular">
              Collaboration, projects, or just a chat about product &
              engineering—I'm here for it.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-xl border border-[#D4C7B4]/35 bg-[#D4C7B4]/90 px-6 py-3 text-sm uppercase tracking-[0.14em] text-[#1d1d1d] poppins-bold transition hover:bg-[#efe4d3]"
              >
                Start Conversation
              </a>
            </div>
          </div>
        </section>

        <div className="mt-12">
          <Footer compact />
        </div>
      </main>
    </div>
  );
}

export default About;
