import React from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from '../store/auth'

function About() {
  const {user} =useAuth()
  return (
  
    <>
    <Navbar />
    <h1 className='p-5 m-2 text-2xl font-mera font-semibold'>Hii <span className='font-mera font-bold text-[#FF4F5A] ' >{user ? user.name : "Buddy 👋 " }</span></h1>
    <div className="flex mt-10 p-3">
      <div className="left w-[50%]" >
        <img src="https://img.freepik.com/free-vector/team-concept-illustration_114360-678.jpg?t=st=1714851195~exp=1714854795~hmac=8a5bd2de816967a630707e3f85c54a39d1b36d2924a620cf9ae5e1edd7307203&w=1060" alt="" />
      </div>
      <div className="right w-[50%] mt-10">
        <h1 className='text-4xl font-mera font-bold text-[#FF4F5A]'>About Us</h1>
        <p className='text-xl font-mera mt-5 p-2'>Welcome to  LMS Platform , where learning knows no bounds. Our mission is to empower learners, educators, and institutions to achieve their full potential through innovative technology and dynamic educational experiences.</p>
        <h1 className='text-4xl font-mera font-bold text-[#FF4F5A] mt-10'>Our Story</h1>
        <p className='text-xl font-mera mt-5 p-2'>Founded in 2024,  LMS Platform  has been a pioneer in the e-learning industry, revolutionizing the way knowledge is acquired and shared. What started as a humble endeavor to bridge the gap between traditional education and the digital age has evolved into a comprehensive platform serving millions of learners worldwide.</p>
      </div>

    </div>
    <h1 className='text-4xl font-mera font-bold text-[#FF4F5A] mt-5 p-5 text-center'>Our Vision</h1>
    <p className='text-xl font-mera  p-7'>
    At LMS Platform , we envision a world where education is accessible to all, regardless of geographical location or socioeconomic status. We strive to break down barriers to learning and foster a culture of lifelong education, where curiosity is celebrated and knowledge is limitless.
    </p>
    <h1 className='text-4xl font-mera font-bold text-[#FF4F5A]  p-5 text-center'>What Sets Us Apart</h1>
    <p className='text-xl font-mera  p-7'>
    <li>Innovative Technology: We leverage cutting-edge technology to deliver immersive learning experiences that engage and inspire learners.</li>
<li>
Personalized Learning: Our platform utilizes advanced algorithms to personalize learning paths, ensuring each learner receives tailored support and guidance.

  </li>
  <li> 
  Community Engagement: We believe in the power of community and foster a collaborative learning environment where learners can connect,  grow together.

  </li>
<li>  
Continuous Improvement: We are committed to continuous improvement, regularly updating our platform with new features  based on user feedback .
  
  </li>    </p>

    </>
  )
}

export default About