import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import'./registration.css'
import { AuthProvider } from './store/auth.jsx'
// import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>
    <App />
    <Toaster />
    </AuthProvider>

)
