import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Workingon from "../Workingon";

function SecondCol() {
  const workingOnProjectId = 1;

  return (
    <div className="flex h-full min-h-0 w-full flex-col gap-3 sm:gap-4">
      <Workingon projectId={workingOnProjectId} />
      <div className="flex min-h-[66px] flex-[1] items-center justify-evenly rounded-3xl bg-[#D4C7B4] text-3xl sm:text-4xl lg:min-h-[48px] lg:flex-[0.36] lg:text-4xl py-2">
        <Link target="_blank" to="https://github.com/nowynreal">
          {" "}
          <FaGithub />{" "}
        </Link>
        <Link target="_blank" to="https://www.instagram.com/semihyckn">
          {" "}
          <FaInstagram />{" "}
        </Link>
        <Link target="_blank" to="https://www.linkedin.com/in/semihyckn">
          {" "}
          <FaLinkedin />{" "}
        </Link>
      </div>
    </div>
  );
}

export default SecondCol;
