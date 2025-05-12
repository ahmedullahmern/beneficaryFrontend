import { useContext, useEffect } from 'react'
import './App.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import { AuthContext } from './context/AuthContext'
import { LoaderContext } from './context/LoaderContext' // import loader context
import SeekerDownlodPage from './pages/SeekerDownPage/SeekerDownPage'
import PageLoader from './components/Loader/PageLoader'
import CategoriesCardsPage from './pages/CategoriesCardsPage/CategoriesCardsPage'
import NotfoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {
  const { user } = useContext(AuthContext)
  const { loader, setLoader } = useContext(LoaderContext) // yahan sahi se lo
  const nav = useNavigate()
  const location = useLocation()

  // Jab bhi route change ho, loader chalu karo
  useEffect(() => {
    setLoader(true)
    const timer = setTimeout(() => {
      setLoader(false)
    }, 700) // 0.5 sec delay, ya jab aapka page ready ho

    return () => clearTimeout(timer)
  }, [location])

  // Role-based navigation
  useEffect(() => {
    if (user?.role === "admin") nav("/home")
    if (user?.role === "receptionist") nav("/seekerRegister")
    if (user?.role === "beneficiary") nav("/signup")
    if (user?.role === "department") nav("/cards")
  }, [user])

  return (
    <>
      {loader ? (
        <PageLoader />
      ) : (
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/cards' element={<CategoriesCardsPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/seekerRegister' element={<RegisterPage />} />
          <Route path='/seekerDownPage/:id' element={<SeekerDownlodPage />} />
          <Route path='*' element={<NotfoundPage />} />
        </Routes>
      )}
    </>
  )
}

export default App
