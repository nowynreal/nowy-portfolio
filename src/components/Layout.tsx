import LeftBlock from "./sections/LeftBlock"
import RightBlock from "./sections/RightBlock"

function Layout() {
  return (
    <div className='flex border-1 rounded-3xl flex-grow'>
      <div className="flex h-full rounded-3xl w-full">
        <LeftBlock />
        <RightBlock />
      </div>
    </div>
  )
}

export default Layout