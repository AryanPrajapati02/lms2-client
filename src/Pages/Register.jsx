import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar'
import { FaRegEyeSlash  , FaEye} from "react-icons/fa6"
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast'
import { useAuth } from '../store/auth';


function Register() {
  const navigate = useNavigate()
  const {storetokenINLS} =useAuth()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

 

  const handleSubmit =async(e)  => {
    e.preventDefault();
    // You can add your registration logic here
   if(!formData.name || !formData.email || !formData.password){
     return toast.error('Please fill in all fields')
   }
   if(formData.name.length <4){
     return toast.error('Name must be at least 4 characters long')
   }
   if(formData.name.length >20){
     return toast.error('Name must not be more than 20 characters long')
   }
   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   if(!emailPattern.test(formData.email)){
     return toast.error('Please enter a valid email')
   }
   if(formData.password.length <6){
     return toast.error('Password must be at least 6 characters long')
   }
   if(formData.password.length >20){
     return toast.error('Password must not be more than 20 characters long')
   }
   const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   if(!passwordPattern.test(formData.password)){
     return toast.error('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character')
   }
  try{
    toast.loading('Registering...', {
      duration: 800,
    })
    const response = await fetch("https://lms2-server.onrender.com/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
     })
  
  
     const data = await response.json();
     
  if(response.ok){
     toast.success(data.msg)
    
     storetokenINLS(data.token)
    setFormData({
      name: '',
      email: '',
      password: '',
     })
     navigate('/')
  }
  else{
   toast.error(data.error)
  }

  }catch(e){
    toast.error(e.message)
  }

  };
  return (
   <>
   <Navbar />
   <div className='flex flex-wrap shrink-0'>  
    <div className='left w-[50%] flex justify-end p-5'>
      <img src="https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4727.jpg?t=st=1714844310~exp=1714847910~hmac=457ebef53daa3211aea88f8c369bf3657c678a5099b7b10640db100f6863a612&w=1060" alt="" />
    </div>
    <div className='right w-[50%]'>
    <div className='flex justify-center  mt-10'>
   <div className="container">
      <h2>Register</h2>
      <form noValidate onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group ">
          <label htmlFor="password">Password</label>
          <div className="password-input flex items-center">
            <input type={passwordVisible ? "text" : "password"} id="password" name="password" value={formData.password} onChange={handleChange} required 
            
            />
             <FaEye icon={passwordVisible ? FaRegEyeSlash : FaEye } onClick={togglePasswordVisibility} />
           
          </div>
        </div>
      
        <button type="submit" className="bg-[#3BC7DA] btn">Register</button>
      </form>
      <p className='text-center mt-2'>Already have an account ? 
        <Link to='/login' className='text-[#676ed4]'>
        Login
        </Link>
      </p>
    </div>
   </div>
    </div>
   </div>
   </>
  )
}

export default Register