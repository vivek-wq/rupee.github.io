import React from "react";
//import Navbar from "../src/components/Navbar/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
//import Sidebar from "./components/Navbar/Sidebar";
import Home from "./pages";
import Signin from "./pages/Signin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={Signin} exact />
      </Switch>
    </Router>
  );
}

export default App;
