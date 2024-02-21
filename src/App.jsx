import { lazy, useState, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import DashboardLayout from "./views/DashboardLayout"
const Home = lazy(() => import('./views/Home'))
const UserDetails = lazy(() => import('./views/UserDetails'))
const PageNotFound = lazy(() => import('./views/PageNotFound'))
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Suspense>
      <Routes>
         <Route path="/" element={<DashboardLayout />}> 
            <Route path="home" element={<Home />} />
            <Route path="home/:userId" element={<UserDetails />} />
            <Route path="*" element={<PageNotFound />} />
         </Route>
      </Routes>
      </Suspense>
      <ToastContainer />

    </BrowserRouter>
    </>
  )
}

export default App
