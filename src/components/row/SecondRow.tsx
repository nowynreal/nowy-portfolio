import { Link } from "react-router-dom";

function SecondRow() {
  return (
    <div className="flex w-full flex-[2] min-h-[220px] gap-4 lg:min-h-0 lg:gap-0">
      <div className="relative flex-[1] bg-[#D4C7B4] lg:mb-4 lg:rounded-b-3xl lg:rounded-tl-none">
        <div className="pointer-events-none absolute -right-5 top-0 z-[1] hidden h-5 w-5 rounded-tl-[28px] bg-[#1d1d1d] lg:block" />
        <div className="pointer-events-none absolute -right-5 top-0 hidden h-5 w-5 bg-[#D4C7B4] lg:block" />
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
