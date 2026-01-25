import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const baseLink =
    "flex justify-center items-center rounded-xl border transition px-5 py-3";
  const inactive =
    "bg-gradient-to-tr from-[#1d1d1d50] via-[#00000010] to-[#1d1d1d50] backdrop-blur-sm border-white/10 hover:border-white/30";
  const active =
    "bg-gradient-to-tr from-[#1d1d1d] via-black to-[#1d1d1d] border-white/20 shadow-[0_0_3px_rgba(255,255,255,1)]";

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `${baseLink} ${isActive ? active : inactive} text-white`;

  return (
    <header className="w-full px-4 pt-4">
      <div className="mx-auto max-w-6xl rounded-3xl p-4 flex items-center justify-between text-[#D4C7B4]">
        {/* Left: Brand */}
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="px-4 sm:px-8 text-2xl sm:text-4xl font-kalnia text-[#D4C7B4] whitespace-nowrap"
        >
          Semih YUCEKAN
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 lg:gap-10 uppercase poppins-bold items-center">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-[#1d1d1d50] via-[#00000010] to-[#1d1d1d50] backdrop-blur-sm px-4 py-3 text-white hover:border-white/30 transition"
        >
          {/* Simple hamburger / X */}
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-white transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden mx-auto max-w-6xl px-4 transition ${
          open ? "block" : "hidden"
        }`}
      >
        <nav className="mt-2 rounded-3xl border border-white/10 bg-gradient-to-tr from-[#1d1d1d80] via-[#00000030] to-[#1d1d1d80] backdrop-blur-md p-3 flex flex-col gap-2">
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
