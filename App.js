import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import OurModules from "./components/Our Modules";
import Social from "./components/Social";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp";
import Error from "./components/Error";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
          <Destinations />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/Our Modules">
          <OurModules />
        </Route>
        <Route path="/Social">
          <Social />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
