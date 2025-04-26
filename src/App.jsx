import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes, } from 'react-router-dom'
import Home from './home'
import Ahmed from './ahmed'
import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ahmed' element={<Ahmed />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}

export default App
