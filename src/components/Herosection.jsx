import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Herosection() {
  return (
    <div className="max-h-[90vh] bg-[#F1F7FC] mt-3 p-2 flex ">
        <div className="w-[50vw]">
         <div>
            <h1 className="text-6xl font-bold  text-[#0e0d0d] mt-5 pt-10 pl-10 ml-5 font-mera text-start">Find The Best Online Course & Learn</h1>
            <p className="text-start text-[#312f2f] text-lg pt-10 pl-10 ml-5">"Revolutionize Education with Our Cutting-Edge Learning Management System (LMS)! Unlock limitless potential with intuitive features, seamless integration, and personalized learning experiences.</p>
         </div>
         <div className="  mt-5 pt-2 pl-14 ">
          <Link to="/about">
          <button className="group rounded-[30px] bg-[#3BC7DA] py-3 px-10 w-[18vw] text-start text-white flex items-center justify-between text-xl transition ease-linear duration-200 ">
             Get Started
             <span className="w-[5vh] h-[5vh] rounded-full bg-white flex items-center justify-center translate-x-1 group-hover:translate-x-6 transition ease-linear duration-200">
             <FaArrowRightLong className="text-[#3BC7DA]" />
             </span>
           </button>
          </Link>
         </div>
        
        </div>
        <div className="w-[50vw]">
          <img src="\public\Screenshot 2024-05-04 165049.png" alt="" />
        </div>
    </div>
  )
}

export default Herosection