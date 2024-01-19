import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar'

const UserRoot = () => {
  return (
   <>
   <Navbar/>
    <Outlet/>
   </>
  )
}

export default UserRoot