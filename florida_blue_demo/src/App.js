import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import routes from "./routes";
import Footer from "./components/footer/footer";

function App() {
  return (
    <HashRouter>
      <NavBar />

      {routes}
      <Footer />
    </HashRouter>
  );
}

export default App;
