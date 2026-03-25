import { Link } from "react-router-dom";

function ThirdRow() {
  return (
    <div className="flex w-full flex-[1] gap-4">
      <Link
        to="/contact"
        className="flex-[1] rounded-3xl bg-[#D4C7B4] text-3xl font-kalnia text-[#1d1d1d] transition"
      >
        <div className="p-4 flex items-end gap-2 h-full">
          <p>Contact</p>
          <p className="font-light">me</p>
        </div>
      </Link>
      <Link
        to="/projects"
        className="flex-[2] rounded-l-3xl rounded-br-3xl bg-[#4B4A45] text-[#D4C7B4] transition"
      >
        <p className="p-4 sm:p-5 font-kalnia text-3xl">Projects</p>
      </Link>
    </div>
  );
}

export default ThirdRow;
