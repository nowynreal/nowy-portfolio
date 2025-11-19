import { Link } from 'react-router-dom'

function FirstCol() {
  return (
    <div className='flex flex-col flex-1/3 gap-4 h-full rounded-3xl'>
        <div className='bg-stone-300 rounded-3xl p-4 flex-[2] flex justify-around items-center'><div className='-skew-5'>image here</div></div>
        <Link to="/about" className='bg-[#D4C7B4] rounded-3xl p-4 flex-[1] flex justify-around items-center text-[#1d1d1d] text-2xl font-kalnia'>About Me</Link>
    </div>
  )
}

export default FirstCol