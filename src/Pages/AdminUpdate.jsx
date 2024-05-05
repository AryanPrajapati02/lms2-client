import React, { useState , useEffect } from 'react'
import AdminLayout from '../components/layouts/AdminLayout'
import { useParams } from 'react-router-dom'
import { useAuth } from '../store/auth'
function AdminUpdate() {
   
    const [data ,setData]= useState({
        name: "",
        email:"",
       
    })
    const params = useParams();
    const {authorizationToken} = useAuth()
   
const getSingleUserData = async ()=>{
    const res = await fetch(`http://localhost:3000/admin/user/update/${params.id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: authorizationToken
        }
    })
    const data = await res.json()
    console.log(data)
    setData(data)
}
useEffect(()=>{
    getSingleUserData()
},[])
    const handleChange = (e)=>{
        setData({
           ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const res = await fetch(`http://localhost:3000/admin/user/update/${params.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: authorizationToken
            },
            body: JSON.stringify(data)
        })
        const data2 = await res.json()
        
    }

  return (
    <>
    <div className='w-[35vw] p-5 m-5 shadow-xl'>
    <form noValidate onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="name">name</label>
          <input type="name" id="name" name="name" value={data.name} onChange={handleChange}  required />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>email</label>
          <input type="email" id='email'  name='email' value={data.email} onChange={handleChange}/>
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-primary'>update</button>
        </div>
        <hr />
        
      </form>
    </div>

    </>
  )
}

export default AdminUpdate