import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

function PublicRoute() {
  const { isauth } = useContext(AuthContext)
  return isauth
    ?
    <Navigate to='/auth' />
    :
    <Outlet />
}

export default PublicRoute