// import React from 'react'

import Navbar from '../Guest/Components/Navbar'
import Footer from '../Guest/Components/Footer'

export default function Layout({ children }) {
  return (
    <>
    <Navbar/>
     
      {children}
     
      <Footer/>
    </>
  )
}
