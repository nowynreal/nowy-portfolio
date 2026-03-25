import { Link } from "react-router-dom";

function FirstCol() {
  return (
    <div className="flex h-full min-h-0 flex-col gap-3 rounded-3xl sm:gap-4">
      <div className="flex min-h-[180px] flex-[2] items-center justify-around rounded-3xl bg-stone-300 p-3 sm:p-4">
        <div className="-skew-5">image here</div>
      </div>
      <Link
        to="/about"
        className="flex min-h-[110px] flex-[1] items-center justify-around rounded-3xl bg-[#D4C7B4] p-3 text-center text-xl font-kalnia text-[#1d1d1d] sm:p-4 sm:text-2xl"
      >
        About Me
      </Link>
    </div>
  );
}

export default FirstCol;
