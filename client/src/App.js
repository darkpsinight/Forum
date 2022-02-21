import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Posts from "./views/Posts";
import PublicRoute from "./components/HigherOrderComponents/PublicRoute";
import PrivateRoute from "./components/HigherOrderComponents/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/posts" roles={["user", "admin"]} element={<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;