import {useEffect} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import {toast} from 'react-hot-toast'

export const Logout =()=>{
    const {LogoutUser} = useAuth()

    useEffect(()=>{
        LogoutUser()
    } );

    return(
        <>
         {toast.success('You have been logged out')}
         <Navigate to='/login' />;
        </>
    )
}