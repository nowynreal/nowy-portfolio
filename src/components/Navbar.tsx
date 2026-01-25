import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="bg-[#D4C7B4] h-20 sm:h-28 p-4 rounded-3xl flex justify-between text-[#000000] items-center">
        {/* Brand */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="px-3 sm:px-8 text-2xl sm:text-4xl font-kalnia text-[#1d1d1d] whitespace-nowrap"
        >
          Semih YUCEKAN
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex px-6 lg:px-24 gap-8 lg:gap-14 text-sm lg:text-md uppercase poppins-bold">
          <Link className="hover:opacity-70 transition" to="/projects">
            Projects
          </Link>
          <Link className="hover:opacity-70 transition" to="/about">
            About
          </Link>
          <Link className="hover:opacity-70 transition" to="/contact">
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-2xl border border-black/15 px-4 py-3 hover:bg-black/5 transition"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-[#1d1d1d] transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#1d1d1d] transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#1d1d1d] transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="md:hidden mt-3 bg-[#D4C7B4] rounded-3xl p-4 border border-black/10">
          <div className="flex flex-col gap-3 text-sm uppercase poppins-bold">
            <Link
              to="/projects"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 hover:bg-black/5 transition"
            >
              Projects
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 hover:bg-black/5 transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 hover:bg-black/5 transition"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
