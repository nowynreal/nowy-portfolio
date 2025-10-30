import React from 'react'

function ThirdRow() {
  return (
    <div className='w-full flex flex-1/3 gap-4'>
        <div className='flex-[1] bg-[#D4C7B4] rounded-3xl text-3xl font-kalnia text-[#1d1d1d]'>
          <div className='p-4 flex items-end gap-2 h-full'>
            <p>Contact </p>
            <p className='font-light'>me</p>
          </div>
        </div>
        <div className='flex-[2] bg-[#4B4A45] rounded-l-3xl rounded-br-3xl text-[#D4C7B4]'>
          <p className='p-5 font-kalnia text-3xl'>Projects</p>
        </div>
    </div>
  )
}

export default ThirdRow