import React, { useContext } from 'react'
import { Route, Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

function PrivateRoute({ component: Component, roles, ...rest }) {

  const { isauth, role } = useContext(AuthContext)
  console.log(rest);

  return (
    <Route
      {...rest}
      render={routeProps => {
        console.log(isauth);
        if (isauth) {
          if (roles.includes(role))
            return <Component {...routeProps} />
          else
            return <Navigate to="/" />
        }
        else
          return <Navigate to={{ pathname: "/login", state: { from: routeProps.location } }} />
      }}
    />
  )
}

export default PrivateRoute