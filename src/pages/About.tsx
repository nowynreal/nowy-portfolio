import NavbarAlt from "../components/NavBarAlt";
import Footer from "../components/Footer";
import about_me_bg from "../assets/about_me_bg.png";

function About() {
  const experiences = [
    {
      title: "BERC Digital Library Modernization",
      subtitle: "Business & Economic Research Center",
      period: "2023 - Present",
      description:
        "Built searchable digital experiences transforming decades of research publications into accessible modern interfaces. Led frontend architecture decisions focusing on UX polish and performance.",
      tags: ["React", "TypeScript", "Digital Publishing"],
    },
    {
      title: "MTSU Soccer Club Leadership",
      subtitle: "Student Organization President",
      period: "2022 - Present",
      description:
        "Built and scaled campus organization from 20 to 150+ members. Managed operations, communications, and logistics while leading technical initiatives for team coordination.",
      tags: ["Leadership", "Operations", "Community"],
    },
    {
      title: "Full-Stack Web Projects",
      subtitle: "Personal & Client Work",
      period: "2021 - Present",
      description:
        "Shipped 10+ production projects including responsive web apps, design systems, and portfolio sites. Focused on shipping fast, iteration-based development, and code quality.",
      tags: ["Full-Stack", "Product Development", "UI/UX"],
    },
  ];

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

  const techStack = [
    { category: "Frontend", tech: "React, TypeScript, Tailwind CSS, Vite" },
    { category: "Languages", tech: "JavaScript, TypeScript, Python, SQL" },
    { category: "Tools", tech: "Git, Figma, VS Code, REST APIs" },
    {
      category: "Concepts",
      tech: "UI/UX, Performance, Type Safety, Architecture",
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

      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        {/* Hero Split Section */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
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
              Whether founding, leading, or shipping features—I'm driven by
              building software that solves real problems elegantly. Early-stage
              startups, impactful initiatives, or roles where shipping fast
              meets shipping right.
            </p>
          </div>
        </section>

        {/* Alternating Content Sections */}
        {/* Section 1: Experience Left, Stats Right */}
        <div className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <h2 className="font-kalnia text-2xl text-[#efe4d3] lg:text-3xl">
              Experience & Projects
            </h2>
            <div className="mt-6 space-y-4">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-[#D4C7B4]/15 bg-[#131313]/60 p-5 backdrop-blur-sm transition hover:border-[#D4C7B4]/35 hover:bg-[#131313]/80"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-kalnia text-lg text-[#efe4d3]">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-[#D4C7B4] poppins-semibold">
                        {exp.subtitle}
                      </p>
                    </div>
                    <p className="whitespace-nowrap text-xs uppercase tracking-[0.14em] text-[#D4C7B4]/60 poppins-semibold">
                      {exp.period}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#f1e8d9]/80 poppins-regular">
                    {exp.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#D4C7B4]/20 bg-[#D4C7B4]/6 px-2 py-1 text-xs text-[#D4C7B4] poppins-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
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

        {/* Tech Stack - Asymmetric Grid */}
        <div className="mb-16">
          <h2 className="font-kalnia text-2xl text-[#efe4d3] lg:text-3xl">
            Building With
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {/* Large card */}
            <div className="rounded-3xl border border-[#D4C7B4]/20 bg-gradient-to-br from-[#D4C7B4]/12 to-[#1d1d1d]/80 p-6 backdrop-blur-sm md:col-span-2">
              <p className="text-xs uppercase tracking-[0.14em] text-[#D4C7B4]/80 poppins-semibold">
                Frontend Foundation
              </p>
              <p className="mt-3 text-lg text-[#f7f2e9] poppins-medium">
                React, TypeScript, Tailwind CSS, Vite
              </p>
              <p className="mt-2 text-sm text-[#f1e8d9]/70 poppins-regular">
                Type-safe, performant, shipping-ready stack.
              </p>
            </div>

            {/* Stack split */}
            <div className="rounded-2xl border border-[#D4C7B4]/25 bg-[#D4C7B4]/8 p-5">
              <p className="text-xs uppercase tracking-[0.14em] text-[#D4C7B4]/80 poppins-semibold">
                Languages
              </p>
              <p className="mt-2 text-[#f7f2e9] poppins-medium">
                JS, TS, Python, SQL
              </p>
            </div>

            {/* Tech row bottom */}
            <div className="rounded-2xl border border-[#D4C7B4]/25 bg-[#D4C7B4]/8 p-5">
              <p className="text-xs uppercase tracking-[0.14em] text-[#D4C7B4]/80 poppins-semibold">
                Tools
              </p>
              <p className="mt-2 text-[#f7f2e9] poppins-medium">
                Git, Figma, VS Code
              </p>
            </div>

            <div className="rounded-2xl border border-[#D4C7B4]/25 bg-[#D4C7B4]/8 p-5">
              <p className="text-xs uppercase tracking-[0.14em] text-[#D4C7B4]/80 poppins-semibold">
                Mindset
              </p>
              <p className="mt-2 text-[#f7f2e9] poppins-medium">
                UX, Performance, Scale
              </p>
            </div>
          </div>
        </div>

        {/* Why Work With Me - Feature Cards */}
        <section className="mb-16">
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
