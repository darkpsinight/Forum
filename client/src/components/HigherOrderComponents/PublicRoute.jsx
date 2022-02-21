import React, { useContext } from 'react'
import { Route, Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

function PublicRoute({ component: Component, ...rest }) {
  const { isauth } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={routeProps => {
        console.log(isauth);
        if (isauth)
          return <Navigate to="/posts" />
        return <Component {...routeProps} />
      }}
    />
  )
}

export default PublicRoute