import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-[#D4C7B4] h-28 p-4 rounded-3xl flex justify-between text-[#000000] items-center'>
        <div className='px-8 text-4xl font-kalnia text-[#1d1d1d]'>
            Semih YUCEKAN
        </div>
        <div className='px-24 flex gap-14 text-md uppercase poppins-bold'>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar