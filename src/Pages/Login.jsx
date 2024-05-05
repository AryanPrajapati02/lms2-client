import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar';
import { Link ,useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();
  const {user} =useAuth()
  const {storetokenINLS} =useAuth()

  
 const [formData , setFormData] = useState({
   email: '',
   password: ''
 })
 const handleChange= (e)=>{
  const {name , value} = e.target;
  setFormData({
    ...formData ,
    [name] : value
  })

 }
 const handleSubmit =async (e)=>{
  e.preventDefault();
  if(!formData.email || !formData.password){
    toast.error("All fields are required")
    
  }
  console.log(formData);
  try{
   
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    const data = await response.json();
  //    toast.promise(response, {
  //     loading: "Wait! logging into your aacount",
  //     success: (data) => {
  //         return data.name ;
  //     },
  //     error: "Failed to logging"
  // });

  if(response.ok){
    toast.loading('wait! loggin...', {
      duration: 800,
      
    }, toast.success(`successfully login`))
   
    storetokenINLS(data.token)
    setFormData({
    
      email: '',
      password: '',
     })
     navigate('/')
  }
  if(!response.ok){
    toast.error(data.error)
  }
  

  }catch(e){
    toast.error(data.error)
  }

 }


  return (
    <>
    <Navbar />
    <div className='flex mt-10 m-2 p-2'>
     <div className='left w-[50%] p-8 flex justify-end'>
      <img src="https://img.freepik.com/free-vector/completed-steps-concept-illustration_114360-5521.jpg?t=st=1714847015~exp=1714850615~hmac=82ba8f997842c6253604ba448c4a78cf862550f47f1742055695bd2a7349f4ca&w=740" className='h-[70vh]' alt="" />
    </div>
    <div className="right w-[50%] flex items-center justify-center ">
    
     <div className='p-5 w-[30vw] shadow-2xl'>
     <h1 className='text-2xl font-mera font-semibold text-center mt-5 mb-5'>Welcome Back .....</h1>
     <form noValidate onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.name} onChange={handleChange}  required />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type="password" id='password'  name='password' value={formData.password} onChange={handleChange}/>
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-primary'>Login</button>
        </div>
        <hr />
        <p className='text-center'>Not have an account  ? <Link to='/register' className='text-blue-700'>Create account</Link></p>
      </form>
     </div>
    </div>
    </div>
    </>
  )
}

export default Login