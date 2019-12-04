import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core";
import { landingPage } from "./landingPagesstyles";
import { getSession } from "../../ducks/auth";
import { connect } from "react-redux";
import Axios from "axios";
import store from "../../store";
import { Link } from "react-router-dom";
import Spinner from "../spinner";
class LandingPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props);
    this.props.getSession();
    // alert("Welecome: " + " " + this.props.user.username);
  }

  render() {
    console.log(store.getState());
    const { classes } = this.props;
    return (
      <div className={classes.header}>
        <div>
          <Spinner />
          {this.props.user.username ? (
            <h1>You've logged in as:{this.props.user.username} </h1>
          ) : (
            <Link to="/login">
              <h1>Please Login</h1>
            </Link>
          )}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default withStyles(landingPage)(
  connect(mapStateToProps, { getSession })(LandingPage)
);
