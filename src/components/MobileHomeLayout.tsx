import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

function MobileHomeLayout() {
  const mobileWorkingOnProjectId = 1;
  const workingProject = projects.find(
    (item) => item.id === mobileWorkingOnProjectId,
  );
  const isLive = workingProject?.status === "Live";

  const handleResumeClick = () => {
    window.open(
      "/src/assets/SemihYucekanResume.pdf",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="flex flex-col gap-3">
      <section className="rounded-3xl border border-[#D4C7B4]/20 bg-gradient-to-b from-[#D4C7B4]/10 to-[#1d1d1d]/90 p-4">
        <p className="text-xs uppercase tracking-[0.18em] text-[#D4C7B4] poppins-semibold">
          Snapshot
        </p>
        <h1 className="mt-3 font-kalnia text-4xl leading-tight text-[#efe4d3]">
          Building things
          <br />
          that just work.
        </h1>
        <p className="mt-3 text-sm leading-6 text-[#f1e8d9]/80 poppins-regular">
          I focus on clean UI, practical features, and making things easy to
          use.
        </p>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <Link
          to="/projects"
          className="rounded-3xl bg-[#4B4A45] p-4 text-[#D4C7B4] transition hover:opacity-90"
        >
          <div className="h-4" />
          <p className="mt-7 font-kalnia text-[2.1rem]">Projects</p>
        </Link>

        <Link
          to="/about"
          className="rounded-3xl bg-[#D4C7B4] p-4 text-[#1d1d1d] transition hover:opacity-95"
        >
          <div className="h-4" />
          <p className="mt-7 font-kalnia text-[2.1rem]">About</p>
        </Link>
      </section>

      <section className="relative overflow-hidden rounded-3xl border border-[#D4C7B4]/35 bg-gradient-to-br from-[#f4e8d5] via-[#ebd8bd] to-[#debf97] p-4 text-[#1d1d1d]">
        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#f7eee0]/70 blur-xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-[#b66c0f]/25 blur-xl" />

        <div className="relative flex flex-col">
          <div className="flex items-center justify-between gap-3">
            <p className="poppins-semibold text-xs uppercase tracking-[0.18em] text-[#3f3b34]">
              Working on
            </p>
            <span
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] ${
                isLive
                  ? "bg-emerald-900/80 text-emerald-100"
                  : "bg-[#1d1d1d]/85 text-[#efe4d3]"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full animate-pulse ${
                  isLive ? "bg-emerald-400" : "bg-[#D7850C]"
                }`}
              />
              {workingProject?.status ?? "Unknown"}
            </span>
          </div>

          <h2 className="mt-4 font-kalnia text-3xl leading-tight">
            {workingProject?.title ?? "Project not found"}
          </h2>

          {workingProject && (
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#3f3b34] poppins-semibold">
              {workingProject.year} / {workingProject.category}
            </p>
          )}

          <div className="mt-3 rounded-2xl border border-[#1d1d1d]/12 bg-[#f8f0e4]/55 p-3">
            <p className="workingon-scroll max-h-28 overflow-y-auto pr-1 text-base leading-7 poppins-regular">
              {workingProject?.description ??
                "Choose a valid project id to show details in this card."}
            </p>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 text-[0.68rem] uppercase tracking-[0.12em] poppins-medium text-[#3f3b34]">
            {(
              workingProject?.stack.slice(0, 3) ?? [
                "Projects",
                "Portfolio",
                "Build",
              ]
            ).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#f8f0e4]/90 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-3">
            <Link
              to={
                workingProject
                  ? `/projects/${workingProject.slug}`
                  : "/projects"
              }
              className="inline-flex items-center rounded-full bg-[#1d1d1d] px-4 py-2 text-sm text-[#efe4d3] transition hover:opacity-90"
            >
              {workingProject ? "View project" : "View all projects"}
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <Link
          to="/contact"
          className="rounded-3xl bg-[#D4C7B4] p-4 text-[#1d1d1d] transition hover:opacity-95"
        >
          <p className=" font-kalnia text-[2.1rem]">
            Contact <span className="font-light">me</span>
          </p>
        </Link>

        <button
          type="button"
          onClick={handleResumeClick}
          className="rounded-3xl bg-[#4B4A45] p-4 text-[#D4C7B4] text-left cursor-pointer"
        >
          <p className=" font-kalnia text-[1.8rem]">Resume</p>
        </button>
      </section>

      <section className="rounded-3xl bg-[#D4C7B4] p-4">
        <div className="flex items-center justify-evenly text-4xl text-[#1d1d1d]">
          <Link target="_blank" to="https://github.com/nowynreal">
            <FaGithub />
          </Link>
          <Link target="_blank" to="https://www.instagram.com/semihyckn">
            <FaInstagram />
          </Link>
          <Link target="_blank" to="https://www.linkedin.com/in/semihyckn">
            <FaLinkedin />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default MobileHomeLayout;
