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
import DepartmentSeekerPage from './pages/DepartmentSeekerPage/DepartmentSeekerPage'
import SeekerStatusPage from './pages/SeekerStatusPage/SeekerStatusPage'
import CreateStaffPage from './pages/CreateStaffPage/CreateStaffPage'
import AdminPanelPage from './pages/AdminPanelPage/AdminPanelPage'

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
    if (user?.role === "admin") nav("/CreateStaff")
    if (user?.role === "receptionist") nav("/seekerRegister")
    if (user?.role === "beneficiary") nav("/beneficiaryResult")
    if (user?.role === "department") nav("/cards")
  }, [user])

  return (
    <>
      {loader ? (
        <PageLoader center />
      ) : (
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cards' element={<CategoriesCardsPage />} />
          <Route path='/signup' element={<SignupPage />} />
          {/* <Route path='/AdminPanel' element={<AdminPanelPage />} /> */}
          <Route path='/CreateStaff' element={<CreateStaffPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/seekerRegister' element={<RegisterPage />} />
          <Route path='/beneficiaryResult' element={<SeekerStatusPage />} />
          <Route path='/seekerDownPage/:id' element={<SeekerDownlodPage />} />
          <Route path='/department/:dept' element={<DepartmentSeekerPage />} />
          <Route path='*' element={<NotfoundPage />} />
        </Routes>
      )}
    </>
  )
}

export default App
