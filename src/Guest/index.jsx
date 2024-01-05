
import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Signup from './pages/Signup'
import Page404 from './pages/Page404'
import Layout from './Layout'
import Home from './pages/Home'
// import Page4 from "./pages/Page4"
// import Navbar from "./Components/navbar"
// import Footer from "./Components/Footer"
import Mainpage from "../User/pages/Mainpage"
import Detail from "../User/pages/Detail"



export default function Guest() {
  return (
    <Layout>
     
    <Routes>
      <Route path='/home' element={<Home/>} />
      
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      {/* <Route path='*' element={<Navigate to={'/'} replace='true' />} /> */}
      <Route path='*' element={<Page404 />} />
      <Route path='/' element={<Mainpage/>} />
      <Route path='/course/:id' element={<Detail/>} />
     
      
    </Routes>
    </Layout>
  )
}
