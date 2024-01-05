
import {Routes, Route } from "react-router-dom"

import Layout from "./Layout"
import Mainpage from "./pages/Mainpage"
import Detail from "./pages/Detail"
export default function User() {
  return (

    <Layout>
      
    <Routes>
      <Route path = '/' element = {<Mainpage/>}/>
      <Route path='/course/:id' element={<Detail/>} />
    </Routes>
    </Layout>
  )
}
