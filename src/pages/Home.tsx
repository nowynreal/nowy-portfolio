import Navbar from '../components/Navbar'
import Layout from '../components/Layout'

function Home() {
  return (
    <div className='flex flex-col h-screen bg-[#1d1d1d]'>
      <div className='m-4 gap-4 flex flex-col h-full'>
        <Navbar />
        <Layout />
      </div>
    </div>
  )
}

export default Home