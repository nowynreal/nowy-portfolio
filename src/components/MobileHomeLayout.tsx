import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function MobileHomeLayout() {
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

      <section className="rounded-3xl bg-[#D4C7B4] p-4 text-[#1d1d1d]">
        <div className="h-24 rounded-2xl bg-[#D7850C30]" />
        <h2 className="mt-4 font-kalnia text-3xl">BERC Digital Library</h2>
        <p className="mt-2 text-base leading-7 poppins-regular">
          Building a system to make BERC’s research easily searchable and
          accessible.
        </p>
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

        <div className="rounded-3xl bg-[#4B4A45] p-4 text-[#D4C7B4]">
          <p className=" font-kalnia text-[1.8rem]">Skills</p>
        </div>
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
