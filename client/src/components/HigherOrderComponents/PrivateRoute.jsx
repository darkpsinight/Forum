import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

function PrivateRoute() {
  const { isauth } = useContext(AuthContext)
  if (isauth) {
    return <Outlet />
  } else {
    return <Navigate to='/login' />
  }
}

export default PrivateRoute