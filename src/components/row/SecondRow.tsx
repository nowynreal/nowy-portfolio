import { Link } from "react-router-dom";
import nashvilleImage from "../../assets/nashville.png";
import iconImage from "../../assets/icon.png";

function SecondRow() {
  return (
    <div className="flex w-full flex-[2] min-h-[220px] gap-4 lg:min-h-0 lg:gap-0">
      <div className="relative  flex flex-[1] flex-col justify-between bg-[#D4C7B4] p-4 text-[#1d1d1d] sm:p-5 lg:mb-4 lg:rounded-b-3xl lg:rounded-tl-none">
        <div className="pointer-events-none absolute -right-5 top-0 z-[1] hidden h-5 w-5 rounded-tl-[28px] bg-[#1d1d1d] lg:block" />
        <div className="pointer-events-none absolute -right-5 top-0 hidden h-5 w-5 bg-[#D4C7B4] lg:block" />

        <div className="flex items-center justify-between gap-3">
          <p className="font-kalnia text-3xl leading-tight sm:text-[2.2rem]">
            Nashville, Tennessee
          </p>
          <Link
            to="/contact"
            aria-label="Hire me"
            className="group relative inline-flex h-22 w-22 shrink-0 items-center justify-center rounded-full border border-[#1d1d1d]/30 bg-[#f8f0e4]/65 transition hover:bg-[#1d1d1d]"
          >
            <div className="pointer-events-none absolute inset-0">
              <svg
                viewBox="0 0 100 100"
                className="h-full w-full hire-me-ring-spin text-[#1d1d1d]/85 group-hover:text-[#efe4d3]"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="hire-me-circle"
                    d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
                  />
                </defs>
                <text
                  fill="currentColor"
                  className="poppins-semibold text-[10px] tracking-[3px]"
                >
                  <textPath href="#hire-me-circle">
                    HIRE ME • HIRE ME • HIRE ME •
                  </textPath>
                </text>
              </svg>
            </div>

            <img className="size-16" src={iconImage} alt="Hire Me" />
          </Link>
        </div>

        <div>
          <img className="mt-1" src={nashvilleImage} alt="Nashville" />
        </div>
      </div>
      <Link
        to="/projects"
        className="relative flex-[1] rounded-3xl bg-[#4B4A45] transition lg:m-4 lg:mb-0 lg:mr-0 lg:rounded-3xl lg:rounded-b-none"
      >
        <div className="pointer-events-none absolute -left-5 bottom-0 hidden h-5 w-5 bg-[#4B4A45] lg:block" />
        <div className="pointer-events-none absolute -left-5 bottom-0 z-[1] hidden h-5 w-5 rounded-br-[28px] bg-[#1d1d1d] lg:block" />
      </Link>
    </div>
  );
}

export default SecondRow;
