import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from '../store/auth'
function Contact() {

  const [userData ,setUserData] = useState(true)
  const {user} = useAuth()
  const [FormData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  })
if(userData && user){
  setFormData({
    name: user.name,
    email: user.email,
    message: '',
  })

  setUserData(false)
}

  const handleChange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value
    })
  } 
  const handleSubmit = async(e) => {
    e.preventDefault()
   
  try{
    const data = await fetch('https://lms2-server.onrender.com/api/contact' ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(FormData)
    }
  )
  if(!data.ok){
    throw new Error(data.statusText)
  }
  if(data.ok){
    const res = await data.json()
    console.log(res)
    setFormData({
      name: user.name,
    email: user.email,
    message: '',
      
    })
  }


  }catch(e){
    console.log(e)
  }

  }

  return (
  <>
  <Navbar />
  <div className='flex justify-center items-center mt-10 '>
    <div className="left w-[50%]">
      <img src="https://img.freepik.com/free-vector/organic-flat-customer-support_23-2148881015.jpg?t=st=1714848501~exp=1714852101~hmac=342d5e4f1103fc13d7924a554914c0dc0bb4e9b24642372a185852f4786d34b6&w=1060" alt="" />
    </div>
    <div className="right ">
      <div className='shadow-2xl w-[40vw] p-7 rounded-2xl'>
        <form onSubmit={handleSubmit} >
          <h1 className='text-2xl font-mera font-bold text-center mb-5 mt-5 p-2'>Conatct Us</h1>
          <div className='form-group'>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' value={FormData.name} onChange={handleChange} required />

          </div>
          <div className='form-group'>
            <label htmlFor="email">Email</label>
            <input type="text" id='email' name='email' value={FormData.email} onChange={handleChange} required />

          </div>
          <div className='form-group'>
            <label htmlFor="message">message</label>
            <input type="text" id='message' name='message' value={FormData.message} onChange={handleChange} required />

          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
 
    <section className='mt-10 p-5'>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5041045346334!2d77.3601394753349!3d28.614649975674475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55d876733a7%3A0x4dda163e3cb85a14!2sPhysics%20Wallah%20Vidyapeeth%20Helpline%20%7C%20IIT%20JEE%2C%20NEET%20%26%20Foundation%20Classes!5e0!3m2!1sen!2sin!4v1714849236162!5m2!1sen!2sin" width="100%" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    </section>

  </>
  )
}

export default Contact