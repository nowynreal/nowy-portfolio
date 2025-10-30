import React from 'react'

function FirstCol() {
  return (
    <div className='flex flex-col flex-1/3 gap-4 h-full rounded-3xl'>
        <div className='bg-purple-300 rounded-3xl p-4 flex-[2] flex justify-around items-center'>image here</div>
        <div className='bg-[#D4C7B4] rounded-3xl p-4 flex-[1] flex justify-around items-center text-[#4B4A45] text-2xl font-kalnia'>About Me</div>
    </div>
  )
}

export default FirstCol