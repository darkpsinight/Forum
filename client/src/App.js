import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Posts from "./views/Posts";
import Profile from "./views/Profile";
import PublicRoute from "./components/HigherOrderComponents/PublicRoute";
import PrivateRoute from "./components/HigherOrderComponents/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<PublicRoute />}>
          <Route path='/' exact element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>
        <Route path='/' role={"user","admin"} element={<PrivateRoute />}>
          <Route path='/auth/posts' element={<Posts />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;