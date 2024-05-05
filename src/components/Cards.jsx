import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Cards() {
  return (
    <>
    <div className='max-h-[48vh] w-[18vw] rounded-xl m-5 p-3 bg-white shadow-lg overflow-hidden hover:max-h-[62vh] hover:transition-all delay-200 hover:scale-105'>

    <img src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='rounded-xl mb-3 ' alt="" />
     <h1 className='font-semibold text-xl font-mera p-2'>Graphic Design</h1>
     <p className='px-3 py-1 mb-3 text-zinc-800 bg-[#E4EBFB] w-fit rounded-3xl'>8 Courses</p>
     <p className='text-zinc-500 m-2'>Mastering Visual Communication: The Complete Graphic Design Course</p>
    <Link to="/about">
          <button className="group rounded-[30px] bg-[#3BC7DA] py-2 px-5 w-[15vw] text-start text-white flex items-center justify-between text-xl transition ease-linear duration-200 shadow-xl ">
            Show more
             <span className="w-[5vh] h-[5vh] rounded-full bg-white flex items-center justify-center translate-x-1 group-hover:translate-x-4 transition ease-linear duration-200">
             <FaArrowRightLong className="text-[#3BC7DA]" />
             </span>
           </button>
          </Link>
    </div>
    </>
  )
}

export default Cards