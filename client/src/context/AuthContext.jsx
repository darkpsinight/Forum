import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [isauth, setisauth] = useState(false)
  const [role, setrole] = useState("visitor")
  const [isLoaded, setisLoaded] = useState(false)

  useEffect(() => {
    fetch('http://localhost:5000/auth/isauth', { credentials: "include" })
      .then(res => {
        setisLoaded(true);
        res.json().then(data => {
          console.log(data);
          if (res.status !== 403) {
            setrole(data.role)
            setisauth(data.isAuthenticated)
          } else {
            setisauth(false)
            setrole("visitor")
          }
        })
      })
  }, [])

  return (
    <React.Fragment>
      {
        isLoaded
          ?
          (<AuthContext.Provider value={{ role, setrole, isauth, setisauth }}>
            {(children)}
          </AuthContext.Provider>)
          :
          <p>...Loading</p>
      }
    </React.Fragment>
  )
}

export default AuthProvider