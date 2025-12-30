import NavbarAlt from "../components/NavBarAlt";
import about_me_bg from "../assets/about_me_bg.png";

function About() {
  return (
    <div
      className="h-screen bg-[#1d1d1d] overflow-hidden"
      style={{
        backgroundImage: `url(${about_me_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NavbarAlt />
      <div className="flex h-full">
        <div className=" w-1/2 h-full text-[#e1e1e1] poppins-regular p-20">
          <h1 className="text-2xl poppins-semibold">About Me</h1>
          <br />
          <h1 className="">
            Hi! My name is Semih Yücekan. I'm a developer, student, and builder.
          </h1>
          <br />
          <p>
            I’m studying Computer Science at MTSU, and working with the{" "}
            <a
              className="underline text-blue-500"
              href="https://www.mtsu.edu/berc/"
            >
              Business & Economic Research Center (BERC)
            </a>
            where I lead the development of the digital library platform
            designed to modernize the center’s publication workflow. , and run
            the MTSU Soccer Club. I love working on clean UI, smooth user flows,
            and systems that actually feel good to use.
          </p>
          <br />
          <p>
            On the personal side… I’m curious, proactive, and someone who learns
            by doing. I enjoy solving problems, improving things, and taking
            ideas from “what if?” to “it’s live.” I stay busy on purpose —
            because I feel most alive when I’m creating, learning, playing, or
            connecting with new people. If you want to talk tech, projects,
            soccer, or just share ideas — I’m always down.
          </p>
        </div>
        <div className="w-1/2 h-full"></div>
      </div>
    </div>
  );
}

export default About;
