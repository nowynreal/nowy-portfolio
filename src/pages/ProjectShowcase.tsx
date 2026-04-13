import {
  FaArrowLeft,
  FaArrowUpRightFromSquare,
  FaClock,
  FaCodeBranch,
  FaEnvelope,
  FaGithub,
  FaListCheck,
  FaRocket,
} from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarAlt from "../components/NavBarAlt";
import { findProjectBySlug, statusStyle } from "../data/projects";

function ProjectShowcase() {
  const { slug = "" } = useParams();
  const project = findProjectBySlug(slug);

  if (!project) {
    return (
      <div className="relative min-h-screen bg-[#1d1d1d] text-[#f7f2e9]">
        <div className="relative mx-auto flex min-h-screen w-full max-w-4xl flex-col px-4 pb-6 pt-4 sm:px-6 lg:px-8">
          <NavbarAlt />
          <div className="mt-4 flex-1 rounded-3xl border border-[#D4C7B4]/20 bg-[#131313]/85 p-6 text-center sm:p-10">
            <h1 className="font-kalnia text-4xl text-[#efe4d3]">
              Project not found
            </h1>
            <p className="mt-3 text-sm text-[#f1e8d9]/75 poppins-regular">
              The requested showcase does not exist anymore or its URL has
              changed.
            </p>
            <Link
              to="/projects"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-[#D4C7B4]/35 bg-[#D4C7B4]/14 px-4 py-2 text-xs uppercase tracking-[0.12em] text-[#f7f2e9] transition hover:bg-[#D4C7B4]/24 poppins-semibold"
            >
              <FaArrowLeft className="text-[11px]" /> Back to Projects
            </Link>
          </div>
          <div className="mt-4">
            <Footer compact />
          </div>
        </div>
      </div>
    );
  }

  const heroMedia = project.media[0];
  const galleryMedia = project.media.slice(1);

  return (
    <div className="relative min-h-screen bg-[#1d1d1d] text-[#f7f2e9]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-16 h-60 w-60 rounded-full bg-[#D4C7B4]/16 blur-3xl" />
        <div className="absolute right-0 top-28 h-80 w-80 rounded-full bg-[#D7850C]/12 blur-3xl" />
        <div className="absolute bottom-8 left-1/3 h-72 w-72 rounded-full bg-[#5b4121]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-3 pb-4 pt-3 sm:px-6 lg:px-8">
        <NavbarAlt />

        <main className="mt-1 flex-1 space-y-3 sm:space-y-4">
          <section className="rounded-3xl border border-[#D4C7B4]/20 bg-gradient-to-b from-[#D4C7B4]/10 via-[#171717]/95 to-[#121212]/95 p-4 backdrop-blur-sm sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-[#D4C7B4]/35 bg-[#D4C7B4]/10 px-3 py-2 text-xs uppercase tracking-[0.11em] text-[#f7f2e9] transition hover:bg-[#D4C7B4]/18 poppins-semibold"
              >
                <FaArrowLeft className="text-[11px]" /> Back to Projects
              </Link>
              <span
                className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] uppercase tracking-[0.11em] poppins-semibold ${statusStyle[project.status]}`}
              >
                {project.status}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-[#D4C7B4]/35 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#D4C7B4] poppins-semibold">
                  <FaRocket className="text-[10px]" /> Showcase Details
                </p>
                <h1 className="mt-3 font-kalnia text-[2.2rem] leading-tight text-[#efe4d3] sm:text-5xl">
                  {project.title}
                </h1>
                <p className="mt-2 text-sm text-[#f7f2e9]/90 poppins-medium sm:text-base">
                  {project.tagline}
                </p>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-[#f1e8d9]/80 poppins-regular">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.1em] text-[#D4C7B4] poppins-semibold">
                  <span className="inline-flex items-center gap-1 rounded-full border border-[#D4C7B4]/30 bg-[#D4C7B4]/10 px-2.5 py-1">
                    <FaClock /> {project.year}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-[#D4C7B4]/30 bg-[#D4C7B4]/10 px-2.5 py-1">
                    <FaCodeBranch /> {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-[#D4C7B4]/30 bg-[#D4C7B4]/10 px-2.5 py-1">
                    <FaListCheck /> {project.team}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
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
                  {project.customButtonLabel && project.customButtonUrl && (
                    <a
                      href={project.customButtonUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-xl border border-[#D7850C]/40 bg-[#D7850C]/16 px-3 py-2 text-xs uppercase tracking-[0.1em] text-[#f7f2e9] transition hover:bg-[#D7850C]/26 poppins-semibold"
                    >
                      {project.customButtonLabel}
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
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-[#D4C7B4]/25 bg-[#D4C7B4]/8 px-3 py-2.5"
                  >
                    <p className="text-[11px] uppercase tracking-[0.11em] text-[#D4C7B4]/80 poppins-semibold">
                      {metric.label}
                    </p>
                    <p className="mt-1 text-lg text-[#f7f2e9] poppins-bold">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-3 lg:grid-cols-3">
            <article className="rounded-3xl border border-[#D4C7B4]/20 bg-[#131313]/85 p-4 sm:p-5">
              <p className="text-xs uppercase tracking-[0.13em] text-[#D4C7B4] poppins-semibold">
                Context
              </p>
              <p className="mt-2 text-sm leading-6 text-[#f1e8d9]/75 poppins-regular">
                {project.context}
              </p>
            </article>
            <article className="rounded-3xl border border-[#D4C7B4]/20 bg-[#131313]/85 p-4 sm:p-5">
              <p className="text-xs uppercase tracking-[0.13em] text-[#D4C7B4] poppins-semibold">
                Goal
              </p>
              <p className="mt-2 text-sm leading-6 text-[#f1e8d9]/75 poppins-regular">
                {project.goal}
              </p>
            </article>
            <article className="rounded-3xl border border-[#D4C7B4]/20 bg-[#131313]/85 p-4 sm:p-5">
              <p className="text-xs uppercase tracking-[0.13em] text-[#D4C7B4] poppins-semibold">
                Outcome
              </p>
              <p className="mt-2 text-sm leading-6 text-[#f1e8d9]/75 poppins-regular">
                {project.outcome}
              </p>
            </article>
          </section>

          <section className="rounded-3xl border border-[#D4C7B4]/20 bg-[#131313]/85 p-4 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-kalnia text-[1.8rem] text-[#efe4d3] sm:text-4xl">
                Showcase Media
              </h2>
              <p className="text-xs uppercase tracking-[0.11em] text-[#D4C7B4]/85 poppins-semibold">
                more that tells the story of this project.
              </p>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-[1.2fr_0.8fr]">
              {heroMedia && (
                <article className="overflow-hidden rounded-2xl border border-[#D4C7B4]/22 bg-[#111111]">
                  <div className="aspect-video w-full">
                    {heroMedia.type === "video" ? (
                      <video
                        className="h-full w-full object-cover"
                        controls
                        muted
                        loop
                        playsInline
                        poster={heroMedia.poster}
                        src={heroMedia.src}
                      />
                    ) : (
                      <img
                        src={heroMedia.src}
                        alt={heroMedia.title}
                        className="h-full w-full bg-[#0f0f0f] object-contain"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="border-t border-[#D4C7B4]/15 p-3 sm:p-4">
                    <p className="text-sm text-[#f7f2e9] poppins-semibold">
                      {heroMedia.title}
                    </p>
                    <p className="mt-1 text-sm text-[#f1e8d9]/70 poppins-regular">
                      {heroMedia.caption}
                    </p>
                  </div>
                </article>
              )}

              <div className="grid grid-cols-1 gap-3">
                {galleryMedia.length > 0 ? (
                  galleryMedia.map((media) => (
                    <article
                      key={media.id}
                      className="overflow-hidden rounded-2xl border border-[#D4C7B4]/22 bg-[#111111]"
                    >
                      <div className="aspect-[16/10] w-full">
                        {media.type === "video" ? (
                          <video
                            className="h-full w-full object-cover"
                            controls
                            muted
                            loop
                            playsInline
                            poster={media.poster}
                            src={media.src}
                          />
                        ) : (
                          <img
                            src={media.src}
                            alt={media.title}
                            className="h-full w-full bg-[#0f0f0f] object-contain"
                            loading="lazy"
                          />
                        )}
                      </div>
                      <div className="border-t border-[#D4C7B4]/15 p-3">
                        <p className="text-sm text-[#f7f2e9] poppins-semibold">
                          {media.title}
                        </p>
                        <p className="mt-1 text-xs text-[#f1e8d9]/70 poppins-regular">
                          {media.caption}
                        </p>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="rounded-2xl border border-dashed border-[#D4C7B4]/30 bg-[#D4C7B4]/5 p-4 text-sm text-[#f1e8d9]/70 poppins-regular">
                    No media available for this project yet. Check back later
                    for updates!
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_0.95fr]">
            <article className="rounded-3xl border border-[#D4C7B4]/20 bg-[#131313]/85 p-4 sm:p-5">
              <h3 className="font-kalnia text-[1.7rem] text-[#efe4d3]">
                Build Timeline
              </h3>
              <div className="mt-4 space-y-3">
                {project.timeline.map((item, index) => (
                  <div key={item.stage} className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#D4C7B4]/35 bg-[#D4C7B4]/10 text-xs text-[#f7f2e9] poppins-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.12em] text-[#D4C7B4] poppins-semibold">
                        {item.stage}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#f1e8d9]/75 poppins-regular">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-[#D4C7B4]/20 bg-[#131313]/85 p-4 sm:p-5">
              <h3 className="font-kalnia text-[1.7rem] text-[#efe4d3]">
                Stack + Highlights
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#f7f2e9]/22 bg-[#f7f2e9]/6 px-2.5 py-1 text-xs text-[#f7f2e9]/90 poppins-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <ul className="mt-4 space-y-2 text-sm text-[#f1e8d9]/75 poppins-regular">
                {project.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-[8px] inline-flex h-2 w-2 rounded-full bg-[#D4C7B4]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-2xl border border-[#D4C7B4]/25 bg-gradient-to-r from-[#D4C7B4]/12 via-[#D4C7B4]/8 to-transparent p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-[#D4C7B4] poppins-semibold">
                  Interested?
                </p>
                <p className="mt-2 text-sm text-[#f1e8d9]/75 poppins-regular">
                  If you’re curious, have questions, or want to build something
                  similar with me, feel free to reach out! I’m always open to
                  new opportunities.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-[#D4C7B4]/35 bg-[#D4C7B4]/14 px-3 py-2 text-xs uppercase tracking-[0.1em] text-[#f7f2e9] transition hover:bg-[#D4C7B4]/24 poppins-semibold"
                  >
                    <FaEnvelope className="text-[11px]" /> Contact
                  </Link>
                </div>
              </div>
            </article>
          </section>
        </main>

        <div className="mt-3">
          <Footer compact />
        </div>
      </div>
    </div>
  );
}

export default ProjectShowcase;
