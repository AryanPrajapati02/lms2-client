
import React, { useState ,useEffect } from 'react'
import { createContext  ,useContext} from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
   const [token , setToken] = useState(localStorage.getItem('token'))
  const [user , setUser] = useState("")
  const [isLoading , setIsLoading] =useState(true)
    const storetokenINLS = (serverToken)=>{
        setToken(serverToken)
        return localStorage.setItem("token" , serverToken)
    };
    const [service , setService] = useState([])
const authorizationToken = `Bearer ${token}`
    let isLoggedIn = !!token

    const LogoutUser = ()=>{
      
     setToken('');
     return localStorage.removeItem('token');
    }

    // to get data of logged in user
  const userAuthentication =async ()=>{
  try{
    setIsLoading(true)
  const response = await fetch('http://localhost:3000/api/auth/user' , {
      method: 'GET',
      headers: {
        
        'Authorization': `Bearer ${token}`
      }
  
  })
  if(response.ok){
    const data = await response.json();
    setUser(data);
    setIsLoading(false)
  }
  else{
    setIsLoading(false)
  }
  }catch(e){
    console.log(e)
  }
  }
  const getServices =async ()=>{
  try{
    const response = await fetch('http://localhost:3000/api/service', {
        method: 'GET',
       
    })
    if(response.ok){
        const data = await response.json();
        setService(data.msg)
    } 
     
  }catch(e){

  }
  }

    useEffect(()=>{
        getServices();
         userAuthentication();
    }, [])
  return <AuthContext.Provider value={{storetokenINLS , isLoggedIn , LogoutUser ,user ,service , authorizationToken , isLoading}}>{children}</AuthContext.Provider>
}


export const useAuth =()=>{
    return useContext(AuthContext)
}