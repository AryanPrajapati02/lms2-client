import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import Cards from '../components/Cards'

function Home() {
  return (
    <>
    <div><Navbar /></div>
    <div><Herosection /></div>
    <div className="h-[40vh] bg-[#F8F8F8]">
        <h1 className="font-mera text-2xl font-bold p-5 text-center ">Our Trusted Partner</h1>
        <div className="flex  p-6 mb-5 flex-wrap ">
            <img src="\src\microsoft-gold-partner.jpg" alt=""  className="h-[22vh] w-[22vw] rounded-xl ml-5 shadow-lg hover:scale-105 hover:transition-all"/>
            <img src="\src\download (1).png" alt=""  className="h-[22vh] w-[22vw] rounded-xl ml-5 shadow-lg hover:scale-105 hover:transition-all"/>
            <img src="\src\images.png" alt=""  className="h-[22vh] w-[22vw] rounded-xl ml-5 shadow-lg hover:scale-105 hover:transition-all"/>
            <img src="\src\download.png" alt=""  className="h-[22vh] w-[22vw] rounded-xl ml-5 shadow-lg hover:scale-105 hover:transition-all"/>
        </div>
    </div>

    <div className=' hover:transition delay-200 ease-linear '> 
      <h1 className='text-3xl font-mera font-bold text-center mt-5 mb-8'>We Provide Many Types Of Courses</h1>
      <div className='flex h-[75vh] p-10 flex-wrap flex-shrink-0 flex-direction-col'>
      <Cards />
      <Cards />
      <Cards />
      </div>
    </div>
    </>
   
  )
}

export default Home