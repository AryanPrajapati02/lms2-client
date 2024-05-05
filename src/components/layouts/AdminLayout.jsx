import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import { FiUsers } from "react-icons/fi";
import { MdOutlineContactSupport } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import AdminUser from '../../Pages/AdminUser';
import {useAuth} from '../../store/auth'
function AdminLayout() {
    const {user ,isLoading} = useAuth()
   if(isLoading){
    return <h1>loading...</h1>

   }
    if(!user.isAdmin){
        return <Navigate to='/' />
    }
  return (
<>
<Navbar />
<hr />

<div className="left">
    {/* <img src="https://img.freepik.com/free-vector/product-tour-concept-illustration_114360-2678.jpg?t=st=1714920899~exp=1714924499~hmac=febdb043a0c0fb772036cf0def64d80895a012afb136017df49cf50c5e5281cf&w=1060" alt="" /> */}

        <ul className='p-5 m-5  flex gap-5 '>
           <Link to="/admin/user"> <li className='p-2 text-xl flex gap-2 justify-evenly items-center hover:text-blue-400'><FiUsers />User</li></Link>
           <Link to="/admin/contact"><li className='p-2 text-xl flex gap-2 justify-evenly items-center hover:text-blue-400 active:text-green-400'><MdOutlineContactSupport />Contact</li></Link>
           
            <li className='p-2 text-xl flex gap-2 justify-evenly items-center hover:text-blue-400 active:text-green-400'><MdDesignServices />Service</li>
        </ul>
 
</div>
<hr />

<Outlet />
</>
  )
}

export default AdminLayout