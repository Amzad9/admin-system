import { lazy, useState, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import DashboardLayout from "./views/DashboardLayout"
const Home = lazy(() => import('./views/Home'))
const UserDetails = lazy(() => import('./views/UserDetails'))

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
         </Route>
      </Routes>
      </Suspense>
      <ToastContainer />

    </BrowserRouter>
    </>
  )
}

export default App
