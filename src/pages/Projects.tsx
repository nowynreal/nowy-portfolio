import NavbarAlt from "../components/NavbarAlt";
import ProjectsItem from "../components/ProjectsItem";

function Projects() {
  return (
    <div className="h-screen bg-[#1d1d1d] text-amber-50">
      <NavbarAlt />
      <div className="flex flex-col items-center h-full gap-4">
        <ProjectsItem />
        <ProjectsItem />
      </div>
    </div>
  );
}

export default Projects;
