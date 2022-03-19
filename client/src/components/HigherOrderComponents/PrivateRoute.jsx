import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


function PrivateRoute({ component: Component, roles, ...rest }) {
    const { isauth, role } = useContext(AuthContext)

    return (
        <Route
            {...rest}
            render={routeProps => {
                if (isauth) {
                    if (roles.includes(role))
                        return <Component {...routeProps} />
                    else
                        return <Redirect to="/" />
                }
                else
                    return <Redirect to={{ pathname: "/login", state: { from: routeProps.location } }} />
            }}
        />
    )
}

export default PrivateRoute