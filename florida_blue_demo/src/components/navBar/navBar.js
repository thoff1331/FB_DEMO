import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link, HashRouter } from "react-router-dom";

class NavBar extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/page1">
            <h1>PAGE 1</h1>
          </Link>
          <Link to="/page2">
            <h1>PAGE 2</h1>
          </Link>
          <Link to="/page3">
            <h1>PAGE 3</h1>
          </Link>
          <Link to="/auth">
            <h1>LOGIN/SIGNOUT</h1>
          </Link>
        </div>
      </HashRouter>
    );
  }
}

export default NavBar;
