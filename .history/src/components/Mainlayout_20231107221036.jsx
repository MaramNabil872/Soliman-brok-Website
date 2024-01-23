import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Mainlayout = () => {
  return (
 <>
 <Navbar/>
 <React.Suspense ><Outlet/></React.Suspense>
 </>
  )
}

export default Mainlayout