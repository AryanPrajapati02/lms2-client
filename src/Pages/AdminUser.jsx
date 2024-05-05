import React from 'react'
import { useEffect , useState } from 'react'
import {useAuth} from '../store/auth'
import {toast} from 'react-hot-toast'
import { Link } from 'react-router-dom'
function AdminUser() {
const {authorizationToken} = useAuth()

const [user , setUser] = useState([]);
const getAllUserData = async()=>{
    try{
        const res = await fetch('https://lms2-server.onrender.com/admin/user',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authorizationToken,
            }
        });
        const data =await res.json();
         setUser(data.users)
        


    }catch(e){
        console.log(e)
    }
}

const deleteUser = async (id)=>{
    const res = await fetch(`https://lms2-server.onrender.com/admin/user/delete/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authorizationToken,
        }
    });
    const data =await res.json();
    if(res.ok){
        getAllUserData()
        toast.success(data.message)
    }else{
        toast.error(data.message)
    }
    
    
}

    useEffect(()=>{
        getAllUserData()
    },[])
  return (
    <div className='bg-zinc-200 p-5 m-10 rounded-xl text-center translate-x-[5] flex items-center justify-center'>
        <table className='w-[55%]'>
            <thead>
                <tr>
                  <th className='border-r-2 '>Name</th>
                  <th className='border-r-2'>Email</th>
                  <th className='border-r-2'>Update</th>
                  <th>Delete</th>
                  

                </tr>
            </thead>
         
            <tbody>
           
            {
        
        user.map((elem)=>{
            return <tr className='hover:bg-zinc-100  '>
                <td className=' border-r-2 p-5'>{elem.name}</td>
                <td className=' border-r-2 p-5'>{elem.email}</td>
              <Link to={`/admin/user/${elem._id}/edit`}>
              <td className=' border-r-2 p-5'><button className='py-2 px-4 rounded-lg bg-green-300 hover:bg-green-400 '>Edit</button></td>
              </Link>
                <td className='p-5 '><button className='py-2 px-4 rounded-lg bg-red-300 hover:bg-red-400 ' onClick={()=>deleteUser(elem._id)}>Delete</button></td>
                <hr />
            </tr>
        

        })}
        
            </tbody>
            </table></div>
  )
}

export default AdminUser