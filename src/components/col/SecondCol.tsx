import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Workingon from "../Workingon";

function SecondCol() {
  return (
    <div className='flex flex-col flex-1/3 w-full h-full gap-4'>
        <div className='flex-[4] bg-[#D4C7B4] p-4 rounded-3xl'>
          <div className="flex gap-2 font-kalnia text-3xl">
            {/* <p className="text-[#1d1d1d]">Working</p>
            <p className="text-[#1d1d1d] font-light">on</p> */}
          </div>
          <Workingon />
        </div>
        <div className='flex-[1] bg-[#D4C7B4] rounded-3xl flex items-center justify-evenly text-4xl'>
          <Link target="_blank" to="https://github.com/nowynreal"> <FaGithub /> </Link>
          <Link target='_blank' to="https://www.instagram.com/semihyckn"> <FaInstagram /> </Link>
          <Link target="_blank" to="https://www.linkedin.com/in/semihyckn"> <FaLinkedin /> </Link>
        </div>
    </div>
  )
} 

export default SecondCol