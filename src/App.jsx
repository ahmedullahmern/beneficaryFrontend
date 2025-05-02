import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes, useNavigate, } from 'react-router-dom'
import Ahmed from './ahmed'
import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import { AuthContext } from './context/AuthContext'
import SeekerDownlodPage from './pages/SeekerDownPage/SeekerDownPage'


function App() {
  const { user } = useContext(AuthContext)
  console.log("User IN the App==>", user)

  const nav = useNavigate()

  useEffect(() => {
    if (user?.role == "admin") {
      nav("/")
    }
    if (user?.role == "receptionist") {
      nav("/seekerRegister")
    }
    if (user?.role == "beneficiary") {
      nav("/signup")
    }
  }, [user])

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/ahmed' element={<Ahmed />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/seekerRegister' element={<RegisterPage />} />
      <Route path='/seekerDownPage/:id' element={<SeekerDownlodPage />} />
    </Routes>
  )
}

export default App
