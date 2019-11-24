import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/landingPage/landingPage";
import { HashRouter } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import routes from "./routes";

function App() {
  return (
    <HashRouter>
      <NavBar />
      {routes}
    </HashRouter>
  );
}

export default App;
