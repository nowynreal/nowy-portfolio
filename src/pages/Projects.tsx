import { useMemo, useState } from "react";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaClock,
  FaCodeBranch,
  FaFilter,
  FaGithub,
  FaLayerGroup,
  FaListCheck,
  FaMagnifyingGlass,
  FaRocket,
  FaSliders,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarAlt from "../components/NavBarAlt";
import {
  categories,
  projects,
  statuses,
  statusStyle,
  type ProjectCategory,
  type ProjectStatus,
} from "../data/projects";

function Projects() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>(
    "All",
  );
  const [activeStatus, setActiveStatus] = useState<"All" | ProjectStatus>(
    "All",
  );

  const filteredProjects = useMemo(() => {
    const keyword = query.toLowerCase().trim();

    return projects.filter((project) => {
      const matchCategory =
        activeCategory === "All" || project.category === activeCategory;
      const matchStatus =
        activeStatus === "All" || project.status === activeStatus;
      const matchQuery =
        keyword.length === 0 ||
        project.title.toLowerCase().includes(keyword) ||
        project.tagline.toLowerCase().includes(keyword) ||
        project.stack.some((item) => item.toLowerCase().includes(keyword));

      return matchCategory && matchStatus && matchQuery;
    });
  }, [activeCategory, activeStatus, query]);

  const featuredProject = filteredProjects.find((project) => project.featured);
  const otherProjects = filteredProjects.filter((project) => !project.featured);

  const liveCount = projects.filter(
    (project) => project.status === "Live",
  ).length;
  const inProgressCount = projects.filter(
    (project) => project.status === "In Progress",
  ).length;

  return (
    <div className="relative min-h-screen bg-[#1d1d1d] text-[#f7f2e9]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#D4C7B4]/15 blur-3xl" />
        <div className="absolute right-0 top-28 h-80 w-80 rounded-full bg-[#D7850C]/14 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#5b4121]/20 blur-3xl" />
      </div>

      <div className="relative flex min-h-screen flex-col">
        <NavbarAlt />

        <main className="mx-auto w-full max-w-6xl flex-1 px-3 pb-4 pt-3 sm:px-6 lg:px-8">
          <section className="rounded-3xl border border-[#D4C7B4]/20 bg-gradient-to-b from-[#D4C7B4]/10 via-[#171717]/95 to-[#121212]/95 p-4 backdrop-blur-sm sm:p-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#D4C7B4]/35 px-4 py-2 text-xs uppercase tracking-[0.15em] text-[#D4C7B4] poppins-semibold">
              <FaSliders className="text-[11px]" />
              Curated Build Showcase
            </p>

            <div className="mt-4 flex flex-col gap-4 lg:mt-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h1 className="font-kalnia text-[2rem] leading-tight text-[#efe4d3] sm:text-5xl lg:text-[3.2rem]">
                  Projects with
                  <br />
                  Product Thinking
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#f1e8d9]/80 poppins-regular sm:text-base">
                  A selection of shipped and in-progress work designed with
                  clear information hierarchy, performance focus, and practical
                  user flows.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="rounded-2xl border border-[#D4C7B4]/25 bg-[#D4C7B4]/8 px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[#D4C7B4]/85 poppins-semibold">
                    Total
                  </p>
                  <p className="mt-1 text-2xl text-[#f7f2e9] poppins-bold">
                    {projects.length}
                  </p>
                </div>
                <div className="rounded-2xl border border-[#D4C7B4]/25 bg-[#D4C7B4]/8 px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[#D4C7B4]/85 poppins-semibold">
                    Live
                  </p>
                  <p className="mt-1 text-2xl text-[#f7f2e9] poppins-bold">
                    {liveCount}
                  </p>
                </div>
                <div className="rounded-2xl border border-[#D4C7B4]/25 bg-[#D4C7B4]/8 px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[#D4C7B4]/85 poppins-semibold">
                    In Progress
                  </p>
                  <p className="mt-1 text-2xl text-[#f7f2e9] poppins-bold">
                    {inProgressCount}
                  </p>
                </div>
                <div className="rounded-2xl border border-[#D4C7B4]/25 bg-[#D4C7B4]/8 px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[#D4C7B4]/85 poppins-semibold">
                    Teams
                  </p>
                  <p className="mt-1 text-2xl text-[#f7f2e9] poppins-bold">
                    {
                      projects.filter((project) => project.team === "Team")
                        .length
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-[#D4C7B4]/25 bg-[#D4C7B4]/5 p-3 sm:p-4">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <label className="relative block w-full lg:max-w-md">
                  <FaMagnifyingGlass className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#D4C7B4]/70" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    type="text"
                    placeholder="Search by project name, stack, or focus..."
                    className="w-full rounded-xl border border-[#D4C7B4]/25 bg-[#D4C7B4]/8 py-3 pl-10 pr-4 text-sm text-[#f7f2e9] placeholder:text-[#f7f2e9]/40 outline-none transition focus:border-[#D4C7B4]/60"
                  />
                </label>

                <div className="inline-flex items-center gap-2 rounded-xl border border-[#D4C7B4]/25 bg-[#D4C7B4]/8 px-3 py-2 text-xs uppercase tracking-[0.12em] text-[#D4C7B4] poppins-semibold">
                  <FaFilter />
                  {filteredProjects.length} match
                  {filteredProjects.length === 1 ? "" : "es"}
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.1em] transition poppins-semibold ${
                      activeCategory === category
                        ? "border-[#D4C7B4]/65 bg-[#D4C7B4]/25 text-[#f7f2e9]"
                        : "border-[#D4C7B4]/25 bg-[#D4C7B4]/8 text-[#D4C7B4] hover:border-[#D4C7B4]/45"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {statuses.map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setActiveStatus(status)}
                    className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.1em] transition poppins-semibold ${
                      activeStatus === status
                        ? "border-[#f7f2e9]/55 bg-[#f7f2e9]/18 text-[#f7f2e9]"
                        : "border-[#f7f2e9]/20 bg-[#f7f2e9]/5 text-[#f7f2e9]/75 hover:border-[#f7f2e9]/35"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-3 space-y-3 sm:mt-4 sm:space-y-4">
            {featuredProject && (
              <article className="group relative overflow-hidden rounded-3xl border border-[#D4C7B4]/25 bg-gradient-to-br from-[#D4C7B4]/12 via-[#1b1b1b]/92 to-[#111111]/95 p-4 transition duration-300 hover:border-[#D4C7B4]/45 sm:p-6">
                <div className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-[#D4C7B4]/15 blur-3xl" />

                <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#D4C7B4]/35 bg-[#D4C7B4]/10 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#D4C7B4] poppins-semibold">
                      <FaRocket className="text-[10px]" />
                      Featured Project
                    </div>
                    <h2 className="mt-3 font-kalnia text-3xl text-[#efe4d3] sm:text-4xl">
                      {featuredProject.title}
                    </h2>
                    <p className="mt-2 text-sm text-[#f7f2e9]/90 poppins-medium sm:text-base">
                      {featuredProject.tagline}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-[#f1e8d9]/80 poppins-regular">
                      {featuredProject.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="rounded-2xl border border-[#D4C7B4]/25 bg-[#D4C7B4]/10 px-3 py-2">
                      <p className="text-[11px] uppercase tracking-[0.1em] text-[#D4C7B4]/80 poppins-semibold">
                        Year
                      </p>
                      <p className="mt-1 text-sm text-[#f7f2e9] poppins-bold">
                        {featuredProject.year}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[#D4C7B4]/25 bg-[#D4C7B4]/10 px-3 py-2">
                      <p className="text-[11px] uppercase tracking-[0.1em] text-[#D4C7B4]/80 poppins-semibold">
                        Delivery
                      </p>
                      <p className="mt-1 text-sm text-[#f7f2e9] poppins-bold">
                        {featuredProject.team}
                      </p>
                    </div>
                    <div className="col-span-2 rounded-2xl border border-[#D4C7B4]/25 bg-[#D4C7B4]/10 px-3 py-2">
                      <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.1em] text-[#D4C7B4]/80 poppins-semibold">
                        <span>Completion</span>
                        <span>{featuredProject.progress}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-[#f7f2e9]/15">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#D4C7B4] to-[#efdfc3]"
                          style={{ width: `${featuredProject.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {featuredProject.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#D4C7B4]/35 bg-[#D4C7B4]/12 px-3 py-1 text-xs text-[#f7f2e9] poppins-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    to={`/projects/${featuredProject.slug}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-[#D4C7B4]/40 bg-[#D4C7B4]/18 px-3 py-2 text-xs uppercase tracking-[0.1em] text-[#f7f2e9] transition hover:bg-[#D4C7B4]/28 poppins-semibold"
                  >
                    Showcase Details <FaArrowRight className="text-[11px]" />
                  </Link>
                </div>
              </article>
            )}

            {filteredProjects.length === 0 && (
              <div className="rounded-3xl border border-[#D4C7B4]/25 bg-[#131313]/85 p-6 text-center sm:p-10">
                <p className="font-kalnia text-3xl text-[#efe4d3]">
                  No matches found
                </p>
                <p className="mt-2 text-sm text-[#f7f2e9]/75 poppins-regular">
                  Try clearing filters or searching with a different keyword.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">
              {otherProjects.map((project) => (
                <article
                  key={project.id}
                  className="group relative overflow-hidden rounded-3xl border border-[#D4C7B4]/20 bg-[#131313]/85 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-[#D4C7B4]/45 hover:shadow-[0_12px_34px_rgba(212,199,180,0.12)] sm:p-5"
                >
                  <div className="pointer-events-none absolute -right-6 -top-7 text-[#D4C7B4]/15 blur-[1px]">
                    <FaLayerGroup className="text-[66px]" />
                  </div>

                  <div className="relative flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-kalnia text-3xl leading-tight text-[#efe4d3]">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#f7f2e9]/85 poppins-medium">
                        {project.tagline}
                      </p>
                    </div>
                    <span
                      className={`inline-flex shrink-0 rounded-full border px-2.5 py-1 text-[11px] uppercase tracking-[0.11em] poppins-semibold ${statusStyle[project.status]}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[#f1e8d9]/75 poppins-regular">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.1em] text-[#D4C7B4] poppins-semibold">
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#D4C7B4]/30 bg-[#D4C7B4]/8 px-2.5 py-1">
                      <FaClock /> {project.year}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#D4C7B4]/30 bg-[#D4C7B4]/8 px-2.5 py-1">
                      <FaCodeBranch /> {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#D4C7B4]/30 bg-[#D4C7B4]/8 px-2.5 py-1">
                      <FaListCheck /> {project.team}
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="mb-2 flex items-center justify-between text-xs text-[#D4C7B4]/85 poppins-semibold uppercase tracking-[0.1em]">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#f7f2e9]/15">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#D4C7B4] to-[#efdfc3]"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#f7f2e9]/20 bg-[#f7f2e9]/5 px-2.5 py-1 text-[11px] text-[#f7f2e9]/85 poppins-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-4 space-y-1 text-sm text-[#f1e8d9]/70 poppins-regular">
                    {project.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#D4C7B4]/85" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 rounded-xl border border-[#D4C7B4]/35 bg-[#D4C7B4]/14 px-3 py-2 text-xs uppercase tracking-[0.1em] text-[#f7f2e9] transition hover:bg-[#D4C7B4]/22 poppins-semibold"
                      >
                        Live Demo{" "}
                        <FaArrowUpRightFromSquare className="text-[11px]" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 rounded-xl border border-[#f7f2e9]/25 bg-[#f7f2e9]/8 px-3 py-2 text-xs uppercase tracking-[0.1em] text-[#f7f2e9]/90 transition hover:bg-[#f7f2e9]/16 poppins-semibold"
                      >
                        Repository <FaGithub className="text-sm" />
                      </a>
                    )}
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 rounded-xl border border-[#D4C7B4]/40 bg-[#D4C7B4]/18 px-3 py-2 text-xs uppercase tracking-[0.1em] text-[#f7f2e9] transition hover:bg-[#D4C7B4]/28 poppins-semibold"
                    >
                      Showcase Details <FaArrowRight className="text-[11px]" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <div className="mx-auto w-full max-w-6xl px-3 pb-4 pt-2 sm:px-6 lg:px-8">
          <Footer compact />
        </div>
      </div>
    </div>
  );
}

export default Projects;
