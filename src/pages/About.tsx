import NavbarAlt from "../components/NavBarAlt";
import about_me_bg from "../assets/about_me_bg.png";

function About() {
  return (
    <div
      className="h-screen bg-[#1d1d1d]"
      style={{
        backgroundImage: `url(${about_me_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NavbarAlt />

      <div className="flex h-[calc(100vh-112px)] items-center justify-center gap-8 px-16">
        <div className="w-1/2 text-[#e1e1e1] poppins-regular flex flex-col justify-center p-8">
          <div className="rounded-lg border border-white/20 p-8 backdrop-blur-sm bg-[#1d1d1d80] shadow-lg">
            <h1 className="text-2xl poppins-semibold">About Me</h1>

            <p className="mt-6">
              Hi! My name is Semih Yücekan. I’m a developer, student, and
              builder.
            </p>

            <p className="mt-4">
              I’m studying Computer Science at MTSU and working with the{" "}
              <a
                className="underline text-blue-400 hover:text-blue-300"
                href="https://www.mtsu.edu/berc/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Business & Economic Research Center (BERC)
              </a>
              , where I help build the digital library platform to modernize the
              center’s publication workflow. I also run the MTSU Soccer Club. I
              love clean UI, smooth user flows, and systems that feel good to
              use.
            </p>

            <p className="mt-4">
              On the personal side… I’m curious, proactive, and I learn by
              doing. I enjoy solving problems and taking ideas from “what if?”
              to “it’s live.” If you want to talk tech, projects, soccer, or
              just share ideas — I’m always down.
            </p>
          </div>
        </div>

        <div className="w-1/2" />
      </div>
    </div>
  );
}

export default About;
