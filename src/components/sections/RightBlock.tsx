import FirstCol from "../col/FirstCol"
import SecondCol from "../col/SecondCol"

function RightBlock() {
  return (
    <div className='h-full w-full flex'>
        <FirstCol />
        <SecondCol />
    </div>
  )
}

export default RightBlock