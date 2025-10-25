import FirstRow from '../row/FirstRow'
import SecondRow from '../row/SecondRow'
import ThirdRow from '../row/ThirdRow'

function LeftBlock() {
  return (
    <div className='h-full w-full flex flex-col'>
        <FirstRow />
        <SecondRow />
        <ThirdRow />
    </div>
  )
}

export default LeftBlock