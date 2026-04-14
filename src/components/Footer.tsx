import { Link } from "react-router-dom";

interface FooterProps {
  compact?: boolean;
}

function Footer({ compact = false }: FooterProps) {
  const containerSize = compact ? "px-5 py-4" : "px-6 py-5";
  const textSize = compact ? "text-xs" : "text-sm";

  return (
    <footer
      className={`w-full rounded-3xl border border-[#D4C7B4]/20 bg-gradient-to-r from-[#111111]/90 via-[#1b1b1b]/95 to-[#111111]/90 backdrop-blur-sm ${containerSize}`}
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-kalnia text-xl text-[#efe4d3]">Semih YUCEKAN</p>
          <p className={`${textSize} text-[#D4C7B4]/80 poppins-regular`}>
            Every day learner in embracing the art of the possible.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-[#f7f2e9]/85 poppins-semibold uppercase tracking-[0.12em] text-[11px]">
          <Link className="transition hover:text-[#D4C7B4]" to="/">
            Home
          </Link>
          <Link className="transition hover:text-[#D4C7B4]" to="/projects">
            Projects
          </Link>
          <Link className="transition hover:text-[#D4C7B4]" to="/about">
            About
          </Link>
          <Link className="transition hover:text-[#D4C7B4]" to="/contact">
            Contact
          </Link>
          <a
            className="transition hover:text-[#D4C7B4]"
            href="mailto:semih.yucekan@gmail.com"
          >
            Email
          </a>
          <a
            className="transition hover:text-[#D4C7B4]"
            href="https://github.com/semihyucekan"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="mt-3 border-t border-[#D4C7B4]/15 pt-3 text-[11px] text-[#f7f2e9]/55 poppins-regular">
        Copyright {new Date().getFullYear()} Semih Yucekan
      </div>
    </footer>
  );
}

export default Footer;
