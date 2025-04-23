import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes, } from 'react-router-dom'
import Home from './home'
import Ahmed from './ahmed'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ahmed' element={<Ahmed />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
