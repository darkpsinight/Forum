//Includes Login, Register....These routes must not show after login successfully
import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';


function PublicRoute({component: Component, ...rest}) {
    const {isauth} = useContext(AuthContext);

    return (
        <Route 
            {...rest}
            render = {routeProps => {
                if(isauth)
                    return <Redirect to="/posts"/>
                return <Component {...routeProps} />
            }} 
        />
    )
}

export default PublicRoute