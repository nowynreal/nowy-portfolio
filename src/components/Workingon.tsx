import { Link } from "react-router-dom";
import { FaGear } from "react-icons/fa6";
import { projects } from "../data/projects";

interface WorkingonProps {
  projectId: number;
}

function Workingon({ projectId }: WorkingonProps) {
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <div className="flex-[2] min-h-0 lg:flex-[3]">
        <article className="relative h-full overflow-hidden rounded-3xl border border-[#1d1d1d]/20 bg-gradient-to-br from-[#f4e8d5] via-[#ebd8bd] to-[#debf97] p-4 text-[#1d1d1d] sm:p-5">
          <div className="relative flex h-full min-h-0 flex-col justify-between gap-3">
            <p className="poppins-semibold text-xs uppercase tracking-[0.18em] text-[#3f3b34]">
              Working on
            </p>
            <h1 className="font-kalnia text-3xl leading-tight sm:text-4xl">
              Project not found
            </h1>
            <p className="text-sm leading-6 poppins-regular sm:text-base">
              The selected project id ({projectId}) does not exist in projects
              data.
            </p>
            <div className="pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center rounded-full bg-[#1d1d1d] px-4 py-2 text-sm text-[#efe4d3] transition hover:opacity-90"
              >
                View all projects
              </Link>
            </div>
          </div>
        </article>
      </div>
    );
  }

  const cardTags = project.stack.slice(0, 3);
  const isLive = project.status === "Live";

  return (
    <div className="flex-[2] min-h-0 lg:flex-[3]">
      <article className="relative h-full overflow-hidden rounded-3xl border border-[#1d1d1d]/20 bg-gradient-to-br from-[#f4e8d5] via-[#ebd8bd] to-[#debf97] p-4 text-[#1d1d1d] sm:p-5">
        <div className="pointer-events-none absolute -right-14 -top-10 h-36 w-36 rounded-full bg-[#f7eee0]/70 blur-xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-10 h-32 w-32 rounded-full bg-[#b66c0f]/25 blur-xl" />
        <div className="pointer-events-none absolute -right-9 top-20 text-[#1d1d1d]/17">
          <FaGear className="workingon-gear-spin h-28 w-28" />
          <FaGear className="workingon-gear-spin-reverse absolute -left-9 top-16 h-14 w-14 text-[#1d1d1d]/27" />
        </div>

        <div className="relative flex h-full min-h-0 flex-col">
          <div className="flex items-center justify-between gap-3">
            <p className="poppins-semibold text-xs uppercase tracking-[0.18em] text-[#3f3b34]">
              Working on
            </p>
            <span
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em] ${
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
              {project.status}
            </span>
          </div>

          <h1 className="mt-4 font-kalnia text-3xl leading-tight sm:text-[2.65rem] lg:text-[2.35rem] xl:text-[2.8rem]">
            {project.title}
          </h1>

          <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#3f3b34] poppins-semibold">
            {project.year} / {project.category}
          </p>

          <div className="mt-3 min-h-0 flex-1">
            <p className="workingon-scroll h-full overflow-y-auto pr-1 max-w-[46ch] text-sm leading-6 poppins-regular sm:text-base sm:leading-7">
              {project.description}
            </p>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em] poppins-medium text-[#3f3b34]">
            {cardTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#f8f0e4]/90 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-3">
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center rounded-full bg-[#1d1d1d] px-4 py-2 text-sm text-[#efe4d3] transition hover:opacity-90"
            >
              View project
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Workingon;
