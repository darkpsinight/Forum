import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Posts from "./views/Posts";
import Profile from "./views/Profile"
import PublicRoute from "./components/HigherOrderComponents/PublicRoute";
import PrivateRoute from "./components/HigherOrderComponents/PrivateRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <div id="about" class="about section container" >
          <PublicRoute path="/login" component={Login} ></PublicRoute>
          <PublicRoute path="/register" component={Register} ></PublicRoute>
          <PrivateRoute path="/posts" component={Posts} roles={["user", "admin"]} ></PrivateRoute>
          <PrivateRoute path="/profile" component={Profile} ></PrivateRoute>
        </div>
      </Switch>
    </Router>
  );
}

export default App;