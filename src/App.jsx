import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Navigate, Route, Routes, } from 'react-router-dom'
import Ahmed from './ahmed'
import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import { AuthContext } from './context/AuthContext'


function App() {
  const { user } = useContext(AuthContext)
  console.log("User IN the App==>", user)

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/ahmed' element={<Ahmed />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/login' element={user ? <Navigate to={"/seekerRegister"} />:<LoginPage />} />
      <Route path='/seekerRegister' element={<RegisterPage />} />
    </Routes>
  )
}

export default App
