import NavbarAlt from "../components/NavBarAlt"

function About() {
  return (
    <div className='h-screen bg-[#1d1d1d]'>
      <NavbarAlt />
      <div className="flex h-full">
        <div className="bg-red-500 w-1/2 h-full"></div>
        <div className="bg-blue-500 w-1/2 h-full"></div>
      </div>
    </div>
  )
}

export default About