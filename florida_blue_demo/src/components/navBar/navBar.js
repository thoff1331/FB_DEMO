import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link, HashRouter } from "react-router-dom";
import { navBar } from "./navBarStyles";
import { getSession } from "../../ducks/auth";
import { logout } from "../../store";

import { withStyles } from "@material-ui/styles";

class NavBar extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getSession();
  }
  handleLogout = () => {
    this.props.logout();
  };
  render() {
    console.log(this.props);
    const { classes } = this.props;
    return (
      <HashRouter>
        <div
          className={classes.navBar}
          style={{ color: "red", textDecoration: "none" }}
        >
          <Link to="/">
            <h1 className={classes.links}>Home</h1>
          </Link>
          <Link to="/page1">
            <h1 className={classes.links}>PAGE 1</h1>
          </Link>
          <Link to="/page2">
            <h1 className={classes.links}>PAGE 2</h1>
          </Link>
          <Link to="/page3">
            <h1 className={classes.links}>PAGE 3</h1>
          </Link>
          <Link to="/auth">
            {this.props.user.username ? (
              <h1 className={classes.links} onClick={this.handleLogout}>
                Logout
              </h1>
            ) : (
              <h1 className={classes.links}>Login</h1>
            )}
          </Link>
        </div>
      </HashRouter>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default withStyles(navBar)(
  connect(mapStateToProps, { getSession, logout })(NavBar)
);
