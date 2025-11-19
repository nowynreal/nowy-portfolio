import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-[#1D1D1D] h-28 p-4 rounded-3xl flex justify-between text-[#D4C7B4] items-center'>
        <div className='px-8 text-4xl font-kalnia text-[#D4C7B4]'>
            Semih YUCEKAN
        </div>
        <div className='px-24 flex gap-14 text-md uppercase poppins-bold h-full items-center'>
            <Link to="/" className='text-white px-6 py-4 bg-linear-to-tr from-[#1d1d1d] via-black to-[#1d1d1d] border-1 border-[#ffffff20] shadow-[0_0_50px_rgba(0,0,0,0)] hover:shadow-[0_0_3px_rgba(255,255,255,1)] transition duration-250 rounded-2xl'>Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar