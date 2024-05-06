import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import {Logout}  from './Pages/Logout'
import { Services } from './Pages/Services'
import AdminLayout from './components/layouts/AdminLayout'
import AdminUser from './Pages/AdminUser'
import AdminContact from './Pages/AdminContact'
import AdminUpdate from './Pages/AdminUpdate'
function App() {
  return (
   <>
  <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/register' element={<Register />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/service' element={<Services />} />

      <Route path='/admin' element={<AdminLayout />}>
        <Route path='user' element={<AdminUser />} />
        
        <Route path='contact'  element={<AdminContact />} />
        <Route path='user/:id/edit'  element={<AdminUpdate />} />
      </Route>
      <Route path='*' element={<NotFound />}/>
     </Routes>
  </BrowserRouter>
   
   </>
  )
}

// https://lms2-client-gd3o.vercel.app/
// https://lms2-server.onrender.com/

export default App