import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import AuthContextProvider from './context/AuthContext.jsx'
import Header from './components/Header/Header.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
      <Header />
      <App />
      {/* <ToastContainer /> */}
    </AuthContextProvider>
  </BrowserRouter>
)
